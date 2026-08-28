# WORKSTREAM 06 — CARD & PAYMENT INTELLIGENCE V1

## Mission
Build a transaction-sensor layer that measures where tourism money is actually observable while refusing to confuse card-network/payment observations with total tourism expenditure.

## Canonical chain
ORIGIN_MARKET -> ISSUING_MARKET -> PAYMENT_INSTRUMENT/NETWORK -> DESTINATION -> REGION -> MERCHANT_CATEGORY -> MERCHANT/PRODUCT -> TRANSACTION_COUNT -> TRANSACTION_VALUE -> AVG_TICKET -> CHANNEL -> FX -> FEES -> SUPPLIER_YIELD

## Source routing
O (official/public statistical): KTO Tourism Data Lab and analysis guideline; Taiwan NCCC; Bank of Thailand; HKMA; Bank Negara Malaysia; RBA; ONS public statistics using Visa aggregates.
E (enterprise): Visa Spend Signals; Mastercard Tourism Insights/Economics Institute; acquirers/PSPs/OTAs where first-party methodology is disclosed.
S (social/VOC): payment refusal, cash-only, foreign-card failure, QR/app/account friction discovery only. Never estimate population rates from social evidence.
R (research): payment/tourism measurement literature, TSA/IRTS and methodological work.
G/N: mystery payment and our own funnel/transaction telemetry are the final verification/calibration layers.

## Mandatory measurement dimensions
period; origin_definition; issuer_market; destination; destination_region; payment_instrument; network_or_provider; card_present_or_online; merchant_category; transaction_count; transaction_value; currency; average_ticket; source_family; source_name; coverage_scope; population_universe; source_date; evidence_grade; limitations.

## Non-equivalence rules
- card spend != total tourism spend
- one network/processor/acquirer != all card spend
- issuing country != nationality != residence
- transaction count != tourists != trips
- overseas card use != overseas travel
- overseas online/e-commerce != in-destination tourism
- authorization value != settled net sales after refunds/chargebacks
- merchant location != traveler physical presence when card-not-present
- card-present != necessarily tourism
- foreign-issued card != necessarily foreign tourist
- survey expenditure != observed card expenditure
- nominal cross-border spend != real volume without FX/price treatment

## Public-source canonical sensors
### Korea
KTO Tourism Data Lab exposes foreign-credit-card tourism consumption trends, industry/category trends, regional shares, country distributions, and limited foreign simple-payment/ZeroPay views. KTO explicitly warns that simple-payment data cover only part of foreign domestic simple payments and are reference/trend data. KTO's credit-card big-data guideline distinguishes credit-card expenditure from total tourism expenditure and warns that the purpose of card use cannot be perfectly identified.

### Taiwan — NCCC
NCCC publishes 52 downloadable CSV foreign-card consumption items, updated monthly. Observable cuts include total foreign-card amount/count, food, apparel, lodging, transport, culture/recreation, department stores, geographic areas and EC/online shopping. NCCC also publishes Taiwan cardholders' top overseas consumption patterns. This is a high-value official processor sensor, not a census of all payment methods.

### Thailand — Bank of Thailand
BOT PS_PT_016 provides monthly transactions accepted in Thailand from foreign electronic cards/e-money, including channel/instrument distinctions; PS_PT_017 provides monthly Thai electronic-card transactions abroad. Public series begin Jan 2016. This is unusually useful for inbound/outbound cross-border payment structure but must not be equated with tourism alone.

### Hong Kong — HKMA
HKMA quarterly payment-card statistics split Hong Kong-issued credit-card retail spending into Hong Kong spending and overseas spending, with transaction count and value. This is an issuer-side outbound cross-border sensor; it does not identify destination country or tourism purpose by itself.

### Malaysia — Bank Negara Malaysia
BNM monthly payment statistics define Transactions Abroad as transactions at merchants outside Malaysia (online/offline) or ATMs outside Malaysia, reported by domestic financial institutions issuing cards. Therefore this is a monthly issuer-side cross-border-use sensor, not a clean tourism-only measure.

### Australia — RBA
RBA Retail Payments Statistics provide Australian-issued card purchase measures and quarterly average merchant fees including international-card merchant fees. The fee table is valuable for the money-flow/cost layer, not merely demand measurement.

### United Kingdom — ONS + Visa
ONS has published aggregated/anonymised Visa card analyses of UK tourism-related sectors, including in-person international-visitor spending at UK merchants. ONS explicitly notes Visa/card coverage is not exhaustive of all payment methods. This is a model for public-private official statistics integration.

## Enterprise/restricted sensors
Visa Spend Signals provides aggregated/depersonalized card-present spend insights by geography, visitor origin/profile, market segment and tourism/economic modules, but the product/API is restricted and requires access. Mastercard Tourism Insights/Economics Institute uses aggregated/anonymized Mastercard payment and travel signals and is enterprise/research evidence, not a public total-market census.

## Analytical outputs enabled
- inbound card-spend trend by destination/region/category where source permits
- outbound cross-border payment propensity by origin market
- card-present vs online split where source permits
- transaction count/value/average ticket
- regional and merchant-category concentration
- cross-border acceptance-cost proxy via international-card merchant fees
- payment-friction hypotheses joined to REAL_SELLABLE_SUPPLY
- competitor-destination transaction-sensor benchmarking

## Missing/access codes
PUBLIC_DOWNLOAD; PUBLIC_TABLE; PUBLIC_AGGREGATE_ONLY; RESTRICTED_COMMERCIAL; NOT_PUBLIC; NOT_VERIFIED; NOT_COMPARABLE; MISSING; REGIME_BREAK.
Never replace an inaccessible commercial series with fabricated values.

## Completion boundary
This workstream is complete when the public/enterprise source universe, schemas, comparability contract, access limits and engine joins are locked. It does NOT require proprietary Visa/Mastercard customer data or merchant-level Korean transaction feeds that are not public. Those remain RESTRICTED_COMMERCIAL/NOT_PUBLIC until acquired.

## Status
PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_COMMERCIAL_AND_MICRODATA_LIMITS
