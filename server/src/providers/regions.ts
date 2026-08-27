export interface RegionRecord {
  code: string;
  name: string;
  sidoCode?: string;
  sigunguCode?: string;
  eupmyeondongCode?: string;
  parentCode?: string;
}

const ENDPOINT = 'https://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList';
let cache: { expiresAt: number; rows: RegionRecord[] } | undefined;

function decodeXml(value: string): string {
  return value.replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
}

function tag(xml: string, name: string): string | undefined {
  return xml.match(new RegExp(`<${name}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`, 'i'))?.[1]?.trim();
}

async function fetchPage(serviceKey: string, pageNo: number): Promise<{ total: number; rows: RegionRecord[] }> {
  const url = new URL(ENDPOINT);
  url.searchParams.set('ServiceKey', serviceKey);
  url.searchParams.set('type', 'xml');
  url.searchParams.set('pageNo', String(pageNo));
  url.searchParams.set('numOfRows', '1000');
  url.searchParams.set('flag', 'Y');

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`법정동코드 API 오류: ${response.status}`);
    const xml = await response.text();
    const resultCode = tag(xml, 'resultCode');
    if (resultCode && resultCode !== 'INFO-0' && resultCode !== '0') throw new Error(`법정동코드 API 결과 오류: ${resultCode} ${tag(xml, 'resultMsg') ?? ''}`);
    const total = Number(tag(xml, 'totalCount') ?? 0);
    const blocks = xml.match(/<row>[\s\S]*?<\/row>/gi) ?? [];
    const rows = blocks.map((block) => ({
      code: tag(block, 'region_cd') ?? '',
      name: decodeXml(tag(block, 'locatadd_nm') ?? ''),
      sidoCode: tag(block, 'sido_cd'),
      sigunguCode: tag(block, 'sgg_cd'),
      eupmyeondongCode: tag(block, 'umd_cd'),
      parentCode: tag(block, 'locathigh_cd'),
    })).filter((row) => /^\d{10}$/.test(row.code) && row.name);
    return { total, rows };
  } finally {
    clearTimeout(timer);
  }
}

export async function getAllRegions(): Promise<RegionRecord[]> {
  const serviceKey = process.env.DATA_GO_KR_SERVICE_KEY;
  if (!serviceKey) return [];
  if (cache && cache.expiresAt > Date.now()) return cache.rows;
  const first = await fetchPage(serviceKey, 1);
  const pages = Math.max(1, Math.ceil(first.total / 1000));
  const all = [...first.rows];
  for (let page = 2; page <= pages; page++) all.push(...(await fetchPage(serviceKey, page)).rows);
  const unique = [...new Map(all.map((row) => [row.code, row])).values()];
  cache = { expiresAt: Date.now() + 24 * 60 * 60 * 1000, rows: unique };
  return unique;
}

export async function searchRegions(query: string, limit = 100): Promise<RegionRecord[]> {
  const rows = await getAllRegions();
  const q = query.trim().toLocaleLowerCase('ko');
  return rows.filter((row) => !q || row.name.toLocaleLowerCase('ko').includes(q)).slice(0, Math.min(Math.max(limit, 1), 200));
}

export async function getRegionByCode(code: string): Promise<RegionRecord | undefined> {
  return (await getAllRegions()).find((row) => row.code === code);
}
