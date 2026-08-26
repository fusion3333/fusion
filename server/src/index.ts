import cors from 'cors';
import express from 'express';
import { getCrimeStat } from './providers/crime.js';
import { getForeignResidentStat } from './providers/foreignResidents.js';
import { getResidentPopulation } from './providers/population.js';
import { regions } from './regions.js';
import { addSubscription, removeSubscription } from './subscriptions.js';
import { sendRegionUpdate } from './push.js';

const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? false }));
app.use(express.json({ limit: '32kb' }));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'neighborhood-safety-api' }));

app.post('/api/subscriptions', async (req, res) => {
  const { token, regionCode, platform } = req.body ?? {};
  if (typeof token !== 'string' || !token.startsWith('ExponentPushToken[') || !regions[regionCode]) return res.status(400).json({ error: '잘못된 구독 정보입니다.' });
  await addSubscription({ token, regionCode, platform: typeof platform === 'string' ? platform : undefined });
  return res.status(201).json({ ok: true });
});
app.delete('/api/subscriptions', async (req, res) => { const { token, regionCode } = req.body ?? {}; if (typeof token !== 'string' || typeof regionCode !== 'string') return res.status(400).json({ error: '잘못된 구독 정보입니다.' }); await removeSubscription(token, regionCode); return res.json({ ok: true }); });

app.post('/internal/push-region-update', async (req, res) => {
  if (!process.env.INTERNAL_JOB_TOKEN || req.header('authorization') !== `Bearer ${process.env.INTERNAL_JOB_TOKEN}`) return res.status(401).json({ error: 'unauthorized' });
  const { regionCode, period, title, body } = req.body ?? {};
  if (!regions[regionCode] || typeof period !== 'string') return res.status(400).json({ error: '잘못된 작업 요청입니다.' });
  return res.json(await sendRegionUpdate(regionCode, title ?? '우리동네 안전정보 갱신', body ?? `${regions[regionCode].name} 공식 통계가 갱신되었습니다.`, period));
});

app.get('/api/safety', async (req, res) => {
  try {
    const regionCode = String(req.query.regionCode ?? ''); const region = regions[regionCode];
    if (!region) return res.status(400).json({ error: '지원하지 않는 행정구역 코드입니다.' });
    const [crime, foreigners, residents] = await Promise.all([getCrimeStat(region.policeStation), getForeignResidentStat(region.name), getResidentPopulation(regionCode)]);
    if (!crime && !foreigners && !residents) return res.status(503).json({ error: '공식 데이터 공급자가 아직 구성되지 않았습니다.', required: ['DATA_GO_KR_SERVICE_KEY', 'CRIME_DATA_URL', 'POPULATION_DATA_URL'] });
    const period = crime?.period ?? foreigners?.period ?? residents?.period ?? '공개 최신자료'; const comparablePopulation = foreigners && residents && foreigners.period === residents.period;
    res.set('cache-control', 'public, max-age=300, stale-while-revalidate=3600');
    return res.json({ regionCode, regionName: region.name, period, crimes: (crime?.rows ?? []).map((row) => ({ regionCode, regionName: region.name, policeStation: crime?.policeStation, period: crime?.period ?? period, category: row.category, incidents: row.incidents, arrests: row.arrests, source: crime?.source ?? '', status: crime?.period === '2025' ? 'provisional' : 'published' })), population: foreigners ? { regionCode, regionName: region.name, period: foreigners.period, totalPopulation: comparablePopulation ? residents.totalPopulation : undefined, foreignResidents: foreigners.foreignResidents, foreignResidentRatio: comparablePopulation && residents.totalPopulation > 0 ? foreigners.foreignResidents / residents.totalPopulation * 100 : undefined, source: foreigners.source, populationSource: comparablePopulation ? residents.source : undefined, denominatorPeriodMismatch: Boolean(foreigners && residents && foreigners.period !== residents.period) } : undefined, generatedAt: new Date().toISOString() });
  } catch (error) { console.error(error); return res.status(502).json({ error: error instanceof Error ? error.message : '공공데이터 처리 오류' }); }
});

const port = Number(process.env.PORT ?? 8787);
app.listen(port, () => console.log(`Neighborhood Safety API listening on :${port}`));
