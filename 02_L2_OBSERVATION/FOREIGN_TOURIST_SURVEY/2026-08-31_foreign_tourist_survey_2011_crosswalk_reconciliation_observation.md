# 2011 Foreign Tourist Survey canonical crosswalk reconciliation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-31
Dataset: KORC-FTS-001

## What changed
The canonical 2007–2025 Foreign Tourist Survey variable crosswalk still carried `raw_variable=UNKNOWN` for eight 2011 dimensions even though a same-year Tier-A field-level evidence file already existed. The crosswalk was mechanically reconciled to that evidence; no longitudinal equivalence or ontology change was introduced.

Verified same-year mappings now materialized in the canonical crosswalk:

- `q1` → travel type
- `q2b` → recent-3-year repeat visit count/category; companion raw field `wq2b` is separately verified
- `q2c` → prior visit timing by year/quarter
- `q3a2` → stay length category; companion `mq3a2` raw days and `mmq3a2` 61+ SYSMISS transform are separately verified
- `q5` → Korea-trip decision timing; companion raw-month field `mq5` is separately verified
- `q6` → whether another destination was considered before choosing Korea
- `q7` → visit purpose
- `q7a1` → travel motivation, first rank; `q7a2/q7a3` are known companion ranking fields but are not collapsed into the first-rank field

## Evidence boundary
The source is the same-year official 2011 codebook distributed through Korea Tourism Data Lab / KTO. The official search-indexed PDF text exposes the variable names and code values used for this reconciliation. The PDF endpoint returns `application/octet-stream` in the current acquisition environment, so a rendered-PDF verification pass could not be completed in this run; this limitation is already preserved in L1.

No adjacent-year codes, wording, weights, sample design, denominator, skip/universe, or missing-value rules were inferred.

## Comparability controls preserved
2011 remains within the pre-2015 repeat-visit regime (`recent 3 years`), so `q2b` must not be mechanically pooled with the post-2015 lifetime/no-time-limit definition. The 2011 survey-history regime change expanding eligible stays to at least 1 day and within 1 year is retained as a stay/population comparability flag.

## Remaining blockers
- exact universe/skip logic for the materialized fields
- 2011 weighting variable/formula/calibration cells
- sample-design details and monthly/site allocation
- complete higher-category/missing mapping for `q3a2`
- raw numeric domains/missing representations for `wq2b`, `mq3a2`, and `mq5`
- response mechanics for `q7` and ranked `q7a1/q7a2/q7a3`
- respondent raw-row ingestion, row count, domain validation and checksum
- attachment-level license

## Files
Evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2011_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-30.csv`

Canonical crosswalk: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_VARIABLE_CROSSWALK_2007_2025_V1.csv`

No master architecture, ontology, source-routing standard, psychology layer, origin-market framework, competitor/meta-intelligence strategy, KTOF formula, business strategy, or opportunity-scoring logic was modified.