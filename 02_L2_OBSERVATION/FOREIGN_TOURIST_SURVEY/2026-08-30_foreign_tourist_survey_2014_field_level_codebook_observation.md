# 2014 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-30
Dataset: KORC-FTS-001
Source tier: Tier-A official

## New evidence acquired
The same-year official 2014 Foreign Tourist Survey codebook directly exposes raw field names and codes for several dimensions that remain UNKNOWN/PARTIAL in the canonical crosswalk.

Verified raw fields include:
- `chasu` survey month (1–12), `nat` residence country and `city` residence city with a separate same-year country/city codebook.
- `q1a` recent-3-year Korea visit count and `wq1a` raw visit-count field.
- `q1b` prior Korea visit timing by year-quarter, with `q1b1`/`q1b2` field names also exposed.
- `yq9a01~yq9a99` visited 17 provinces/cities and `grp1~grp99` regional visit fields.
- `q10` stay-length category, `mq10` raw stay length and `mmq10` raw stay length with 61+ days explicitly marked SYSMISS.
- `q13` overall Korea-trip satisfaction and the `q13a...` item-satisfaction field family.
- `mtzq19` total trip expenditure raw field and `mtzq19a1~mtzq19a10` expenditure-component raw fields.
- `mday_av0` overall daily-average expenditure raw field and `mday_av1`/`mday_av2`/`mday_av3` travel-type-specific daily-average expenditure fields.
- `wt` weight variable.

## Evidence-safe implications
1. The 2014 repeat-visit construct is explicitly bounded to the **recent 3 years**. The official survey-history page independently states that the visit-count basis changed from `recent 3 years` to `lifetime` in 2015. Therefore 2014 must not be mechanically pooled with 2015+ visit-count fields without a regime marker.
2. The official survey history records **2014 expansion of visit-place items**. The same-year codebook directly exposes 17 province/city visit fields plus regional-group fields, so 2014 visit-place coverage should be treated as a documented questionnaire regime change rather than silently assumed equivalent to earlier years.
3. `mmq10` explicitly applies a 61+ day SYSMISS transformation. This is a field-level analytical marker, not proof of the complete published average-stay formula.
4. `q13` uses a 1–5 satisfaction scale plus `8=not applicable` and `9=don't know/nonresponse`. No positive-response aggregation is inferred.
5. The codebook directly identifies respondent-level total-trip expenditure (`mtzq19`), ten raw expenditure components (`mtzq19a1~mtzq19a10`) and daily-average expenditure fields in USD. However the exact analysis-basis transformation, exchange-rate timing, outlier treatment, missing handling, component aggregation and denominator remain unresolved, so no longitudinal expenditure harmonization is performed.
6. `wt` is directly verified as the 2014 weight variable. The construction formula, calibration cells and nonresponse adjustment remain UNKNOWN.

## Remaining UNKNOWN / blocker fields
- exact questionnaire universe/skip rules for the verified fields;
- raw numeric ranges/missing representations for `wq1a`, `mq10` and expenditure raw fields;
- detailed value frames for `q1b1` and `q1b2`;
- complete same-year country/city code mapping and constituent-country definition for `중동`;
- exhaustive POI-level visit-place mapping and exact derivation of `grp*` regional fields;
- full item-satisfaction field family and any revisit/recommendation fields not directly exposed in the retrieved official excerpts;
- sample-design mechanics and exact weight construction/calibration/nonresponse adjustment;
- expenditure analysis-basis transform, exchange-rate timing, component aggregation, outlier treatment, missing-value handling and daily-average denominator;
- respondent raw rows were not ingested.

## Source/access limitation
The official Korea Tourism Data Lab PDF is authoritative and is separately registered in the Tourism Knowledge Information System as the 2014 same-year codebook. The current direct-fetch path is blocked by the site endpoint/robots behavior, so only text directly exposed by the official search index was used. No adjacent-year variable, code, wording or transformation was copied.

## Repository action
Created narrow L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2014_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-30.csv`

Canonical master, ontology, source-routing standard, opportunity logic, formulas and longitudinal equivalence groups were not modified.
