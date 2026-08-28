# 2020 Foreign Tourist Survey — COVID regime, weighting, and artifact observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-29
Canonical dataset id: `KORC-FTS-001`
Source L1: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2020_COVID_REGIME_WEIGHT_ARTIFACT_EVIDENCE_2026-08-29.csv`

## Verified observations

1. **2020 is a structural methodology break.** The official Foreign Tourist Survey history states that survey administration returned from Korea Tourism Organization to Korea Culture and Tourism Institute in 2020 and, because of COVID-19, the questionnaire was reduced and the survey was conducted **without sample design**.

2. **2019 weighting rules must not be carried into 2020.** Official KCTI tourism-statistics usage guidance states that Foreign Tourist Survey data from the COVID-era 2020 onward were collected as an outbound-visitor census-style survey and therefore **weights were not applied**. This is a method/weighting break, not a missing-weight-data accident.

3. **Official 2020 raw data now has direct artifact metadata.** The official data-download registry lists an individual `2020년 외래관광객 조사 원자료` ZIP (`2020년_외래관광객조사_데이터_1718598135136.zip`). The respondent bytes were not ingested in this run.

4. **The same-year official codebook is directly registered.** The official codebook registry lists `2020년 외래관광객조사 코드북` as a PDF, registered 2023-07-17. This is the required next artifact for field-level raw-variable/code/universe/missing-code extraction; adjacent-year fields must not be substituted.

5. **The same-year official report is directly registered.** The official report registry lists `2020년 외래관광객조사 보고서` as a PDF, registered 2021-07-08. Its detailed methodology tables and achieved respondent counts remain unparsed in this run.

## Comparability boundary

The 2020 wave must not be mechanically pooled with the 2019 pre-COVID normal regime. Official survey history defines 2020–2022 as a temporary COVID-modified period, while 2023 returns approximately to the pre-COVID survey method/content level. For 2020 specifically, `NO_SAMPLE_DESIGN` and `NO_WEIGHT_APPLIED` are verified methodology properties.

The official wording describing census-style collection does **not** by itself prove perfect coverage of every eligible departing foreign visitor. Coverage rate, nonresponse, exact collection period, respondent count, airport/port coverage, and operational exceptions remain to be recovered from the same-year report/codebook/raw documentation.

## Remaining P0 blocker

Direct PDF field extraction is still required for at least:
`raw_variable, question_wording, code_values, universe/filter, unit, stay_criterion, expenditure_basis, geography, missing_codes, exact respondent count, collection period, operational coverage/limitations`.

Weight handling is no longer UNKNOWN for 2020: record it as `NO_WEIGHT_APPLIED_BY_DESIGN` / `NO_SAMPLE_DESIGN`, subject to direct artifact confirmation if the 2020 codebook/report contains more specific operational language.

## Sources

- Tier-A official survey history: https://know.tour.go.kr/stat/fResearchSumDis19Re.do
- Tier-A official raw-data registry: https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
- Tier-A official codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
- Tier-A official report registry: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do
- Tier-A official tourism-statistics usage guidance: https://know.tour.go.kr/customer/contestevent/detail19Re.do?seq=27281
