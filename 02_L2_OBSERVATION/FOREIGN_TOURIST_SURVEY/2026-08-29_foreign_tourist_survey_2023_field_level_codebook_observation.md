# 2023 Foreign Tourist Survey — field-level codebook observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-29
Dataset: KORC-FTS-001

## Evidence-supported observations

The official 2023 code table now establishes same-year raw/analysis field names for several P0 crosswalk dimensions rather than relying on 2019 or 2024 adjacency.

- `D_MON` is the month analysis variable with codes 1–12 for January–December.
- `D_BUN` is the quarter analysis variable with codes 1–4 for Q1–Q4.
- `D_NUM` is the visit-frequency analysis variable: 1 time, 2 times, 3 times, 4+ times. The derivation from any underlying raw count remains UNKNOWN.
- `D_GUB` is travel type: individual, AIR-TEL, group.
- `Q11` is overall satisfaction on a 5-point very dissatisfied → very satisfied scale.
- `Q12a01~Q12a26` is the item-level satisfaction field family using the same exposed 5-point scale; exact 26 item labels/applicability were not fully extracted in this run.
- `Q13` is revisit intention on a 5-point agreement scale. The exact questionnaire time horizon is still UNKNOWN and must not be inferred from another wave.
- `Q14` is intention to recommend to others on the same exposed agreement scale.
- `weight` is the exact weight-field name. Its formula, calibration, nonresponse adjustment, strata and PSU remain UNKNOWN.

The code table also exposes 2023 expenditure-analysis fields explicitly labeled as top/bottom-1%-replaced categories, including `C식음료1인대체`, `C국제한국1인대체`, `C국제국외1인대체`, and `C국제수상1인대체`. This directly confirms that international transport components are represented in the same-year code table and that replacement-derived analysis variables exist. It does not establish the exact transformation sequence, raw numeric source fields, total-spend inclusion formula, or daily-spend denominator.

## Provenance and limitations

Primary authority is the official Korea Tourism Data Lab attachment `2._2023_외래관광객조사_코드표.pdf` attached to the official 2023 raw-data publication page. The site states the 2023 raw package also contains SAV and XLSX respondent data and marks the page as Korea Open Government License Type 4. The binary PDF endpoint was served as `application/octet-stream` to the browser fetch during this run, so field evidence was taken only from the official search-indexed text of that exact attachment. Respondent rows were not ingested.

Do not infer adjacent-year wording, missing codes, universes, weight construction, expenditure replacement mechanics, or harmonized equivalence from these fields. These remain `UNKNOWN/PENDING` until direct same-year extraction supports them.

## Source

- Official code table attachment: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=307451&cbIdx=1127&streFileNm=30159b81-b06b-4d49-8d24-df053fa81fd5.pdf
- Official 2023 raw-data publication page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=307451&cateCont=spt05&cbIdx=1127&pageIndex=1
- L1 evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2023_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-29.csv`
