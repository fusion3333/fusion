# FAILURE JOURNEY Evidence Completion — 2026-08-28

## Scope
FAILURE_JOURNEY captures attempted-but-not-completed traveler states across discovery, booking, payment, movement, consumption and after-sales. Public data mainly observes complaints, policy changes and successful transactions; true failure rates require denominators from private/owned telemetry.

## Verified public evidence
- Seoul Metropolitan Government reported that from Jun–Dec 2025 its foreigner taxi QR complaint system received 487 complaints; investigations confirmed 8 violations. This proves reported pain, investigation and verified violation must be stored as separate states.
- Seoul also reported 7,435 foreign-tourist taxi interviews in 2024 with 345 violations identified, and 2,901 interviews through end-May 2025 with 143 identified violations. These are monitored/interviewed populations, not all taxi users.
- MOLIT announced in Jul 2024 that overseas-card payment for intercity-bus on-site ticketing would be expanded nationwide, with mobile reservation/payment expansion following in Aug 2024. The policy itself is evidence of a prior transaction-access gap and a dated regime change.
- KTO's 2026 transportation guide shows stage-specific differences: foreign-issued cards are accepted in several ticketing/booking contexts, while ordinary Tmoney purchase/top-up remains cash-only and direct foreign-card tap is unavailable for several transit uses. Therefore payment accessibility must be modeled by mode x channel x stage x date, not as one national boolean.

## Measurement boundaries
Complaint != failed journey count.
Verified violation != total pain.
Policy improvement != measured conversion gain.
Available payment method != successful authorization.
Successful final trip != frictionless journey.
Cancellation != failure unless reason and intent are known.
Substitution can be an observable consequence of failure but is not proof of its cause.

## Required failure states
NO_RESULT
NOT_UNDERSTOOD
NO_TRUST
NO_INVENTORY
SOLD_OUT
IDENTITY_REQUIRED
DOMESTIC_PHONE_REQUIRED
ACCOUNT_REQUIRED
FOREIGNER_INELIGIBLE
PRICE_SHOCK
FEE_SHOCK
PAYMENT_UNSUPPORTED
AUTHENTICATION_FAILED
AUTHORIZATION_DECLINED
CONFIRMATION_FAILED
ROUTE_NOT_FOUND
TRANSFER_FAILED
LAST_MILE_FAILED
NO_DISPATCH
CAPACITY_FAILED
CLOSED
LANGUAGE_FAILED
ACCESSIBILITY_FAILED
LUGGAGE_FRICTION
REFUND_FAILED
REFUND_DELAYED
SUPPORT_FAILED
UNKNOWN

## Public-evidence ceiling
Public sources are sufficient to establish many failure mechanisms and selected complaint/violation counts, but not population conversion-loss rates. Denominator-quality data belongs to partner dashboards, Ground interviews and N telemetry.