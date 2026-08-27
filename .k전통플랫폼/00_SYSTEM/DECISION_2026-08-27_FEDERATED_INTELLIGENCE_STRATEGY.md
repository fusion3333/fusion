# Decision Record — Federated Tourism Intelligence Strategy

Date: 2026-08-27
Status: ADOPTED
Scope: Korea Inbound Tourism Causal Digital Twin

## Decision
우리는 각 분야의 전문기관/기업이 이미 구축한 분석·예측·거래 엔진을 불필요하게 다시 만들지 않는다. 각 분야의 Best Existing Intelligence를 먼저 찾고, 합법적으로 접근 가능한 원자료/API/공개 통계/공식 분석결과를 우리 Temporal/Causal Knowledge Graph에 연결한다.

핵심 전략:
`Best Existing Engine → Accessible Output → Evidence Node → Cross-domain Graph → Gap/Island/Bottleneck/Asymmetry → Opportunity → Product → Revenue`

## Why this matters
관광공사, 지역관광기관, 카드/결제, 통신, 지도/검색, OTA, 항공, 모빌리티, SNS 등은 각자 자기 영역에서 강한 데이터와 엔진을 가진다. 우리의 차별점은 각 전문엔진보다 개별 영역을 더 잘 재구축하는 것이 아니라, 서로 분리된 결과를 시간·공간·고객·Journey·Supply·Money·Information/Trust Graph로 연결해 cross-domain 변화전파와 사업기회를 발견하는 것이다.

## Build vs Connect Rule
### CONNECT FIRST
다음 조건이면 기존 엔진/데이터를 우선 사용한다.
- 공식/신뢰 가능한 기관이 이미 동일 현상을 측정
- API/CSV/XLSX/PDF/공식 dashboard output 등 접근 가능한 결과가 존재
- 정의·방법론·기간이 추적 가능
- 라이선스/약관상 활용 가능

### BUILD
다음 경우에만 자체 엔진을 만든다.
- 여러 domain 사이의 연결이 기존 시스템에 없음
- Gap/Island/Bottleneck/Information Asymmetry 탐지가 필요
- 변화전파/시나리오/Opportunity ranking이 기존 output에 없음
- 우리의 공급자/거래/실험 데이터로 calibration이 필요

## Domain Intelligence Map — initial
- Tourism demand / visitation / regional flow / spend: Korea Tourism Data Lab + official tourism statistics
- Immigration / arrivals: official immigration/tourism statistics
- Supply entities: TourAPI + licensing/local government + regional tourism organizations
- Card/payment consumption: accessible official/public card-tourism outputs
- Telecom mobility/stay: accessible official/public mobility-tourism outputs
- Search/maps/reviews: Google and other lawful public/official outputs
- Accommodation/booking/price/reviews: OTA/provider public/official outputs
- Experiences: experience OTA + official/regional supply sources
- Aviation/gateway: official aviation/airport/airline public data
- Transport: rail/bus/taxi/navigation/transit public/official outputs
- Awareness/K-content/SNS: official surveys + platform/public trend evidence
- Money flow: platform disclosures, PG/FX/tax rules, supplier economics

This map is provisional and must be expanded into a full registry with owner, product/engine, accessible output, format/API, update frequency, history, geography, granularity, methodology, license/terms, cost, reliability, graph edge, and limitations.

## Evidence Rule
1. Raw data가 있으면 raw를 우선한다.
2. Raw가 없고 공식 분석 output만 있으면 `derived/engine_output` Evidence Node로 저장한다.
3. 기업 내부모델의 결과를 원자료처럼 취급하지 않는다.
4. 서로 다른 engine output을 정의 확인 없이 직접 합산하지 않는다.
5. 모든 derived output은 source engine, period, methodology/known limitations, confidence를 추적한다.

## Architectural consequence
18축 Source Registry에 앞으로 다음 필드를 추가한다:
`domain, best_existing_engine_owner, engine_or_product, accessible_output, raw_available, api_available, downloadable_format, history, update_frequency, geography, granularity, methodology, license_terms, cost, reliability, graph_connection, limitations, build_or_connect`

## Strategic moat
우리의 Moat는 개별 데이터 소유가 아니라 다음의 결합이다.
1. Cross-domain ontology
2. Entity resolution
3. 10y+ temporal graph
4. Journey/Supply/Money/Information/Trust graph integration
5. methodology-aware evidence normalization
6. change propagation / causal hypotheses
7. Gap/Island/Bottleneck/Asymmetry detection
8. Opportunity → experiment → product → revenue traceability
9. 향후 자체 거래/공급자 데이터가 만드는 proprietary feedback loop

## Decision impact on future work
새로운 데이터 영역을 조사할 때 첫 질문은 `어떤 CSV가 있는가?`가 아니라 다음 순서로 한다.
1. 이 영역에서 가장 강한 기존 engine/기관은 누구인가?
2. 어떤 output을 외부에서 합법적으로 접근 가능한가?
3. 원자료/API/download가 있는가?
4. 몇 년치이며 어떤 granularity인가?
5. 우리 graph의 어떤 node/edge를 채우는가?
6. 기존 output으로 해결되지 않는 cross-domain gap은 무엇인가?
7. 그 부분만 자체 구축할 가치가 있는가?

## Business implication
장기적으로 플랫폼은 `관광 데이터 저장소`가 아니라 여러 전문 Intelligence를 연결하고 그 사이의 미관측/미해결 영역을 찾아 거래 가능한 Opportunity로 변환하는 Tourism Intelligence/Operating Layer를 지향한다.
