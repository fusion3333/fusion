# FAILURE JOURNEY — L1 EVIDENCE BATCH M
Date: 2026-08-27
Status: ACTIVE

## Principle
Successful-trip statistics systematically hide unmet demand. Preserve failed attempts as first-class graph events.

Canonical failure edges:
`AWARE -X-> SEARCH`
`SEARCH -X-> DISCOVER`
`DISCOVER -X-> UNDERSTAND`
`UNDERSTAND -X-> BOOK_ATTEMPT`
`BOOK_ATTEMPT -X-> BOOK_SUCCESS`
`PAY_ATTEMPT -X-> PAY_SUCCESS`
`NAV_INTENT -X-> ACTUAL_PRESENCE`
`ARRIVAL -X-> EXPERIENCE_COMPLETION`
`PROBLEM -X-> RECOVERY`

## O — Official / regulator evidence
1. Seoul foreign-tourist taxi QR complaints: June-Dec 2025, 487 complaints; unfair fare most frequent; 8 violations confirmed. Reported pain and verified violation are separate measurements.
   https://english.seoul.go.kr/seoul-cracks-down-on-taxi-overcharging-of-foreigners-with-english-receipts-and-other-service-improvements/
2. Seoul multilingual taxi QR complaint system targets overcharge, refusal and meter violations.
   https://english.seoul.go.kr/seoul-simplifies-taxi-complaint-reports-for-international-tourists-with-qr-codes/
3. KTO/MCST barrier and foreign-tourist survey outputs are source candidates for stated obstacles; denominators must be checked before rates are derived.

## E — Enterprise failure surfaces
- OTA cancellation/refund/help flows
- payment processor authorization/decline and 3DS/authentication logs
- transport/app onboarding and foreign-card compatibility
- search-to-book funnel analytics
Public help pages prove that friction states exist but usually do not expose denominators.

## S — VOC discovery
Recent KoreaTravel discussions repeatedly surface foreign-card/Tmoney top-up incompatibility, app onboarding, cash-only recharge, late-arrival access and card-brand inconsistency. Treat as SIGNAL/VOC only, never prevalence.

## R — Research
Use e-commerce/travel abandonment, payment friction, service-recovery and choice-friction studies to design failure taxonomy and denominator requirements.

## G — Ground
Traveler intercept interviews at airport/rail/last-mile and supplier interviews to identify attempted-but-failed experiences.

## N — Operational telemetry required
`search_event`, `result_view`, `supplier_view`, `book_start`, `book_error`, `book_abandon`, `pay_start`, `pay_decline`, `pay_success`, `refund_start`, `cancel`, `route_search`, `ride_request`, `match_fail`, `trip_cancel`, `experience_no_show`, `support_contact`, `recovery_success`.

## Failure reason taxonomy V1
`LANGUAGE`, `ACCOUNT_IDENTITY`, `FOREIGN_CARD`, `AUTHENTICATION`, `FX_FEE`, `PRICE_SHOCK`, `SOLD_OUT`, `CAPACITY`, `NO_INSTANT_CONFIRM`, `CANCELLATION_POLICY`, `TRUST`, `MAP_DISCOVERY`, `ROUTE_COMPLEXITY`, `LAST_MILE`, `LUGGAGE`, `OPERATING_HOURS`, `ACCESSIBILITY`, `SUPPLIER_UNWILLING`, `REGULATION`, `UNKNOWN`.

## Completion requirement
A failure rate is valid only when numerator and denominator refer to the same funnel, period, population and channel. Complaint count alone is not a failure rate.
