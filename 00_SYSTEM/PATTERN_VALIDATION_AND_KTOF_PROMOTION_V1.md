# Pattern Validation and KTOF Promotion V1

Status: CANONICAL MODEL GOVERNANCE
Date: 2026-08-31
Project: Korea Inbound Tourism Opportunity Intelligence Engine

## 0. Purpose

This standard prevents attractive correlations or frontier-AI-generated hypotheses from being promoted directly into KTOF(*).

Core rule:

> AI may discover candidate patterns. Only repeated evidence and validation may promote them.

---

## 1. Pattern classes

- CORRELATION: variables co-move without causal claim
- INTERACTION: outcome changes under a combination of variables
- NONLINEAR: thresholds, saturation, convexity or other nonlinearity
- LAG: predictor precedes outcome by a measured time interval
- REGIME: relationship depends on a market/methodology/policy regime
- SUBSTITUTION: demand/value moves between markets/products/destinations
- SIMILARITY: current multivariate state resembles historical states
- FAILURE_CONFIGURATION: variable configuration repeatedly precedes failure
- SUCCESS_CONFIGURATION: variable configuration repeatedly precedes success
- INTERVENTION_RESPONSE: measured response to a defined intervention

---

## 2. Mandatory pattern object

Every pattern must have at least:

```text
pattern_id
pattern_version
pattern_class
target_outcome
predictor_set
interaction_structure
lag_structure
segment
geography
data_window
source_classes
sample_size
model_form
regime_scope
missingness_treatment
comparability_scope
in_sample_metric
out_of_time_metric
out_of_segment_metric
calibration_metric
uncertainty
alternative_explanations
leakage_check
causal_status
ground_validation_status
native_validation_status
intervention_validation_status
promotion_status
discovered_by_model
discovered_at
reproducibility_reference
```

---

## 3. Promotion lifecycle

```text
CANDIDATE
→ REPLICATED
→ OUT_OF_TIME_VALIDATED
→ OUT_OF_SEGMENT_VALIDATED
→ GROUND_OR_NATIVE_VALIDATED
→ INTERVENTION_OR_CAUSAL_VALIDATED where feasible
→ KTOF_ELIGIBLE
→ KTOF_ACTIVE
→ MONITORED
```

Possible downgrade states:

```text
DEGRADED
REGIME_LIMITED
NOT_REPLICATED
FALSIFIED
RETIRED
```

No promotion step may be skipped silently.

---

## 4. Minimum promotion gates

### CANDIDATE → REPLICATED
- same relationship observed in an independent period, segment, geography or source configuration
- variable definitions preserved
- obvious duplicate/leakage mechanisms excluded

### REPLICATED → OUT_OF_TIME_VALIDATED
- test period temporally follows training/discovery period
- no future information leakage
- performance exceeds stated baseline
- uncertainty reported

### OUT_OF_TIME_VALIDATED → OUT_OF_SEGMENT_VALIDATED
Where the intended KTOF use spans segments, validate on unseen origin/age/product/region or explicitly mark segment-limited.

### → GROUND_OR_NATIVE_VALIDATED
For claims involving actual sellability, economics, customer action or transaction behavior, public proxies are insufficient. Use G and/or N evidence.

### → INTERVENTION_OR_CAUSAL_VALIDATED
Required only when KTOF will claim intervention uplift or causal effect rather than predictive association.

### → KTOF_ELIGIBLE
Requires:
- stable definition
- reproducible feature construction
- acceptable out-of-time performance
- documented regime scope
- uncertainty/calibration
- no unresolved fatal contradiction
- defined economic target or decision use

### → KTOF_ACTIVE
Requires integration into a versioned KTOF model and a prediction ledger preserving forecasts made before outcomes are known.

---

## 5. Prediction vs causality labels

Canonical labels:

- PREDICTIVE_ONLY
- CAUSAL_HYPOTHESIS
- QUASI_CAUSAL_SUPPORTED
- INTERVENTION_VALIDATED
- CAUSAL_NOT_ESTIMABLE

A predictive pattern may be highly valuable without being causal. It must not be described as intervention effect unless the causal gate is met.

---

## 6. Required falsification tests

As applicable:

- time-shift placebo
- randomization/permutation baseline
- feature ablation
- alternate denominator
- alternate source family
- alternate segment
- pre/post regime split
- leakage audit
- missingness sensitivity
- revised-data/vintage sensitivity
- competitor/cross-market alternative explanation
- economic-value sensitivity

The objective is not to defend the pattern; it is to find where it breaks.

---

## 7. Economic promotion rule

A statistically predictive pattern is not automatically a business opportunity.

For business-opportunity promotion, additionally require evidence on as applicable:

```text
ExposedDemand
× ConversionPotential
× WillingnessToPay
× ContributionMargin
× Capacity
× InterventionFeasibility
× Persistence
adjusted for Cost, Competition, Risk and Uncertainty
```

Gross spend or traffic alone is not sufficient economic validation.

---

## 8. KTOF(*) composition

KTOF(*) may be an ensemble or decision system using multiple validated pattern families.

Possible submodels:

- demand forecast
- demand acceleration/momentum
- competitor substitution
- sellability gap
- WTP
- funnel conversion
- supplier unit economics
- capacity constraint
- intervention uplift
- risk/regime
- uncertainty/calibration

No global functional form is fixed in advance.

---

## 9. Monitoring and decay

An active pattern must be continuously checked for:

- performance decay
- calibration drift
- new regime breaks
- source-definition changes
- market-structure changes
- competitor response
- intervention saturation

If performance falls outside its declared validity range, mark DEGRADED or REGIME_LIMITED before retraining or replacement.

---

## 10. Frontier-AI governance

Frontier AI may:

- propose pattern candidates
- propose transformations/interactions/lags
- explain discovered patterns
- propose falsification tests
- locate contradictory evidence
- generate code for reproducible tests

Frontier AI may not by itself:

- mark KTOF_ELIGIBLE
- claim out-of-time validation without actual holdout results
- convert correlation into causal effect
- invent missing Ground/Native outcomes
- rewrite historical predictions after outcomes are observed

---

## 11. Prediction ledger requirement

Every production-like KTOF prediction must preserve:

```text
prediction_id
model_version
prediction_time
information_cutoff
entity/segment/opportunity
target_horizon
predicted_value/probability
uncertainty
input_state_reference
pattern_versions_used
realized_outcome
outcome_observed_at
error/calibration
```

The prediction ledger is a core compounding asset because it measures whether the engine actually predicts economic reality rather than explaining it after the fact.
