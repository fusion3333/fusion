# 2013 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-30
Dataset: KORC-FTS-001
Source tier: Tier-A official

## New evidence acquired
The same-year official 2013 Foreign Tourist Survey codebook directly exposes raw field names and codes for several dimensions that remain UNKNOWN/PARTIAL in the canonical crosswalk.

Verified raw fields include:
- `chasu` survey month (1–12).
- `nat` residence country, `city` residence city with a separate same-year country/city codebook.
- `sex`, `edu`, `job`, `age` respondent demographics with year-specific category codes.
- `q2b` recent-3-year Korea visit count and `wq2b` raw visit-count field.
- `q2c` prior Korea visit timing by year-quarter.
- `q3a2` stay-length category, `mq3a2` raw stay length and `mmq3a2` raw stay length with 61+ days explicitly marked SYSMISS.
- `q19` intention to revisit Korea within 3 years.
- `q20` Korea-trip recommendation intention; field name verified but code values remain unresolved in the retrieved excerpt.
- `mday_av0` overall daily-average expenditure raw field and `mday_av1`/`mday_av2`/`mday_av3` travel-type-specific daily-average expenditure raw fields.
- `wt` weight variable.

## Evidence-safe implications
1. The 2013 repeat-visit construct is explicitly bounded to the **recent 3 years**. It must not be mechanically pooled with the post-2015 unrestricted repeat-visit definition.
2. `mmq3a2` explicitly applies a 61+ day SYSMISS transformation. This is a field-level analytical marker, not a complete published-average-stay formula.
3. `q19` contains an explicit **3-year revisit-intention horizon**, with codes 1–5 plus `8=not applicable` and `9=don't know/nonresponse`. Positive aggregation is not inferred.
4. The codebook directly identifies respondent-level daily-average-expenditure raw fields in USD for overall, individual, group and Air-tel travel. The exact denominator, exchange-rate timing, outlier treatment, missing rules and travel-type universes are still unresolved and therefore no longitudinal expenditure harmonization is performed.
5. `wt` is directly verified as the 2013 weight variable. The construction formula, calibration cells and nonresponse adjustment remain UNKNOWN.

## Remaining UNKNOWN / blocker fields
- exact questionnaire universe/skip rules for the verified fields;
- raw numeric ranges/missing representations for `wq2b` and `mq3a2`;
- complete `q2c` code frame beyond the values exposed in the official indexed excerpt;
- full same-year country/city mapping, including constituent-country definition for `중동`;
- `q20` response codes and other satisfaction/loyalty fields not exposed in the retrieved excerpt;
- sample-design mechanics and exact weight construction/calibration/nonresponse adjustment;
- expenditure denominator, exchange-rate timing, component aggregation, outlier treatment and missing-value handling;
- respondent raw rows were not ingested.

## Source/access limitation
The official Korea Tourism Data Lab PDF endpoint is authoritative, but direct fetch returns `application/octet-stream` in the current environment. Only same-year text exposed by the official search index was used. No adjacent-year variable, code, wording or transformation was copied.

## Repository action
Created narrow L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2013_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-30.csv`

Canonical master, ontology, source-routing standard, opportunity logic, formulas and longitudinal equivalence groups were not modified.
