# ORIGIN MARKET OFFICIAL EVIDENCE — 2026-08-27

Status: L1 EVIDENCE
Scope: official origin-market outbound sources discussed in the interactive research lane but not previously populated into the repository.

## Japan — JNTO
Japan Tourism Statistics exposes downloadable CSV/PDF tables for Japanese overseas travelers, including trends by year and Japanese overseas travelers by port and month. This is a verified official backbone for Japanese outbound timing and port-level movement context.
Source: https://statistics.jnto.go.jp/en/graph/
Classification: OFFICIAL / DIRECT.
Limitation: port-month outbound counts are not equivalent to destination-specific trip-purpose/stay/spend microdata.

## Canada — Statistics Canada
Current National Travel Survey tables provide quarterly outbound cross-sections including destination geography, main trip purpose, visit/trip duration, visits, nights and expenditures. Tables expose CSV download; selected tables also expose SDMX/developer access.
Sources:
- https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2410007001
- https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2410007901
- https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2410007301
Classification: OFFICIAL / DIRECT / SURVEY.
Limitation: core cross tables are quarterly, not monthly. Historical comparability must respect survey-series changes.

## United Kingdom — ONS
ONS Travel Trends annual estimates cover UK residents' visits and spending abroad and include nights, purpose, main country visited, mode of travel, length of stay and nationality breakdowns. ONS states that new methods were introduced in 2019 and that the 2009-2019 edition supersedes earlier time-series editions. Quarterly estimates are separately published. A current notice states an error affects destination-airport assignment for air passengers in the 2024 edition, with correction planned for October 2026.
Sources:
- https://www.ons.gov.uk/peoplepopulationandcommunity/leisureandtourism/datasets/ukresidentsvisitsabroad
- https://www.ons.gov.uk/peoplepopulationandcommunity/leisureandtourism/datasets/estimatesofukresidentsvisitsandspendingabroad
Classification: OFFICIAL / DIRECT / SURVEY.
Limitation: 2019 methodology regime and current destination-airport error must be carried as quality flags.

## Singapore — SingStat / ICA
SingStat provides monthly and annual Outbound Departures of Singapore Residents by Mode of Transport, with XLSX/CSV and developer API options. The same tourism theme also provides monthly inbound place-of-residence, sex/age and length-of-stay series useful for competitive-destination mirroring.
Sources:
- https://www.singstat.gov.sg/find-data/search-by-theme/industry/tourism/latest-data
- https://tablebuilder.singstat.gov.sg/table/TS/M650661
Classification: OFFICIAL / DIRECT.
Limitation: outbound mode table alone does not reveal final foreign destination.

## Philippines — PSA / Department of Tourism
PSA OpenSTAT provides outbound resident tables with long historical depth: nationality 2001-2024, age group 2001-2024, purpose of travel 2001-2024 and port of disembarkation 2011-2024. PX-Web exposes API access. Official footnotes state 2023 age/nationality/purpose data cover only May-December, and port-of-disembarkation data are unavailable from 2017 onward in the eTravel platform.
Sources:
- https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__3S__C8/0082I2BOPR0.px/table/tableViewLayout2/
- https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__3S__C8/0092I2BOPR1.px/table/tableViewLayout2/
- https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__3S__C8/0102I2BRPT0.px/table/tableViewLayout2/
- https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__3S__C8/0072I2BRPD0.px/table/tableViewLayout2/
Classification: OFFICIAL / DIRECT.
Limitation: destination/port series has a major post-2016 hole; 2023 partial-year flag is mandatory.

## Cross-country rule produced by this batch
Do not force every origin market into an identical raw schema. Preserve each country's strongest official sensor and map it to canonical measurements only after recording frequency, definition, regime, direct-vs-inferred status and missingness.

Canonical normalization target:
ORIGIN_COUNTRY x PERIOD x MEASUREMENT x SEGMENT x DESTINATION x OBSERVATION_STATUS x SOURCE_REGIME.

Monthly resolution is preferred but quarterly/annual official measurements remain valid evidence rather than being interpolated into fake monthly observations.
