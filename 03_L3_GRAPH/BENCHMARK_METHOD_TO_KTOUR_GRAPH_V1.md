# BENCHMARK METHOD -> KOREA TOUR GRAPH V1

Date: 2026-08-27
Status: L3 GRAPH DESIGN

## Graph state rule
Every edge measurement carries:
- observation_status: OBSERVED | INFERRED | PROXY | IMPUTED | UNKNOWN
- measurement_regime: ACTUAL | SEARCH_INTENT | OTB | FORECAST | NOWCAST
- source_class: OFFICIAL | ENTERPRISE | SOCIAL | RESEARCH | GROUND
- period/frequency
- geography
- segment
- definition/version
- confidence

## Benchmark-derived edge primitives

### Mabrian/Data Appeal
HUMAN/CONTENT_SIGNAL -> SEARCH_INTENT
SEARCH_INTENT -> FLIGHT_SEARCH
FLIGHT_SEARCH -> BOOKING_SIGNAL
AIR_CAPACITY + AIR_PRICE -> BOOKING_CONTEXT
MOBILE_PRESENCE -> PLACE_VISIT
TRANSACTION -> SPEND
REVIEW/SOCIAL -> PERCEPTION/SATISFACTION

Use: cross-sensor overlay. Do not collapse these edges into a single demand score before empirical calibration.

### ForwardKeys
TRIP_ORIGIN + ITINERARY + TICKETING_CONTEXT + STAY_LENGTH + OFFICIAL_CALIBRATION -> INFERRED_TRAVELLER_PROFILE
FULL_ITINERARY -> MULTISTOP_DESTINATION_PATH

Use: template for latent-variable inference. Resulting node/edge is INFERRED, never OBSERVED.

### Amadeus
FUTURE_AIR_BOOKING -> EXPECTED_ARRIVAL
HOTEL_OTB -> EXPECTED_STAY_DEMAND
CONTENT_EVENT -> FUTURE_AIR_BOOKING / HOTEL_OTB [hypothesis edge until tested]

Use: lead-lag bridge between cultural/search signals and realized travel.

### AirDNA
LISTING -> AVAILABLE_NIGHT
AVAILABLE_NIGHT -> BOOKED_NIGHT
LISTING -> BLOCKED_NIGHT
BOOKED_NIGHT / AVAILABLE_NIGHT -> OCCUPANCY
BOOKED_NIGHT + RATE + FEE_DEFINITION -> REVENUE
MULTI_OTA_LISTINGS -> UNIQUE_SUPPLY_ENTITY [entity-resolution edge]
COMPARABLE_SET + HISTORY -> REVENUE_POTENTIAL [INFERRED/FORECAST]

Generalized experience-supply analog:
REGISTERED_SUPPLIER -> OPERATING
OPERATING -> DISCOVERABLE
DISCOVERABLE -> LANGUAGE_READY
LANGUAGE_READY -> BOOKABLE
BOOKABLE -> PAYABLE
PAYABLE -> CAPACITY_READY
CAPACITY_READY -> SOLD

## Failure edges to add explicitly
SEARCH_INTENT -X-> DISCOVERY
DISCOVERY -X-> UNDERSTANDING
UNDERSTANDING -X-> BOOKING_ATTEMPT
BOOKING_ATTEMPT -X-> SUCCESSFUL_BOOKING
PAYMENT_ATTEMPT -X-> SUCCESSFUL_PAYMENT
NAVIGATION_INTENT -X-> ACTUAL_PRESENCE
ARRIVAL -X-> EXPERIENCE_COMPLETION

Each -X-> edge requires a reason taxonomy rather than a generic failure flag: language, identity/account, availability, price, trust, foreign-card acceptance, FX/fee, refund policy, transport, last-mile, luggage, hours, capacity, sold-out, regulation, supplier unwillingness, unknown.

## Strategic graph boundary
External specialist sensors feed the graph; they do not own the graph. Korea Tour's core layer is the explainable linkage across motive -> discovery -> planning -> transaction -> movement -> experience -> outcome, including missing/failure edges and real-sellable-supply states.
