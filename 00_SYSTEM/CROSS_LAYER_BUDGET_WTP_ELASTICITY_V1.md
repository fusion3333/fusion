# CROSS LAYER 03 — BUDGET / WTP / PRICE ELASTICITY V1

Status: DESIGN_LOCKED_PUBLIC_EVIDENCE_PARTIAL_REVEALED_ELASTICITY_PENDING
Date: 2026-08-28

## Purpose
Separate observed expenditure from ex-ante affordability, willingness-to-pay, and behavioral price response. This layer connects WHO/DECISION_UNIT/CHOICE with BOOK_PAY/SPEND/MONEY_FLOW/OPPORTUNITY without treating spend as preference.

## Core anti-distortion rules

1. ObservedSpend != BudgetEnvelope.
2. BudgetEnvelope != WillingnessToPay.
3. WTP != PricePaid.
4. PricePaid != TotalTripCost.
5. StatedWTP != RevealedWTP.
6. AverageSpend must not be used as a direct WTP estimate.
7. Price elasticity is conditional on market, segment, product, time, alternatives, income/budget, exchange rate, party structure and journey stage.
8. A non-purchase is not automatically price rejection; availability, trust, language, payment, timing and search failure must be separated.
9. Budget is a constraint across a portfolio of trip components; a price change in air transport can alter destination, stay length, accommodation, activities and food simultaneously.
10. Use ranges/distributions when exact budget or WTP is unobserved; never manufacture a point estimate.

## Decision sequence

TravelIntent
 -> BudgetFormation
 -> BudgetAllocation
 -> ConsiderationSet
 -> AttributeTradeoff
 -> PriceExposure
 -> PurchaseDecision
 -> ActualSpend
 -> PostPurchaseReallocation

Tourism demand literature supports budget formation as an upstream decision rather than an output of realized expenditure. A staged tourism-demand model explicitly places tourism-budget estimation before frequency/stay and destination/mode choice.

## Core entities

### BudgetEnvelope
- decision_unit_id
- episode_id
- currency
- total_trip_budget_min/max
- discretionary_budget_min/max
- hard_cap / soft_cap
- budget_basis: individual / household / sponsor / employer / group
- formation_date
- confidence
- source_id

### BudgetAllocation
- category: air / lodging / local_transport / food / shopping / activity / wellness / culture / contingency / other
- planned_amount/range
- priority_rank
- substitutable_flag
- protected_flag

### PriceExposure
- product_id / destination_id
- displayed_price
- all_in_price
- tax_fee_fx_shipping_tip components
- currency
- timestamp
- channel/platform
- availability at exposure

### WTPObservation
- actor_id / decision_unit_id
- object: destination / trip bundle / product / attribute
- method: revealed_preference / discrete_choice / contingent_valuation / auction / stated_range / inferred_interval
- lower_bound / upper_bound
- currency
- scenario/context
- confidence

### PriceResponseObservation
- old_price / new_price
- choice before/after or exposed/control
- quantity/booking probability response
- alternative chosen
- segment/market/time
- causal_quality flag

## Price concepts

P_display != P_all_in != P_generalized

GeneralizedPrice = monetary all-in cost + monetized travel time + search/booking friction + payment/FX friction + cancellation/risk cost, where monetization is empirically justified. Do not silently convert non-price friction into money without a validated coefficient.

## Modeling family

### Budget constraint
For decision unit u at time t:
SUM_k p_k q_k <= B_u,t

B is latent or observed ex-ante budget, not realized spend.

### Utility / discrete choice
U_u,j,t = beta_x X_j,t + beta_p P_j,t + interactions + random heterogeneity + epsilon

WTP for attribute k may be derived in a utility model as -beta_k / beta_price only when model assumptions and scale are appropriate.

### Elasticity
Own-price elasticity:
epsilon_p = (% change in demand) / (% change in price)

Cross-price elasticity between Korea and substitute destination s:
epsilon_K,s = (% change in Korea demand) / (% change in price of s)

Elasticities must be indexed by segment x origin x season x product/destination x price range. Do not assume constant elasticity globally.

## Evidence implications

Tourism discrete-choice research demonstrates that destination choice can respond differently to airfare, hotel tariffs and exchange rates; price cannot be represented as one scalar. Experimental/stated-preference approaches can estimate responses for alternatives and prices not sufficiently observed in historical transactions.

Holiday discrete-choice experiments estimate marginal WTP for attributes such as transport mode, accommodation quality and stay length and use latent-class models to represent taste heterogeneity. Korean tourism research has also estimated WTP for Seoul destination activities and found offered price, origin, preferred activity, prior experience and trip purpose relevant; Korean choice-experiment research on Dokdo likewise estimates attribute-specific MWTP and finds price, age and income significant.

Revealed expenditure research treats travel choices as utility maximization subject to a budget constraint and distinguishes preallocated from unplanned destination expenditure. High-travel-cost research shows price shocks can alter destination, length of stay, accommodation and mode jointly, reinforcing portfolio rather than single-item elasticity.

## Korea public-data mapping

2025 Foreign Tourist Survey microdata/codebook is an official respondent-level source for realized trip expenditure and traveler characteristics. It is evidence for SPEND and heterogeneity, but realized expenditure alone does NOT reveal the ex-ante budget envelope or reservation price/WTP. Therefore KTO spend rows must never be relabeled WTP.

Potential-traveler surveys, future Ground interviews and N-telemetry should capture:
- intended total budget before booking
- category allocation
- maximum acceptable price/range for key products
- observed rejected/accepted prices
- alternatives considered
- fee/FX response
- coupon/discount exposure
- party payer and budget controller

## Opportunity implications

A useful opportunity is not merely HighSpend. Required distinction:

HighSpend + LowWTPMargin => weak pricing headroom
LowObservedSpend + HighLatentWTP + AccessFailure => monetization opportunity
HighWTP + LowAccessibleSupply => supply/revalue opportunity
HighPriceElasticity + HighCompetition => discount/efficiency problem
LowPriceElasticity + HighDifferentiation + CapacityConstraint => yield/pricing opportunity

PotentialRevenueLift should ultimately depend on causal change in conversion/quantity and contribution margin, not WTP alone.

## Graph integration

DecisionUnit -HAS_BUDGET-> BudgetEnvelope
BudgetEnvelope -ALLOCATES_TO-> BudgetAllocation
Traveler/Actor -EXPOSED_TO_PRICE-> PriceExposure
Actor -HAS_WTP_OBSERVATION-> WTPObservation
PriceExposure -AFFECTS_CHOICE-> ChoiceEpisode
ChoiceEpisode -RESULTS_IN-> Transaction/NoPurchase
Transaction -OBSERVES-> ActualSpend
Product/Destination -HAS_PRICE_RESPONSE-> PriceResponseObservation

All observations require time, market, currency, source, method and uncertainty metadata.

## Public evidence ceiling / blockers

Public evidence is strong for realized expenditure, destination/product prices and methodological estimation of WTP/elasticity. It is materially weaker for Korea-inbound ex-ante budget envelopes, individual reservation prices, price exposures immediately before abandonment, rejected alternatives, discount/coupon exposure and causal price response. These require microdata mapping, Ground, platform/transaction telemetry or experiments.

## Lock decision

The architecture is locked around four separate variables:
BUDGET_ENVELOPE -> WTP -> PRICE_RESPONSE/ELASTICITY -> ACTUAL_SPEND.
SPEND remains an outcome/constraint realization sensor and cannot substitute for the first three.
