export interface ForeignResidentResult {
  period: string;
  totalPopulation: number;
  foreignResidents: number;
  source: string;
}

const ENDPOINT = 'https://apis.data.go.kr/1741000/ForeignLocalGovernType/getForeignLocalGovernType';

function pickNumber(record: Record<string, unknown>, candidates: string[]): number | undefined {
  for (const key of candidates) {
    const value = record[key];
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Number(value.replaceAll(',', '')))) {
      return Number(value.replaceAll(',', ''));
    }
  }
}

export async function getForeignResidentStat(regionName: string): Promise<ForeignResidentResult | undefined> {
  const serviceKey = process.env.DATA_GO_KR_SERVICE_KEY;
  if (!serviceKey) return undefined;

  const url = new URL(ENDPOINT);
  url.searchParams.set('serviceKey', serviceKey);
  url.searchParams.set('type', 'json');
  url.searchParams.set('pageNo', '1');
  url.searchParams.set('numOfRows', '1000');

  const response = await fetch(url);
  if (!response.ok) throw new Error(`행정안전부 외국인주민 API 오류: ${response.status}`);
  const json = await response.json() as Record<string, unknown>;

  const rows = findRecords(json);
  const target = rows.find((row) => Object.values(row).some((value) => typeof value === 'string' && regionName.includes(value)));
  if (!target) return undefined;

  const foreignResidents = pickNumber(target, ['foreignTot', 'frgnrTot', 'foreignPopulation', 'totForeign', 'foreignCnt']);
  const totalPopulation = pickNumber(target, ['population', 'totalPopulation', 'residentPopulation', 'totPopulation', 'popTot']);
  if (foreignResidents === undefined || totalPopulation === undefined) return undefined;

  const period = String(target['statsYm'] ?? target['year'] ?? target['baseYear'] ?? '공개 최신자료');
  return { period, foreignResidents, totalPopulation, source: '행정안전부 지방자치단체 외국인주민 현황' };
}

function findRecords(value: unknown): Record<string, unknown>[] {
  if (Array.isArray(value)) {
    const direct = value.filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object' && !Array.isArray(item));
    const nested = value.flatMap(findRecords);
    return [...direct, ...nested];
  }
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).flatMap(findRecords);
  }
  return [];
}
