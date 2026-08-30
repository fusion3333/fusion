# 2023 Foreign Tourist Survey — Field-Level Codebook Observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-30
Dataset: KORC-FTS-001
Source tier: Tier-A official

## New evidence acquired
The canonical crosswalk still marks 2023 as `FIELD_EXTRACTION_REQUIRED`. The same-year official 2023 Foreign Tourist Survey package is publicly registered with three attachments: the PDF code table, respondent `SAV`, and respondent `XLSX`. The parent package page explicitly states that the 2023 survey returned to the pre-COVID 2019-level survey method/content after the reduced 2020–2022 regime.

The official same-year code table directly exposes the following raw/analysis fields:
- `MVIT` Korea visit count average field, `RVIT` Korea visit-count category, and `XRVIT` revisit field.
- `TYP` travel type: individual / Air-tel semi-package / package tour.
- `Q1` main visit purpose.
- `Q1_1a1~Q1_1a3` Korea-interest trigger field family.
- `Q2a1~Q2a_dk` alternative Asian destinations considered before choosing Korea.
- `Q10_3a1~Q10_3a3` shopping-place field family.
- `Q11` overall satisfaction and `Q12a01~Q12a26` item-satisfaction field family.
- `Q13` revisit intention and `Q14` recommendation intention.
- `RDAY전체TOT`, `RDAY전체TOT_RAW2`, and `RDAY전체TOT_RAW61` analytical daily-expenditure category variants.
- `weight` as the respondent weight field.

## Evidence-safe implications
1. The 2023 wave is not merely an aggregate published-results source: an official same-year respondent package with `SAV` and `XLSX` is publicly attached. Respondent bytes were not ingested in this run, so row-level coverage is still `NOT_INGESTED`, not complete.
2. 2023 is a documented regime restoration after the COVID-modified 2020–2022 waves. The official survey-history page states that survey method/content returned to the pre-COVID 2019 level. This does **not** prove variable-by-variable equivalence to 2019; same-year field-level comparison is still required.
3. The code table explicitly separates repeat-visit representations (`MVIT`, `RVIT`, `XRVIT`). Their transformation relationship is not inferred beyond their labels.
4. The alternative-destination field family directly measures Asian countries considered before Korea, with explicit categories including Japan, China, Taiwan, Hong Kong, Singapore, Thailand, Malaysia, Macao, India, Indonesia, Philippines, Vietnam, Cambodia, other, and none. This is direct SURVEY evidence, not a market-share or actual visitation measure.
5. `Q11` and `Q12a01~Q12a26` confirm separate overall and item-level satisfaction constructs. No positive-response aggregation is inferred.
6. `Q13` is revisit **intention**, not actual repeat behavior; `Q14` is recommendation intention. These must remain separate from realized revisit or observed WOM.
7. The 2023 expenditure code table contains multiple analytical variants. `RDAY전체TOT_RAW2` is explicitly labeled as top/bottom 1% replacement, while `RDAY전체TOT_RAW61` adds 61+ day missing treatment. These field labels confirm that outlier/stay-duration treatment exists at field level, but they do not by themselves identify the exact published-series formula, percentile grouping/tie rule, exchange-rate sequence, or denominator mechanics.
8. The official design defines the eligible survey population as foreign travelers age 15+ leaving Korea after stays of 90 days or less, with stated exclusions including Korean-national foreigners, transit-only overnight visitors, daigong, non-tourism pilots/crew/military, and cruise passengers. The target annual sample is 16,000, allocated monthly and then by country, survey location, sex, and age using recent inbound statistics. The respondent field `weight` is directly verified, while exact same-year formula internals remain unresolved.

## Provenance / access / license
- Official raw-package page: Korea Tourism Data Lab, 2023 Foreign Tourist Survey raw data.
- Attached artifacts explicitly listed: code-table PDF, `2023_외래관광객조사_DATA.SAV`, and `2023 외래관광객조사 DATA.xlsx`.
- Parent package page displays KOGL Type 4 (attribution + non-commercial + no derivatives).
- Measurement type: official SURVEY / respondent microdata package.
- Geography: Korea inbound foreign visitors.
- Period: 2023 calendar year, monthly fieldwork.

## Remaining UNKNOWN / blocker fields
- respondent row count and file checksums because SAV/XLSX bytes were not ingested;
- full code table extraction for all variables, code labels, item wording and missing codes;
- exact universe/skip rules for each field family;
- exact derivation among `MVIT`, `RVIT`, and `XRVIT`;
- complete `Q1_1*`, `Q2_1*`, `Q12*`, and `Q14` code frames where the indexed official excerpt was partial;
- exact same-year weighting formula, calibration cells, denominator construction and any nonresponse adjustment;
- exact percentile calculation, grouping/tie handling, replacement values, exchange-rate conversion sequence and component aggregation for expenditure;
- exact relationship between the 61+ day analytical missing variants and each published annual/quarterly expenditure or stay statistic;
- respondent-level harmonization to 2019 remains pending and must not be inferred from the regime-restoration statement alone.

## Repository action
Created narrow L1 evidence file:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2023_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-30.csv`

Canonical master architecture, ontology, source-routing standard, psychology layer, origin-market mirror framework, competitor/meta-intelligence strategy, KTOF formulas, business strategy, opportunity logic, and longitudinal equivalence groups were not modified.
