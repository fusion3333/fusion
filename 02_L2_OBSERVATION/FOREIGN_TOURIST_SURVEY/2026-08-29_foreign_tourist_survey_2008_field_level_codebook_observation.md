# 2008 Foreign Tourist Survey field-level codebook observation

Date: 2026-08-29
Layer: L2 OBSERVATION
Scope: evidence-supported observations only
Canonical parent: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_CANONICAL_MANIFEST_2007_2025_V1.csv`
Evidence file: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2008_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-29.csv`

## Verified observations

1. The 2008 same-year official codebook directly exposes `chasu` (survey month), `qua` (quarter), `nat` (residence country), `city`, `sex`, `edu`, `job`, `age`, `dd2` (visit purpose), `dd13` (travel type), `q13` (travel-type question), `q11a1~q11a3` (major shopping items), `q12a1~q12a3` (major shopping places), and `wt` (weight).

2. The official 2008 history records a sampling-frame expansion: India was added and the sample increased from 11,453 to 11,978. The 2008 `nat` code frame correspondingly contains `16=India`. This is a year-specific country-frame change and must not be back-cast to 2007.

3. The most important temporal limitation is structural rather than ordinary item nonresponse. The official 2008 codebook states that Incheon Airport could not be surveyed in April, May and November because of airport circumstances, and that the report therefore presented results by quarter. The existence of `chasu` month codes must not be interpreted as continuous observed monthly coverage for all survey locations.

4. Monthly/seasonal harmonization for 2008 therefore requires a location-aware missingness treatment. The three Incheon-Airport collection gaps must remain explicit `MISSING_COLLECTION` periods unless respondent-level source/methodology evidence shows a valid weighting or replacement procedure. No imputation or interpolation is justified by the evidence acquired here.

5. `dd13` and `q13` both represent travel type with the same three visible categories (individual, group, Air-tel Tour), but their row-level relationship has not been verified. They must remain separate same-year fields until respondent raw-row reconciliation.

6. Shopping-item and shopping-place fields are ranked 1~3 responses. They must not be silently converted into an unordered multi-response representation.

## Coverage change

- 2008 moves from artifact-level availability to partial `FIELD_LEVEL_VERIFIED` for core WHO/WHEN/WHY/SPEND descriptors.
- A new explicit coverage flag is added at evidence level: `STRUCTURAL_MISSINGNESS_VERIFIED` for Incheon Airport in 2008-04, 2008-05 and 2008-11.
- The 2008 country-frame change (India added) is now field-level and methodology-level verified.

## Remaining blockers / UNKNOWN

- Respondent raw rows: NOT_INGESTED.
- Exact universe/filter logic: UNKNOWN.
- `wt` formula, calibration, strata/PSU and nonresponse adjustment: UNKNOWN.
- How weighting/reporting handled the three missing Incheon-Airport months: UNKNOWN.
- Full 2008 stay-duration field and code frame: MISSING_FIELD_EXTRACTION.
- Full 2008 expenditure amount/total-basis fields and currency/conversion/outlier rules: MISSING_FIELD_EXTRACTION.
- Full satisfaction/post-trip fields: MISSING_FIELD_EXTRACTION.
- Same-year country/city codebook mapping: REGISTERED_AS_SEPARATE_OFFICIAL_ARTIFACT / NOT_EXTRACTED_HERE.
- Reuse/license terms for respondent-level raw data: UNKNOWN.

## Comparability guardrail

Do not infer 2008 monthly values for April, May or November at Incheon Airport. Do not use adjacent-year field names, missing codes, weights or response categories to fill the unresolved 2008 fields. Quarterly presentation is an official reporting response to the collection interruption, not evidence that the missing monthly observations exist.