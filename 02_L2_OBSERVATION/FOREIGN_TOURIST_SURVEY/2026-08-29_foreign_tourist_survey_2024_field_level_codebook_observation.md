# 2024 Foreign Tourist Survey — field-level codebook observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-29
Dataset: KORC-FTS-001
Source tier: Tier-A official

## Observation

The official 2024 Foreign Tourist Survey raw-data publication page directly exposes a same-year artifact stack containing the respondent raw ZIP, the main codebook PDF and a separate codebook appendix XLSX. The official main codebook is search-indexed deeply enough to verify several raw analysis/question fields without borrowing any 2023 schema.

Same-year verified raw fields in this pass are:

- `D_MON`: month analysis variable, codes 1–12 corresponding to January–December.
- `D_BUN`: quarter analysis variable, codes 1–4 corresponding to Q1–Q4.
- `Q11`: Question 11, overall satisfaction, five-point scale beginning `1 매우 불만족`, `2 불만족`, `3 보통`, `4 만족`, `5 매우 만족`.
- `Q13`: Question 13, revisit intention. The same-year field name and construct are verified; the retrieved index text directly exposes the lower scale categories but not enough of the positive labels to reproduce the full scale without inference.
- `Q14`: Question 14, intention to recommend to others. The same-year field name and construct are verified; the retrieved index text is truncated before every positive-category label is visible.
- `C식음료1인대체`: Question 10-1 item-level expenditure, item 5 food-material expenditure, an influence-value-replaced categorical analysis variable. Same-year indexed text verifies `1 0$`, `2 0$ 초과~30$ 이하`, `3 30$ 초과~100$ 이하`, plus `98 최대금액 초과자` and `99 무응답`; the intervening upper category is not reproduced because the retrieved snippet truncates it.

## Evidence boundary

This pass does **not** establish the 2024 raw weight field name or formula, calibration/nonresponse adjustment, questionnaire universe/skip logic, complete missing-code rules, the underlying numeric source field for `C식음료1인대체`, the exact replacement sequence, exchange-rate stage, or total-spend inclusion formula. These remain `UNKNOWN/PENDING`.

The direct PDF endpoint is served as `application/octet-stream` in this execution environment, so no unsupported claim is made that the full 27-page codebook was parsed. Only content directly exposed by the official same-year publication/search index was materialized. The separate country/visit-place XLSX was not parsed in this pass.

No longitudinal equivalence group is created and no 2023 field metadata is copied into 2024.

## Provenance

Official raw-data publication page:
`https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=309202&cbIdx=1127`

Official main codebook attachment:
`https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=309202&cbIdx=1127&streFileNm=899400bb-867d-4901-b800-4160d4cc9649.pdf`

L1 evidence:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2024_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-29.csv`

## Remaining P0 blockers

Highest-value next evidence acquisition for 2024 remains direct extraction of the full main codebook and the separate country/visit-place XLSX, especially raw weight field/formula, complete `Q13/Q14` scale labels and horizon wording, all missing/universe rules, geography codes, and expenditure source/transform fields.
