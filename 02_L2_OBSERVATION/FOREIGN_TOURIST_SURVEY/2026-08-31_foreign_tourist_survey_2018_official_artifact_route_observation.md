# Foreign Tourist Survey 2018 official artifact-route observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-31
Dataset: KORC-FTS-001

## Observation

Tier-A Korea Tourism Knowledge & Information System registry evidence establishes a specific acquisition boundary for the 2018 Foreign Tourist Survey wave.

The official User Guide registry explicitly states that separate user guides were **not published for 2017-2019 because survey administration was transferred to the Korea Tourism Organization**. Therefore a missing standalone 2018 user-guide attachment should not remain an unresolved expected-artifact gap in the current official publication route.

For 2018, the same official system separately lists the following acquireable artifacts:

- main codebook: `2018년 외래관광객실태조사 코드북` (HWP; registered 2019-07-08);
- country/city codebook: `2018년 외래관광객 실태조사 코드북_국가 및 도시` (HWP; registered 2019-07-08);
- questionnaire: `2018년 외래관광객 실태조사 설문지` (PDF; registered 2019-07-08);
- final report: `2018년 외래관광객 실태조사 보고서` (PDF; registered 2019-07-08);
- respondent raw data: `2018년 외래관광객 실태조사 원자료.zip` in the official data-download registry.

This fixes the 2018 evidence-acquisition route as **codebook + country/city codebook + questionnaire + report + raw ZIP**, rather than waiting for a standalone user guide that the official registry says was not separately issued.

## Evidence boundary

`NOT_PUBLISHED_SEPARATELY` is not equivalent to `NO_METHODOLOGY_DOCUMENTATION`. Sampling, weighting, fieldwork, universe/skip rules or derived-variable definitions may still be documented inside the report, codebook, questionnaire or raw metadata. This observation does not infer them.

The existence of official attachment entries does not establish attachment contents. The HWP/PDF/ZIP bytes were not ingested in this run, so field names, code values, universe/skip logic, weights, respondent row count, archive members and checksums remain unresolved.

The 2018 country/city artifact is same-year and must be used before any longitudinal country/city harmonization. Adjacent-year mappings must not be substituted.

## Verified coverage change

- standalone 2018 user-guide expectation: `UNKNOWN/MISSING` → `NOT_PUBLISHED_SEPARATELY_ON_OFFICIAL_REGISTRY`;
- 2018 main codebook route: `VERIFIED_LISTED`;
- 2018 country/city codebook route: `VERIFIED_LISTED`;
- 2018 questionnaire route: `VERIFIED_LISTED`;
- 2018 final-report route: `VERIFIED_LISTED`;
- 2018 raw respondent ZIP route: `VERIFIED_LISTED`.

## Remaining blockers

- acquire and parse the 2018 main HWP codebook for exact raw variables, values, universes, skips and missing codes;
- acquire and parse the separate 2018 country/city HWP mapping;
- inspect the 2018 questionnaire/report for sampling, fieldwork, weighting and published-metric methodology;
- ingest the raw ZIP and verify members, row count, respondent-level domains and checksums;
- determine attachment-level reuse/license terms; currently `UNKNOWN`.

## Tier-A sources

- User Guide registry: https://know.tour.go.kr/stat/fUserGuideOfForeignerDis19Re.do
- Codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
- Questionnaire registry: https://know.tour.go.kr/stat/fQuestionnaireOfForeignerDis19Re.do
- Report registry: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do?pageIndex=2&searchCondition=res_year
- Raw-data registry: https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
