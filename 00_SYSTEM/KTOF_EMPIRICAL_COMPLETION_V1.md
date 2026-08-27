# KTOF EMPIRICAL — Completion V1
Decision: EMPIRICAL_PROTOCOL_LOCKED_FORMULA_NOT_FROZEN
Method readiness: 0.94
Empirically calibrated: 0.00

## Critical rule
Do NOT freeze the final mathematical opportunity formula or weights before outcome data exists. Earlier KTOF equations remain conceptual hypotheses, not validated scoring equations.

## Target outcomes
Depending on business class: incremental booking conversion, incremental contribution margin, supplier payout, local retained value, failure reduction, repeat/referral, satisfaction, capacity utilization and survival/retention of supplier relationship.

## Candidate feature families
Demand, growth, persistence, WTP proxy, pain/failure, accessible-supply gap, information asymmetry, island severity, bottleneck value-at-risk, revalue potential, supplier willingness, capacity, platform dependency, effective distribution cost, competition, regulation, execution difficulty, scalability, evidence confidence.

## Empirical sequence
1 define outcome and prediction horizon
2 construct time-safe train/validation/test panels
3 baseline simple models
4 calibrate/normalize features using training data only
5 compare regularized GLM/GAM, tree ensembles and survival/uplift models where appropriate
6 time-based backtest and origin/region holdouts
7 calibration/error/fairness/stability checks
8 SHAP or equivalent explanations for complex models
9 intervention/pilot validation where causal claims are needed
10 only then publish a production score.

## Leakage controls
No future revisions, future reviews, post-outcome features or future supplier states in training snapshots. Preserve publication/revision/valid time.

## Causality
Prediction != intervention effect. Use randomized pilots where feasible; otherwise quasi-experimental designs with explicit assumptions. Opportunity ranking should estimate expected value under an intervention, not merely correlation with successful places.

## Uncertainty
Publish confidence intervals/credible ranges or calibrated probability bands. Penalize missing/high-uncertainty features rather than imputing optimism.

## Model governance
Version dataset, feature definitions, code, model, thresholds and decision policy. Maintain challenger models and drift monitoring.

## Formula release gate
Final KTOF formula/weights can be frozen only after sufficient Ground/N/outcome data, stable out-of-time performance, sensitivity analysis, and pilot evidence. Until then use explainable multi-criteria diagnostics.