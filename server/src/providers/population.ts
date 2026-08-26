export interface ResidentPopulationResult {
  period: string;
  totalPopulation: number;
  source: string;
}

type PopulationRow = { regionCode: string; period: string; totalPopulation: number; source?: string };
let cache: { url: string; expiresAt: number; rows: PopulationRow[] } | undefined;

/**
 * 공식 분모 데이터: 행정안전부 주민등록 인구통계.
 * 공공데이터포털 15108065는 행정기관/통계년월 기준 총인구수를 JSON+XML로 제공하고
 * 매월 말일 집계한다. 서비스키가 필요한 실제 OpenAPI 호출은 배포 계정에서 활성화한다.
 *
 * 운영 안정성을 위해 이 provider는 공식 API에서 수집/검증한 시군구 스냅샷 JSON을 읽는다.
 * 외국인주민 통계와 period가 정확히 일치할 때만 상위 계층에서 비율을 계산한다.
 */
export async function getResidentPopulation(regionCode: string): Promise<ResidentPopulationResult | undefined> {
  const dataUrl = process.env.POPULATION_DATA_URL;
  if (!dataUrl) return undefined;

  if (!cache || cache.url !== dataUrl || cache.expiresAt <= Date.now()) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(dataUrl, { signal: controller.signal });
      if (!response.ok) throw new Error(`주민등록 인구 원본 오류: ${response.status}`);
      const rows = await response.json() as PopulationRow[];
      if (!Array.isArray(rows)) throw new Error('주민등록 인구 JSON 형식 오류');
      for (const row of rows) {
        if (!/^\d{10}$/.test(row.regionCode) || !/^\d{4}(?:\d{2})?$/.test(row.period) || !Number.isFinite(row.totalPopulation) || row.totalPopulation < 0) {
          throw new Error('주민등록 인구 JSON 검증 실패');
        }
      }
      cache = { url: dataUrl, expiresAt: Date.now() + 30 * 60 * 1000, rows };
    } finally {
      clearTimeout(timer);
    }
  }

  const candidates = cache.rows.filter((row) => row.regionCode === regionCode);
  const target = candidates.sort((a, b) => b.period.localeCompare(a.period))[0];
  if (!target) return undefined;
  return { period: target.period, totalPopulation: target.totalPopulation, source: target.source ?? '행정안전부 주민등록 인구통계' };
}
