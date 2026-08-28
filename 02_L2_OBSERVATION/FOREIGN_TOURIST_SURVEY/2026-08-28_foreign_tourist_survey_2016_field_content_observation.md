# 2016 Foreign Tourist Survey — field-content observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-28
Dataset: KORC-FTS-001

## Observation
Official Korea Culture & Tourism Institute material explicitly states that its 2016 Foreign Tourist Survey analysis examined travel type, visit purpose, major activities, major visited places, Korea-travel information sources, expenditure amount, stay length and satisfaction. The same official page publishes concrete 2016 examples including China shopping activity 88.9%, Myeong-dong visit 67.7%, expenditure USD 2,059.5; Japan stay 3.9 days and expenditure USD 813.9; and US FIT share 98.5% and business-purpose share 37.0%.

This closes the previous 2016 crosswalk state only at the survey-concept / published-unit layer for those dimensions. It does not establish exact respondent-file variable names, question wording, full response code frames, universes/filters, missing-value codes, weights or sample design.

## Provenance
Primary official analysis: https://know.tour.go.kr/ptourknow/tourgoInfoView19Re.do?seq=102717
Official report registry: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do?pageIndex=2&searchCondition=res_year
Official user-guide registry: https://know.tour.go.kr/stat/fUserGuideOfForeignerDis19Re.do
Official questionnaire registry: https://know.tour.go.kr/stat/fQuestionnaireOfForeignerDis19Re.do

## Measurement boundaries
- `지출금액` is confirmed as a 2016 survey concept with published USD examples, but the exact expenditure basis/inclusions must remain UNKNOWN until same-year codebook/user-guide extraction.
- `체류기간` is confirmed with a published day unit example, but the eligibility criterion and raw representation remain UNKNOWN.
- Activity and visited-place statistics may involve multiple-response treatment; do not infer denominator rules from the summary page.
- The 2016 questionnaire registry entry has no attached file; exact question wording must not be borrowed from 2015 or 2017.
- Survey expenditure must not be equated with payment-card transaction totals.

## Coverage change
2016 is no longer `UNKNOWN` at the broad field-concept level for the eight listed dimensions. It remains `FIELD_EXTRACTION_REQUIRED` for raw/schema-level harmonization.

## L1 evidence
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2016_FIELD_CONTENT_EVIDENCE_MANIFEST_2026-08-28.csv`
