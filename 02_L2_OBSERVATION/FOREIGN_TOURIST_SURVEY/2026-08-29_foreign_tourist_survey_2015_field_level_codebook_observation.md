# 2015 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-29
Dataset: KORC-FTS-001
Evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2015_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-29.csv`

## Verified advance
The 2015 wave now has same-year field-level evidence for a set of priority WHO/WHEN/SEARCH/STAY/SPEND fields rather than relying on adjacent-year inference.

Directly verified fields include:
- `q1`: first visit vs repeat visit.
- `q1a` / `wq1a`: repeat-visit count category/raw.
- `q2a`: Korea-only vs before/after other-country itinerary structure.
- `q3` / `mq3`: Korea-trip decision timing category/raw.
- `q4`: whether Korea was chosen from the outset or after comparison with another country.
- `q10` / `mq10`: Korea stay-length category/raw.
- `mmq10`: transformed stay-length raw field that sets 61+ days to SYSMISS.
- `mzq19a0`: individual-traveler total expenditure raw field in USD, explicitly excluding international air/ship fare; codebook states a 10,000 USD analysis criterion.
- `mzq19b0`: group-travel total expenditure raw field; codebook states the group structure includes Package + Air-tel and an 11,000 USD analysis criterion.
- `mday_av0:mday_av3`: daily-average expenditure raw fields for total, individual, group and Air-tel travel.
- `chasu`: survey month 1–12.
- `nat`: residence-country code.
- `wt`: survey-weight field presence.

The official raw-data registry also lists a dedicated `2015년 외래관광객 실태조사 원자료.zip`, and the official user-guide registry lists the 2015 guide PDF. Artifact existence is therefore verified separately from respondent-row ingestion.

## Critical comparability break
The official survey history states that in 2015 the visit-count basis changed from `최근 3년간` to `평생`. This is an explicit definition regime break. Therefore 2015+ repeat-visit counts must not be mechanically pooled with <=2014 repeat-visit counts without an explicit harmonization rule supported by same-year documentation/raw distributions.

The same-year codebook verifies `q1a` as the repeat-visit count category and `wq1a` as the raw value. The codebook excerpt itself does not restate the word `평생`, so the lifetime interpretation is anchored to the official survey-history regime statement rather than inferred from the variable label alone.

## Spend constraints
2015 exposes a material travel-type definition difference in expenditure. `mzq19a0` is the individual-travel total and explicitly excludes international air/ship fare. `mzq19b0` is a separate group-travel total with its own Package + Air-tel structure. The codebook also records different analysis criteria (10,000 USD for individual travel and 11,000 USD for group travel). These fields must not be treated as identical-basis totals without same-year guide/raw reconciliation.

`mday_av0:mday_av3` verifies that daily-average fields exist, but the exact denominator, currency-conversion procedure, handling above the stated analysis thresholds, and outlier/missing-value rules remain UNKNOWN.

## Stay constraint
`q10` directly verifies the stay categories 1–10 days, 11–20, 21–30, 31–60, 61–90 and 91+ days. `mmq10` is not equivalent to `mq10`: it explicitly transforms 61+ day values to SYSMISS. Any downstream use must preserve that censoring distinction.

## Remaining blockers
The following remain UNKNOWN/PENDING and are not inferred from adjacent years:
- respondent-row raw ingest;
- exact 2015 same-year universe/filter wording and conditional routing;
- `wt` construction, calibration formula and detailed sample design;
- raw missing-value behavior outside explicitly documented codes;
- exact exchange-rate conversion and expenditure inclusion/exclusion rules beyond the retrieved codebook labels;
- exact daily-average denominator and outlier treatment;
- direct extraction of the 2015 user guide/report methodology text;
- license/reuse terms for the downloadable research artifacts;
- longitudinal harmonization across the 2014→2015 repeat-visit regime break.

## Coverage implication
This run advances 2015 from artifact/broad-definition evidence to `FIELD_LEVEL_VERIFIED` for the listed variables and confirms the 2015 repeat-visit definition break as a hard comparability constraint. It does not change the canonical crosswalk, harmonization status, bulk-ingestion status, graph status, engine readiness or coverage score.