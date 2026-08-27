# Korea Inbound Tourism Causal Digital Twin V1

기준일: 2026-08-27
상태: ACTIVE MASTER ARCHITECTURE

## 0. 목표
단순 관광통계 DB가 아니라 대한민국 인바운드 관광산업의 Palantir형 Causal Digital Twin을 구축한다.

목표 흐름:
`SOURCE → ENTITY/EVENT → TEMPORAL KNOWLEDGE GRAPH → CAUSAL/DEPENDENCY GRAPH → CHANGE PROPAGATION → GAP/ISLAND/BOTTLENECK/ASYMMETRY → OPPORTUNITY → PRODUCT/BUSINESS → REVENUE`

수학적 Opportunity 함수는 데이터 수집·분석 후 확정한다. 현재 공식은 provisional hypothesis로만 유지한다.

## 1. 관측 단위
가능한 최소 단위는 다음 tensor/cube로 설계한다.

`country × origin_region × year × month × season × demographic × companion_type × party_size × awareness_channel × information_channel × booking_channel × travel_form × stay_length × accommodation_type × arrival_gateway × destination_region × route × activity × experience × spend_category × pain × satisfaction × revisit`

기본 시계열: 최소 10년. 더 긴 공식자료가 존재하면 전체 가용기간. 월 단위가 없으면 분기/연 단위를 보존하고 임의 보간하지 않는다.

## 2. 핵심 Graph
### Customer Graph
Nationality, residence, age, gender, income/budget, first/repeat, purpose, companion, party size.

### Awareness & Influence Graph
K-content, word of mouth, travel agency, advertising, official tourism media, Google/search, YouTube, Instagram, TikTok, OTA/editorial 등에서 Korea awareness/interest로 이어지는 경로.

### Journey Graph
Awareness → Interest → Search → Compare → Book → Pay → Arrival → Move → Stay → Experience → Spend → Review/Satisfaction → Revisit/Recommend/Post-trip commerce.

### Supply Graph
Accommodation, hanok, food, traditional culture, craft/artisan, wellness/Korean medicine, beauty, shopping, attraction, guide, mobility, event 등.

### Platform Graph
Search, map, OTA, experience OTA, SNS, payment, transport, official portals. Entity별 language/discoverability/bookability/payment/trust coverage를 연결.

### Money Graph
Tourist spend → platform commission → PG/FX → supplier revenue → labor/input/logistics/tax → contribution margin/value capture.

### Information & Trust Graph
Korean ground-truth information과 foreign-accessible information, rating/reviews, translation, refund/cancellation, certification, safety/trust signal을 연결.

## 3. 시간 구조
모든 가능한 Edge에 `valid_from`, `valid_to`, `observed_at`, `period`, `frequency`를 둔다.

계절성은 최소 월→계절→연도 hierarchy로 관리한다.
구조적 충격은 별도 regime/event node로 관리한다: pandemic, visa change, flight capacity, exchange rate shock, geopolitical shock, K-content hit, mega-event, platform policy, natural disaster 등.

## 4. 변화 전파(Change Propagation)
한 노드 변화가 다른 노드에 미치는 영향 후보를 dependency edge로 저장한다.

예:
`K-content exposure ↑ → search interest ↑ → destination consideration ↑ → booking ↑ → arrivals ↑ → specific activity demand ↑ → regional stay/spend ↑ → supplier capacity pressure ↑ → price/reviews 변화`

`JPY/KRW change → Japanese travel cost perception → arrivals/travel form/stay/spend mix 변화`

`new direct flight → gateway accessibility → regional visitation → accommodation occupancy → local experience demand`

각 edge는 direction, lag, elasticity/effect estimate, confidence, source/evidence, confounders를 가진다. 상관관계를 인과로 자동 승격하지 않는다.

## 5. 예측 계층
1. Descriptive: 무엇이 변했나
2. Diagnostic: 무엇과 함께 변했나
3. Causal hypothesis: 무엇이 원인일 가능성이 있나
4. Predictive: 변화가 다음 기간에 무엇을 바꿀 가능성이 있나
5. Scenario: X가 ±10/20/50% 변하면 downstream 범위는?
6. Prescriptive: 어느 병목을 해결할 때 경제적 효과가 가장 큰가

예측에는 반드시 uncertainty interval/confidence를 둔다.

## 6. Gap Ontology
### Missing Supply Gap
수요 대비 공급 자체 부족.
### Accessibility Gap
공급은 있으나 외국어/검색/예약/결제/교통 때문에 접근 불가.
### Information Asymmetry
국내에 존재하는 정보·품질·가격과 외국인이 관측 가능한 정보 사이 차이.
### Island
좋은 자산/공급자가 value chain/network에 연결되지 않음.
### Bottleneck
Journey 또는 공급체인의 특정 단계가 전체 throughput을 제한.
### Trust Gap
리뷰, 인증, 가격투명성, 취소/환불, 안전정보 부족.
### Transaction Cost Gap
검색·비교·예약·결제·이동·CS에 불필요한 시간/비용.
### Value Capture Gap
관광객 지불액과 지역/공급자가 실제 포획하는 가치 사이 과도한 누수.
### Revalue Gap
원본자산은 존재하지만 packaging/story/language/distribution/bundling 부족으로 낮게 가격됨.

## 7. Opportunity Pipeline
`Observed Gap → Evidence bundle → Affected segments → Demand size → Pain/severity → Existing alternatives → Supply readiness → Solvability → Willingness to pay → Unit economics → Regulation/risk → Experiment → Product → Revenue`

Opportunity는 Gap이 존재한다는 이유만으로 생성하지 않는다. 수요, 지불의사, 해결가능성, 경쟁, economics를 통과해야 한다.

## 8. Value-Up Graph
`ORIGINAL ASSET → CURRENT PRODUCT → CURRENT CUSTOMER/PRICE → HIDDEN ATTRIBUTE → NEW STORY/PACKAGING → NEW BUNDLE → NEW DISTRIBUTION → NEW CUSTOMER → NEW PRICE → NEW MARGIN`

Remaking/Rebranding/Revaluing 결과는 원본 자산의 훼손 없이 추가된 가치와 비용을 분리 측정한다.

## 9. Source Architecture
Tier A: 승인통계/정부/공공기관 원자료 및 API
Tier B: 지역관광기관/공공기관 조사
Tier C: 기업/플랫폼 공식 공개자료
Tier D: OTA/map/review/SNS/public VOC (약관 준수)
Tier E: 기사/2차 연구/추론

모든 evidence에 source_id, tier, URL/file, acquired_at, period, geography, population/sample, definition, unit, methodology, limitations, confidence를 기록한다.

## 10. 10년 분석 요구
국가별로 가능한 범위에서 매년·매월/계절별 다음을 복원한다:
- arrivals/share/growth
- demographics
- companion type/party size
- purpose/first-repeat
- awareness/influence/information channel
- booking lead time/channel
- FIT/package/hybrid
- stay-length distribution
- accommodation mix
- arrival gateway
- regional visitation/route/stay
- activities/experiences
- spend total/category/region
- pain
- satisfaction/recommend/revisit

조사문항/표본/정의가 바뀐 시점은 methodology regime으로 분리한다.

## 11. Causal Validation Rules
- correlation ≠ causation
- 시차(lag)를 명시
- 공통원인(confounder) 후보 기록
- 자연실험/정책변경/항공노선 신설/환율충격 등 quasi-experiment 우선 활용
- 가능한 경우 difference-in-differences, interrupted time series, panel regression, event study, matching, synthetic control 후보 사용
- 데이터가 부족하면 causal claim 대신 association/hypothesis로 유지

## 12. Digital Twin Query Examples
- 일본 20대 여성 친구여행객의 최근 10년 봄철 awareness→booking→stay→activity→spend 경로 변화는?
- 미국 40~50대 커플의 가을 체류일 증가가 서울 외 지역 소비에 미치는 연관/추정효과는?
- 영어 bookability가 낮은 전통체험 공급자를 연결하면 어느 세그먼트의 conversion/value가 가장 크게 개선될 가능성이 있는가?
- 특정 국가 직항편 20% 증가 시 gateway→regional route→hotel→experience demand의 downstream scenario는?
- K-content hit 이후 어느 국가/연령/동반형태에서 검색→입국→체험 소비 전이가 가장 강했는가?

## 13. L0-L7
L0 RAW SOURCE
L1 NORMALIZED EVIDENCE
L2 OBSERVATION / TEMPORAL GRAPH
L3 RELATIONSHIP / DIAGNOSTIC INSIGHT
L4 CAUSAL HYPOTHESIS / SCENARIO
L5 OPPORTUNITY DECISION
L6 EXPERIMENT / MVP / GTM / ECONOMICS
L7 TRACEABLE BUSINESS PLAN & REVENUE MODEL

## 14. 완료의 정의
'데이터가 많음'이 완료가 아니다.
1) 18축 Source coverage 확보
2) 주요 국가/지역/세그먼트의 10년 temporal coverage 확보
3) Journey/Supply/Money/Information/Trust graph 연결
4) 핵심 methodology break 처리
5) 주요 gap registry 구축
6) 변화전파 후보 edge와 confidence 구축
7) 상위 opportunity가 raw evidence까지 역추적 가능
8) 이후 데이터 기반 최종 수학모형 및 가중치 설계/검증
