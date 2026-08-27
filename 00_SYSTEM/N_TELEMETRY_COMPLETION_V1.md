# N-TELEMETRY — Completion V1
Decision: EVENT_SCHEMA_LOCKED_INSTRUMENTATION_PENDING
Architecture readiness: 0.95
Engine-ready: 0.52

## Purpose
Create the missing denominators for the traveler journey and reveal attempted-but-failed demand.

## Canonical event chain
impression -> click -> search -> result_view -> detail_view -> compare -> book_start -> inventory_check -> identity_start/result -> payment_start/result -> booking_confirmed -> route_open -> arrival/checkin -> experience_started/completed -> refund_start/result -> review/referral -> repeat_search/rebook.

## Required event fields
event_id, anonymous_user_id, session_id, journey_id, timestamp, origin_market, language, device, acquisition_source, campaign/referrer, supplier_id, product_id, region, stage, outcome, reason_code, channel, price_seen, currency, fee_seen, experiment_id, consent_state.

## Failure reason taxonomy
no_result, language, trust, inventory, sold_out, identity, domestic_phone, account, foreigner_ineligible, price_shock, fee_shock, payment_unsupported, auth_failed, authorization_declined, confirmation_failed, route, transfer, last_mile, capacity, closed, accessibility, refund, support, unknown.

## Derived denominators
CTR=click/impression; detail_rate=detail_view/result_view; book_start_rate=book_start/detail_view; payment_start_rate=payment_start/book_start; payment_success=booking_confirmed/payment_start; completion=experience_completed/booking_confirmed; stage_failure=failed_attempts/stage_attempts; workaround_recovery=recovered/failed; repeat=rebook/eligible prior customers.

## Governance
Pseudonymous IDs; consent-aware analytics; no raw card credentials; minimize IP/device fingerprinting; retention policy; access tiers; deletion path; bot/internal traffic filters; schema versioning. Server-side booking/payment outcomes should reconcile client events.

## Attribution
Store first-touch, last-touch and path. Do not declare causality from attribution alone. Preserve cross-device unknowns.

## Gate
Schema is locked. Engine readiness rises only after live instrumentation, QA, denominator stability and reconciliation with supplier/platform transactions.