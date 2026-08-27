# COMPETITOR METHOD LIBRARY V1
Date: 2026-08-27
Status: MASTER RESEARCH / EVIDENCE-AWARE
Purpose: 기존 관광 Intelligence 엔진의 공개 방법론을 분해하여 재사용 가능한 measurement primitive와 우리만 구축할 meta-layer를 구분한다.

## Rule
공개된 공식/방법론만 기록한다. 비공개 가중치/모델은 추정하지 않고 PROPRIETARY/UNKNOWN으로 기록한다.

## 1 KTO Tourism Data Lab
### 공개 구조
- 이동통신, 신용카드, 내비게이션 관광빅데이터를 결합한 지역관광 분석.
- 관광수요지수: 4 대분류, 8 중분류, 59 세부지표. 시군구 관광활동/산업 유지·성과 관련 요인을 평가. 월별 데이터에 따라 지역별 최소/최대가 새로 산출되므로 고정 0~100 scale이 아님.
- 2024 분석·활용 가이드라인은 이동통신, 신용카드, 내비게이션 각각의 절차별 분석/활용 가이드라인을 별도 정의.
### 우리가 가져올 primitive
VISITOR_PRESENCE, MOBILITY, TOURISM_SPEND, DESTINATION_SEARCH/NAVIGATION, REGIONAL_DEMAND_INDEX, REGIONAL_BENCHMARK.
### 주의
서로 다른 measurement type을 동일 모집단 값으로 취급하지 않는다. 관광수요지수의 정확한 세부 산식/가중치는 결과보고서 확인 전 UNKNOWN.

## 2 Data Appeal + Mabrian
### 공개 입력
- Social Media/Opinion portals → interest/perception/sentiment
- OTA/reservation platforms → accommodation supply
- GDS/air connectivity providers → schedules/search/bookings
- payment providers → destination spend
- telecom/app data → presence/mobility
- POI/map data → supply/location
- 30+ global sources; mapped POI/territory history stated from Jan 2019; daily update with client delivery lag.
### 공개 processing
- NLP/ML sentiment classification and semantic/topic analysis.
- Sentiment Score: 130+ online sources, scores/content normalization, 0–100 synthetic index; exact coefficients proprietary.
- Popularity: POI count/digital traces/sentiment and geographically located reviews/social/GPS signals; exact algorithm proprietary. Territorial API supports geography/time/industry/category/user-country/content-language filters.
- Seasonal Peak, Seasonal Balance, Travel Barometer and sustainability indices are exposed; exact proprietary formulas partly/mostly unavailable.
### reusable primitive
POI_COVERAGE, DIGITAL_TRACE_VOLUME, SENTIMENT, TOPIC_SENTIMENT, POPULARITY_PROXY, SEASONALITY, AIR_CONNECTIVITY, AIR_SEARCH, AIR_BOOKING, SPEND, PRESENCE_MOBILITY, COMPETITIVE_BENCHMARK.
### strategic lesson
이 회사는 이미 multi-source destination intelligence + AI actionable insight/agentic layer로 진화 중이다. 단순 dashboard/AI assistant를 우리의 moat로 주장하면 안 된다.

## 3 ForwardKeys
### 공개 input/data architecture
- major GDS, airlines, airports, aviation organisations, seat aggregators etc.
- Actual Air Reservations: major GDS data; published material states history from 2008 and near-real-time update lag.
- journey datasets cover offer/seat capacity → booking/ticket → arriving/total air market → future bookings/forecast.
- nationality is estimated using origin, official-statistics correlation, itinerary, ticket issuing office, length of stay and other profile signals; exact model proprietary.
### forecast disclosed example
Total Air Market forecast uses latest ticketing, scheduled capacity, pre-pandemic route passenger traffic, weighted load factors and nationality shares for short/medium horizon; long-term model adds expert opinions and macro/industry indicators.
### reusable primitive
AIR_SUPPLY, SEARCH_INTENT, ACTUAL_TICKET, FORWARD_BOOKING, ROUTE_ACCESSIBILITY, ORIGIN_DESTINATION, BOOKING_LEAD_TIME, STAY_LENGTH, PARTY/BOOKING_SIZE, NATIONALITY_ESTIMATE, AIR_FORECAST.
### warning
Estimated nationality/Total Air Market are MODEL_DERIVED, not immigration census.

## 4 AirDNA
### publicly observable metrics
OCCUPANCY = booked nights / available nights.
ADR = average daily rate per booked night.
REVPAR = occupancy × ADR.
Seasonality score: based on gap between lowest and highest monthly average revenue over past year, benchmarked against same-country STR markets meeting minimum listing threshold; smaller swing → higher score.
Market Score includes rental demand, revenue growth, seasonality, regulation and investability; exact weighting/proprietary transforms not treated as known.
### reusable primitive
STR_SUPPLY, OCCUPANCY, ADR, REVPAR, REVENUE_GROWTH, SEASONALITY, REGULATION, MARKET_BENCHMARK.

## 5 Tourism Analytics Ontology / Tourism Knowledge Graph
Academic work proposes semi-automatic Tourism Knowledge Graph generation and TAO ontology for heterogeneous tourism information. Public descriptions include lodging facilities, accommodations, amenities, lease-out offerings, destinations and related tourism entities.
### reusable primitive
Do not reinvent ontology blindly. Map our Traveler Lifecycle/Supply/Platform/Money/Trust ontology against TAO/TKG, reuse compatible semantics, extend only for missing Korea-specific, transaction, ground-truth and opportunity concepts.

## Cross-engine conclusions
### Already commoditized / strong existing intelligence
- air supply/search/ticket/forecast
- destination visitation/mobility
- card/destination spend
- accommodation supply/performance
- POI/digital footprint
- review sentiment/topic extraction
- destination benchmarking
- tourism KG foundations

### Do NOT define our moat as
- tourism dashboard
- multi-source data aggregation alone
- sentiment analysis alone
- AI chat over tourism data
- destination benchmarking alone
- basic forecasting alone

### White space to validate/build
1. Cross-engine evidence normalization with measurement/provenance awareness.
2. Traveler lifecycle × supplier × platform × transaction × information × trust graph.
3. Planned vs Actual vs Desired-but-Failed journey states.
4. Real Sellable Supply vs official/visible supply.
5. Ground Intelligence: capacity, willingness, language reality, collaboration, packaging/repricing feasibility.
6. Valuable Missingness / Research Engine: what missing evidence most changes decisions?
7. Cross-domain Gap/Island/Bottleneck/Asymmetry detection.
8. Opportunity → supplier recombination → revalue → experiment → transaction/revenue feedback loop.
9. Explainable opportunity evidence trace from decision back to raw/derived sources.

## Architecture update
Existing Engines/Sources → Evidence Adapter Layer → Canonical Measurement Layer → Temporal Knowledge Graph → Gap/Island/Bottleneck Layer → Ground Validation → Opportunity Hypotheses → Experiment/Transaction → Outcome Feedback → Model Calibration.

## Mathematical policy
KTOF remains PROVISIONAL. Competitor indices are evidence about useful features, not formulas to copy. Exact proprietary weights are UNKNOWN. First build a library of validated primitives and outcome labels; estimate our weights/function only after sufficient Korean longitudinal + ground + transaction data.

## Build/Buy/Connect rule
CONNECT/BUY when a specialist already measures a domain better and licensing/economics permit. BUILD only cross-domain semantics, missingness, ground-truth, opportunity/revalue and proprietary feedback layers that create differentiation.
