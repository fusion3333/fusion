# 2008 Foreign Tourist Survey — field-level and fieldwork coverage observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-30
Dataset: KORC-FTS-001
Source evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2008_FIELD_LEVEL_AND_FIELDWORK_COVERAGE_EVIDENCE_2026-08-30.csv`

## Verified observations

1. The official same-year 2008 codebook exposes year-specific raw fields including `chasu` (survey month), `qua` (quarter), `nat` (residence country), `city`, `sex`, `edu`, `job`, `age`, `dd2` (visit purpose), `dd13` (travel type), and `wt` (weight).

2. The 2008 residence-country frame explicitly adds India as `nat=16`, consistent with the official survey-history statement that India was added in 2008 and the target sample expanded from 11,453 to 11,978. The 2008 country frame must therefore remain year-specific; no 2007/2009 code equivalence should be assumed without direct comparison.

3. The same-year codebook contains a material temporal/site coverage limitation: survey collection at Incheon Airport could not be conducted in April, May, and November 2008. The codebook states that, for this reason, report results were presented by quarter.

4. This limitation must not be overgeneralized into a claim that the entire nationwide survey was absent in those months. The evidence only verifies an Incheon Airport site-month interruption. Other site-month collection, achieved sample by location/month, and any weighting compensation remain UNKNOWN until the same-year report/raw/user methodology is directly inspected.

5. The existence/name of the respondent weight field `wt` is verified, but the weighting formula, calibration/post-stratification cells, nonresponse adjustment, trimming/capping, zero-cell handling, and any special treatment of the three Incheon missing site-months remain UNKNOWN.

## Comparability consequence

2008 monthly granularity is not evidence-safe for published-series reconstruction solely from the codebook because the largest gateway has a documented three-month fieldwork interruption and the official reporting note routes results to quarters. Do not invent monthly completeness or interpolate April/May/November Incheon observations. Quarter-level reporting is explicitly supported; respondent-level month analysis requires raw/site denominator and weighting verification first.

## Remaining blockers

- exact site-by-month achieved sample and fieldwork dates;
- same-year weight construction and treatment of Incheon non-fielded months;
- full country/city code artifact extraction;
- repeat-visit, stay, activity, shopping, satisfaction, revisit/recommendation and expenditure field extraction;
- universe/skip logic and respondent/item missing codes;
- respondent raw ZIP ingestion, row count and checksum;
- attachment-level license/reuse scope.

No canonical crosswalk, architecture, ontology, source-routing, psychology, KTOF, business or opportunity-scoring logic is modified by this observation.
