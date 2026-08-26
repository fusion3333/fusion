export interface ResidentPopulationResult {
  period: string;
  totalPopulation: number;
  source: string;
}

/**
 * 외국인 주민 비율의 분모는 외국인 통계 응답에서 추측하지 않는다.
 * 운영 시 행정안전부 주민등록 인구 또는 KOSIS의 동일/가장 가까운 기준시점
 * 시군구 총인구를 연결한다.
 */
export async function getResidentPopulation(regionCode: string): Promise<ResidentPopulationResult | undefined> {
  const dataUrl = process.env.POPULATION_DATA_URL;
  if (!dataUrl) return undefined;

  const response = await fetch(dataUrl);
  if (!response.ok) throw new Error(`주민등록 인구 원본 오류: ${response.status}`);
  const rows = await response.json() as Array<{ regionCode: string; period: string; totalPopulation: number; source?: string }>;
  const target = rows.find((row) => row.regionCode === regionCode);
  if (!target || !Number.isFinite(target.totalPopulation)) return undefined;

  return {
    period: target.period,
    totalPopulation: target.totalPopulation,
    source: target.source ?? '행정안전부 주민등록 인구통계',
  };
}
