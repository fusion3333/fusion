# 2018 Foreign Tourist Survey — regime, sample and official-artifact observation

Status: EVIDENCE-SUPPORTED L2 ONLY
Date: 2026-08-29
Canonical dataset id: `KORC-FTS-001`

## Evidence-safe observations

1. 2018 is a major same-survey comparability break and must remain a distinct wave until direct field-level extraction is complete. The official 2018 final report defines the survey population as foreign visitors aged 15+ staying in Korea for 90 days or less and departing through six international airports (Incheon, Gimpo, Gimhae, Jeju, Daegu, Cheongju) or two international ports (Incheon, Busan). Overseas Koreans with Korean nationality, transit-only overnight visitors, cruise travelers, and uniformed pilots/crew/military personnel are excluded, with the stated tourism-purpose/plain-clothes exception for the latter group.

2. The official final-report population frame uses January–December 2018 inbound tourism statistics and reports 14,040,913 persons after excluding overseas Koreans, crew and cruise travelers. This is a population-frame count, not the respondent sample.

3. The achieved 2018 respondent sample is 16,469. The official KTO quarterly-results page reports monthly achieved samples: Jan 1,394; Feb 1,390; Mar 1,380; Apr 1,372; May 1,366; Jun 1,358; Jul 1,353; Aug 1,327; Sep 1,398; Oct 1,367; Nov 1,367; Dec 1,397. These counts verify monthly fieldwork granularity, but they do not by themselves authorize monthly estimation for every variable.

4. The official survey history records several simultaneous 2018 frame changes: Mongolia was added, planned sample size expanded from 13,841 to 16,000, Incheon International Airport Terminal 2 was added as a survey location, the eligible-stay criterion was reduced from one year or less to 90 days or less, and some questions were changed/added. The final report also explicitly excludes cruise travelers from the population. These changes prohibit mechanical pooling with 2017 without variable-by-variable same-year evidence.

5. 2018 also changed the publication regime. The official KTO page states that the prior annual-only finalized reporting was changed to one annual finalized report plus quarterly provisional reports. Therefore quarterly 2018 estimates must retain `PROVISIONAL` status and must not silently overwrite the annual final report where values differ.

6. Same-year supporting artifacts are directly verified in official registries: a 2018 questionnaire PDF, a main codebook HWP, a country/city codebook HWP, an annual final report PDF, and an individual raw-data ZIP. The raw ZIP is listed behind the official data-application workflow. Respondent bytes were not ingested in this run.

## Coverage change

The following 2018 evidence states advance from broad artifact/regime awareness to direct official verification:

- survey universe/population definition: `METHODOLOGY_AND_UNIVERSE_VERIFIED`
- 2018 population-frame total: `POPULATION_FRAME_VERIFIED`
- achieved annual and monthly sample counts: `SAMPLE_SIZE_VERIFIED / MONTHLY_SAMPLE_COUNTS_VERIFIED`
- 2018 sample-frame and eligibility break: `SAMPLE_FRAME_BREAK_VERIFIED`
- annual-final plus quarterly-provisional reporting: `PUBLICATION_REGIME_VERIFIED`
- questionnaire/codebook/country-city codebook/report/raw ZIP: `OFFICIAL_ARTIFACT_VERIFIED`

No canonical crosswalk completion score or harmonization status was raised because raw field extraction is still incomplete.

## Unresolved fields

- raw variable names and complete code values: `MISSING_FIELD_EXTRACTION`
- exact question wording and skip/universe logic per field: `PENDING_SAME_YEAR_QUESTIONNAIRE_CODEBOOK_EXTRACTION`
- weight variable name and full weighting formula/calibration: `UNKNOWN`
- strata, PSU, response-rate denominator and nonresponse adjustment: `UNKNOWN`
- missing-code behavior: `UNKNOWN`
- stay raw/transformed field logic and any analysis top-coding: `UNKNOWN`
- expenditure total basis, payment-method coding, exchange-rate conversion, caps/outlier rules and daily-spend denominator: `UNKNOWN`
- license/reuse terms for respondent raw/codebook artifacts: `UNKNOWN`
- respondent raw rows: `OFFICIAL_DOWNLOAD_ENTRY_VERIFIED_NOT_INGESTED`

## Comparability rule

Treat 2018 as a distinct methodology regime. Do not infer 2018 raw names/codes from 2017 or 2019, and do not backcast the 2018 stay criterion, cruise exclusion, Mongolia allocation, Terminal-2 location, or quarterly publication regime into earlier waves. Quarterly provisional results and the annual finalized report are different publication states and must remain labeled as such.

## Source routing

Tier-A official sources only:
- Korea Tourism Organization / Korea Tourism Data Lab — 2018 Foreign Tourist Survey final report
- Korea Tourism Organization / Korea Tourism Data Lab — 2018 Q4 provisional-results publication
- Tourism Knowledge Information System — questionnaire registry
- Tourism Knowledge Information System — codebook registry
- Tourism Knowledge Information System — report registry
- Tourism Knowledge Information System — raw-data download registry

No architecture, ontology, psychology layer, origin-market design, competitor research, KTOF formula, business ranking, opportunity logic or canonical crosswalk was modified in this run.
