# 2026-08-27 Batch 004 — 2026 Inbound Pulse & Data Infrastructure

## L1 EVIDENCE

### EV-0032 — 2026년 1분기 방한 외래관광객 476만 명
- fact_id: EV-0032
- domain: market/inflow
- source: 문화체육관광부, 2026년 1분기 방한 외래관광객 규모 공개
- date: 2026-04-16
- unit: persons / quarter
- sample: 행정통계 기반 방한 외래객
- value: 약 4,760,000명
- comparison: 2025년 1분기 대비 +23%
- note: 2026년 3월 약 206만 명으로 월별 기준 최대 실적
- limitations: 잠정/공표 통계의 정의와 최종 확정치 차이가 있을 수 있음
- status: VERIFIED
- source_url: https://www.mcst.go.kr/site/s_notice/press/pressView.jsp?pSeq=22283

### EV-0033 — 외국인 신용카드 관광지출 2026년 1분기 3조 2,128억 원
- fact_id: EV-0033
- domain: spend/payment
- source: 문화체육관광부 보도자료(한국관광 데이터랩 인용)
- date: 2026-04-16
- unit: KRW / quarter
- sample: 외국인 신용카드 기반 관광지출
- value: 3,212,800,000,000원
- comparison: 2025년 1분기 2조 6,113억 원 대비 +23.0%
- limitations: 현금, 일부 해외/간편결제, 계좌이체 등 전체 소비를 포괄하지 않음
- status: VERIFIED
- source_url: https://www.mcst.go.kr/search/search.jsp?searchTerm=2026%EB%85%84%201%EB%B6%84%EA%B8%B0%20%EB%B0%A9%ED%95%9C%20%EC%99%B8%EB%9E%98%EA%B4%80%EA%B4%91%EA%B0%9D

### EV-0034 — 방한 여행 만족도 90.8점, 지역 방문율 34.5%
- fact_id: EV-0034
- domain: satisfaction/region-dispersal
- source: 외래관광객조사, 문체부 2026-04-16 보도자료 재인용
- date: 2026-Q1
- unit: score / percent
- sample: 외래관광객조사, 2026년 1분기 잠정치
- value: 만족도 90.8점; 지역 방문율 34.5%
- comparison: 2025년 1분기 89.7점 / 31.3%, 각각 +1.1점 / +3.2%p
- limitations: 2026년 1분기는 잠정치이며 조사 설계·가중치 확인 필요
- status: VERIFIED_PROVISIONAL
- source_url: https://www.mcst.go.kr/search/search.jsp?searchTerm=2026%EB%85%84%201%EB%B6%84%EA%B8%B0%20%EB%B0%A9%ED%95%9C%20%EC%99%B8%EB%9E%98%EA%B4%80%EA%B4%91%EA%B0%9D

### EV-0035 — 2026년 1~5월 누적 872만 명, 6월 20일경 1,000만 명 돌파
- fact_id: EV-0035
- domain: market/inflow
- source: 문화체육관광부 국정성과
- date: 2026-06-20
- unit: persons
- sample: 방한 외국인 관광객 잠정치
- value: 1~5월 누적 8,720,000명; 6월 20일경 누적 10,000,000명 돌파
- comparison: 1~5월 전년 동기 대비 +21%
- limitations: 잠정치
- status: VERIFIED_PROVISIONAL
- source_url: https://www.mcst.go.kr/site/s_policy/govPolicy/performTotal.jsp

### EV-0036 — 2026년 5월 외국인 카드 관광지출 월 2조 원 첫 돌파
- fact_id: EV-0036
- domain: spend/payment
- source: 문화체육관광부 국정성과
- date: 2026-05
- unit: KRW / month
- sample: 외국인 국내 카드 관광지출 추산
- value: 약 2.1조 원
- note: 2018년 1월 집계 이후 최초 월 2조 원 돌파
- limitations: 카드기반 추산, 전체 지출과 동일하지 않음
- status: VERIFIED
- source_url: https://www.mcst.go.kr/site/s_policy/govPolicy/performTotal.jsp

### EV-0037 — 한국관광 데이터랩은 국가×지역×소비 연결에 필요한 이동통신·신용카드·간편결제·OTA 리뷰 계층을 제공
- fact_id: EV-0037
- domain: data-infrastructure/knowledge-graph
- source: 한국관광 데이터랩 국가별 분석
- date_checked: 2026-08-27
- unit: dataset capability
- sample: 이동통신 기반 외국인 방문, 신용카드 관광소비, 일부 간편결제, OTA 숙박리뷰
- capability:
  - 이동통신 기반 관광객 지역별 방문비율
  - 신용카드 기반 외국인 관광소비액·지역별 소비비율
  - 제로페이 기반 일부 외국인 간편결제 지역별 소비비율
  - OTA 숙박리뷰 감성/긍정·부정 수요 키워드
- limitations:
  - 간편결제는 일부 데이터만 파악되어 추세 참고용
  - 광역 방문비율은 기초지자체 합산 참고값
  - 카드/통신 표본은 전체 외국인 행동과 완전히 동일하지 않음
- status: VERIFIED_SOURCE
- source_url: https://datalab.visitkorea.or.kr/datalab/portal/nat/getNatFocTourAna.do

### EV-0038 — 데이터랩 분석메뉴는 월 단위 갱신 주기를 공개
- fact_id: EV-0038
- domain: data-governance
- source: 한국관광 데이터랩 데이터 설명 모아보기
- date_checked: 2026-08-27
- unit: refresh cadence
- value:
  - 지역별 분석: 매월 17일(전월)
  - 국가별 분석: 매월 10일경(전전월)
  - 관광사업체: 매월 6일(전월)
- limitations: 세부 데이터셋마다 예외·변경이력 존재
- status: VERIFIED
- source_url: https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do

### EV-0039 — 한국관광 콘텐츠랩은 9개 언어권 콘텐츠 및 OpenAPI 경로를 제공
- fact_id: EV-0039
- domain: language/content
- source: 한국관광 콘텐츠랩
- date_checked: 2026-08-27
- unit: language coverage
- value: 한국어, 영어, 일본어, 중국어 간체, 중국어 번체, 독일어, 프랑스어, 스페인어, 러시아어
- limitations: 실제 개별 콘텐츠의 언어별 완전성/신선도는 별도 검증 필요
- status: VERIFIED_SOURCE
- source_url: https://gwapi.visitkorea.or.kr/

## L2 OBSERVATIONS

### OB-0015
- observation_id: OB-0015
- based_on: EV-0032, EV-0035
- statement: 2026년 방한 수요는 전년 대비 두 자릿수 증가세를 유지하며 상반기 기준 매우 빠르게 확대되고 있다.
- status: SUPPORTED

### OB-0016
- observation_id: OB-0016
- based_on: EV-0033, EV-0036
- statement: 관광객 수 증가와 카드 관광지출 증가가 동시에 나타나 시장규모 확대가 단순 방문객 수 증가에만 머물지 않는다.
- limitation: 1인당 총지출 증가를 의미한다고 단정할 수는 없다.
- status: SUPPORTED

### OB-0017
- observation_id: OB-0017
- based_on: EV-0034
- statement: 비수도권/지역 방문 비중은 개선되고 있으나 여전히 전체 관광객의 다수가 지역 방문을 하지 않는 구조로 해석할 여지가 있다.
- limitation: '지역 방문율'의 정확한 조사문항·지역 정의를 코드북에서 재확인해야 한다.
- status: SUPPORTED_WITH_LIMITATION

### OB-0018
- observation_id: OB-0018
- based_on: EV-0037, EV-0038
- statement: 국가×지역×방문×소비×숙박리뷰의 핵심 연결 데이터는 이미 공공 데이터 인프라 안에 존재하므로, 플랫폼의 초기 데이터 moat는 새 데이터를 처음부터 생성하는 것보다 공공·상업 데이터를 표준 ID로 결합하는 데서 시작할 수 있다.
- status: SUPPORTED

### OB-0019
- observation_id: OB-0019
- based_on: EV-0039
- statement: 다국어 관광콘텐츠 원천이 이미 존재하므로 '번역 콘텐츠 자체'보다는 공급자 재고·예약·결제·동선에 다국어 정보를 결합하는 것이 더 높은 가치층일 가능성이 있다.
- status: SUPPORTED

## L3 INSIGHTS

### IN-0012
- insight_id: IN-0012
- statement: 2026년 시장 팽창기에는 단순 콘텐츠 SEO보다 `유입 → 지역분산 → 예약 → 결제 → 현지 이동 → 재구매` 전환 그래프를 먼저 구축하는 것이 사업가치가 크다.
- evidence: EV-0032~EV-0038
- status: ACTIVE

### IN-0013
- insight_id: IN-0013
- statement: 지역 방문율 34.5%는 지역 공급자에게는 기회이자 병목이다. 지역상품의 부족만이 아니라 Discoverability, 이동, 언어, 결제, 예약 신뢰가 연결되지 않는 구조가 핵심 검증대상이다.
- status: ACTIVE

### IN-0014
- insight_id: IN-0014
- statement: Knowledge Graph의 우선 Edge는 `Country/Segment -> Visits Region -> Spends On Category -> Uses Channel -> Complains About Friction -> Books Product`로 두고, 데이터랩의 월 갱신 주기를 ETL cadence의 기본값으로 삼는 것이 합리적이다.
- status: ACTIVE

## L4 HYPOTHESES

### HY-0014
- hypothesis_id: HY-0014
- statement: 지역 여행 의향이 있는 외국인에게 교통·언어·결제를 묶은 1-click regional journey를 제공하면 지역 방문 전환율을 유의하게 높일 수 있다.
- validation: 국가별 랜딩페이지 A/B + 실제 예약 클릭/결제 전환
- status: UNVALIDATED

### HY-0015
- hypothesis_id: HY-0015
- statement: OTA 숙박리뷰의 부정 키워드와 공식 관광불편신고를 국가별로 교차코딩하면 국가별 Pain의 70% 이상을 소수의 friction taxonomy로 설명할 수 있다.
- validation: 최소 핵심 9개국 각 n>=300 리뷰 + 공식 불편신고 corpus
- status: VALIDATING

## L5 DECISIONS

### DE-0008
- decision_id: DE-0008
- decision: 데이터 파이프라인의 월간 기본 갱신 순서를 `국가별 시장 → 지역 방문 → 지역 소비 → 공급자/가격/리뷰 → VOC`로 고정한다.
- status: PROVISIONAL

### DE-0009
- decision_id: DE-0009
- decision: 전체 지출과 카드 지출을 동일시하지 않으며 모든 spend fact에 payment coverage를 필수 메타데이터로 저장한다.
- status: ACTIVE

## L6 PLAN
1. 2025 외래관광객조사 microdata에서 국가×연령×성별×방문목적×체류기간×재방문×지출을 표준 테이블로 추출한다.
2. 데이터랩에서 핵심 9개국의 지역별 방문비율·카드 소비비율·업종별 소비를 동일 month key로 정규화한다.
3. OTA 숙박리뷰 감성 키워드와 관광불편신고서를 PAIN taxonomy에 매핑한다.
4. 지역 방문율 정의와 조사문항을 2026 외래관광객조사 코드북에서 재확인한다.
5. 교통/결제/언어 friction은 공식 조사+Reddit/OTA review에서 정량 빈도까지 확보하기 전 85%로 올리지 않는다.

## L7 BUSINESS PLAN IMPACT
2026년 시장은 `시장 성장` 자체는 강하게 검증되었지만, PMF는 검증되지 않았다. 사업계획에서는 방한객/지출 성장과 지역분산 정책을 시장기회로 사용할 수 있으나, 특정 Journey가 실제 지불의사와 반복구매를 만든다는 주장은 HY-0014 등 실험 완료 전까지 확정 문장으로 승격하지 않는다.
