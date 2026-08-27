export type CrimeCategory = 'murder' | 'robbery' | 'sexual_violence' | 'theft' | 'violence';
export type DataStatus = 'published' | 'provisional';

export interface CrimeProviderRow { category: CrimeCategory; incidents: number; arrests?: number; arrestees?: number; }
export interface CrimeProviderResult { period: string; policeStation: string; rows: CrimeProviderRow[]; source: string; status?: DataStatus; }

const CATEGORY: Record<string, CrimeCategory> = { '살인': 'murder', '강도': 'robbery', '성범죄': 'sexual_violence', '절도': 'theft', '폭력': 'violence' };
const STATION_COLUMN: Record<string, string> = {
  '의정부경찰서': '의정부서', '고양경찰서': '고양서', '일산동부경찰서': '일산동부서', '일산서부경찰서': '일산서부서',
  '남양주남부경찰서': '남양주남부서', '남양주북부경찰서': '남양주북부서', '파주경찰서': '파주서', '양주경찰서': '양주서',
  '동두천경찰서': '동두천서', '구리경찰서': '구리서', '포천경찰서': '포천서', '가평경찰서': '가평서', '연천경찰서': '연천서',
};
const ODCLOUD_DATASETS: Record<string, string> = {
  '2022': '1fe0c924-4eab-4cfc-aba8-ea8792b2ab18',
  '2023': '1c5f8dcf-93ad-4712-b42e-9210044f4e9d',
  '2024': '660e727e-52a8-40a7-baf1-c78717b94499',
  '2025': 'eccb6fe0-2a38-45f5-b30d-d247cb36411c',
};

let jsonCache: { url: string; expiresAt: number; data: CrimeProviderResult[] } | undefined;
const apiCache = new Map<string, { expiresAt: number; result: CrimeProviderResult }>();

async function fetchJsonSource(dataUrl: string): Promise<CrimeProviderResult[]> {
  if (jsonCache && jsonCache.url === dataUrl && jsonCache.expiresAt > Date.now()) return jsonCache.data;
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(dataUrl, { signal: controller.signal });
    if (!response.ok) throw new Error(`범죄통계 원본 오류: ${response.status}`);
    const data = await response.json() as CrimeProviderResult[];
    if (!Array.isArray(data)) throw new Error('범죄통계 정규화 JSON 형식 오류');
    jsonCache = { url: dataUrl, expiresAt: Date.now() + 30 * 60 * 1000, data };
    return data;
  } finally { clearTimeout(timer); }
}

async function fetchOdcloud(policeStation: string, year: string): Promise<CrimeProviderResult | undefined> {
  const serviceKey = process.env.DATA_GO_KR_SERVICE_KEY;
  const column = STATION_COLUMN[policeStation]; const dataset = ODCLOUD_DATASETS[year];
  if (!serviceKey || !column || !dataset) return undefined;
  const key = `${policeStation}|${year}`; const cached = apiCache.get(key);
  if (cached && cached.expiresAt > Date.now()) return cached.result;

  const url = new URL(`https://api.odcloud.kr/api/15086083/v1/uddi:${dataset}`);
  url.searchParams.set('page', '1'); url.searchParams.set('perPage', '100'); url.searchParams.set('serviceKey', serviceKey);
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`경기북부경찰청 OpenAPI 오류: ${response.status}`);
    const body = await response.json() as { data?: Array<Record<string, unknown>> };
    const rows = body.data ?? [];
    const grouped = new Map<CrimeCategory, CrimeProviderRow>();
    for (const record of rows) {
      const category = CATEGORY[String(record['범죄유형'] ?? '')]; const kind = String(record['구분'] ?? '');
      if (!category || !['발생건수', '검거건수', '검거인원'].includes(kind)) continue;
      const value = Number(String(record[column] ?? '').replaceAll(',', ''));
      if (!Number.isFinite(value)) continue;
      const item = grouped.get(category) ?? { category, incidents: 0 };
      if (kind === '발생건수') item.incidents = value; else if (kind === '검거건수') item.arrests = value; else item.arrestees = value;
      grouped.set(category, item);
    }
    if (grouped.size !== 5) return undefined;
    const result: CrimeProviderResult = { period: year, policeStation, rows: [...grouped.values()], source: `경기도북부경찰청 5대범죄 OpenAPI ${year}`, status: year === '2025' ? 'provisional' : 'published' };
    apiCache.set(key, { expiresAt: Date.now() + 30 * 60 * 1000, result }); return result;
  } finally { clearTimeout(timer); }
}

export async function getCrimeStat(policeStation?: string): Promise<CrimeProviderResult | undefined> {
  if (!policeStation) return undefined;
  const dataUrl = process.env.CRIME_DATA_URL;
  if (dataUrl) {
    const candidates = (await fetchJsonSource(dataUrl)).filter((item) => item.policeStation === policeStation);
    return candidates.sort((a, b) => Number(b.period) - Number(a.period))[0];
  }
  return fetchOdcloud(policeStation, '2025');
}

export async function getCrimeHistory(policeStation?: string): Promise<CrimeProviderResult[]> {
  if (!policeStation) return [];
  const dataUrl = process.env.CRIME_DATA_URL;
  if (dataUrl) return (await fetchJsonSource(dataUrl)).filter((item) => item.policeStation === policeStation).sort((a, b) => Number(a.period) - Number(b.period));
  const results = await Promise.all(Object.keys(ODCLOUD_DATASETS).map((year) => fetchOdcloud(policeStation, year)));
  return results.filter((value): value is CrimeProviderResult => Boolean(value)).sort((a, b) => Number(a.period) - Number(b.period));
}
