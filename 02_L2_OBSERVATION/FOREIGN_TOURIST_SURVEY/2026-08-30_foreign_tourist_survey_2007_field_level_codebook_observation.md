# 2007 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-30
Dataset: KORC-FTS-001
Source tier: Tier-A official

## New evidence acquired
The canonical crosswalk still marks 2007 as `FIELD_EXTRACTION_REQUIRED`, even though the same-year official codebook artifact had already been verified. The official Korea Tourism Data Lab codebook index exposes actual respondent/raw field names and code values for several P0 dimensions, so 2007 can now be moved beyond artifact-only verification for those fields.

Directly verified same-year fields include:
- `chasu` survey month, coded 1–12.
- `nat` residence-country category and `city` residence-city field; the codebook explicitly routes city coding to a separate official country/city code file.
- `sex`, `edu`, `job`, and `age` respondent demographic fields with explicit code values.
- `dd2` visit-purpose category.
- `dd14` travel type: individual / package / Air-tel Tour.
- `wt` respondent weight field.
- `mtzq15` one-person total trip expenditure raw field, explicitly labeled in USD.
- `mzq15a0~mzq15a9` individual-travel expenditure component family.
- `mzq15b0~mzq15b9` package-travel expenditure component family.

## Evidence-safe implications
1. 2007 is no longer evidence-empty at field level. Exact raw names and value codes are directly recoverable from the same-year Tier-A codebook and must not be inferred from 2008+ schemas.
2. `wt` proves a respondent weight field exists in 2007, but the codebook excerpt does not expose its construction formula, calibration dimensions, nonresponse adjustment, trimming/capping, or zero-cell handling. Those remain `UNKNOWN`.
3. `nat` is a year-specific residence-country classification. The verified 2007 frame is Japan, China, Hong Kong, Singapore, Taiwan, Thailand, Malaysia, Australia, United States, Canada, United Kingdom, Germany, France, Russia, Middle East, and other. It must not be silently remapped to later country frames.
4. `dd2` directly verifies the 2007 visit-purpose coding: leisure/recreation/individual holiday; friends/relatives; business/professional activity; health/treatment; religion/pilgrimage; other. No equivalence to later wording is asserted.
5. `dd14` directly verifies three travel-form categories: individual travel, package travel, and Air-tel Tour. Exact universe/skip logic remains unresolved.
6. The 2007 expenditure section distinguishes total trip spend from travel-form-specific component families. `mtzq15` is labeled as one-person total expenditure for the whole trip, while `mzq15a0` is specifically the individual-travel total excluding international airfare/ship fare. Those are not interchangeable measures.
7. The codebook states that monetary amounts are standardized to dollars. The source/date of exchange rates, conversion order, outlier treatment, missing handling, respondent denominator, and exact linkage to published annual means remain unresolved and are not inferred.

## Provenance / access / license
- Official source: Korea Tourism Data Lab / Korea Tourism Organization same-year 2007 Foreign Tourist Survey codebook download endpoint.
- Measurement type: official SURVEY codebook for respondent microdata.
- Period: 2007 calendar year; `chasu` confirms month-coded data are present.
- Geography: Korea inbound foreign visitors; residence-country and residence-city fields are separately represented.
- License: `UNKNOWN` for this direct historical codebook download endpoint in this run. No parent-page license was mechanically propagated without direct verification.

## Remaining UNKNOWN / blockers
- respondent raw bytes and row count/checksum were not ingested in this run;
- complete 2007 variable inventory, including repeat visit, stay, activities, satisfaction, recommendation/revisit intention and exact missing codes;
- exact questionnaire wording and universe/skip logic behind `dd2`, `dd14` and expenditure fields;
- full separate country/city codebook extraction;
- 2007 sample-design methodology and exact eligible-population/stay criterion;
- exact `wt` weighting formula and all adjustment mechanics;
- expenditure exchange-rate source/date, currency conversion sequence, category-overlap rules, outlier/missing treatment and published-series derivation;
- longitudinal equivalence to 2008+ remains unbuilt and must not be inferred.

## Repository action
Created narrow L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2007_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-30.csv`

Canonical master architecture, ontology, source-routing standard, psychology layer, origin-market mirror framework, competitor/meta-intelligence strategy, KTOF formulas, business strategy, opportunity logic, and longitudinal equivalence groups were not modified.
