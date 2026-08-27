# COMPETITIVE DESTINATION MIRROR — L2 OBSERVATIONS V1
Date: 2026-08-28

## Observation 1 — A multi-destination official panel is feasible
Japan, Taiwan, Thailand, Singapore and Vietnam all expose official inbound statistics with origin-country cuts, and several expose monthly resolution. This is sufficient to build a first comparable origin×destination×month panel after definition harmonization. Hong Kong is officially observable but historical extraction needs a separate ingestion step.
Confidence: HIGH.

## Observation 2 — Comparator destinations differ in measurement richness
Taiwan and Singapore expose more than arrivals: Taiwan also exposes purpose, age, mode/port, length of stay and expenditure; Singapore exposes residence, age/sex, length of stay and receipts. Japan adds booking method, visit frequency, travel type and length of stay through JNTO statistics. Therefore Korea can be benchmarked on behavior, not merely headcount.
Confidence: HIGH.

## Observation 3 — Thailand provides a directly downloadable monthly nationality panel
Thailand MOTS CKAN exposes year×month×nationality foreign arrivals and a downloadable 2015-01 to 2023-12 CSV, making it a high-value competitor time-series source.
Confidence: HIGH.

## Observation 4 — Enterprise search sensors reveal choice momentum earlier than arrivals but are platform-conditioned
Agoda publishes accommodation-search rankings and growth for Korea and competing Asian destinations. Mastercard adds transaction-derived destination momentum. These can act as earlier or orthogonal sensors, but cannot substitute for official arrivals because platform user mix and measurement definitions differ.
Confidence: HIGH.

## Observation 5 — Secondary-destination competition matters
Enterprise evidence indicates growing search share for secondary Asian destinations and cites access/value/local culture as stated decision factors. Korea's competitive set therefore cannot be only country-level; Seoul competes with Tokyo/Bangkok, while Busan/Jeju/Gyeongju and regional traditional experiences may compete with secondary cities/islands on different attributes.
Confidence: MEDIUM-HIGH.

## Observation 6 — Destination substitution must not be inferred from inverse movements alone
If origin X arrivals to Japan rise while Korea falls, possible common causes include outbound market growth, airfare, currency, visa, holiday timing or unrelated destination shocks. A substitution edge requires choice-set evidence or controlled temporal analysis.
Confidence: HIGH methodological rule.

## Derived research objects
- `DestinationShare(origin,destination,t)` after comparability audit.
- `RelativeDestinationMomentum` using separate official/search/booking/spend sensors, never collapsed without provenance.
- `KoreaUnderpenetrationCandidate`: high outbound propensity + measurable Korea interest + lower realized Korea share than close substitutes.
- `CompetitiveFrictionGap`: Korea underperformance aligned with worse access/price/visa/payment/mobility/value proxies.
- `SegmentSpecificCompetitorSet`: competitor graph conditional on origin, WHO, WHY and trip purpose.

## Not yet observations
- Korea is losing travelers to Japan/Thailand: NOT ESTABLISHED.
- Search growth causes arrival growth: NOT ESTABLISHED.
- A single Asian competitor set applies to all travelers: REJECTED.
