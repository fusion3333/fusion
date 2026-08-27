const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/$/, '');

export interface NationwideRegion {
  code: string;
  name: string;
  sidoCode?: string;
  sigunguCode?: string;
  eupmyeondongCode?: string;
  parentCode?: string;
}

export async function searchNationwideRegions(query: string): Promise<NationwideRegion[]> {
  if (!API_BASE_URL) throw new Error('EXPO_PUBLIC_API_BASE_URL이 설정되지 않았습니다.');
  const response = await fetch(`${API_BASE_URL}/api/regions?q=${encodeURIComponent(query)}&limit=100`);
  if (!response.ok) throw new Error(`전국 지역 목록을 불러오지 못했습니다. (${response.status})`);
  const body = await response.json() as { regions?: NationwideRegion[] };
  return body.regions ?? [];
}
