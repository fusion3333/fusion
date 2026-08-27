import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { getCrimeHistory, getCrimeStat } from './providers/crime.js';
import { getForeignResidentStat } from './providers/foreignResidents.js';
import { getResidentPopulation } from './providers/population.js';
import { getRegionByCode, searchRegions } from './providers/regions.js';
import { regions as policeMappedRegions } from './regions.js';
import { addSubscription, removeSubscription } from './subscriptions.js';
import { sendRegionUpdate } from './push.js';

const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? false }));
app.use(express.json({ limit: '32kb' }));

async function resolveRegion(regionCode: string) {
  const official = await getRegionByCode(regionCode);
  const mapped = policeMappedRegions[regionCode];
  if (official) return { name: official.name, policeStation: mapped?.policeStation };
  if (mapped) return mapped;
  return undefined;
}

app.get('/health', (_req, res) => res.json({ ok: true, service: 'neighborhood-safety-api' }));

app.get('/api/regions', async (req, res) => {
  try {
    const query = String(req.query.q ?? '');
    const rows = await searchRegions(query, Number(req.query.limit ?? 100));
    return res.json({ regions: rows });
  } catch (error) {
    return res.status(502).json({ error: error instanceof Error ? error.message : '전국 행정구역 조회 오류' });
  }
});

app.post('/api/subscriptions', async (req, res) => {
  const { token, regionCode, platform } = req.body ?? {};
  const region = typeof regionCode === 'string' ? await resolveRegion(regionCode) : undefined;
  if (typeof token !== 'string' || !token.startsWith('ExponentPushToken[') || !region) return res.status(400).json({ error: '잘못된 구독 정보입니다.' });
  await addSubscription({ token, regionCode, platform: typeof platform === 'string' ? platform : undefined });
  return res.status(201).json({ ok: true });
});

app.delete('/api/subscriptions', async (req, res) => {
  const { token, regionCode } = req.body ?? {};
  if (typeof token !== 'string' || typeof regionCode !== 'string') return res.status(400).json({ error: '잘못된 구독 정보입니다.' });
  await removeSubscription(token, regionCode);
  return res.json({ ok: true });
});

app.post('/internal/push-region-update', async (req, res) => {
  if (!process.env.INTERNAL_JOB_TOKEN || req.header('authorization') !== `Bearer ${process.env.INTERNAL_JOB_TOKEN}`) return res.status(401).json({ error: 'unauthorized' });
  const { regionCode, period, title, body } = req.body ?? {};
  const region = typeof regionCode === 'string' ? await resolveRegion(regionCode) : undefined;
  if (!region || typeof period !== 'string') return res.status(400).json({ error: '잘못된 작업 요청입니다.' });
  return res.json(await sendRegionUpdate(regionCode, title ?? '우리동네 안전정보 갱신', body ?? `${region.name} 공식 통계가 갱신되었습니다.`, period));
});

app.get('/api/crime-history', async (req, res) => {
  try {
    const regionCode = String(req.query.regionCode ?? '');
    const region = await resolveRegion(regionCode);
    if (!region?.policeStation) return res.status(404).json({ error: '이 지역은 아직 공식 경찰서 단위 범죄통계와 직접 매핑되지 않았습니다.' });
    const history = await getCrimeHistory(region.policeStation);
    return res.json({ regionCode, regionName: region.name, policeStation: region.policeStation, history });
  } catch (error) {
    return res.status(502).json({ error: error instanceof Error ? error.message : '범죄 추이 처리 오류' });
  }
});

app.get('/api/safety', async (req, res) => {
  try {
    const regionCode = String(req.query.regionCode ?? '');
    const region = await resolveRegion(regionCode);
    if (!region) return res.status(400).json({ error: '유효하지 않은 행정구역 코드입니다.' });
    const [crime, foreigners, residents] = await Promise.all([
      getCrimeStat(region.policeStation),
      getForeignResidentStat(region.name),
      getResidentPopulation(regionCode),
    ]);
    if (!crime && !foreigners && !residents) return res.status(503).json({ error: '공식 데이터 공급자에서 현재 지역 데이터를 가져오지 못했습니다.' });
    const period = crime?.period ?? foreigners?.period ?? residents?.period ?? '공개 최신자료';
    const comparablePopulation = Boolean(foreigners && residents && foreigners.period === residents.period);
    res.set('cache-control', 'public, max-age=300, stale-while-revalidate=3600');
    return res.json({
      regionCode,
      regionName: region.name,
      period,
      coverage: {
        crime: crime ? 'available' : 'unavailable',
        population: residents ? 'available' : 'unavailable',
        foreignResidents: foreigners ? 'available' : 'unavailable',
      },
      crimes: (crime?.rows ?? []).map((row) => ({ regionCode, regionName: region.name, policeStation: crime?.policeStation, period: crime?.period ?? period, category: row.category, incidents: row.incidents, arrests: row.arrests, source: crime?.source ?? '', status: crime?.status ?? (crime?.period === '2025' ? 'provisional' : 'published') })),
      population: foreigners ? { regionCode, regionName: region.name, period: foreigners.period, totalPopulation: comparablePopulation ? residents?.totalPopulation : undefined, foreignResidents: foreigners.foreignResidents, foreignResidentRatio: comparablePopulation && residents && residents.totalPopulation > 0 ? foreigners.foreignResidents / residents.totalPopulation * 100 : undefined, source: foreigners.source, populationSource: comparablePopulation ? residents?.source : undefined, denominatorPeriodMismatch: Boolean(foreigners && residents && foreigners.period !== residents.period) } : undefined,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error(error);
    return res.status(502).json({ error: error instanceof Error ? error.message : '공공데이터 처리 오류' });
  }
});

const port = Number(process.env.PORT ?? 8787);
app.listen(port, () => console.log(`Neighborhood Safety API listening on :${port}`));
