# ISLAND / BOTTLENECK / ASYMMETRY — Completion V1
Decision: DIAGNOSTIC_ENGINE_SPEC_LOCKED_EMPIRICAL_CALIBRATION_PENDING
Architecture readiness: 0.96
Engine-ready: 0.67

## Principle
Detect broken value-chain edges before scoring businesses.

## Island families
Discovery Island: quality/supply exists but target traveler cannot find it.
Language Island: found but not understandable.
Booking Island: understood but not transactably bookable.
Payment Island: bookable but target payment path fails.
Mobility Island: desired/booked but physical access collapses.
Capacity Island: sellable demand exceeds usable capacity.
Distribution Island: sellable asset has weak relevant-platform reach.
Data Island: decision-critical information exists but is inaccessible/fragmented.
Retention Island: high traveler spend with low supplier/local retained value.

## Bottleneck definition
For edge e in a journey, estimate transition p_e only when denominator exists. Candidate bottleneck severity uses loss (1-p_e), traffic exposed, economic value at risk, persistence, and solvability. Do not rank by loss rate alone.

## Asymmetry families
information, language, price, inventory, quality, trust/review, platform visibility, payment, mobility, bargaining/power, data access.

## Diagnostic invariants
High gap without demand is not opportunity. High demand without solvability is not near-term opportunity. Correlated friction is not causal bottleneck. Platform absence may be deliberate direct-channel strategy. Missing data is uncertainty, not zero.

## Evidence threshold
Candidate -> corroborated -> validated. Corroborated requires >=2 independent evidence families or one direct denominator source. Validated requires outcome/intervention or sufficiently strong behavioral/transaction evidence.

## Output
GapObject with entity/segment/time/region/stage, demand evidence, supply evidence, transition denominator, friction evidence, economics, uncertainty, provenance, status.