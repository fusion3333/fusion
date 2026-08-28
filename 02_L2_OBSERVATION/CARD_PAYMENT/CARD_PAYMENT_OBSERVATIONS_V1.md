# CARD & PAYMENT — L2 OBSERVATIONS V1

## O1. Payment data are transaction sensors, not a tourism census
The strongest card datasets reveal observed behavior with high temporal granularity, but each has a portfolio/network/processor/instrument universe. The engine must preserve that denominator.

## O2. Korea already has an official foreign-card tourism-consumption layer
KTO Tourism Data Lab exposes foreign credit-card tourism consumption by time, region, industry and country views. It also exposes limited foreign simple-payment data, with an explicit warning that only part of the market is observed.

## O3. Taiwan provides unusually rich public inbound transaction structure
NCCC publishes 52 monthly downloadable foreign-card CSV items spanning total amount/count, merchant categories, regions and EC. This supports competitor benchmarking at a grain that many markets do not publish openly.

## O4. Thailand provides a symmetric inbound/outbound cross-border payment sensor
BOT PS_PT_016 and PS_PT_017 expose foreign payment activity accepted in Thailand and Thai cards used abroad from 2016, with POS/online/instrument distinctions. This is highly useful for decomposing physical-vs-online cross-border payment behavior, but not tourism-only behavior.

## O5. Hong Kong and Malaysia are useful origin-market outbound sensors with different grains
HKMA provides quarterly Hong Kong-issued overseas credit-card spend/count. BNM provides monthly Malaysian-issued Transactions Abroad, explicitly including online/offline foreign merchants and foreign ATMs. Neither should be interpreted as clean destination-specific tourism spend without further evidence.

## O6. Payment acceptance cost is itself an opportunity variable
RBA publishes average merchant fees including international-card fees. Cross-border acceptance can therefore be modeled not only as a traveler-friction variable but also as a supplier economics/cost variable.

## O7. Enterprise networks can fill major public-data gaps but are not free/public census data
Visa Spend Signals can provide granular visitor-origin and destination spend insights but is restricted. Mastercard Tourism Insights/Economics Institute provides powerful aggregated travel/payment intelligence but commercial/report access does not create an unrestricted raw public panel.

## O8. The key opportunity is the gap between demand and monetization
When demand/search/arrival signals rise but observed transaction value, card-present share, foreign-payment acceptance or supplier conversion remains weak, the engine can flag a PAYMENT_CONVERSION_GAP candidate. Causality requires controls and/or intervention evidence.

## Diagnostic candidates
- PAYMENT_ACCESS_GAP: product exists/bookable but foreign payment path absent or fails
- ONLINE_OFFLINE_LEAKAGE: high foreign online spend with weak destination-local card-present capture
- LOW_TICKET_HIGH_FREQUENCY: many transactions but low ticket size in a category/region
- HIGH_TICKET_LOW_DISTRIBUTION: valuable category with weak global payment/distribution coverage
- ACCEPTANCE_COST_FRICTION: high international acceptance cost plausibly suppressing supplier adoption
- ORIGIN_PAYMENT_PROPENSITY_GAP: strong outbound payment propensity from an origin but weak Korea capture versus competitors

All are hypotheses until denominators and counterfactuals are materialized.
