# FAILURE JOURNEY Graph V1

## Canonical end-to-end journey
Awareness -> Search -> Discovery -> Understanding -> Compare -> BookStart -> Identity/Account -> Inventory -> Payment -> Confirmation -> RoutePlan -> Transport -> LastMile -> Arrival -> Experience -> AfterSales

Every edge can resolve to SUCCESS, SUCCESS_WITH_FRICTION, FAILED, ABANDONED, SUBSTITUTED or UNKNOWN.

## Failure edge examples
SEARCH -X-> DISCOVERY
DISCOVERY -X-> UNDERSTANDING
UNDERSTANDING -X-> BOOK_START
BOOK_START -X-> INVENTORY
PAY_START -X-> AUTHENTICATION
AUTHENTICATION -X-> AUTHORIZATION
AUTHORIZATION -X-> CONFIRMATION
ROUTE_PLAN -X-> BOARDING
TRUNK_ARRIVAL -X-> LAST_MILE
ARRIVAL -X-> EXPERIENCE_COMPLETION
REFUND_REQUEST -X-> REFUND_COMPLETION

## Required dimensions
traveler_segment
origin_country
journey_stage
object_type
object_id
platform_or_channel
region
failure_code
reported_or_observed
workaround_type
substitute_object
recovery_action
outcome
observed_at
regime_id
confidence

## Core measures
StageFailureRate = FailedAttempts / StageAttempts
AbandonmentRate = AbandonedAttempts / StageAttempts
WorkaroundRate = WorkaroundAttempts / FailedAttempts
RecoveryRate = RecoveredAttempts / FailedAttempts
SubstitutionRate = SubstitutedAttempts / FailedAttempts
ValueAtRisk = FailedAttempts x ExpectedTransactionValue
RecoveredValue = RecoveredAttempts x RealizedTransactionValue

Only calculate rates when denominators and compatible measurement definitions exist.

## Diagnostic objects
FAILURE_BOTTLENECK: one edge has materially higher failure than adjacent comparable edges.
HIDDEN_SUCCESS_COST: high workaround rate among eventual successes.
SUBSTITUTION_LEAKAGE: demand leaves the intended supplier/region/channel after failure.
RECOVERY_OPPORTUNITY: failures are common but recoverable through support, payment bridge, routing or alternate inventory.
LATENT_DEMAND_ISLAND: high intent and available supply coexist with low completion caused by accessibility/friction rather than low demand.

## Joins
SEARCH provides intent/discovery attempts.
BOOK_PAY provides booking/payment attempts.
MOVE provides route/transport attempts.
REAL_SELLABLE_SUPPLY provides commercial-accessibility state.
PAIN_VOC provides reported failure signals.
SATISFACTION provides post-recovery outcomes.
MONEY_FLOW provides value at risk and recovered value.
GROUND and N_TELEMETRY supply missing denominators and reasons.