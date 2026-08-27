# SATISFACTION Graph V1

## Canonical nodes
TravelerSegment -> Expectation -> JourneyExperience -> AttributeEvaluation -> OverallSatisfaction -> RecommendationIntent -> RevisitIntent

Behavioral extension:
RecommendationIntent -> Referral/Share/Review
RevisitIntent -> SearchAgain -> BookAgain -> ReturnArrival

Failure/recovery extension:
FrictionEvent -> Pain -> Complaint? -> RecoveryAction -> RecoveryOutcome -> Satisfaction

## Edge rules
- Never create SATISFACTION -> ACTUAL_REVISIT as a deterministic edge.
- Never equate review rating with population satisfaction.
- Preserve survey wave/method/question wording as Measurement metadata.
- Preserve origin, segment, purpose, region, activity and time context.
- Complaint and pain are separate nodes; no-complaint cannot imply satisfied.

## Diagnostic candidates (not KTOF weights)
ExpectationGap = perceived experience relative to expectation/reference point.
AttributeDragCandidate = high overall journey importance + low attribute satisfaction.
RecoveryValueCandidate = failure cases where recovery materially improves satisfaction/retention.
AdvocacyLeakCandidate = high satisfaction but weak recommendation/review/referral behavior.
LoyaltyLeakCandidate = high stated revisit intent but low revealed repeat behavior.

## Cross-axis joins
WHY supplies expectation/motivation.
PAIN_VOC supplies friction and complaint evidence.
DO/STAY/MOVE/BOOK_PAY supply consumed journey edges.
SPEND supplies economic outcome.
N_TELEMETRY supplies revealed advocacy/repeat behavior.
