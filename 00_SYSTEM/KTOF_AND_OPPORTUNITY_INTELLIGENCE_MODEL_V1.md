# KTOF and Opportunity Intelligence Model V1

Status: CANONICAL CONCEPT / PROVISIONAL MODEL SPECIFICATION
Date: 2026-08-28
Project: Korea Inbound Tourism Opportunity Intelligence Engine

## 0. Purpose

This document fixes the current meaning, role, limits, and future development path of KTOF inside the project.

KTOF began early in the project as a compact formula for ranking tourism business opportunities. The project has since expanded far beyond a single score into an operating-intelligence system that links traveler demand, psychology, destination choice, search, booking, payment, movement, stay, experience, spend, pain, satisfaction, supply, sellability, platforms, competition, money flow, bottlenecks, interventions, causal effects, and economic value.

Therefore KTOF remains important, but it is no longer the name of the whole system. It is the historical origin and the final opportunity-inference / opportunity-ranking layer inside the larger engine.

---

## 1. Name and hierarchy

### KTOF

**KTOF = Korea Tourism Opportunity Formula**

Korean meaning:
- 한국 관광 기회 공식
- 한국 관광 사업기회 산출식

### Parent system

The parent system is:

**한국 인바운드 관광 기회지능 엔진**

Recommended English working name:

**Korea Inbound Tourism Opportunity Intelligence Engine**

The parent system observes and connects the tourism economy. KTOF is the layer that ultimately estimates and ranks which gaps, bottlenecks, recombinations, and interventions represent the highest-value opportunities.

### Canonical hierarchy

```text
Korea Inbound Tourism Opportunity Intelligence Engine
  ├─ Evidence / Source Routing
  ├─ Measurement & Comparability
  ├─ Demand / Journey / Supply / Transaction Graph
  ├─ Gap / Island / Bottleneck / Asymmetry Detection
  ├─ Sellability / Payment / Money-Flow Intelligence
  ├─ Intervention / Counterfactual / Causal Layer
  ├─ Opportunity Candidate Generation
  └─ KTOF — final opportunity inference and ranking layer
```

---

## 2. What changed from the early concept

The early concept imagined a relatively compact opportunity score such as:

```text
Opportunity = f(
  Demand,
  Asset,
  Friction,
  Asymmetry,
  Connectivity,
  Economics,
  Competition,
  Feasibility
)
```

and, more concretely, multiplicative forms such as:

```text
O_i =
(D_i^w1 × P_i^w2 × A_i^w3 × I_i^w4 × R_i^w5 × S_i^w6)
/
(C_i^w7 × T_i^w8 × G_i^w9)
```

where the early variables represented demand, pain, information asymmetry, island/disconnection, revalue potential, scalability, competition, transaction cost, regulation, risk, and execution difficulty.

These expressions remain valuable as **hypothesis structures**, but they are not an empirically validated production scoring formula.

The system has since learned that a single multiplication of partially dependent variables can double-count the same phenomenon, hide regime changes, confuse missingness with zero, and create false precision. KTOF must therefore be built on top of multiple measured submodels rather than treated as a single hand-weighted score.

---

## 3. Current project architecture

The engine now operates across:

- 25 base observation axes
- 8 cross-layers
- 8 public-data workstreams
- Source Routing classes O / E / S / R / G / N
- explicit evidence metadata
- comparability rules
- missingness classes
- methodology and regime-break handling
- respondent-level survey harmonization
- supply and actual sellability states
- booking and payment friction
- complaint / failure funnel
- competition and destination substitution
- money-flow and local-retained-value logic
- intervention, counterfactual, and causal-effect design

The opportunity pipeline is therefore no longer simply `data → score`.

Canonical direction:

```text
WORLD
→ SOURCE
→ EVIDENCE
→ MEASUREMENT
→ NORMALIZED DATA
→ KNOWLEDGE / OPPORTUNITY GRAPH
→ GAP / ISLAND / BOTTLENECK / ASYMMETRY
→ OPPORTUNITY CANDIDATE
→ INTERVENTION
→ COUNTERFACTUAL / CAUSAL EFFECT
→ ECONOMIC VALUE
→ KTOF
```

---

## 4. KTOF(0) and KTOF(*)

The project must permanently distinguish two stages.

### KTOF(0) — Hypothesis / Measurement Model

```text
KTOF^(0) = Hypothesis / Measurement Model
```

Purpose:
- define what a tourism opportunity may consist of
- define candidate variables
- define dependencies and causal hypotheses
- define required source families
- reveal missing variables
- prioritize next research
- structure graph features
- prevent unfocused data collection

KTOF(0) is allowed to contain provisional formulas and conceptual indices.

It must **not** be presented as an empirically validated opportunity score.

### KTOF(*) — Empirically Estimated Opportunity Formula

```text
KTOF^(*) = Empirically Estimated Opportunity Formula
```

KTOF(*) begins only after sufficient observed behavior, transaction outcomes, longitudinal evidence, intervention results, and counterfactual validation exist.

Its weights, function forms, interactions, thresholds, and uncertainties are estimated from data rather than fixed by intuition.

---

## 5. Current meaning of an opportunity

A gap alone is not an opportunity.

A useful opportunity requires evidence that economically meaningful demand exists, that some connection prevents the demand from being realized, and that the connection can be improved at a defensible cost and risk.

Conceptually:

```text
Opportunity
≈ Unmet or Diverted Demand
× Valuable Supply or Recombination Potential
× Solvable Friction
× Transaction / Margin Potential
× Intervention Feasibility
× Causal Uplift
× Persistence / Scalability
adjusted for Competition, Risk, Cost, and Uncertainty
```

The current engine therefore cares about at least the following latent families:

- Demand
- Preference / Motivation
- Destination-choice diversion
- Search / discoverability
- Language / information asymmetry
- Bookability
- Payment accessibility
- Transport / spatial connectivity
- actual sellable supply
- capacity and inventory
- customer and supplier pain
- trust and review coverage
- transaction cost
- distribution and platform cost
- margin / payout / local-retained value
- competition
- revalue / recombination potential
- regulation and execution difficulty
- intervention cost
- causal uplift
- uncertainty

No fixed global multiplicative form is assumed at this stage.

---

## 6. Historical provisional formulas retained as research hypotheses

The following early formulas are retained because they encode useful hypotheses. They are all classified:

**PROVISIONAL — NOT AN EMPIRICALLY VALIDATED SCORING FORMULA**

### 6.1 Gap

```text
Gap(u,a) = Demand(u) - AccessibleSupply(a)
```

Interpretation: the economically relevant shortage may be lack of accessible supply, not lack of physical supply.

### 6.2 Island

```text
IslandScore
≈ AssetQuality × Demand × (1 - Connectivity)
```

Hypothesis: high-quality assets with demand but weak global connectivity can contain hidden value.

Connectivity may itself depend on:

```text
Search
Map
Language
OTA / channel presence
Booking
Payment
Transport
Review
Trust
Capacity
```

Whether these components add, multiply, substitute, or gate each other must be learned empirically.

### 6.3 Information Asymmetry

Early conceptual form:

```text
IA = 1 - I_foreign_accessible / I_source
```

The current model treats this only as an intuition. Real information asymmetry may depend on discoverability, language coverage, price transparency, booking access, payment access, information quality, trust, and freshness.

### 6.4 Journey success and bottleneck

For sequential stages:

```text
P(Journey) = Π p_i
```

Possible stages:

```text
Search → Compare → Book → Pay → Move → Experience
```

Conceptual bottleneck value:

```text
BottleneckValue
≈ ΔConversion × ExposedTraffic × ContributionValuePerTransaction
```

This must use observed denominators and causal uplift where possible, not simple before/after correlation.

### 6.5 Revalue

Historical gross-price concept:

```text
RVI = (V1 - V0) / V0
```

More economically useful forms must account for incremental costs, commissions, payment fees, refunds, labor, sourcing, capacity, and contribution profit.

A provisional concept is:

```text
NetRVI
≈ (NewContributionProfit - CurrentContributionProfit - InterventionCost)
   / CurrentContributionProfit
```

This is still provisional until denominator definitions and actual accounting evidence exist.

### 6.6 Valuable Gap

```text
ValuableGap
≈ Gap
× Demand
× WillingnessToPay
× RevaluePotential
× Solvability
```

Again, exact function form is unknown.

### 6.7 Research Priority

```text
NextResearchPriority
≈ Missingness
× OpportunitySensitivity
× SourceAvailability
```

This is the basis for a Research Engine that decides what evidence should be collected next.

---

## 7. Traveler and supply representations

Early project language described the system as a tourism-industry neural network. The historical intuition is preserved, but the current canonical term is a **Tourism Knowledge / Opportunity Graph and operating-intelligence model**, to avoid implying that the whole project is literally one neural network model.

### Traveler representation

A traveler or traveler segment may be represented by dimensions such as:

```text
WHO
WHY
WHEN
ORIGIN
DESTINATION CHOICE
SEARCH
BOOK / PAY
MOVE
STAY
DO
SPEND
PAIN
SATISFACTION
```

This can be implemented as structured features, graph states, embeddings, or hybrid representations depending on the task.

### Supply representation

A tourism asset or supplier may include:

```text
Location
Category
Quality
Authenticity
Price
OperatingStatus
Language
Discoverability
Bookability
Payment
Trust
TransportAccessibility
Capacity
Inventory
ChannelCoverage
RefundPolicy
```

The important distinction is:

```text
Physical / Registered Supply
!= Operating Supply
!= Discoverable Supply
!= Bookable Supply
!= Foreigner-Usable Supply
!= Capacity-Available Supply
!= Transaction-Possible Supply
```

---

## 8. Evidence-aware opportunity inference

Every important value must carry evidence metadata rather than entering KTOF as a naked number.

Conceptually:

```text
x = (
  value,
  source_class,
  measurement_type,
  source_artifact,
  time,
  geography,
  population_or_universe,
  methodology_regime,
  confidence,
  missingness_status,
  comparability_status
)
```

Therefore the future opportunity model is not simply:

```text
Opportunity = f(X)
```

but more accurately:

```text
Opportunity = f(X, EvidenceQuality, Confidence, Regime, Time, Uncertainty)
```

A weakly evidenced score of 90 must not be treated as equivalent to a strongly evidenced score of 90.

---

## 9. Source Routing relationship

KTOF consumes the Source Routing framework rather than replacing it.

Source classes:

- O = Official
- E = Enterprise
- S = Social / VOC
- R = Research
- G = Ground
- N = Native telemetry

These are not a single credibility ladder.

Examples:

- legal existence / registration → O often strongest
- actual price / live availability / booking path → E may be direct
- hidden friction / latent pain discovery → S may be useful
- methodology / mechanism / comparability → R may be strongest
- realized sellability / actual supplier economics → G may be necessary
- click / booking / payment / repeat funnel → N is the strongest direct behavioral sensor

KTOF must therefore evaluate evidence fitness-for-purpose, not source prestige alone.

---

## 10. Current critical opportunity objects

The current engine already has named diagnostics that can become KTOF features or opportunity generators when denominators are sufficient.

Examples include:

- ORIGIN_PAYMENT_PROPENSITY_GAP
- PAYMENT_ACCESS_GAP
- LANGUAGE_ACCESS_ISLAND
- INFORMATION_DISCOVERY_ISLAND
- TRANSACTION_ACCESS_GAP
- HIDDEN_TRANSACTION_COST
- SERVICE_RECOVERY_GAP
- UNDER_REPORTED_PAIN
- HighSpendLowRetention
- DistributionCostIsland
- FXPaymentLeakage
- SupplierMarginCompression
- DirectHybridOpportunity

These are not automatically monetized opportunities. Each must pass evidence, denominator, feasibility, and causal gates.

---

## 11. Money-flow requirement

KTOF must not equate tourism spend with economic value.

The engine distinguishes:

```text
TravelerPaid
→ Taxes / traveler fees
→ Distribution / platform cost
→ Affiliate / visibility cost
→ Payment / acquiring / network cost
→ FX / cross-border cost
→ Refund / chargeback / risk
→ SupplierPayout
→ Supplier variable / labor / input cost
→ SupplierOperatingProfit
→ LocalRetainedValue
```

Critical non-equivalences:

```text
TravelerPaid != SupplierPayout
SupplierPayout != SupplierRevenue
SupplierRevenue != SupplierProfit
SupplierProfit != LocalRetainedValue
GrossBookingValue != PlatformRevenue
CardObservedSpend != TotalTourismSpend
```

A final KTOF(*) must optimize toward economically defensible outcomes, not merely gross transaction volume.

---

## 12. Competition and counterfactual requirement

Inbound opportunity cannot be understood using Korea-only observations.

The engine must consider:

- whether Korea entered the consideration set
- whether another destination replaced Korea
- price and FX conditions
- aviation capacity
- visa and access conditions
- event and content shocks
- competitor supply and friction
- traveler segment heterogeneity

A real opportunity claim should eventually answer a counterfactual question such as:

> If this bottleneck were removed, how much incremental booking, payment, contribution profit, or local-retained value would occur relative to what would otherwise have happened?

---

## 13. Model Readiness Gate

KTOF(*) must not begin because an arbitrary overall coverage percentage is reached.

A candidate model family should pass a variable-level readiness gate covering at least:

1. measurement definition fixed
2. sufficient time coverage
3. relevant origin / region / product coverage
4. cross-measurement triangulation where possible
5. methodology and regime breaks handled
6. unknown / missingness sufficiently reduced or explicitly modeled
7. variable distributions inspected
8. relationships and interactions analyzed
9. leakage / duplication checks
10. outcome or intervention ground truth available
11. uncertainty estimable
12. out-of-time or out-of-segment validation possible

Until then, the model remains KTOF(0), not KTOF(*).

---

## 14. Explicit prohibitions

The following are prohibited in canonical KTOF work unless explicitly marked as a toy example:

- assigning intuitive weights and presenting the result as an empirical 0–100 opportunity score
- treating missing, NOT_PUBLIC, NOT_VERIFIED, or NOT_COMPARABLE as zero
- splicing methodology regimes without crosswalk
- treating nationality and country of residence as interchangeable
- treating survey spend and card spend as the same measure
- treating registered supply as sellable supply
- treating TourAPI content as licensed / operating businesses
- treating complaint counts as population failure rates without a denominator
- treating published fees as realized supplier fees
- treating platform commission as full distribution cost
- treating card-observed spend as total tourism spend
- treating correlation as intervention effect
- monetizing a bottleneck without exposed demand and a defensible value denominator
- claiming local-retained value without supplier cost / sourcing evidence

---

## 15. Research Engine

One of the most important evolutions from the original KTOF concept is that the model should not only rank opportunities; it should also identify which missing evidence matters most.

Loop:

```text
Source
→ Data
→ Graph
→ Gap
→ Opportunity Candidate
→ Missing Variable
→ Research Priority
→ New Source / Ground / Native Measurement
→ Data
→ Graph
→ Updated Opportunity
```

This converts the project from broad tourism-data accumulation into goal-directed evidence acquisition.

The key idea is:

> Do not collect data to prove a preferred business idea. Use the opportunity model to reveal which missing evidence is decision-critical, collect that evidence, and let the data change the ranking.

---

## 16. Recombination and Revalue

The engine is not limited to finding shortages. It must also find cases where existing assets can become more valuable through new combinations.

Canonical value-up chain:

```text
ORIGINAL ASSET
→ CURRENT VALUE
→ HIDDEN / UNDERPRICED VALUE
→ RECOMBINATION
→ NEW PRODUCT / JOURNEY
→ NEW CUSTOMER
→ NEW PRICE / NEW CONTRIBUTION PROFIT
```

Examples may include accommodation + food + craft + guide + transport + booking + payment + trust layers, but the engine must never pre-decide that a particular vertical such as hanok or wellness is the answer.

Principle:

> 아이디어를 증명하기 위한 데이터를 모으는 것이 아니라, 데이터에서 사업을 발견한다.

---

## 17. Current maturity interpretation

The project has advanced far enough that the conceptual KTOF framework should be considered established, while the empirical KTOF remains immature.

Current interpretation:

```text
KTOF concept / hypothesis architecture: mature
KTOF measurement specification: advanced, still evolving with ingestion
KTOF feature materialization: partial
KTOF empirical weights / functional form: not fixed
KTOF causal calibration: early / not yet sufficient
KTOF outcome-validated production ranking: not yet ready
```

This distinction prevents the project from understating the conceptual work already completed while avoiding false claims that a validated scoring model already exists.

---

## 18. Final canonical statement

The current project philosophy is:

> **한국 관광산업에서 수요는 존재하지만 연결·거래·공급·정보·가격·유통 등의 구조적 이유로 실현되지 않는 경제가치를 발견하고, 어떤 개입이 그 가치를 실제 거래와 지역 잔존가치로 전환할 수 있는지를 증거와 인과효과에 기반해 추정한다.**

The parent engine maps, measures, connects, and diagnoses the tourism economy.

**KTOF is the final opportunity formula layer that converts those observations and intervention estimates into evidence-aware, uncertainty-aware, empirically learnable business-opportunity rankings.**

It began as a formula. It now sits at the end of a much larger opportunity-intelligence system.
