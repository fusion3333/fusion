# 2011 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-30
Dataset: KORC-FTS-001
Source tier: Tier-A official

## New evidence acquired
The same-year official 2011 Foreign Tourist Survey codebook exposes exact raw field names and coded responses for a substantial set of previously only partially identified dimensions.

Verified raw fields include:
- `q1` travel type: individual / group / Air-tel / missing.
- `q2b` recent-3-year Korea visit count, plus `wq2b` raw visit-count field.
- `q2c` prior Korea visit timing by year-quarter.
- `q3a2` stay-length category, `mq3a2` raw stay length, and `mmq3a2` raw stay length with 61+ days explicitly labelled SYSMISS.
- `q4a` Korea-only / pre-Korea / post-Korea multi-country travel position and `q4b1` pre-Korea country coding.
- `q5` travel-decision timing plus `mq5` raw months.
- `q6` whether Korea was selected from the start versus after comparison with other countries, and `q6a1` compared-country coding.
- `q7` visit purpose and `q7a1` first-ranked travel motivation.
- `yq11a01~yq11a99` visited 16 provinces/cities and `grp1~grp99` grouped-region representation.
- `q13a1` first-ranked in-Korea activity.
- `q14a1` first shopping item and `q14b1` first shopping place.

## Evidence-safe implications
1. The 2011 repeat-visit construct is explicitly bounded to the **recent 3 years**. This supports the existing comparability warning against mechanically pooling with the post-2015 no-time-limit repeat-visit definition.
2. The codebook contains both categorized and raw versions for repeat-visit count, stay length and travel-decision timing. These fields should remain distinct in later extraction/harmonization.
3. `mmq3a2` explicitly states that 61+ day raw stay values are SYSMISS in that analysis field. This is a field-level transform marker, not proof of the full published-average formula.
4. The 2011 competitive-destination layer is directly represented by `q6` and `q6a1`; this is stated preference/consideration evidence and must not be interpreted as observed substitution behavior.
5. Region and activity/shopping code families are same-year verified, but array/dummy semantics, skip logic, weights and derivation formulas remain unresolved.

## Remaining UNKNOWN / blocker fields
- exact universe/skip rules for each field beyond what is explicit in retrieved indexed codebook text;
- raw numeric ranges and missing representations for `wq2b`, `mq3a2`, `mq5`;
- exact derivation formula for `mmq3a2` and `grp1~grp99`;
- raw weight variable and 2011 weight construction/calibration/nonresponse adjustment;
- sample-design details not re-verified in this run;
- expenditure amount fields, exchange-rate handling, outlier treatment and daily-spend denominator;
- constituent-country definition for country code `996=중동`;
- respondent raw rows were not ingested.

## Source/access limitation
The official PDF download endpoint is authoritative but returns `application/octet-stream` to direct fetch in the current environment. Only same-year text exposed by the official search index was used. No adjacent-year field, code, wording or transformation was copied.

## Repository action
Created narrow L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2011_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-30.csv`

Canonical master, ontology, formulas, source-routing standard and longitudinal equivalence groups were not modified.
