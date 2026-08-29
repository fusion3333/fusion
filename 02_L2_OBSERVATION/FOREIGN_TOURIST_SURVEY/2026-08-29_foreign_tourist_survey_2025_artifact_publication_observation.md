# 2025 Foreign Tourist Survey — artifact/publication observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-29
Dataset: KORC-FTS-001

## Observation
The official Tourism Knowledge Information System currently verifies a 2025 Foreign Tourist Survey raw-data ZIP, a 2025 XLSX codebook, and a 2025 annual final report PDF. The annual final report was registered on 2026-05-26, so the prior canonical-manifest `report=UNKNOWN` state is stale and may be mechanically promoted to `VERIFIED_AVAILABLE`.

The 2025 publication sequence is explicitly separated into quarterly provisional reports and a later annual final report: Q1 registered 2025-05-29, Q2 2025-08-29, Q3 2025-11-28, Q4 2026-02-25, followed by the final report on 2026-05-26. Quarterly provisional values must not be substituted for annual final values without an explicit revision check.

The current official questionnaire registry contains entries through survey year 2024 but no 2025 row. This is evidence only of current registry absence; it is not evidence that no 2025 questionnaire exists or was never produced. The 2025 canonical questionnaire state therefore remains UNKNOWN/NOT_VERIFIED.

The current codebook registry exposes one 2025 XLSX codebook row. A separate 2025 country/visit codebook row was not verified. Because the XLSX itself was not parsed in this run, country/visit mappings may be embedded in the main workbook; that field remains UNKNOWN rather than being inferred from 2024.

## Evidence boundary
No respondent rows were ingested. No raw variable names, code values, question wording, universe/filter, missing codes, weight variables/formula, sample design, stay criterion, expenditure basis, geography code mappings, or longitudinal equivalence were inferred. These remain the P0 field-extraction blockers.

## Sources
- Official report registry: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do
- Official codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
- Official raw-data registry: https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
- Official questionnaire registry: https://know.tour.go.kr/stat/fQuestionnaireOfForeignerDis19Re.do

## Confidence
HIGH for artifact/publication registry states; MEDIUM for the statement that no separately listed 2025 country/visit codebook is currently visible, because the main XLSX has not been opened and may contain those mappings.
