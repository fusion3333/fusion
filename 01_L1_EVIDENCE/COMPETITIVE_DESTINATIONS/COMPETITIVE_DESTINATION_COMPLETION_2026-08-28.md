# COMPETITIVE DESTINATION MIRROR — COMPLETION EVIDENCE
Date: 2026-08-28
Status: PUBLIC SOURCE DISCOVERY COMPLETION PASS

## Objective
Build a destination-choice mirror for the same origin traveler across Korea and close Asian substitutes. Priority comparator set: Japan, Taiwan, Thailand, Singapore, Vietnam, Hong Kong. Comparator membership is origin/segment-dependent; no assumption that all destinations are substitutes for all travelers.

## O — Official backbone
### Japan
JNTO Japan Tourism Statistics provides inbound visitor facts by country/area and downloadable CSV/PDF for visit frequency, travel type, booking method, length of stay and other visitor-behavior measures. This is a strong official comparator for Korea on origin segmentation, repeat behavior, booking mode and stay.
Source: https://statistics.jnto.go.jp/en/graph/

### Taiwan
Taiwan Tourism Administration Statistics Database provides inbound visitors by residence and nationality, plus gender, age, mode/port, length of stay, purpose and expenditure. Monthly and annual reporting views exist.
Sources:
https://stat.taiwan.net.tw/statistics
https://stat.taiwan.net.tw/statistics/month/inbound/nationality
https://stat.taiwan.net.tw/statistics/year/inbound/nationality

### Thailand
Thailand Ministry of Tourism and Sports CKAN publishes foreign tourist arrivals classified by year, month and nationality. A downloadable CSV covers 2015-01 through 2023-12; JSON/API access is also listed. This gives a directly usable monthly origin-market panel for a major substitute destination.
Source: https://ckan.mots.go.th/en/dataset/trend_inbound_tourists

### Singapore
SingStat/STB provides International Visitor Arrivals by Place of Residence monthly, plus monthly sex/age and length of stay and quarterly tourism receipts. Table Builder supports XLSX/CSV downloads with metadata.
Sources:
https://www.singstat.gov.sg/find-data/search-by-theme/industry/tourism/latest-data
https://tablebuilder.singstat.gov.sg/table/TS/M550002

### Vietnam
Viet Nam National Authority of Tourism publishes monthly international arrivals by transport mode and source market, including Korea/Japan/Taiwan/China and other markets.
Source: https://vietnamtourism.gov.vn/en/statistic/international

### Hong Kong
Hong Kong Tourism Board publishes monthly visitor-arrival statistics and points to PartnerNet for historical data. This is an official arrival backbone, but historical programmatic extraction endpoints still need a dedicated ingestion pass.
Source: https://www.discoverhongkong.com/eng/hktb/newsroom/tourism-statistics.html

## E — Enterprise comparative sensors
### Agoda
Agoda publishes origin/destination accommodation-search signals. Examples include Asia family-destination rankings and destination-specific inbound-search trends. These are SEARCH/INTEREST sensors, not arrivals or bookings unless explicitly stated.
Sources:
https://www.agoda.com/press/agoda-unpacks-the-ultimate-family-travel-bucket-list-in-asia/
https://www.agoda.com/press/agoda-reveals-south-koreas-top-inbound-travel-trends-in-the-first-half-of-2026/
https://www.agoda.com/press/agoda-reveals-europes-2026-summer-travel-interest-to-asia-thailand-leads-indonesia-rises-to-second-and-vietnam-climbs/

Agoda's 2026 outlook also reports faster search growth in secondary destinations and explicitly identifies ease of access, value, local culture and activities as destination-choice considerations in surveyed Asian markets. Treat survey answers as stated preference and search as platform behavior.
Source: https://www.agoda.com/press/agoda-2026-travel-outlook-report-b2b/

### Mastercard Economics Institute
Mastercard's Travel Trends work uses aggregated/anonymized transaction data plus third-party data and identifies APAC destination momentum while noting exchange rates and travel motivations as meaningful drivers. Use as transaction-derived market context, not as a complete tourism census.
Source: https://www.mastercard.com/news/ap/en/newsroom/press-releases/en/2025/mastercard-economics-institute-on-travel-in-2025-asia-pacific-leads-trending-summer-destinations-for-second-year-running/

## S — Social/VOC comparator layer
Comparative VOC is required for dimensions poorly captured by official arrivals: perceived value, language friction, payment, transport usability, authenticity, crowding, nightlife, food fit, safety, service recovery, visa anxiety and weather. Social/review evidence must be coded by origin language and journey stage. It is used for mechanism discovery and pain taxonomy, not population prevalence.

## R — Research/causal framing
Destination competition must be modeled as a choice set and substitution problem. Observed growth in Japan while Korea falls does not by itself prove substitution. Required controls include origin outbound propensity, airfare/seat supply, exchange rates, visa/policy, calendar, purpose and destination-specific shocks.

## Canonical destination mirror
Minimum panel key:
`origin_market x traveler_segment x destination x yyyy-mm x measurement_type x regime`

Minimum destination set:
`KOREA, JAPAN, TAIWAN, THAILAND, SINGAPORE, VIETNAM, HONG_KONG`

Core measures:
ARRIVALS, DESTINATION_SHARE, AIR_ACCESS, AIRFARE, VISA, STAY_LENGTH, SPEND, ACTIVITY_MIX, SATISFACTION, REVISIT, SEARCH, HOTEL_PRICE, EXPERIENCE_SUPPLY, PAYMENT_ACCESS, MOBILITY_USABILITY, SEASONALITY.

## Critical comparability rules
1. Residence and nationality are separate dimensions.
2. Arrivals/trips/border crossings/unique travelers are not interchangeable.
3. Agoda search interest is not arrival share.
4. Seat supply is not booking demand.
5. Official satisfaction or revisit-intent measures must preserve native survey definitions.
6. Cross-destination ratios are only computed after numerator and denominator definitions pass comparability checks.
7. Destination membership is dynamic by origin/segment; a beach traveler and K-pop traveler may have different competitor sets.

## Remaining acquisition boundary
Public source discovery is now strong enough to stop broad searching. Remaining work is mostly ingestion/harmonization: full monthly origin panels from official destinations, historical HK extraction, comparable air/fare/visa ledgers, and standardized spend/stay/activity variables. User-level destination consideration sets and actual switching behavior require enterprise or N/Ground data.
