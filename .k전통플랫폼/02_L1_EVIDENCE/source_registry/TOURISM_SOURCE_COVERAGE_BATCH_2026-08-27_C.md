# Tourism Source Coverage Batch — 2026-08-27 C

Status: L1 EVIDENCE only. Mathematical opportunity weights remain provisional. This batch strengthens STAY / SEARCH / BOOK-PAY / MOVE / SUPPLY and cross-axis methodology constraints.

## 1. STAY / WHERE / SPEND — Korea Tourism Data Lab regional analytics

Source: Korea Tourism Organization, Korea Tourism Data Lab regional analysis
URL: https://datalab.visitkorea.or.kr/datalab/portal/loc/getAreaDataForm.do
Tier: A (official KTO)
Format: WEB, downloadable chart/data functions vary by panel
Geography: Korea → region / basic local government depending panel
Period: panel-dependent; site metadata must be preserved at extraction
Methodology: mobile telecom for visitor/stay metrics; credit-card data for tourism spending; navigation/public data for some regional diagnostics
Key variables: unique visitors, overnight-visitor ratio, accommodation-type share, average nights, average dwell time, tourism spending by industry, national-vs-region spending trend, visitor origins, regional concentration
Critical limitation: KTO explicitly warns that big-data visitor counts and spending amounts should be used for trend analysis rather than as population totals. Visitor-count aggregation differs by tab: daily visitor counts may count the same person on multiple days, while stay/duration panels are monthly and de-duplicate continuous stays.
Axes: WHERE, STAY, SPEND, MOVE
Confidence: HIGH for source existence/methodology; variable-level extraction requires per-panel metadata capture.

## 2. SEARCH / PLATFORM / BOOK-PAY — Potential Korea Visitor Survey dashboard

Source: Korea Tourism Organization, Korea Tourism Data Lab, Potential Korea Visitor Survey dashboard
URL: https://datalab.visitkorea.or.kr/datalab/portal/nat/getForTourDashForm.do
Tier: A
Format: WEB; underlying annual survey reports/data should be collected separately where downloadable
Period visible: 2022–2025 for key dashboard tables
Geography: surveyed overseas markets / global aggregates depending indicator
Key variables visible: SNS/video platforms used or intended for Korea travel information; online sites used or intended to purchase Korea travel products; Korea travel experience/intention; Korea travel interest trend
Axes: SEARCH, PLATFORM, BOOK_PAY, WHY
Confidence: HIGH
Limitation: dashboard is an aggregate presentation; country/sample definitions must be joined to survey metadata before cross-year comparison.

## 3. SEARCH / BOOK-PAY survey methodology — Potential Korea Visitor Survey metadata

Source: Korea Tourism Data Lab statistical metadata
URL: https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do
Tier: A
Format: WEB metadata; reports/annual outputs linked through KTO systems
History: pilot in 2020; regular survey from 2021; annual from 2022 onward
2025 sample: 16,360 general foreigners + 16,360 people intending to visit Korea within 3 years
2025 geography: 26 major inbound markets
Method: online panel in 25 countries plus face-to-face interview in Mongolia; 2025 introduced sub-region stratification within country and post-stratification weighting of intending visitors using arrival statistics
Important comparability break: 2022 changed intended-visitor sample source to professional online panels; surveyed-country composition also changes across years.
Axes: WHO, WHY, WHEN, SEARCH, BOOK_PAY, DO, PLATFORM
Confidence: HIGH
Use rule: do not naïvely concatenate 2020–2025; create `survey_design_version` and country-universe flags first.

## 4. SEARCH / PLATFORM downloadable public-data candidate

Source: Korea Tourism Organization via Public Data Portal
Dataset: 국가별 해외여행 활용 SNS 및 동영상플랫폼
URL: https://www.data.go.kr/data/15149395/fileData.do
Tier: A
Format: CSV / OpenAPI exposure via ODCloud
Reference date in surfaced dataset: 2025-09-15
Axes: SEARCH, PLATFORM
Confidence: HIGH for availability
Action: acquire full file and inspect columns, country universe, response basis, and whether values are first-choice or multiple-response before normalization.

## 5. MOVE — inbound visitor transport-mode statistics

Source: Korea Tourism Organization via Public Data Portal / Korea Tourism Data Lab
URL: https://www.data.go.kr/data/15136289/fileData.do
Tier: A
Format: CSV; XML/JSON auto-API representation indicated by portal
Variables: inbound foreign tourists by transport mode / entry route, period
Definition: inbound tourists follow UN Tourism residence-country guidance; excludes selected non-tourist residence statuses and includes overseas Korean entrants as defined by KTO statistical system
Axes: MOVE, WHEN, WHO
Confidence: HIGH
Limitation: this source measures entry transport/port rather than within-Korea mobility; do not use as a proxy for local transportation behavior.

## 6. WHO backbone — inbound visitors by nationality and gender

Source: Korea Tourism Organization via Public Data Portal
URL: https://www.data.go.kr/data/15136295/fileData.do
Tier: A
Format: CSV
Rows in surfaced file metadata: 211
Variables: inbound foreign tourists by nationality and gender for queried period
Axes: WHO, WHEN
Confidence: HIGH
Use: macro denominator / calibration layer; not interchangeable with micro-survey weighted distributions.

## 7. SUPPLY / STAY — nationwide licensed tourism accommodation registry

Source: Ministry of the Interior and Safety local-government licensing aggregation via Public Data Portal
Landing URL: https://www.data.go.kr/dataset/15006684/fileData.do
Dataset family: 행정안전부_문화_관광숙박업; also 관광펜션업 and 일반 숙박업
Tier: A
Format: public file datasets (portal provides standardized local-government open-data records)
Last surfaced update: 2026-02-10
Variables described: licensing date, operating status, business name, address and other establishment fields
Geography: nationwide local governments
Axes: SUPPLY, STAY, WHERE
Confidence: HIGH
Critical distinction: licensed establishment registry ≠ rooms/beds ≠ bookable inventory ≠ foreigner-ready inventory. These layers must remain separate.

## 8. SUPPLY multilingual discoverability — KTO foreign-language TourAPI

Source: Korea Tourism Organization via Public Data Portal
Example: German tourism information service
URL: https://www.data.go.kr/data/15101805/openapi.do
Tier: A
Format: REST JSON + XML
Update: real-time; surfaced portal modification 2026-02-26
German service scale: ~30,000 records, 14 API functions including region/location/keyword/event/accommodation/common/detail/image/sync information
Axes: SUPPLY, PLATFORM, SEARCH, INFORMATION_ASYMMETRY
Confidence: HIGH
Opportunity relevance: language-specific KTO entity presence can be compared against Korean-language tourism entities. A Korean entity absent from one or more foreign-language services is a measurable candidate for `official multilingual visibility gap`; it is NOT by itself proof of commercial demand or OTA unavailability.

## 9. SUPPLY / MONEY FLOW — tourism-industry survey frame

Source: Ministry of Culture, Sports and Tourism procurement description for 2024-base Tourism Industry Survey
URL surfaced through MCST search: https://www.mcst.go.kr/search/search.jsp
Tier: A for survey design documentation
Format: HWP tender/task specification; final survey outputs should be separately collected
Survey frame described: Tourism Promotion Act businesses plus core tourism-industry businesses under tourism industrial classification; task specification states sample targets around 17,820 total, including 8,700 Tourism Promotion Act businesses and 9,120 core tourism-industry businesses, subject to final design
Target estimates: number of businesses, sales, employees and related industry measures
Axes: SUPPLY, MONEY_FLOW
Confidence: MEDIUM-HIGH pending acquisition of final 2024-base report/codebook; procurement specification is design evidence, not final statistics.

## 10. Cross-axis normalization rules created from this batch

1. `visitor_count_daily` and `unique_visitor_monthly` must be separate measures.
2. `licensed_supply`, `physical_capacity`, `bookable_supply`, `multilingual_visible_supply`, `OTA_visible_supply`, and `foreigner_ready_supply` must be separate layers.
3. Potential Visitor Survey needs `survey_design_version`, `country_universe`, `sample_source`, `weighting_scheme` before trend joins.
4. Entry transport statistics belong to international gateway MOVE, not local MOVE.
5. Big-data spending should be retained as observed-card proxy/trend unless KTO methodology explicitly supports total-market estimation.
6. Multilingual absence is an information-distribution gap candidate, not automatically an opportunity score.

## Coverage impact

Strengthened: STAY, SEARCH, BOOK_PAY, MOVE, SUPPLY, PLATFORM.
Partially strengthened: WHO, WHERE, SPEND, MONEY_FLOW, INFORMATION_ASYMMETRY.
Still weak/high priority: domestic mobility edges by foreign nationality, payment-method acceptance/friction, OTA transaction economics/commission structure, granular pain/complaint evidence by journey stage, satisfaction linkage to spend/revisit at microdata level, supplier foreign-language readiness, actual bookable inventory/capacity.

No final KTO/Oppportunity weights are inferred in this file.
