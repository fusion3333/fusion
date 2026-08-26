import cors from 'cors';
import express from 'express';
import { getCrimeStat } from './providers/crime.js';
import { getForeignResidentStat } from './providers/foreignResidents.js';
import { getResidentPopulation } from './providers/population.js';
import { regions } from './regions.js';

const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? false }));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'neighborhood-safety-api' }));

app.get('/api/safety', async (req, res) => {
  try {
    const regionCode = String(req.query.regionCode ?? '');
    const region = regions[regionCode];
    if (!region) return res.status(400).json({ error: '지원하지 않는 행정구역 코드입니다.' });

    const [crime, foreigners, residents] = await Promise.all([
      getCrimeStat(region.policeStation),
      getForeignResidentStat(region.name),
      getResidentPopulation(regionCode),
    ]);

    if (!crime && !foreigners && !residents) {
      return res.status(503).json({
        error: '공식 데이터 공급자가 아직 구성되지 않았습니다.',
        required: ['DATA_GO_KR_SERVICE_KEY', 'CRIME_DATA_URL', 'POPULATION_DATA_URL'],
      });
    }

    const period = crime?.period ?? foreigners?.period ?? residents?.period ?? '공개 최신자료';
    const comparablePopulation = foreigners && residents && foreigners.period === residents.period;

    return res.json({
      regionCode,
      regionName: region.name,
      period,
      crimes: (crime?.rows ?? []).map((row) => ({
        regionCode,
        regionName: region.name,
        policeStation: crime?.policeStation,
        period: crime?.period ?? period,
        category: row.category,
        incidents: row.incidents,
        arrests: row.arrests,
        source: crime?.source ?? '',
        status: crime?.period === '2025' ? 'provisional' : 'published',
      })),
      population: foreigners ? {
        regionCode,
        regionName: region.name,
        period: foreigners.period,
        totalPopulation: comparablePopulation ? residents.totalPopulation : undefined,
        foreignResidents: foreigners.foreignResidents,
        foreignResidentRatio: comparablePopulation && residents.totalPopulation > 0
          ? foreigners.foreignResidents / residents.totalPopulation * 100
          : undefined,
        source: foreigners.source,
        populationSource: comparablePopulation ? residents.source : undefined,
        denominatorPeriodMismatch: Boolean(foreigners && residents && foreigners.period !== residents.period),
      } : undefined,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error(error);
    return res.status(502).json({ error: error instanceof Error ? error.message : '공공데이터 처리 오류' });
  }
});

const port = Number(process.env.PORT ?? 8787);
app.listen(port, () => console.log(`Neighborhood Safety API listening on :${port}`));
