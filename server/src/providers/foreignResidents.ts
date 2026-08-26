export interface ForeignResidentResult {
  period: string;
  foreignResidents: number;
  source: string;
}

const ENDPOINT = 'https://apis.data.go.kr/1741000/ForeignLocalGovernType/getForeignLocalGovernType';

function xmlValue(xml: string, tag: string): string | undefined {
  const match = xml.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?</${tag}>`, 'i'));
  return match?.[1]?.trim();
}

function numberValue(value?: string): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value.replaceAll(',', '').trim());
  return Number.isFinite(parsed) ? parsed : undefined;
}

export async function getForeignResidentStat(regionName: string): Promise<ForeignResidentResult | undefined> {
  const serviceKey = process.env.DATA_GO_KR_SERVICE_KEY;
  if (!serviceKey) return undefined;

  const url = new URL(ENDPOINT);
  url.searchParams.set('serviceKey', serviceKey);
  url.searchParams.set('pageNo', '1');
  url.searchParams.set('numOfRows', '1000');

  const response = await fetch(url);
  if (!response.ok) throw new Error(`행정안전부 외국인주민 API 오류: ${response.status}`);
  const xml = await response.text();

  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const regionTokens = regionName.replace('경기도 ', '').replace(/(시|군)$/u, '');
  const target = items.find((item) => item.includes(regionName) || item.includes(regionTokens));
  if (!target) return undefined;

  // 공공데이터 필드명은 서비스 개편 시 바뀔 수 있어 실제 응답 검증 전에는
  // 총인구를 추정하지 않는다. 외국인 주민 수로 확인되는 필드만 채택한다.
  const candidates = ['foreignTot', 'frgnrTot', 'foreignPopulation', 'totForeign', 'foreignCnt', 'foreigners'];
  const foreignResidents = candidates.map((tag) => numberValue(xmlValue(target, tag))).find((value) => value !== undefined);
  if (foreignResidents === undefined) {
    throw new Error('외국인주민 API 응답 스키마가 예상과 달라 필드 매핑 검증이 필요합니다.');
  }

  const period = ['statsYm', 'year', 'baseYear'].map((tag) => xmlValue(target, tag)).find(Boolean) ?? '공개 최신자료';
  return { period, foreignResidents, source: '행정안전부 지방자치단체 외국인주민 현황' };
}
