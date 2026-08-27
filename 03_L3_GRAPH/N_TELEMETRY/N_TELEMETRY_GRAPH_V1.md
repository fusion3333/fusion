# N-Telemetry Graph V1
AnonymousTraveler -> Session -> Journey -> Event -> StageOutcome.
Event -> Supplier/Product/Region/Channel/Price/FailureReason/Experiment.

N-Telemetry is the behavioral denominator layer. It joins SEARCH, BOOK_PAY, MOVE, DO, SPEND, PAIN, SATISFACTION and FAILURE_JOURNEY.

Counterfactual candidates require an observed attempt plus a reason/recovery/substitution signal; mere page exit is not automatically failure.

Quality checks: event uniqueness, monotonic timestamps, impossible-transition detector, transaction reconciliation, missing reason rate, bot filter, consent-state coverage, version compatibility.