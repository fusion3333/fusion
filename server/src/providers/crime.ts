export type CrimeCategory = 'murder' | 'robbery' | 'sexual_violence' | 'theft' | 'violence';

export interface CrimeProviderRow {
  category: CrimeCategory;
  incidents: number;
  arrests?: number;
}

export interface CrimeProviderResult {
  period: string;
  policeStation: string;
  rows: CrimeProviderRow[];
  source: string;
}

/**
 * 경기북부경찰청은 경찰서별 5대 범죄 발생·검거 현황을 공식 공개한다.
 * 현재 공식 페이지는 파일데이터 형태이므로, 운영 서버에서는 내려받은 원본을
 * 검증/정규화한 JSON을 CRIME_DATA_URL로 배포해 읽도록 한다.
 * 임의 수치나 추정치를 생성하지 않는다.
 */
export async function getCrimeStat(policeStation?: string): Promise<CrimeProviderResult | undefined> {
  const dataUrl = process.env.CRIME_DATA_URL;
  if (!dataUrl || !policeStation) return undefined;

  const response = await fetch(dataUrl);
  if (!response.ok) throw new Error(`범죄통계 원본 오류: ${response.status}`);
  const data = await response.json() as CrimeProviderResult[];
  return data.find((item) => item.policeStation === policeStation);
}
