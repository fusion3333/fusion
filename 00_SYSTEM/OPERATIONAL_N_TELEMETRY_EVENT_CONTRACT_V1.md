# OPERATIONAL / N-TELEMETRY EVENT CONTRACT V1
Date: 2026-08-27
Status: ACTIVE SPEC

## Purpose
Create first-party/partner denominators for the failures that public tourism statistics cannot measure.

## Event envelope
Every event should carry where lawful and consented:
`event_id`, `event_type`, `event_time`, `session_id`, `anonymous_user_id`, `origin_market`, `language`, `device`, `channel`, `journey_stage`, `supplier_id`, `place_id`, `product_id`, `currency`, `amount`, `status`, `failure_code`, `source_system`, `consent_scope`, `schema_version`.

Do not collect unnecessary identity data. Prefer pseudonymous/aggregated analysis and data minimization.

## Search/discovery
`SEARCH_STARTED`
`SEARCH_RESULT_SHOWN`
`RESULT_CLICKED`
`SUPPLIER_VIEWED`
`MAP_ROUTE_REQUESTED`
`NO_RESULT`

## Booking
`BOOK_STARTED`
`DATE_SELECTED`
`PARTY_SELECTED`
`AVAILABILITY_FAILED`
`BOOK_VALIDATION_ERROR`
`BOOK_ABANDONED`
`BOOK_CONFIRMED`

## Payment
`PAY_STARTED`
`PAY_METHOD_SELECTED`
`AUTH_STARTED`
`PAY_DECLINED`
`PAY_AUTH_FAILED`
`FX_SHOWN`
`FEE_SHOWN`
`PAY_ABANDONED`
`PAY_SUCCESS`
`REFUND_REQUESTED`
`REFUND_SUCCESS`
`CHARGEBACK`

## Move
`ROUTE_SEARCHED`
`TICKET_SEARCHED`
`TICKET_BOOK_STARTED`
`TICKET_BOOK_FAILED`
`RIDE_REQUESTED`
`DRIVER_MATCH_FAILED`
`RIDE_CANCELLED`
`TRIP_STARTED`
`TRIP_COMPLETED`
`LAST_MILE_HELP_REQUESTED`

## Experience
`EXPERIENCE_CHECKIN`
`NO_SHOW`
`EXPERIENCE_STARTED`
`EXPERIENCE_COMPLETED`
`SERVICE_RECOVERY_STARTED`
`SERVICE_RECOVERY_SUCCESS`

## Supplier
`INVENTORY_OPENED`
`INVENTORY_CLOSED`
`CAPACITY_REJECTED`
`FOREIGNER_REQUEST_ACCEPTED`
`FOREIGNER_REQUEST_REJECTED`
`PAYOUT_ISSUED`

## Denominator examples
Payment decline rate = PAY_DECLINED / PAY_STARTED for matched market/channel/time/product.
Booking abandonment = BOOK_ABANDONED / BOOK_STARTED after deduping retries.
Discovery conversion = RESULT_CLICKED / SEARCH_RESULT_SHOWN.
Last-mile completion = TRIP_COMPLETED / route attempts for the same segment definition.

These are definitions, not current observed values.

## Failure codes
Reuse master taxonomy: LANGUAGE, ACCOUNT_IDENTITY, FOREIGN_CARD, AUTHENTICATION, FX_FEE, PRICE_SHOCK, SOLD_OUT, CAPACITY, NO_INSTANT_CONFIRM, CANCELLATION_POLICY, TRUST, MAP_DISCOVERY, ROUTE_COMPLEXITY, LAST_MILE, LUGGAGE, OPERATING_HOURS, ACCESSIBILITY, SUPPLIER_UNWILLING, REGULATION, UNKNOWN.

## Partner data asks
For GDS/OTA/PG/transport partners request only aggregate or pseudonymous fields necessary for funnel measurement: counts of starts/success/failure by origin-country proxy, card market/brand where lawful, time, product/route, reason code, and channel.

## Privacy / governance
- consent and legal basis required
- no secret credential/payment data in analytics
- tokenize payment references
- retention limits
- access logging
- country-specific privacy review
- separate raw operational store from analytic aggregate tables

## Strategic role
N-Telemetry is not a substitute for official statistics. It supplies the missing denominators for `Desired-but-Failed`, `LostTransaction`, `PaymentAccessIsland`, `MobilityConversionGap` and closed-loop opportunity validation.
