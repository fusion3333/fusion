export type CrimeCategory = 'murder' | 'robbery' | 'sexual_violence' | 'theft' | 'violence';
export type DataStatus = 'published' | 'provisional';

export interface CrimeProviderRow {
  category: CrimeCategory;
  incidents: number;
  arrests?: number;
  arrestees?: number;
}

export interface CrimeProviderResult {
  period: string;
  policeStation: string;
  rows: CrimeProviderRow[];
  source: string;
  status?: DataStatus;
}

let cache: { url: string; expiresAt: number; data: CrimeProviderResult[] } | undefined;

async function loadCrimeData(dataUrl: string): Promise<CrimeProviderResult[]> {
  if (cache && cache.url === dataUrl && cache.expiresAt > Date.now()) return cache.data;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(dataUrl, { signal: controller.signal });
    if (!response.ok) throw new Error(`범죄통계 원본 오류: ${response.status}`);
    const data = await response.json() as CrimeProviderResult[];
    if (!Array.isArray(data)) throw new Error('범죄통계 정규화 JSON 형식 오류');
    cache = { url: dataUrl, expiresAt: Date.now() + 30 * 60 * 1000, data };
    return data;
  } finally {
    clearTimeout(timer);
  }
}

export async function getCrimeStat(policeStation?: string): Promise<CrimeProviderResult | undefined> {
  const dataUrl = process.env.CRIME_DATA_URL;
  if (!dataUrl || !policeStation) return undefined;
  const data = await loadCrimeData(dataUrl);
  const candidates = data.filter((item) => item.policeStation === policeStation);
  if (!candidates.length) return undefined;
  return candidates.sort((a, b) => Number(b.period) - Number(a.period))[0];
}

export async function getCrimeHistory(policeStation?: string): Promise<CrimeProviderResult[]> {
  const dataUrl = process.env.CRIME_DATA_URL;
  if (!dataUrl || !policeStation) return [];
  const data = await loadCrimeData(dataUrl);
  return data.filter((item) => item.policeStation === policeStation).sort((a, b) => Number(a.period) - Number(b.period));
}
