# 2014 Foreign Tourist Survey — Weight Formula Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-31
Dataset: KORC-FTS-001
Source tier: Tier-A official

## New evidence acquired
The same-year official 2014 Foreign Tourist Survey User's Guide directly states that 12,024 valid respondents were weighted according to nationality-by-month entry proportions for January–December 2014. It states that all results in the full 2014 report use weights and gives the weight formula:

`wt = (country/month entry proportion × total valid sample) / country/month valid sample`

This resolves the previously explicit blocker in the 2014 field-level observation where `wt` was known to exist but its construction formula and cells were UNKNOWN.

## Evidence-safe implications
1. The verified weight construction dimensions are **country × month**. No sex or age calibration dimension is added without same-year evidence.
2. The valid sample used by the guide is **12,024**.
3. The weight is controlled to country/month entry proportions, not merely an unweighted survey-cell ratio.
4. This evidence does not justify inferring the exact underlying arrival-statistics exclusions, any additional nonresponse adjustment, trimming/capping, zero-cell treatment or calibration tolerance.
5. No adjacent-year weighting design is imported into 2014.

## Remaining UNKNOWN / blockers
- exact population source and exclusions used to calculate country/month entry proportions;
- whether crew, overseas Koreans, cruise passengers or other entrant classes are excluded and on what rule;
- any nonresponse adjustment beyond the stated formula;
- trimming/capping, zero-cell handling and calibration tolerance;
- respondent-level weight missing rules and raw-row verification;
- attachment-level license/reuse scope.

## Source
Tier-A official same-year User's Guide: `2014년 외래관광객 실태조사 User's Guide`, Korea Tourism Data Lab / Korea Tourism Organization.

## Repository action
Created narrow L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2014_WEIGHT_FORMULA_EVIDENCE_2026-08-31.csv`

Canonical master, ontology, source-routing standard, longitudinal equivalence, KTOF, business strategy and opportunity-scoring logic were not modified.
