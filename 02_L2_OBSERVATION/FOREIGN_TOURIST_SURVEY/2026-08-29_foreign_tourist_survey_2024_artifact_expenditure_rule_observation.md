# 2024 Foreign Tourist Survey — artifact coverage and expenditure-processing observation

Date: 2026-08-29
Layer: L2 OBSERVATION
Scope: evidence-supported only

## Observation

Official 2024 Foreign Tourist Survey artifact coverage is now directly verified for the raw-data ZIP, main codebook PDF, separate country/visit-location codebook XLSX, questionnaire PDF, and annual final report PDF. The raw registry identifies the current downloadable file as `2024년_외래관광객조사원자료_수정_1753156700216.zip`; the `_수정_` filename is preserved as provenance only and no undocumented correction history is inferred.

The main codebook and the separate country/visit-location codebook were registered on 2025-06-09. The questionnaire PDF was registered later, on 2025-10-15. The annual final report (`2024 외래관광객조사 보고서(확정치)`) was registered on 2025-05-29. This resolves prior canonical-manifest UNKNOWN fields for questionnaire, report, and country/visit codebook availability, but it does not constitute field-level extraction.

The official report registry also confirms the 2024 publication regime: Q1, Q2, Q3, and Q4 results were published as provisional reports, followed by the separate annual final report. Provisional quarterly values therefore must not be substituted silently for annual final values.

A material expenditure comparability rule is explicitly published in the official result-summary notes. International transportation cost is included in expenditure from 2020 onward. The same official note states that the legacy expenditure influence-value treatment through 2022 excluded amounts above US$10,000 for individual travelers and above US$11,000 for group/airtel travelers, while from 2023 onward upper-1% and lower-1% cases are replaced with the nearest value. Therefore 2024 belongs to the 2023+ percentile-replacement processing regime and must not be mechanically compared with pre-2023 expenditure outputs without preserving that break.

The official note does not establish the exact respondent-level variable names, component inclusion logic, exchange-rate stage, weighting order, or whether every expenditure table applies the transformation identically. Those remain unresolved until the 2024 codebook/raw schema/report are directly extracted at field level.

## Current blockers

- Main 2024 codebook raw-variable inventory: PENDING.
- Exact code values, missing values, question wording, skip/universe rules: PENDING.
- Exact country and visit-location codes from the separate XLSX: PENDING.
- Weight variable, construction formula, calibration, strata/PSU and nonresponse adjustment: UNKNOWN.
- Same-year respondent universe, realized sample, monthly realized counts and fieldwork exceptions: not established in this observation.
- Exact expenditure component variables, currency conversion, percentile-processing implementation order and daily-spend denominator: UNKNOWN.
- Raw respondent rows: NOT_INGESTED.
- License for downloaded artifacts/raw dataset: UNKNOWN in the sources used here.

## Evidence anchors

- KCTI Tourism Knowledge Information System, official codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
- KCTI Tourism Knowledge Information System, official questionnaire registry: https://know.tour.go.kr/stat/fQuestionnaireOfForeignerDis19Re.do
- KCTI Tourism Knowledge Information System, official report registry: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do
- KCTI Tourism Knowledge Information System, official raw-data registry: https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
- KCTI Tourism Knowledge Information System, official result-summary methodological notes: https://know.tour.go.kr/stat/fResearchExpSummaryDis19Re.do
- KCTI notice, 2024 annual final report publication: https://know.tour.go.kr/customer/notice/detail19Re.do?seq=28742
