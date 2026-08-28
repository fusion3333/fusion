# 2021 Foreign Tourist Survey — COVID regime, weighting, and artifact observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-29
Canonical dataset id: `KORC-FTS-001`
Source L1: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2021_COVID_REGIME_WEIGHT_ARTIFACT_EVIDENCE_2026-08-29.csv`

## Verified observations

1. **2021 remains inside the temporary COVID methodology regime.** The official Foreign Tourist Survey history states that the 2021 survey method was the same as 2020: reduced questionnaire content and survey execution **without sample design**.

2. **2021 is not questionnaire-identical to 2020.** The same official history explicitly records a 2021 content addition: **recommendation intention to others**. This verifies domain presence only; exact wording, response scale, raw variable name, code values and filter/universe remain pending direct extraction from the 2021 codebook.

3. **Pre-2020 weighting rules must not be carried into 2021.** Official KCTI tourism-statistics usage guidance states that Foreign Tourist Survey data from 2020 onward were collected under the COVID-era outbound-visitor census-style approach and **weights were not applied**. Record 2021 as `NO_WEIGHT_APPLIED` / `NO_SAMPLE_DESIGN`, not as a wave with a missing or unknown conventional WT variable.

4. **Official 2021 raw data is directly registered.** The official data-download registry lists `2021년 외래관광객 조사 원자료` with ZIP filename `2021년_외래관광객조사_원자료_1720399586803.zip`. Respondent bytes were not ingested in this run.

5. **The same-year official codebook is directly registered.** The official codebook registry lists `2021년 외래관광객조사 코드북` as PDF, registered 2023-07-14. Field-level parsing is still pending.

6. **The same-year official report is directly registered.** The official report registry lists `2021년 외래관광객조사 보고서` as PDF, registered 2022-05-31. This resolves the canonical manifest's previous `report=UNKNOWN` entry and supports a mechanical promotion to `VERIFIED_AVAILABLE`.

## Comparability boundary

2021 may be grouped with 2020 only at the verified high-level temporary-regime property (`reduced questionnaire`, `no sample design`, `no weight applied`). It must **not** be treated as field-identical to 2020 because the official history records at least one questionnaire-content change in 2021.

The official census-style wording does not establish 100% response or perfect operational coverage. Exact respondent count, collection period, airport/port coverage, nonresponse/operational exceptions, detailed stay criterion and expenditure basis remain to be recovered from the same-year report/codebook/raw package.

## Remaining P0 blocker

Direct 2021 PDF/codebook extraction is still required for at least:
`raw_variable, question_wording, code_values, universe/filter, unit, stay_criterion, expenditure_basis, geography, missing_codes, exact respondent count, collection period, operational coverage/limitations`.

For the recommendation-intent item specifically, do not borrow variable names, response codes or scale semantics from 2019, 2022 or 2023 without same-year evidence.

## Sources

- Tier-A official survey history: https://know.tour.go.kr/stat/fResearchSumDis19Re.do
- Tier-A official raw-data registry: https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
- Tier-A official codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
- Tier-A official report registry: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do
- Tier-A official tourism-statistics usage guidance: https://know.tour.go.kr/customer/contestevent/detail19Re.do?seq=27281
