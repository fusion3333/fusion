# TRAVELER LIFECYCLE VARIABLE ONTOLOGY V1

Date: 2026-08-27
Status: MASTER / ALWAYS-REFERENCE
Scope: 외국인이 해외에서 한국을 처음 인지하는 순간부터 귀국 후 재방문·재구매까지의 전체 관광 생애주기

## 0. 목적
기존 WHO/WHY/WHEN/WHERE/STAY/DO/SPEND/SEARCH/BOOK-PAY/MOVE/PAIN/SATISFACTION 축을 유지하되, 실제 조사와 Graph 구축에서는 한 사람의 Journey를 따라 모든 상태(State), 사건(Event), 의사결정(Decision), 거래(Transaction), 접점(Touchpoint), 제약(Constraint), 공급자(Supplier), 플랫폼(Platform), 비용/수익(Money), 감정/신뢰(Trust), 결과(Outcome)를 연결한다.

핵심 흐름:
`PRE-AWARENESS → AWARENESS → INTEREST → SEARCH → CONSIDERATION → PLAN → BOOK → PAY → PRE-DEPARTURE → DEPARTURE → ARRIVAL → CONNECT → MOVE → STAY → EXPERIENCE → SPEND → PROBLEM/RECOVERY → REVIEW → DEPARTURE-KR → POST-TRIP → REVISIT/REBUY`

---

## 1. Traveler Identity / Context
- nationality
- country_of_residence
- origin_city/region
- language(s)
- age
- gender
- income_band
- disposable_travel_budget
- occupation
- education
- household_type
- life_stage
- prior_Korea_visit_count
- prior_Asia_visit_count
- prior_longhaul_experience
- digital_literacy
- travel_experience_level
- mobility/accessibility_need
- dietary_restriction
- allergy
- religion/cultural_constraint (조사 가능한 공개/집계 수준에서만)
- health/wellness_interest (집계/비식별 수준)
- risk_tolerance
- price_sensitivity
- authenticity_preference
- convenience_preference
- sustainability_preference

## 2. Travel Party / Companion Graph
- solo
- spouse/partner/couple
- friends
- parents+children
- extended_family
- relatives/acquaintances
- coworkers
- school/group
- tour_group
- mixed_group
- party_size
- children_count/age_band
- senior_count
- decision_maker
- payer
- itinerary_planner
- booking_operator
- influencer_within_party
- companion_conflict/constraint

## 3. Pre-Awareness / External Environment
한국을 아직 여행지로 고려하지 않던 상태에서의 외부 변수.
- origin_country_economy
- exchange_rate
- airfare_level
- direct_flight_capacity
- visa/entry_rule
- geopolitical_relation
- safety_perception
- Korea_brand_awareness
- K-content penetration
- Korean_food penetration
- Korean_beauty penetration
- Korean_brand/product exposure
- diaspora/friend network
- school/business ties
- competing_destination attractiveness
- paid_campaign exposure
- earned_media exposure
- news sentiment
- season/holiday calendar at origin

## 4. Awareness Trigger — 한국을 처음/다시 인지한 계기
- K-pop
- drama/movie
- YouTube creator
- TikTok/Instagram/Threads/X/Facebook
- Google/search
- friend/family WOM
- previous visitor WOM
- Korean food
- beauty/fashion
- Korean company/product
- sports/esports
- gaming/webtoon
- news/documentary
- airline campaign
- OTA/editorial
- travel agency
- tourism board campaign
- school/work/business
- event/concert/festival
- medical/wellness interest
- historical/cultural interest
- transit/stopover exposure
- trigger_date
- trigger_strength
- positive/negative sentiment

## 5. Interest / Destination Consideration
- Korea consideration set rank
- competing destinations considered
- primary motivation
- secondary motivations
- expected experience
- perceived price
- perceived safety
- perceived language difficulty
- perceived transport difficulty
- perceived visa difficulty
- perceived uniqueness/authenticity
- intention_to_visit
- target season
- target duration
- initial budget
- desired regions
- desired activities

## 6. Information Search Journey
- first_search_channel
- search_engine
- query_language
- query_terms/topic
- search_frequency
- search_duration_days/weeks
- device
- desktop/mobile/app
- Google/YouTube/SNS/OTA/official site/community/travel agency
- maps used
- content format: video/shorts/blog/review/map/guidebook
- information source trust
- information completeness
- conflicting information encountered
- translation usage
- missing information
- price transparency
- availability visibility
- review visibility
- route/transport visibility
- search abandonment
- search-to-consider transition

## 7. Planning / Itinerary Formation
- trip purpose
- FIT/package/hybrid/airtel
- itinerary builder: self/friend/agency/AI/platform
- planning lead time
- planned arrival/departure dates
- planned nights
- planned cities/regions
- planned sequence of regions
- planned accommodation mix
- planned transport modes
- planned activities/experiences
- planned shopping
- planned food
- planned medical/wellness
- planned daily budget
- contingency_days
- weather sensitivity
- event/festival dependency
- booking flexibility
- cancellation tolerance

## 8. Booking Journey
각 예약을 separate event로 관리.
- product_type: flight/hotel/hanok/guesthouse/experience/rail/bus/car/tour/restaurant/medical/etc
- booking_channel
- supplier_direct/OTA/agency/platform
- booking_date
- lead_time
- compare_count
- quoted_price
- final_price
- taxes/fees
- cancellation_policy
- refundability
- availability
- instant_confirmation
- language_supported
- foreign_card_supported
- identity_verification friction
- account/sign-up friction
- booking_failure_reason
- abandoned_cart
- rebooking
- package components

## 9. Payment / FX / Financial Friction
- payment_method
- credit/debit/mobile wallet/cash/bank transfer
- card_origin_country
- payment_success/failure
- DCC usage
- FX rate
- FX spread
- foreign transaction fee
- PG fee visibility
- deposit/prepay/on-site pay
- refund time
- refund loss
- cash withdrawal
- ATM access
- transport card purchase/top-up
- total financial friction

## 10. Pre-Departure Readiness
- visa/K-ETA/entry requirement
- travel insurance
- SIM/eSIM/pocket Wi-Fi plan
- airport transfer plan
- map/navigation app installed
- translation app installed
- transport apps/accounts
- reservations completed ratio
- remaining unbooked activities
- luggage plan
- weather preparation
- cultural etiquette knowledge
- emergency/safety information awareness

## 11. Departure / Aviation / Gateway
- origin airport
- airline
- direct/connecting
- connection airport
- airfare
- fare class
- baggage allowance
- departure time
- flight duration
- delay/cancellation
- Korea arrival airport/port
- immigration wait
- baggage wait
- customs friction
- airport language/accessibility

## 12. Arrival / First-Hour Experience
- arrival time/day
- airport information access
- SIM/eSIM activation success
- Wi-Fi success
- currency/cash access
- map works/doesn't work
- first transport mode
- airport rail/bus/taxi/rental
- transport ticket purchase friction
- first destination
- first-hour cost
- first-hour time loss
- first pain point
- first trust/satisfaction signal

## 13. Mobility Graph
모든 이동을 edge로 관리.
- origin_place
- destination_place
- datetime
- mode: walk/subway/bus/KTX/rail/taxi/rental/car/ferry/air
- operator/platform
- route
- duration
- wait time
- transfer count
- fare
- payment method
- navigation app
- language friction
- wayfinding failure
- missed service
- luggage burden
- accessibility
- weather impact
- perceived safety
- actual detour

## 14. Stay / Accommodation Graph
- accommodation entity
- type
- district/neighborhood
- nights
- nightly price
- taxes/fees
- booking channel
- room type
- occupancy/party
- check-in friction
- language support
- luggage storage
- breakfast
- amenities
- authenticity
- accessibility
- location convenience
- cleanliness
- service quality
- foreign payment
- satisfaction
- review score
- reason for selection
- reason for dissatisfaction
- accommodation switching

## 15. Activity / Experience Graph
각 Activity/Experience를 event로 저장.
- category
- entity/provider
- region/district
- traditional culture
- hanbok
- hanok
- tea/darye
- food/cooking
- traditional liquor
- craft/pottery/hanji/lacquer/etc
- temple/meditation
- history/heritage
- K-pop/content
- beauty
- Korean medicine/wellness
- shopping
- nature/outdoor
- nightlife
- festival/event
- medical
- guide/tour
- booked/spontaneous
- discovery channel
- booking channel
- price
- duration
- language
- group size
- capacity
- wait
- satisfaction
- authenticity perception
- perceived value
- shareability/social post generation
- repeat/recommend intent

## 16. Food / Restaurant Journey
- cuisine/category
- restaurant/entity
- discovery source
- reservation availability
- queue/wait
- menu language
- allergy/diet information
- ordering friction
- payment
- spend
- satisfaction
- authenticity
- service
- hygiene perception
- review/social share

## 17. Shopping / Retail Journey
- category: beauty/fashion/food/souvenir/craft/electronics/luxury/medical/etc
- store/market
- discovery channel
- product availability
- language
- tax refund
- payment
- duty-free
- delivery/international shipping
- spend
- price comparison with home country
- purchase motivation
- repeat purchase intent
- post-trip repurchase channel

## 18. Spend / Money Flow
모든 거래 이벤트에:
- payer
- payee
- category
- amount KRW
- original currency
- exchange rate
- taxes
- platform commission
- PG/FX fee
- discount/coupon
- refund
- supplier gross revenue
- estimated contribution margin if known
- region where value captured
- leakage outside region/Korea if observable

## 19. Real-Time Decision / Micro-Moments
여행 중 계획 변경을 별도 Event로 관리.
- weather change
- fatigue
- crowding
- sold-out
- recommendation
- social trend
- companion request
- price shock
- navigation failure
- transport disruption
- local event discovery
- spontaneous purchase
- itinerary replacement
- skipped activity
- extra night/early departure

계획(Planned)과 실제(Actual)를 항상 분리한다.

## 20. Pain / Friction / Failure Ontology
- awareness gap
- information gap
- language
- price opacity
- booking
- payment
- cancellation/refund
- navigation
- transport
- luggage
- connectivity/SIM
- accommodation
- food/allergy
- accessibility
- safety
- discrimination/cultural misunderstanding
- queue/crowding
- customer service
- emergency/medical
- tax refund
- shipping
- trust/fraud concern
- platform fragmentation
- account/app fragmentation
- time loss
- monetary loss
- emotional severity
- resolution path
- resolution time
- resolved/unresolved

## 21. Trust Graph
- official certification
- review count/rating
- review recency
- review language
- verified purchase/stay
- influencer credibility
- platform trust
- supplier website quality
- price transparency
- refund clarity
- safety information
- payment security
- authenticity credibility
- trust before purchase
- trust after experience

## 22. Satisfaction / Outcome
- overall satisfaction
- stage-specific satisfaction
- value for money
- expectation gap
- destination satisfaction
- region satisfaction
- supplier satisfaction
- recommendation/NPS-like intent
- revisit intent
- actual revisit when observable
- complaint
- service recovery outcome

## 23. Departure from Korea
- final city
- airport/port
- airport transfer
- departure shopping
- tax refund outcome
- baggage/shipping
- departure friction
- total trip spend
- unused budget
- missed desired experiences
- final impression

## 24. Post-Trip Graph
- review posted
- rating
- platform
- social post
- UGC reach if available
- WOM to friends/family
- complaint/refund continuation
- product repurchase
- K-content consumption after trip
- Korean food/beauty/craft purchase after trip
- revisit search
- revisit booking
- referral generation
- post-trip LTV

## 25. Supply-side Variables — 모든 Journey Node에 연결
- supplier type
- entity identity
- licenses/certifications
- capacity
- seasonality
- opening hours
- price
- cost structure if available
- language capability
- booking capability
- foreign payment
- platform distribution
- Google/maps presence
- OTA presence
- website/SNS
- review/rating
- foreign customer share
- nationality mix
- cancellation/no-show
- operational pain
- willingness to receive foreigners
- willingness to bundle
- willingness to change price/product
- partnership willingness
- international shipping
- supplier digital literacy

## 26. Platform / Intermediary Variables
각 Journey 단계에서 누가 중개하는가를 기록.
- platform/entity
- function: awareness/search/map/booking/payment/mobility/review/support
- market/country coverage
- language coverage
- supplier coverage
- commission
- ad/CAC
- ranking/recommendation exposure
- data ownership
- data portability
- lock-in
- API/accessibility
- refund/support responsibility

## 27. Policy / Infrastructure Variables
- visa/entry policy
- airport capacity
- flight routes/seats
- rail/bus capacity
- tourism budget/campaign
- local regulation
- accommodation regulation
- medical tourism regulation
- payment/FX rules
- tax refund rules
- operating hours
- public Wi-Fi
- multilingual signage
- accessibility infrastructure
- safety/emergency infrastructure

## 28. External Shock/Event Variables
- exchange rate
- inflation
- airfare
- fuel price
- pandemic
- natural disaster
- geopolitical event
- diplomatic relation
- visa change
- airline route opening/closure
- major K-content release
- concert/festival/mega-event
- platform policy change
- economic recession/boom in origin market

## 29. Planned vs Actual vs Counterfactual
동일 변수라도 세 상태를 구분한다.
- planned
- actual
- desired_but_failed

예:
`planned_activity = hanok tea ceremony`
`actual_activity = shopping`
`failure_reason = no English booking / sold out`

이 차이가 가장 중요한 Opportunity evidence 중 하나가 될 수 있다.

## 30. State / Event / Decision / Transaction / Relationship 분리
- STATE: traveler 상태/성향/현재 위치
- EVENT: 검색, 이동, 방문, 리뷰 등 발생 사건
- DECISION: 선택/포기/변경
- TRANSACTION: 예약/결제/환불
- RELATIONSHIP: traveler-companion, traveler-supplier, supplier-platform, place-place 등

Graph에서는 이 구분을 유지한다.

## 31. 핵심 Edge
- EXPOSED_TO
- BECAME_AWARE_OF
- SEARCHED_FOR
- COMPARED
- TRUSTED
- CONSIDERED
- PLANNED
- BOOKED
- PAID
- ARRIVED_AT
- MOVED_TO
- STAYED_AT
- VISITED
- EXPERIENCED
- PURCHASED
- REVIEWED
- RECOMMENDED
- REVISITED
- FAILED_AT
- ABANDONED
- SWITCHED_TO
- INFLUENCED_BY
- TRAVELED_WITH
- DISTRIBUTED_BY
- PAID_COMMISSION_TO
- PROVIDED_BY

## 32. Value Chain Gap Detection Points
각 transition에서 다음을 검사한다.
`Awareness→Search`
`Search→Information`
`Information→Consideration`
`Consideration→Booking`
`Booking→Payment`
`Payment→Arrival`
`Arrival→Mobility`
`Mobility→Stay`
`Stay→Experience`
`Experience→Spend`
`Problem→Recovery`
`Experience→Review`
`Trip→Post-trip commerce/revisit`

각 transition마다:
- drop-off
- time cost
- money cost
- information loss
- trust loss
- language loss
- platform switching
- unavailable supply
- failed transaction
- hidden supply
- supplier value leakage
을 측정 후보로 둔다.

## 33. Source Routing 연결
모든 Variable은 `SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V1.md`를 따른다.
각 Variable/Question별로 O/E/S/R Source Priority Stack을 별도로 만들고 Measurement Type, Provenance, Confidence, UNKNOWN/CONFLICTING 상태를 보존한다.

## 34. Temporal Requirement
가능한 변수는 최소 10년을 확보하고:
`year → quarter → month → season → event window`
로 보존한다.
국가/세그먼트마다 시계열 가능 범위가 다를 수 있으며 임의 보간하지 않는다.

## 35. 최종 분석 목표
이 Ontology가 충분히 채워지면 다음 질문을 할 수 있어야 한다.
- 어느 국가의 어떤 세그먼트가 어떤 계기로 한국을 알고 어떤 경로로 예약하는가?
- 동반형태별로 체류기간, 지역이동, 숙박, 체험, 소비가 어떻게 다른가?
- 계획했지만 실제로 하지 못한 경험은 무엇이며 왜 실패했는가?
- 어떤 공급은 존재하지만 외국인에게 발견/예약/결제되지 않는가?
- 어떤 플랫폼 전환에서 고객/공급자 가치가 가장 많이 유실되는가?
- 특정 환율/직항/K-content/정책 변화가 downstream Journey와 매출에 어떤 연쇄변화를 만드는가?
- 어떤 Gap을 해결하면 고객가치, 공급자매출, 우리 수익이 동시에 증가하는가?

## 36. 최종 모델과의 관계
현재는 최종 수학공식을 확정하지 않는다.
이 Ontology를 이용해 데이터를 충분히 확보·정규화·분석한 후 어떤 변수가 실제로 중요하고 어떤 관계가 선형/비선형/조건부/시차를 가지는지 검증해 최종 Opportunity/Causal 모델을 설계한다.

즉:
`FULL JOURNEY ONTOLOGY → SOURCE PRIORITY → 10Y+ DATA → TEMPORAL GRAPH → RELATIONSHIP/CAUSAL ANALYSIS → GAP/ISLAND/BOTTLENECK → FINAL MATHEMATICAL MODEL → BUSINESS/REVENUE`
