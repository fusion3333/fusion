# 2007 Foreign Tourist Survey field-level codebook observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-29
Dataset: KORC-FTS-001
Wave: 2007

## Evidence basis
The official Korea Tourism Data Lab / KTO 2007 Foreign Tourist Survey codebook directly exposes same-year field names and code frames for survey month (`chasu`), residence country (`nat`), residence city (`city`, with separate country/city codebook), sex (`sex`), age (`age`), travel type (`dd14`), visit purpose (`q2`), recent-three-year visit count (`mq1a`), recent visit year/month (`q1c1`, `q1c2`), destination-selection process (`q3a`), alternative countries considered (`q3a1~q3a3`), travel motivations (`q3b1~q3b3`), information sources (`q4a1~q4a3`), Korea-tourism advertising exposure (`q5`, `q5a1~q5a7`), overall/item satisfaction (`q16b`, `q16a1~q16a7`), impressive aspects (`q17a1~q17a12`) and weight field (`wt`).

L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2007_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-29.csv`

## Verified observations
1. The 2007 wave has true monthly survey coding: `chasu=1..12` maps directly to January through December.
2. The 2007 residence-country frame contains Japan, China, Hong Kong, Singapore, Taiwan, Thailand, Malaysia, Australia, United States, Canada, United Kingdom, Germany, France, Russia, Middle East and Other. India is not present in this same-year code frame. This is consistent with the separately verified 2008 regime note that India was added in 2008, but longitudinal country coding must still be handled wave-by-wave.
3. `sex` uses `3=무응답` in 2007. This is a concrete code-level comparability warning because later waves use other missing codes (for example 2009 uses `9=무응답`). Missing-value codes therefore must not be harmonized by field name alone.
4. `mq1a` is explicitly worded as the number of visits during the recent three years. This preserves the pre-2015 visit-frequency regime and must not be equated to the post-2015 lifetime visit-count definition.
5. `q3b1~q3b3` records ranked travel motivations, and `q4a1~q4a3` records ranked information sources. These are ordered/ranked fields; flattening them into unordered multi-response variables would require an explicit transformation rule.
6. `q16a1~q16a7` item-level satisfaction uses the scale wording `매우 미흡 → 매우 훌륭`, while `q16b` overall satisfaction uses `매우 불만족 → 매우 만족`. Even within the same wave, these scales are not semantically identical and should not be collapsed without an explicit mapping.
7. The official codebook contains a `wt` field, but the weighting formula, calibration targets, strata/PSU structure and nonresponse adjustment were not exposed in the retrieved evidence. Weight existence is VERIFIED; weight construction remains UNKNOWN.

## Remaining blockers
- Respondent rows are not ingested.
- Same-year stay-duration field name, unit and code frame remain MISSING from the retrieved official extracts.
- Same-year expenditure field names, total-spend basis, inclusion/exclusion rules and unit remain MISSING from the retrieved official extracts.
- Exact universe/filter logic for conditional questions remains UNKNOWN unless directly stated in the codebook extract.
- Full sample design and weight construction remain UNKNOWN.
- Reuse/license for this specific codebook artifact remains UNKNOWN in this evidence pass.

## Comparability rule
Do not infer 2007 stay, spend, missing-code, weight, country-frame or scale equivalence from 2008/2009. Same-year evidence is required before creating longitudinal equivalence groups.
