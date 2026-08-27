# SATISFACTION Evidence Completion — 2026-08-28

## Scope
SATISFACTION is not a star-rating field. It is the post-consumption evaluation layer connecting pre-trip expectation and actual experience to recommendation/revisit/revealed future behavior.

Canonical chain:
Expectation -> Experience -> Attribute Evaluation -> Overall Satisfaction -> Recommendation Intent -> Revisit Intent -> Revealed Advocacy/Revisit

## Tier-A official backbone
KTO/KCTI 2025 Foreign Tourist Survey explicitly measures overall satisfaction, item-level satisfaction, revisit intention and recommendation intention after the trip. The survey is conducted monthly across the year. 2025 final report and raw data/codebook are publicly listed by Tourism Data Lab.

This allows traveler-level linkage with WHO, WHY, search, activities, stay, spend and other survey variables after codebook harmonization.

## Measurement separations
- Satisfaction != Recommendation intent.
- Satisfaction != Revisit intent.
- Revisit intent != actual revisit.
- Rating != satisfaction of the whole visitor population.
- High overall satisfaction does not imply every journey edge worked well.
- Complaint absence != satisfaction.
- Satisfaction after workaround can coexist with substantial friction.

## Research primitive
Peer-reviewed Korea tourism research supports expectation/value/service-quality -> satisfaction -> revisit/recommendation as a useful mechanism family. Recent research using Korean inbound-tourist survey data also indicates that satisfaction-spend relationships can be nonlinear/reference-dependent; therefore linear causal assumptions are prohibited without estimation.

## Required decomposition
SAT attributes should be aligned to journey nodes where possible: information, entry, booking, payment, transport, accommodation, food, shopping, attractions/activities, language, service, price/value, safety, cleanliness, authenticity, accessibility, overall.

## Remaining non-public layer
Actual recommendation/referral, repeat booking, repeat arrival, review posting, churn after dissatisfaction, service recovery, expectation baseline, and counterfactual destination choice require G/N or platform first-party data.

## Lock decision
Public source discovery is sufficient for canonical modeling. Remaining work is historical raw harmonization, attribute-to-journey mapping and stated-to-revealed behavior telemetry.
