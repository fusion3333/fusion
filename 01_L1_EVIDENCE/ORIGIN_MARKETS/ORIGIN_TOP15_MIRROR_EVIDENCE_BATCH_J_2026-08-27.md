# ORIGIN TOP15 MIRROR — L1 EVIDENCE BATCH J
Date: 2026-08-27
Status: ACTIVE

## Korea-side ranking backbone
KTO publishes 2025 monthly and annual country statistics in downloadable XLSX, including full-country and major-country files. 2025 top six are officially reported as China, Japan, Taiwan, United States, Hong Kong and Philippines; the 2025 country-market compendium covers 26 priority markets.
- 2025 December statistics: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310195&cbIdx=1127
- Country market analysis: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310156&cateCont=tlt02&cbIdx=1129&pageIndex=1

## Origin mirror target set V1
Core high-volume markets to maintain as the first 15-country panel:
China, Japan, Taiwan, United States, Hong Kong, Philippines, Vietnam, Singapore, Indonesia, Thailand, Malaysia, Canada, Australia, Russia, United Kingdom.
NOTE: exact annual rank positions 7-15 must be calculated from the official 2025 XLSX rather than inferred from narrative sources. This target set is a coverage panel, not a claimed exact ordered ranking.

## O — Official origin-country backbones already verified
### Japan
JNTO provides Japanese overseas traveler series and CSV downloads, plus inbound nationality/month series back to 2003.
https://statistics.jnto.go.jp/en/graph/

### Australia
Australian Bureau of Statistics Overseas Arrivals and Departures: monthly short-term resident returns by destination; downloadable tables suitable for 10+ year panels.

### Canada
Statistics Canada outbound travel tables provide destination/purpose/duration and associated visits/nights/spend; CSV/SDMX available.

### United Kingdom
ONS UK residents visits abroad datasets include destination, purpose, nights, spending, mode and duration; historical methodology breaks must be versioned.

### Philippines
Philippine Statistics Authority PXWeb tables provide resident outbound travel by purpose over long history; partial periods must remain flagged.

### Singapore
SingStat tourism tables include resident outbound departures by mode/month and strong inbound mirror variables.

### Indonesia
BPS Outbound Tourism Statistics 2025 combines immigration, digital survey and Mobile Positioning Data, with trips, characteristics and expenditure.
https://www.bps.go.id/en/publication/2026/04/30/7344d8c9b1935d342f2ff9e7/oubound-tourism-statistics-2025.html

### China
National Bureau / Ministry of Culture and Tourism provide total outbound series but definitions (`departures`, `tourist trips`, HK/Macao/Taiwan inclusion) differ. Keep separate canonical measurements.

### Hong Kong
Immigration Department passenger statistics give high-frequency resident departures by control point; destination requires separate data.

## E — Commercial augmentation required per country
- GDS/airline: seat capacity, airfare, search/booking, O&D.
- Google/YouTube: Korea interest and competitor-destination search.
- OTA: accommodation/activity consideration and price.
- Visa/Mastercard/payment: spend and corridor behavior.

## S — Country-local VOC layer
Build language-specific corpora, not English-only Reddit:
- China: Xiaohongshu/Weibo/Trip.com public content where lawful.
- Japan: X/YouTube/Travel communities.
- Taiwan/HK: local forums/social + Google/YouTube.
- SE Asia: TikTok/Facebook/YouTube/Reddit plus local travel communities.
- Western markets: Google/Reddit/YouTube/Instagram/Tripadvisor/OTA reviews.

## R — Research
Country outbound tourism studies, destination-choice models, visa/FX/air-connectivity elasticities.

## Canonical crosswalk
For every origin country preserve:
`resident vs nationality`, `trip vs traveler vs departure`, `same-day inclusion`, `destination definition`, `purpose`, `duration`, `spend`, `month/quarter/year`, `sample/admin/model-derived`, `COVID/methodology regime`.

## Required derived measurements (not formulas finalized)
`TotalOutboundTrips`, `OutboundTravelPropensity`, `DestinationShare`, `KoreaCaptureRate`, `CompetitorShare`, `AverageOutboundNights`, `AverageOutboundSpend`, `PurposeMix`, `Seasonality`, `BookingLeadTime`, `AirSeatSupply`, `Airfare`, `FX`, `VisaFriction`.

## Completion status
Official backbones verified for multiple high-volume markets; remaining work is exact 2025 rank extraction from KTO XLSX and O1/O2 source verification for Taiwan/US/Vietnam/Thailand/Malaysia/Russia plus monthly historical endpoints.
