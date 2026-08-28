# 2011 Foreign Tourist Survey — field-level codebook observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-28
Dataset: KORC-FTS-001

## Evidence acquired
The official 2011 Foreign Tourist Survey codebook exposes field-level raw names and code frames for core longitudinal dimensions that were previously only partially materialized in the canonical crosswalk. Verified examples include `chasu` (survey month), `nat` (residence country), `city`, `sex`, `edu`, `job`, `age`, `wt` (weight), `q1` (travel type), `q2b/wq2b` (recent-three-year visit count/category and raw), `q3a2/mq3a2/mmq3a2` (stay length forms), `q5/mq5` (decision timing), `q6/q6a1:q6a5` (alternative-country consideration), `q7` and `q7a1:q7a3` (visit purpose and motivation), `q8a1:q8a3` (information source), visit-place fields, expenditure fields, satisfaction fields, and revisit/recommend/image fields.

Primary Tier-A artifact:
https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14090&cbIdx=1127&streFileNm=d30d1a95-6235-11e8-9868-892a614a29fd.pdf

## Verified measurement boundary
Official survey history states that in 2011 the survey target was expanded to visitors staying at least 1 day and within 1 year. Therefore 2011 is a population/universe regime boundary and must not be mechanically pooled with pre-2011 waves until the preceding-wave eligibility definition is directly reconciled.

Within the 2011 codebook, `q3a2` provides categorical stay duration, `mq3a2` is the raw stay-duration field, and `mmq3a2` is a transformed raw form in which stays of 61 days or more are system-missing. These fields are not interchangeable.

## Expenditure observation
The codebook contains travel-type-specific raw expenditure structures, including `mq15a0` for individual-travel total expenditure and `mq15b0` for group-travel total expenditure, plus itemized fields for lodging, shopping, food/beverage, transport, entertainment, Korean travel-agency costs, culture, sports, other expenditure and international air/sea transport. `mday_av0:mday_av3` provide daily-average expenditure raw values by overall/individual/group/Air-tel grouping.

The exact denominator and inclusion/exclusion reconciliation for all travel-type totals has not been independently reconstructed in this run. Therefore these fields are FIELD_LEVEL_VERIFIED but not longitudinally harmonized.

## Conflict / missing-data flags
- Respondent-level raw rows were not ingested.
- Full questionnaire universe/filter logic was not independently reconstructed for every conditional field.
- `wt` is verified as the weight field, but the exact weighting formula/design remains UNKNOWN in this evidence pass.
- Large place-code frames require same-year code-frame extraction before geographic harmonization.
- The codebook text surfaced for `q21` contains an apparent duplicated negative wording in the image-change scale; semantic recoding must be checked against the same-year questionnaire before use.
- License for the codebook artifact is UNKNOWN in this pass.

## Coverage effect
2011 advances from broad PARTIAL_FIELD_VERIFIED concept coverage to FIELD_LEVEL_VERIFIED for multiple core WHO/WHEN/STAY/WHY/SEARCH/SPEND/SATISFACTION fields. This does not close the P0 crosswalk gate because universe/filter, weighting methodology, raw-row ingest, missing-value behavior and longitudinal equivalence groups remain incomplete.

No canonical master, ontology, scoring logic, psychology layer, competitor layer or business/opportunity model was modified in this run.
