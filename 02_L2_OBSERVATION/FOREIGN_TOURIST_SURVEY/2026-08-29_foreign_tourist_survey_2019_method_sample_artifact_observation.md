# 2019 Foreign Tourist Survey — method, sample and official-artifact observation

Status: EVIDENCE-SUPPORTED L2 ONLY
Date: 2026-08-29
Canonical dataset id: `KORC-FTS-001`

## Evidence-safe observations

1. The official 2019 final report defines the survey population as foreign visitors aged 15+ staying in Korea for 90 days or less and departing through six international airports (Incheon, Gimpo, Gimhae, Jeju, Daegu, Cheongju) or three international ports (Incheon, Busan, Gunsan). Overseas Koreans with Korean nationality, transit-only overnight visitors, cruise travelers, peddlers, and uniformed pilots/crew/military personnel are excluded, with the stated tourism-purpose/plain-clothes exception for the latter group.

2. The official final-report population frame uses January–December 2019 inbound tourism statistics and reports 16,102,864 persons after excluding overseas Koreans, crew and cruise travelers. This is a population-frame count, not the achieved respondent sample.

3. The achieved 2019 respondent sample is 16,076. The official KTO full-results publication reports monthly achieved samples: Jan 1,380; Feb 1,407; Mar 1,410; Apr 1,407; May 1,335; Jun 1,341; Jul 1,341; Aug 1,334; Sep 1,311; Oct 1,306; Nov 1,266; Dec 1,238. These counts verify monthly fieldwork granularity but do not by themselves establish that every item is safely estimable monthly.

4. 2019 retains the 2018 eligible-stay regime of 90 days or less but has additional frame/content changes. The official survey history records the name change from `외래관광객 실태조사` to `외래관광객 조사`, addition of Gunsan Port, subdivision of Middle East markets into Central Asia/GCC/other Middle East, and changes/additions to some question order and items. Therefore 2018→2019 raw-field equivalence must not be inferred mechanically.

5. The official 2019 content inventory directly verifies coverage of visit frequency, companions, pre/post Korea country itinerary, primary purpose, destination-choice factors, information sources and needed information, travel-decision timing, activities and most-satisfying activity, stay duration, accommodation and nights, destinations, travel type, shopping items/places, total expenditure, payment method, itemized expenditure, overall/item satisfaction, intention to revisit Korea for tourism within three years, recommendation intention, and smartphone usage. This is domain-level field evidence only; it does not establish raw names, code values, exact wording, skips/universes or missing-code behavior.

6. Same-year official distribution routes are directly verified. The KTO full-results page publishes the final-report PDF, result-table XLSX, a 14-questionnaire ZIP (including Korean), and an infographic PDF. The page states Public Nuri Type 4 licensing: attribution required, commercial use prohibited, modification prohibited. A separate official raw page had already been registered with `DATA_2019_외래관광객조사_외부용.sav`, `코드표_국가및도시.hwp`, and `코드표_변수.hwp`; respondent bytes remain not ingested.

7. The Tourism Knowledge Information System registry directly lists a 2019 main codebook HWP registered 2020-06-24. A concrete metadata conflict exists for the separate country/city codebook: its title is `2019년 외래관광객조사 코드북_국가 및 도시` while the registry's survey-year column displays `2020`. This is retained as `CONFLICTING_REGISTRY_METADATA`; the title-year and registry-year are not silently reconciled.

8. The official user-guide registry states that separate user guides were not published for 2017–2019 because the survey had been transferred to the Korea Tourism Organization. Therefore no 2016 user-guide schema or interpretation is propagated into 2019.

## Coverage change

The following 2019 evidence states advance to direct official verification:

- survey universe and exclusion rules: `METHODOLOGY_AND_UNIVERSE_VERIFIED`
- population-frame total: `POPULATION_FRAME_VERIFIED`
- achieved annual and monthly sample counts: `SAMPLE_SIZE_VERIFIED / MONTHLY_SAMPLE_COUNTS_VERIFIED`
- Gunsan Port / Middle East market-allocation / item-order changes: `SAMPLE_FRAME_BREAK_VERIFIED`
- survey content domains: `FIELD_CONTENT_VERIFIED_RAW_FIELD_EXTRACTION_PENDING`
- final report + result table + questionnaire package + infographic: `OFFICIAL_RESULT_PACKAGE_VERIFIED_NOT_INGESTED`
- main codebook: `CODEBOOK_ARTIFACT_VERIFIED`
- country/city codebook year metadata: `CONFLICTING_REGISTRY_METADATA`
- separate user guide: `NOT_PUBLISHED_BY_DESIGN`
- raw SAV + HWP code tables: `OFFICIAL_RAW_ATTACHMENTS_VERIFIED_NOT_INGESTED`

No canonical crosswalk completion score, harmonization status or respondent-row ingestion status was raised.

## Unresolved fields

- raw variable names and complete code values: `MISSING_FIELD_EXTRACTION`
- exact same-year wording and per-field universe/filter: `PENDING_CODEBOOK_QUESTIONNAIRE_EXTRACTION`
- weight variable name and full weighting/calibration formula: `UNKNOWN`
- strata, PSU, response-rate denominator and nonresponse adjustment: `UNKNOWN`
- missing-code behavior: `UNKNOWN`
- raw/transformed stay-field logic and any analysis cap/top-code: `UNKNOWN`
- expenditure currency/basis, exchange-rate conversion, caps/outlier rules and daily-spend denominator: `UNKNOWN`
- exact Middle East country-to-region code mapping: `PENDING_COUNTRY_CITY_CODEBOOK_EXTRACTION`
- country/city codebook registry year conflict: `CONFLICTING`
- respondent rows: `OFFICIAL_RAW_ATTACHMENTS_VERIFIED_NOT_INGESTED`

## Comparability rule

Keep 2019 as a separate same-year evidence wave. Do not copy 2018 raw names, codes, country grouping, skips, weights or expenditure semantics into 2019. The 90-day eligibility criterion is directly verified for 2019, but the Gunsan Port expansion, Middle East three-way subdivision and question changes require explicit equivalence decisions only after direct codebook/questionnaire extraction.

## Source routing

Tier-A official sources only:
- Korea Tourism Organization / Korea Tourism Data Lab — 2019 Foreign Tourist Survey final report
- Korea Tourism Organization / Korea Tourism Data Lab — 2019 full-results publication and attachment package
- Korea Tourism Organization / Korea Tourism Data Lab — 2019 raw attachment page
- Tourism Knowledge Information System — codebook registry
- Tourism Knowledge Information System — questionnaire/report/user-guide registries

No architecture, ontology, psychology layer, origin-market design, competitor research, KTOF formula, business ranking, opportunity logic or canonical crosswalk was modified in this run.
