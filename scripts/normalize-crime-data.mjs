import fs from 'node:fs';

const [input, output = 'crime-normalized.json'] = process.argv.slice(2);
if (!input) {
  console.error('사용법: node scripts/normalize-crime-data.mjs <official.json> [output.json]');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(input, 'utf8'));
if (!Array.isArray(raw)) throw new Error('입력은 경찰서별 배열이어야 합니다.');

const categories = ['murder', 'robbery', 'sexual_violence', 'theft', 'violence'];
const normalized = raw.map((station) => {
  if (!station.policeStation || !station.period || !Array.isArray(station.rows)) {
    throw new Error('policeStation, period, rows 필드가 필요합니다.');
  }
  for (const row of station.rows) {
    if (!categories.includes(row.category) || !Number.isFinite(row.incidents)) {
      throw new Error(`${station.policeStation}: 잘못된 범죄 행입니다.`);
    }
  }
  return {
    policeStation: station.policeStation,
    period: String(station.period),
    source: station.source ?? '경기북부경찰청 경찰서별 5대범죄 발생 및 검거 현황',
    rows: station.rows,
  };
});

fs.writeFileSync(output, JSON.stringify(normalized, null, 2));
console.log(`${normalized.length}개 경찰서 데이터를 ${output}에 저장했습니다.`);
