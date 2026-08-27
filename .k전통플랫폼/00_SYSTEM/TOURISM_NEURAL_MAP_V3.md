# Korea Inbound Tourism Neural Map V3

기준일: 2026-08-27

## 최상위 목표
대한민국을 방문하는 외국인 관광객 전체와 그들을 둘러싼 관광산업의 **Customer Flow, Supply Flow, Money Flow, Information Flow, Trust Flow**를 연결해 Digital Twin/Knowledge Graph를 구축한다.

최종 질문은 하나다.

> 누가 한국에 왜 오고, 어디로 이동하며, 무엇을 찾고·비교하고·예약하고·결제하고·경험하고·불만을 느끼고·추가 구매하며, 그 과정에서 어떤 정보 비대칭·분절된 Island·병목·거래비용이 발생하는가?

## 5개 신경망
### 1. Customer Graph
Nationality → age → gender → income/budget → travel party → purpose → first/repeat visit → length of stay → destinations → activities → spend → satisfaction → revisit/recommendation.

### 2. Supply Graph
Accommodation → transport → food → shopping → attractions → culture → guides → beauty → wellness/medical → telecom → payments → insurance → events → commerce.

### 3. Journey Graph
Inspiration → Search → Compare → Plan → Bundle → Book → Prepay → Arrival → Connectivity → FX/Payment → Navigate → Transport → Stay → Eat → Experience → Shop → Support → Review → Reorder/Revisit.

### 4. Money Flow Graph
Traveler → airline/OTA/PG/accommodation/experience/restaurant/retailer/transport/guide/medical provider → commission/fee/tax/refund/FX/CAC/margin.

### 5. Information Flow Graph
Traveler need → search/SNS/OTA/official site/map/provider → information owner → update cycle → translation → trust/review → booking decision. 정보가 끊기거나 서로 불일치하는 구간을 Information Asymmetry로 기록한다.

## 분석 핵심 객체
모든 Value Chain node/edge에는 다음 필드를 붙인다.
- node_id / edge_id
- stage
- actor
- traveler_job_to_be_done
- supplier_job_to_be_done
- current_solution
- dominant_platform
- data_owner
- information_available
- information_missing
- information_asymmetry
- island_type
- bottleneck_type
- transaction_cost
- customer_pain
- supplier_pain
- trust_gap
- language_gap
- payment_gap
- navigation_gap
- regulatory_gap
- monetization_opportunity
- source_ids
- evidence_level
- confidence
- status

## Island 정의
`Island`는 개별적으로는 존재하지만 고객 Journey와 데이터/거래가 연결되지 않는 공급·정보·서비스 단위다.

### Island 유형
- Supply Island: 좋은 공급자가 있으나 글로벌 발견/예약이 안 됨
- Data Island: 데이터가 기관/플랫폼별로 분산되고 표준 ID가 없음
- Booking Island: 검색은 되지만 실시간 예약/확정이 분리됨
- Payment Island: 해외카드/현지결제/환전이 단절됨
- Navigation Island: 장소 발견과 실제 길찾기/교통이 분리됨
- Language Island: 상품은 있으나 번역·CS가 없음
- Trust Island: 평점/사진/시설정보가 플랫폼마다 다름
- Regulatory Island: 관광·의료·결제 등 규제 때문에 연결이 끊김
- Regional Island: 서울 밖의 상품이 글로벌 유통망에 약하게 연결됨
- Post-trip Island: 여행 후 재구매 가능한 한국 상품과 관계가 끊김

## Bottleneck 정의
고객 또는 공급자의 다음 단계 전환율을 떨어뜨리는 제약. Severity(1~5), frequency, affected_market, economic_loss_proxy, workaround를 기록한다.

## Information Asymmetry 정의
거래 당사자 중 한쪽이 품질·가격·위치·조건·가용성·규정·리스크 정보를 상대보다 현저히 적게 보유하는 상태.

대표 후보:
- 최종가격/세금/수수료 불명확
- 실제 객실/시설과 OTA 설명 차이
- 영업시간/휴무/예약가능 여부 업데이트 지연
- 영어 설명과 한국어 원문 정보량 차이
- 의료/웰니스의 시술 범위·가격·자격 정보 부족
- 교통카드/환승/막차/짐 운반 정보 분산
- 지역 체험 공급자의 품질·보험·취소조건 정보 부족
- 리뷰 점수는 있으나 고객 국적/여행목적별 적합도 정보 부족

## L0–L7 적층
L0 RAW → L1 EVIDENCE → L2 OBSERVATION → L3 INSIGHT → L4 HYPOTHESIS → L5 DECISION → L6 PLAN → L7 BUSINESS PLAN.

각 L7 주장은 최소 1개 이상의 L1 source와 L2/L3 trace를 가져야 하며, 미검증 전략은 L4 상태로 남긴다.

## 전체 Value Chain Domain
1. Pre-trip inspiration/content
2. Search/discovery
3. Trust/reputation
4. Compare/plan
5. Visa/entry
6. Air/sea access
7. Accommodation
8. Experiences/attractions
9. Food
10. Shopping/retail
11. Beauty
12. Wellness/medical
13. Telecom/connectivity
14. FX/payment
15. Map/navigation
16. Local transport
17. Intercity transport
18. Luggage/logistics
19. Language/translation
20. Guide/concierge
21. Safety/emergency
22. Customer support/refund
23. Reviews/social sharing
24. Post-trip commerce
25. Revisit/loyalty
26. Supplier acquisition/distribution
27. OTA/platform economics
28. Regulation/tax/privacy
29. Regional tourism distribution
30. Data infrastructure/identity/entity resolution

## 최종 산출물
- Nationality × Region × Spend × Behavior Matrix
- Customer Persona Graph
- Nationwide Supply Master
- Product/Price/Review Graph
- Value Chain Bottleneck Map
- Island Map
- Information Asymmetry Map
- Money Flow & Commission Map
- Platform Coverage Matrix
- Regulation Matrix
- Opportunity Scoreboard
- MVP Journey candidates
- L7 사업계획서/IR/정부지원사업 문서
