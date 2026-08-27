# WHO Axis — Evidence Completion Pack

Date: 2026-08-27
Status: PUBLIC SOURCE DISCOVERY LOCK CANDIDATE / RAW INGESTION PARTIAL
Protocol: `00_SYSTEM/SEQUENTIAL_AXIS_COMPLETION_PROTOCOL_V1.md`

## 1. Question freeze
WHO answers: who enters/visits Korea, where they reside, age/sex profile, who they travel with, party size/form, repeat-visit state, income/budget and other socioeconomic context when directly measured.

WHO is not one variable. Administrative identity/demography and survey trip-context must remain separate.

## 2. Highest-authority official backbone
### O1 — Korea Tourism Statistics / Korea Tourism Data Lab
Official metadata states Korea inbound visitor statistics are produced monthly and provide nationality, sex, age, purpose and transport mode. Data availability for inbound foreign tourists is stated from 1995-01 onward. The system is processed from Ministry of Justice immigration statistics using tourism-statistics definitions; it is therefore not identical to raw MOJ foreign entrant counts.

Source: https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do
Measurement: ADMIN/PROCESSED OFFICIAL STATISTICS
Temporal: monthly; inbound series 1995-01+
WHO use: traveler-volume denominator; nationality; sex; age.

The official guide defines age in decade bands and notes that OLAP detailed lookup can expose five-year bands. It also preserves crew as a separate category where sex/age is not identified through ordinary passenger procedures.

Guide evidence: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=295706&cbIdx=1127&streFileNm=9e316a77-4de6-4c7a-8151-409a8fb7b888.pdf

### O2 — Public Data Portal distribution
KTO nationality×sex dataset is exposed as a public file/API-family dataset and explicitly defines the tourism visitor population.
Source: https://www.data.go.kr/data/15136295/fileData.do
Measurement: ADMIN/processed official statistic
Use: downloadable/programmable calibration layer.

### O3 — Foreign Tourist Survey microdata
The official tourism knowledge system lists annual microdata downloads. 2025 and 2024 raw datasets are explicitly listed, and the repository already records a discovered annual inventory spanning 2007–2025. The 2025 KTO Data Lab page also provides raw SAV/Excel and a codebook XLSX.
Sources:
- https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
- https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310809&cateCont=spt05&cbIdx=1127&pageIndex=1
Measurement: SURVEY microdata
Use: companion/party, travel form, repeat visitation and socioeconomic variables only where the year-specific questionnaire/codebook supports them.
Access boundary: some download workflows require applicant information/registration; this is an acquisition constraint, not absence of data.

### O4 — Foreign Tourist Survey reports
The official report library contains 2025 final report and quarterly reports and historical reports.
Source: https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do?pageIndex=1

A 2025 Q1 report exposes monthly/quarterly companion-type tables. Example categories include friend, spouse/partner, other family/relatives, children, coworkers, parents and other. This demonstrates that WHO party composition is directly measured rather than needing social-media inference.
Example PDF: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=309194&cbIdx=1127&streFileNm=5ee75d9e-e097-4aca-9103-863fef84bf59.pdf

### O5 — Potential Korea Visitor Survey
Official metadata shows an annual survey architecture, 26 markets in 2025, 16,360 general foreigners plus 16,360 Korea-intending travelers, with within-country sub-region sampling added in 2025 and arrival-statistics-based post-stratification weighting for intending visitors. It is useful for origin/residence segmentation and planned budget/intent context, but is not a substitute for realized inbound travelers.
Source: https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do
Measurement: SURVEY / potential market
History: pilot 2020; annual from 2022; design breaks preserved.

## 3. Existing repository evidence reused
Legacy evidence already established:
- annual official inbound totals 2015–2025;
- official monthly-country acquisition manifest;
- Foreign Tourist Survey raw-source inventory 2007–2025;
- methodology regimes R1 2007–2013, R2 2014–2017, R3 2018–2019, R4 2020–2022 exceptional COVID design, R5 2023+ normalized design.
These are not duplicated as new values here; they are referenced as prior L1 evidence.

## 4. Enterprise augmentation
WHO does not need enterprise data to establish official population demographics. Enterprise data is useful for behaviorally selected subpopulations.

Booking.com 2025 travel-predictions research surveyed 27,000+ travelers across 33 countries/territories and reports age/family/multigenerational patterns. It is a trend/segmentation triangulation source, not a Korea inbound denominator.
Source: https://news.booking.com/defying-convention-to-deepen-connections-bookingcoms-nine-predictions-for-travel-in-2025/
Measurement: enterprise survey.

Mastercard Economics Institute uses aggregated/anonymized transaction data plus third-party data to analyze travel behavior and destination trends. This can later augment WHO with spender segments but cannot replace official demographic counts.
Source: https://newsroom.mastercard.com/news/ap/en/newsroom/press-releases/en/2025/mastercard-economics-institute-on-travel-in-2025-asia-pacific-leads-trending-summer-destinations-for-second-year-running/
Measurement: TRANSACTION-derived enterprise analysis.

## 5. Social/VOC role
S sources are deliberately NOT used to estimate nationality/age/sex/party shares. They may explain planner/payer/influencer roles inside a party and uncover categories missing from official questionnaires. Population share from Reddit/Instagram/TikTok/etc. is prohibited unless a defensible sampling frame exists.

## 6. Research triangulation
Research confirms that demographic segmentation materially interacts with travel behavior, so WHO must remain a first-class graph node rather than a reporting label.

- A 2014 Korea study found significant nationality-linked differences in sex, age, visit purpose, information channel, companion structure, travel form, expenditure, stay and accommodation. Source: https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART001932731
- A 2017 study using KTO cumulative data for 2003–2016 found significant differences in age, purpose and transportation by world region. Source: https://journal.kci.go.kr/JTS/archive/articleView?artiId=ART002257469
- A 2014 multi-destination study using the 2012 International Visitor Survey linked destination-count behavior with information sources, companion types, age and education, with Asian/Western group differences. Source: https://journal.kci.go.kr/JTS/archive/articleView?artiId=ART001898652
- A 2025 panel study covering 2015–2024 reports that the estimated Hallyu-tourism relationship differs by sex and age; model estimates vary by econometric specification, reinforcing the need to preserve model/method provenance. Source: https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003259933

These papers support segmentation/mechanism, not current population shares.

## 7. Canonical measurement separation
Mandatory distinctions:
`nationality_admin != country_of_residence`
`age_admin != age_survey` unless explicitly crosswalked
`gender_admin != gender_survey` unless definition matches
`party_type != party_size`
`planned_budget != actual_spend`
`repeat_visit_actual != revisit_intent`
`potential_traveler != realized_inbound_visitor`
`enterprise_platform_user != inbound_population`

## 8. Temporal audit
Strongest WHO temporal layer is official monthly ADMIN statistics: inbound tourism visitor data from 1995-01 onward with nationality/sex/age dimensions available in the statistical system.
Survey WHO context has a long annual microdata inventory (2007–2025 discovered in repository), but question-level comparability is not guaranteed. 2020–2022 must remain a separate methodology regime. Potential Visitor Survey is much shorter (2020 pilot / 2022+ annual), so it cannot be used to fabricate a 10-year budget/intention series.

## 9. What remains genuinely missing
1. A normalized raw panel `month × nationality × age × sex` has not yet been bulk-ingested into this repository even though the official source route is verified.
2. Foreign Tourist Survey 2007–2025 microdata files/codebooks are not all locally ingested/harmonized; access workflow is partly registration-gated.
3. Income/budget definitions across survey years are not yet proven comparable. Missing years must remain MISSING.
4. Language, digital literacy, planner/payer/influencer roles and detailed life stage are not consistently observable in public official data.
5. True party-level booking occupancy and actual payer roles are primarily enterprise/ground/N data.

## 10. Acquisition boundary
Public-source discovery for core WHO is now near saturation. Further generic web search has low expected information gain. Next improvement requires RAW ACQUISITION + VARIABLE HARMONIZATION, not more source discovery.

Required next acquisition tasks when tooling/credentials permit:
- bulk official KTO monthly demographic exports;
- annual Foreign Tourist Survey raw ZIP/codebook acquisition;
- build variable dictionary and crosswalk by methodology regime;
- preserve official weights and survey universe.

## 11. Evidence status
Official backbone: HIGH/CONFIRMED source existence and definitions.
Enterprise augmentation: MEDIUM for global traveler segmentation; not population representative for Korea.
Research mechanism: HIGH for existence of demographic heterogeneity; study-specific estimates only.
Social: qualitative only.
Ground/N: not required for core nationality/age/sex; required for planner/payer/influencer and first-party behavioral identity.
