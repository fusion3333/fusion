# CANONICAL MEASUREMENT REGISTRY V1

Date: 2026-08-27
Status: MASTER / MEASUREMENT CONTRACT
Purpose: 서로 다른 기관/기업/플랫폼이 같은 단어를 다르게 측정하는 문제를 막기 위한 canonical measurement 계약.

## 1. Observation contract
모든 관측값은 최소 다음 구조를 가진다.

`Observation = {metric_id, value, unit, measurement_type, population, geography, time_start, time_end, frequency, source_id, source_method, definition_version, confidence, provenance, raw_or_derived}`

값만 저장하지 않는다.

## 2. Canonical measurement families

### TRAVELER_VOLUME
- arrivals_admin: 출입국 행정기록 기반 입국자
- visitors_survey_estimate: 표본조사 기반 추정
- air_passengers: 항공여객/예약 기반
- mobile_visitors_estimate: 이동통신 기반 추정
절대 상호대체하지 않는다.

### DEMOGRAPHY
- nationality_admin
- residence_country
- nationality_model_derived
- age_survey
- gender_survey
- party_type_survey
- party_size_booking/ground

### AWARENESS/INTEREST
- awareness_trigger_survey
- destination_consideration_survey
- search_interest_index
- social_attention_signal
- campaign_exposure
이들은 실제 방문자수와 동일하지 않다.

### AIR_ACCESS
- scheduled_seats
- operated_seats/flights
- air_searches
- bookings
- tickets
- arrivals
- fare
- load_factor
각 funnel 단계 분리.

### MOBILITY
- mobile_presence_estimate
- navigation_destination_search
- rail_boarding
- bus_boarding
- taxi_trip
- itinerary_transition_derived

### STAY
- registered_lodging_supply
- active_listing_supply
- available_nights
- booked_nights
- occupancy
- ADR
- RevPAR
- length_of_stay_survey
- length_of_stay_booking
AirDNA 등 외부 정의를 사용할 때 source definition/version을 보존.

### ACTIVITY/EXPERIENCE
- planned_activity
- attempted_activity
- booked_activity
- experienced_activity
- desired_but_failed_activity
- satisfaction_activity
계획/시도/실행/실패를 절대 하나로 합치지 않는다.

### SPEND
- survey_spend
- card_spend
- cash_estimate
- taxfree_spend
- transaction_count
- average_ticket
- spend_per_visitor
- spend_per_day
coverage population을 반드시 기록.

### SUPPLY
- registered_supply
- operating_supply
- discoverable_supply
- language_accessible_supply
- bookable_supply
- payable_supply
- willing_supply
- capacity_available_supply
- recombinable_supply
- real_sellable_supply

### DIGITAL ACCESS
- search_presence
- map_presence
- official_site_presence
- foreign_language_presence
- OTA_presence
- instant_booking_presence
- review_presence
- price_visibility
- route_visibility
- payment_visibility

### FRICTION
- information_failure
- language_failure
- discovery_failure
- comparison_failure
- booking_failure
- payment_failure
- mobility_failure
- service_failure
- refund_failure
- recovery_success
각 failure에 stage, reason, cost, delay, outcome을 연결.

### SENTIMENT/SATISFACTION
- survey_satisfaction
- review_rating
- review_sentiment_model
- recommendation_intent
- revisit_intent
- actual_revisit
Sentiment engine의 proprietary score와 survey satisfaction을 동일시하지 않는다.

### MONEY FLOW
- gross_booking_value
- supplier_revenue
- OTA_commission
- PG_fee
- FX_cost
- tax
- refund_cost
- CAC
- contribution_margin
- net_margin
공개값/계약값/추정값을 구분.

## 3. Derived constructs — 아직 공식 확정 금지
다음은 canonical raw metric이 아니라 `DERIVED / PROVISIONAL` construct다.
- Demand
- Connectivity
- Information Asymmetry
- Island
- Bottleneck
- Valuable Gap
- Revalue Potential
- Real Sellable Supply composite
- Lost Demand composite
- Opportunity/KTOF

각 construct는 constituent measurements와 provenance를 역추적 가능해야 한다.

## 4. External method reuse
- 외부 업체가 공개한 formula/definition은 source-specific metric으로 먼저 저장한다.
- 동일 명칭이어도 정의가 다르면 별도 metric_id를 부여한다.
- proprietary weight/algorithm은 `UNKNOWN_PROPRIETARY`.
- 추정 복원값을 공식값처럼 저장하지 않는다.

## 5. Time/methodology breaks
설문 문항, 표본, 카드 coverage, 이동통신 extrapolation, 행정분류, 플랫폼 수집정책 등이 바뀌면 `definition_version`과 `methodology_regime`을 변경한다. 단절된 시계열을 자동 연결하지 않는다.

## 6. Knowledge Graph minimum nodes
`TravelerSegment, OriginMarket, Trip, Itinerary, Segment, Destination, Place, Supplier, Product, Platform, SearchEvent, BookingAttempt, PaymentAttempt, MovementEvent, ExperienceAttempt, Transaction, Review, Failure, Recovery, SupplierState, Observation, Source, Methodology, EventRegime, OpportunityHypothesis, Experiment, Outcome`

## 7. Minimum critical edges
- `TRIGGERED_BY`
- `SEARCHED_FOR`
- `CONSIDERED`
- `PLANNED`
- `ATTEMPTED`
- `FAILED_BECAUSE`
- `BOOKED_VIA`
- `PAID_VIA`
- `MOVED_TO`
- `STAYED_AT`
- `EXPERIENCED`
- `SPENT_AT`
- `REVIEWED`
- `DISCOVERABLE_ON`
- `BOOKABLE_ON`
- `PAYABLE_BY`
- `WILLING_TO_SELL`
- `HAS_CAPACITY`
- `RECOMBINABLE_WITH`
- `SUPPORTED_BY_EVIDENCE`
- `CONFLICTS_WITH`
- `VALIDATED_BY_GROUND`
- `TESTED_BY_EXPERIMENT`
- `PRODUCED_OUTCOME`

## 8. 핵심 원칙
`Same label ≠ Same measurement.`
`Missing ≠ Zero.`
`Intent ≠ Behavior.`
`Booking ≠ Arrival.`
`Registered supply ≠ Sellable supply.`
`Review sentiment ≠ Population satisfaction.`
`Correlation ≠ Causality.`
`Model-derived ≠ Administrative truth.`
