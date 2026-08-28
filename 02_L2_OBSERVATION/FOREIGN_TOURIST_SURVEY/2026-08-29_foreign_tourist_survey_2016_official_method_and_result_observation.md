# 2016 Foreign Tourist Survey — official method/result observation

Status: EVIDENCE-SUPPORTED L2 ONLY
Date: 2026-08-29
Canonical dataset id: `KORC-FTS-001`

## Evidence-safe observations

1. The official Tourism Knowledge Information System currently lists separate 2016 artifacts for the main codebook (PDF), country/city codebook (PDF), user guide (PDF), annual report (PDF), and respondent raw ZIP. The raw-download registry also lists an integrated 2014–2016 raw ZIP. Respondent bytes have not been ingested here.

2. Korea Tourism Organization's official 2017 survey publication explicitly records the 2016 baseline used for the 2017 expansion: 12,003 respondents and 16 survey countries. It states that 2017 expanded the survey to 13,841 respondents and 19 countries by adding Vietnam, Indonesia and the Philippines, and expanded survey places from 6 to 8 by adding Cheongju and Daegu international airports. This is a verified 2016 sample-frame anchor, but the exact 2016 country list and exact six survey-place list are not reconstructed from subtraction or adjacent-year assumptions.

3. The same official KTO release provides verified published 2016 aggregate anchors: revisit rate (two or more visits) 38.6%, intention to revisit for tourism within three years 84.1%, intention to recommend 88.9%, average stay 6.4 days, and reported regional/local visit ratio 48.3%. These are aggregate published estimates only; they do not establish raw variable names, code frames, weighting construction, filters, or transformed-field logic.

4. A concrete same-year wording blocker exists: the official questionnaire registry has a 2016 questionnaire entry dated 2017-06-02 but currently displays `No File`. Therefore question wording must be verified through the 2016 codebook/user guide/report/raw labels or another authoritative archived copy. No 2015/2017 wording is inherited.

## Unresolved fields

- raw variable names and complete code values: `MISSING_FIELD_EXTRACTION`
- universe/filter per variable: `UNKNOWN`
- weight variable name/formula/calibration/strata/PSU/nonresponse adjustment: `UNKNOWN`
- exact 2016 country list and exact six survey-place list: `PENDING_SAME_YEAR_ARTIFACT_EXTRACTION`
- stay raw/transformed field logic and outlier treatment: `UNKNOWN`
- expenditure basis, currency conversion, caps/outlier rules and daily-spend denominator: `UNKNOWN`
- questionnaire attachment: `OFFICIAL_ENTRY_VERIFIED_NO_FILE`
- respondent raw rows: `OFFICIAL_DOWNLOAD_ENTRY_VERIFIED_NOT_INGESTED`
- license/reuse terms for raw/codebook artifacts: `UNKNOWN`

## Comparability rule

2016 must remain a separate same-year evidence unit until its PDF codebook/user guide/report are directly extracted. The 2017 expansion evidence is used only to establish explicitly stated 2016 baselines and changes; it is not used to infer 2016 variable schemas or code equivalence.

## Source routing

Tier-A official sources only:
- Tourism Knowledge Information System — codebook registry
- Tourism Knowledge Information System — user-guide registry
- Tourism Knowledge Information System — questionnaire registry
- Tourism Knowledge Information System — raw-data download registry
- Korea Tourism Organization / Korea Tourism Data Lab — official 2017 survey publication and official press release containing explicit 2016 comparators

No architecture, ontology, opportunity logic, formulas, business ranking or canonical crosswalk was modified in this run.
