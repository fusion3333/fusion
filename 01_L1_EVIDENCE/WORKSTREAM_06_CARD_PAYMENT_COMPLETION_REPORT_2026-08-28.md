# WORKSTREAM 06 — CARD & PAYMENT INTELLIGENCE COMPLETION REPORT
Date: 2026-08-28

## Final decision
PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_COMMERCIAL_AND_MICRODATA_LIMITS

## What is now locked
1. Canonical payment chain from origin/issuer through network/channel/merchant/category/transaction/fee/supplier yield.
2. Korea official foreign-card tourism-consumption and limited simple-payment route.
3. Taiwan NCCC inbound/outbound public monthly transaction sensors.
4. Thailand BOT inbound/outbound public monthly cross-border payment sensors from 2016.
5. HKMA quarterly Hong Kong-issued overseas credit-card spend/count.
6. BNM monthly Malaysian-issued Transactions Abroad with explicit online/offline/ATM scope.
7. RBA retail-payment and international-card merchant-fee route.
8. ONS+Visa public-private tourism-spend benchmark.
9. Visa Spend Signals and Mastercard Tourism Insights classified as enterprise/restricted, not silently treated as public raw data.
10. Top15 origin-market gaps explicitly classified rather than fabricated.
11. Comparability contract and graph/engine joins materialized.

## Key evidence facts
- KTO Tourism Data Lab provides foreign credit-card tourism-consumption trend, industry, region and country views. Its foreign simple-payment views explicitly cover only part of foreign domestic simple payments and are for reference/trend use.
- KTO's credit-card analysis guideline distinguishes observed credit-card expenditure from total tourism consumption and warns that card-use purpose cannot be perfectly inferred.
- Taiwan NCCC states its foreign-card consumption section contains 52 items, updated monthly and directly downloadable as CSV; categories include food, apparel, lodging, transport, culture/recreation, department stores, total, regions and EC.
- BOT PS_PT_016 and PS_PT_017 are monthly public series beginning Jan 2016 for foreign electronic-card/e-money receipts in Thailand and Thai electronic-card use abroad.
- HKMA payment-card releases split Hong Kong-issued credit-card retail spending into Hong Kong and overseas spending with counts and values.
- BNM defines Transactions Abroad as transactions at merchants outside Malaysia, online or offline, or ATMs outside Malaysia; the data are monthly and reported by domestic issuing financial institutions.
- RBA publishes quarterly average merchant fees including international-card fees, making supplier-side payment cost measurable.
- ONS explicitly describes its Visa tourism-sector analysis as aggregated/anonymised Visa card data and states it is not exhaustive of all payment methods.
- Visa Spend Signals is a restricted product. Public descriptions show destination/geography, visitor origin/profile, merchant category and tourism/economic modules based on aggregated/depersonalized card-present data.
- Mastercard public travel research describes Tourism Insights and Economics Institute analyses using aggregated/anonymized Mastercard switched volumes and other travel signals; raw commercial product access is not a public total-market panel.

## Why this workstream can close
The purpose of the public-source phase is to map and normalize the best observable transaction sensors and their measurement universes. Requiring proprietary network microdata would make completion depend on a commercial contract rather than research completeness. Those data are therefore coded RESTRICTED_COMMERCIAL/NOT_PUBLIC and remain upgrade paths.

## What must never be claimed
- observed card spend = all tourist spending
- issuer market = nationality/residence
- foreign-issued card = tourist
- transaction count = tourist count
- overseas transaction = physical overseas trip
- online foreign-merchant spend = in-destination spend
- network/processor amount = total card market
- authorization = net merchant revenue

## Engine handoff
Workstream 06 can now feed:
- origin-market payment propensity
- destination/region/category yield signals
- competitor payment-capture benchmarks
- card-present/online decomposition
- average ticket and transaction intensity
- payment acceptance-cost layer
- REAL_SELLABLE_SUPPLY payment-path verification
- MONEY_FLOW fee/net-yield modeling
- gap hypotheses such as PAYMENT_ACCESS_GAP and ORIGIN_PAYMENT_PROPENSITY_GAP

## Next
Proceed to workstream 07 only after this completion state is preserved.
