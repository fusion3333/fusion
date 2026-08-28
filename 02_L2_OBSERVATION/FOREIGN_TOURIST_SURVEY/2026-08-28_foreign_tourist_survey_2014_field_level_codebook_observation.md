# 2014 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-28
Dataset: KORC-FTS-001
Evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2014_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-28.csv`

## Verified advance
The 2014 wave is no longer limited to broad field-presence evidence for several priority dimensions. Same-year codebook evidence now verifies raw variable names and code frames for repeat-visit, prior-visit timing, multi-country itinerary, decision timing, alternative-destination consideration, visit purpose, travel motivation, stay length, satisfaction, revisit intent, expenditure, survey month, residence country and survey weight presence.

Key verified fields include:
- `q1a` / `wq1a`: recent-three-year Korea visit count, categorized/raw.
- `q1b`: prior Korea visit timing by year/quarter.
- `q2a`: Korea-only vs before/after other-country itinerary structure.
- `q3` / `mq3`: Korea-trip decision timing category/raw.
- `q4` and `q4a1:q4a5`: alternative-country consideration and considered countries.
- `q5`, `q5a1:q5a3`: visit purpose and ranked travel motivations.
- `q10` / `mq10`: Korea stay length category/raw. `q10` explicitly contains 1–10 days, 11–20, 21–30, 31–60, 61–90, 91+ and nonresponse categories.
- `q13`, `q14`: overall satisfaction and three-year revisit intention.
- `mtzq19`: per-person total trip expenditure raw field in USD; `mtzq19a1:a10` expose category components.
- `mday_av0:mday_av3`: daily-average expenditure raw fields for total, individual, group and Air-tel travel.
- `chasu`: survey month 1–12.
- `nat`: residence-country code.
- `wt`: survey-weight field presence.

## Comparability constraints
2014 repeat-visit remains the pre-2015 `최근 3년간` definition. The official survey history records a 2015 change to a lifetime basis, so 2014 and 2015+ repeat-visit values must not be mechanically pooled.

The official survey history also records a 2014 expansion of visited-place items. Therefore 2013→2014 visited-place code equivalence is not assumed; explicit same-year code-frame reconciliation remains required.

`mtzq19` is explicitly labeled as per-person total trip expenditure in USD, and category-level raw expenditure variables are present. However the exact exchange-rate conversion procedure, exclusions/inclusions, treatment by travel type, missing-value behavior and outlier handling are not yet verified. `mday_av0:mday_av3` are verified as daily-average expenditure raw fields in dollars, but the denominator formula must remain UNKNOWN until same-year user-guide/raw validation.

## Remaining blockers
The following remain UNKNOWN or pending and are not inferred from adjacent years:
- respondent-row raw ingest;
- exact universe/filter routing for conditional fields;
- `wt` construction/calibration formula and detailed sample design;
- raw missing-code behavior for continuous/raw variables;
- exact 2014 stay-eligibility statement from same-year guide/report;
- exact before/after visited-place code-frame delta;
- expenditure conversion, denominator and outlier rules;
- license/reuse terms for the downloadable research artifacts.

## Coverage implication
This run advances multiple 2014 dimensions from broad `PARTIAL_FIELD_VERIFIED` toward `FIELD_LEVEL_VERIFIED` in a narrow dated evidence file. It does not change the canonical crosswalk, harmonization status, bulk-ingestion status or coverage score. Longitudinal equivalence remains pending.
