# 2017 Foreign Tourist Survey — methodology and field-content observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-29
Dataset: KORC-FTS-001
Primary L1: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2017_METHODOLOGY_FIELD_CONTENT_EVIDENCE_2026-08-29.csv`

## Verified observations

1. The 2017 Foreign Tourist Survey population and interview rules are directly documented by an official Korea Tourism Organization release. The survey covered 13,841 foreign visitors from 19 target countries plus other countries. Eligible respondents were age 15 or older and stayed in Korea for at least 1 day and no more than 1 year.

2. Explicit exclusions were Korean-national foreigners, transit passengers without domestic tourism, and uniformed pilots/crew/military personnel, except persons in civilian clothing visiting for tourism. Within a family or accompanying group of 9 or fewer, one respondent was interviewed; for groups of 10 or more, up to two respondents with different sex/age profiles could be surveyed.

3. Data collection used a structured questionnaire at international airports and ports by face-to-face interview or self-completion. The official release states that Daegu and Cheongju international airports were newly added in 2017 and that Vietnam, Indonesia and the Philippines were added to the target-country set. The sample increased from 12,003 persons/16 countries in 2016 to 13,841 persons/19 countries in 2017. This is a verified sample-frame/methodology boundary and must be preserved in longitudinal work.

4. Same-year official results verify the presence and published semantics of several core concepts: repeat visit, travel type, visit purpose, stay length, visited regions, revisit intention and recommendation intention. Published results include 53.3% for two-or-more visits, 82.8% individual travel, 51.9% leisure/recreation/individual holiday as main purpose, mean stay of 7.0 days, and multiple-response regional visitation including Seoul/Gyeonggi/Busan. Revisit intention is explicitly framed as tourism-purpose return within the next three years; recommendation intention is separately reported.

5. These are not raw-field extractions. The official press-release HTML does not expose the codebook raw variable names, full code frames, missing-value codes, conditional universes, weighting formula, strata/PSU, nonresponse adjustment or detailed expenditure basis. Those remain `UNKNOWN`/`PENDING` until the same-year HWP codebook/questionnaire/raw data are directly parsed.

6. The official tourism-statistics registry verifies that a 2017 questionnaire PDF and 2017 HWP codebook are published. The user-guide registry explicitly states that no separate user guide was published for 2017–2019 because the survey was transferred to Korea Tourism Organization. Methodology for this regime therefore must route to same-year questionnaire/codebook/report/official KTO materials rather than borrowing a 2016 guide.

7. The official KTO release states that starting in 2018 the publication schedule changed from one annual release to one annual final release plus quarterly provisional reports. This publication-frequency change must not be interpreted as evidence that 2017 has quarterly respondent granularity in the repository.

## Comparability / blocker flags

- `SAMPLE_FRAME_BREAK_VERIFIED`: 2017 adds three origin countries and two airport survey sites relative to 2016.
- `RAW_VARIABLE_PENDING`: no variable name is inferred from 2016 or 2018.
- `WEIGHTING_DESIGN_UNKNOWN`: field presence or weighting formula was not established by this run.
- `MISSING_CODES_UNKNOWN`: no adjacent-wave missing-value scheme is propagated.
- `EXPENDITURE_BASIS_UNKNOWN`: published 2017 expenditure statistics are not sufficient to establish respondent-field inclusion/exclusion rules.
- `USER_GUIDE_NOT_PUBLISHED_BY_DESIGN`: same-year official registry explicitly documents the 2017–2019 support-artifact regime.

## Sources

- Korea Tourism Organization official 2017 survey results / methodology release: `https://kto.visitkorea.or.kr/upload/flexer/upload/ktobiz/20180530/8ac287ef-639d-11e8-9868-892a614a29fd.hwp.files/Sections1.html`
- Official questionnaire registry: `https://stat.tour.go.kr/stat/fQuestionnaireOfForeignerDis19Re.do`
- Official codebook registry: `https://stat.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do`
- Official user-guide registry: `https://know.tour.go.kr/stat/fUserGuideOfForeignerDis19Re.do`

## Scope control

No master architecture, ontology, source-routing standard, psychology layer, origin-market mirror framework, competitor/meta-intelligence strategy, KTOF formula, opportunity-scoring logic or canonical crosswalk was modified in this run. The observation is limited to evidence-supported 2017 survey methodology and field-content coverage.