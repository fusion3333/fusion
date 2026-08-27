# Source Priority Framework V1 — Variable-specific, Multi-layer Evidence

Date: 2026-08-27
Status: ADOPTED

## Core decision
모든 항목에 동일한 기관 순위를 적용하지 않는다. 각 변수/질문마다 가장 적합한 Source Stack을 별도로 설계한다. 동시에 서로 다른 역할의 Evidence를 `OFFICIAL / ENTERPRISE / SOCIAL-VOC`로 분리한다.

핵심:
`QUESTION → VARIABLE → PURPOSE OF EVIDENCE → SOURCE LAYER → VARIABLE-SPECIFIC PRIORITY 1..5 → NORMALIZE → CROSS-VALIDATE → GRAPH`

## Three evidence layers
### O — OFFICIAL
정부·국가승인통계·공공기관·지방정부·관광공사·공항/교통 등 공식 운영기관.
주 역할: population/flow/spend/supply/definitions/longitudinal baseline.

### E — ENTERPRISE
카드/통신/항공/OTA/검색/지도/결제/여행사/플랫폼/숙박사업자 등 기업의 공식 공개자료·API·리포트·거래/행동 데이터.
주 역할: search, booking, price, transaction, mobility, platform behavior, conversion proxy, current market signal.

### S — SOCIAL / VOC
Google Maps 리뷰, OTA 리뷰, Instagram, Threads, Facebook, X, YouTube, TikTok, Reddit 및 국가별 주요 SNS/여행 커뮤니티의 합법적으로 접근 가능한 공개 데이터.
주 역할: pain, wants, sentiment, language-specific perception, trust, complaints, hidden demand, emerging trend, qualitative context.

O/E/S는 신뢰도 순위가 아니라 서로 다른 현상을 측정한다. 예: 공식 설문은 대표성에 강하고, OTA는 실제 예약시장에 강하며, 리뷰는 Pain의 구체적 맥락에 강하다.

## Variable-specific source stack rule
각 핵심 변수마다 다음을 등록한다.
- variable_id / question
- evidence_needed
- O priority 1..5
- E priority 1..5 (필요한 경우)
- S priority 1..5 (필요한 경우)
- minimum history
- target frequency/granularity
- geography/segment
- raw/API/download availability
- methodology/definition
- license/terms
- cross-validation rule
- stop condition

## Initial optimized map
### Arrivals / nationality / month
O: 한국관광통계·출입국 원천 → 법무부 → KOSIS → 공항/항만 공식 → 지역 공식
E: 항공 공급/운항 기업·산업 데이터(원인/선행지표 보강)
S: 보통 불필요.

### Demographics / purpose / repeat / companion / party size
O: 외래관광객조사 microdata → 코드북/연차보고서 → 지역 외국인관광객 조사 → 기타 승인조사 → 공식 연구
E: OTA/여행사 segmentation 공개자료(보강)
S: 여행 커뮤니티/VOC는 유형 발견용, population share 대체 금지.

### Awareness / Korea discovery / promotion / K-content influence
O: 외래관광객조사 → 잠재 방한여행객 조사 → KTO/문체부 콘텐츠·관광 조사 → 국가/지역 공식 캠페인 연구 → 학술/공식 연구
E: Google/search trends, YouTube/Meta/TikTok/OTA/travel company official insights where accessible
S: YouTube/Instagram/TikTok/Threads/X/Reddit/국가별 SNS의 public engagement/VOC. 실제 인지 맥락·새 트렌드 탐색.

### Search / information channel
O: 외래관광객조사 및 공식 디지털 관광조사
E: Google/search/map/OTA/travel-platform official/public data
S: SNS/커뮤니티에서 실제 planning language와 source mention 추출.

### FIT / package / hybrid / booking
O: 외래관광객조사 microdata → 지역 공식 조사
E: OTA/여행사/항공+호텔 패키지 기업 공개자료 → booking platform data
S: 여행후기/커뮤니티는 hybrid behavior와 friction 탐색.

### Stay length / accommodation type
O: 외래관광객조사 → 공식 숙박/관광사업체 통계 → 지역 조사
E: OTA/property official/public price/availability/review data
S: 숙박 리뷰는 pain/trust/context.

### Regional visitation / route / dwell
O: 관광데이터랩 이동통신·내비/공식 지역통계 → 지역관광기관 → 교통 운영기관
E: telecom/navigation/map/transport company outputs where accessible
S: geotag/public itinerary/VOC는 보조, population flow 대체 금지.

### Spend
O: 관광데이터랩 외국인 카드소비 → 외래관광객조사 → 면세/세관/지역 공식 소비자료
E: 카드/PG/OTA/merchant/platform disclosures
S: 가격/구매후기/쇼핑 VOC는 구매 이유와 pain 설명.

### Activity / experience demand
O: 외래관광객조사 → TourAPI/지역 공식 조사·공급 → 관광데이터랩
E: Klook/KKday/Viator/GetYourGuide/OTA 등 공개/공식 상품·랭킹·리뷰 데이터
S: Google/OTA/SNS 리뷰와 콘텐츠로 wants/pain/emerging activity 탐색.

### Supply
O: TourAPI + 인허가 원장 + 지자체/지역관광기관 공식 registry
E: 공급자 공식사이트 + OTA/지도 listing
S: SNS presence/review는 discoverability/trust 측정.

### Price / bookability / availability
O: 공식 가격/요금 데이터가 있으면 우선
E: 공급자 공식사이트 → OTA/experience platform → 여행사
S: 후기 속 가격/예약 friction은 보조 Evidence.

### Satisfaction / Pain / Trust
O: 외래관광객조사/지역 공식 만족도·불편 조사
E: OTA/Google/기업 VOC/CS 공개자료
S: Google, Booking/Agoda/Klook/KKday/Viator/GetYourGuide reviews + Reddit/YouTube/Instagram/Threads/X/Facebook/TikTok + 국가별 여행 커뮤니티. 언어/국가별로 분리.

### Platform dominance / discovery distribution
O: 공식 디지털 이용조사
E: 플랫폼 공식 traffic/market/usage disclosures + reputable measurement data
S: user-reported platform usage/context.

### Money flow / commissions / margins
O: 세금/규제/공시/산업통계
E: OTA/PG/카드/FX/플랫폼 공식 수수료·공시 + 공급자 economics
S: 공급자 커뮤니티/VOC는 hidden fees/pain hypothesis용.

## Priority is purpose-specific
한 변수에도 O1과 E1과 S1이 동시에 존재할 수 있다. 예:
- `숙박 만족도 population estimate`: O1 외래관광객조사
- `특정 호텔의 현재 만족/불만`: E/S1 Google/OTA reviews
- `현재 객실가격`: E1 호텔 공식/OTA
따라서 Source를 하나의 선형 신뢰순위로 섞지 않는다.

## Cross-validation
- O ↔ O: 정의/표본/기간 일치 확인
- O ↔ E: population estimate와 observed market behavior 차이 분석
- O/E ↔ S: 수치와 실제 VOC 맥락 연결
- S에서 발견한 신호는 O/E로 검증 가능한지 역검색
- E/S의 platform bias를 기록
- 국가별 SNS는 현지 플랫폼 점유/접근성을 반영해 별도 Source Stack 설계

## Stop rule
각 변수는 필요한 Evidence 목적이 충족되면 불필요하게 5순위까지 모두 검색하지 않는다. 다만 triangulation이 중요한 변수(PAIN, awareness, booking friction, platform behavior)는 O/E/S 3-layer를 의도적으로 결합한다.

## Strategic effect
이 Framework는 뒤죽박죽 수집을 방지하고, 가장 정확한 원천을 먼저 사용하면서도 공식 통계가 보지 못하는 실제 검색·예약·평가·불만·욕구를 기업/SNS Evidence로 보완한다. 이후 최종 수학모형은 source layer별 measurement error/confidence를 고려해야 한다.
