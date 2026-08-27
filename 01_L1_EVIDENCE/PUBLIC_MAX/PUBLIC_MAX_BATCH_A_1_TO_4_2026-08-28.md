# PUBLIC DATA MAXIMUM COMPLETION — Batch A (Workstreams 1–4)

Date: 2026-08-28
Scope: public/searchable data only. No Ground, first-party telemetry, private dashboards or invented values.

## 1. Korea official raw backbone
Verified current official downloadable/public backbone:
- Korea Tourism Data Lab 2025-12 tourism statistics release exposes all-country, major-country, 2019-comparison, branch classification and monthly-statistics XLSX attachments.
- 2025 Foreign Tourist Survey official raw package and codebook are published as ZIP (SAV/XLSX) + XLSX codebook.
- Data Lab surface explicitly separates mobile-presence, card-spend and navigation-search sensors from official tourism statistics and survey data.

Ingestion rule: administrative arrivals, survey responses, mobile presence, card spend and navigation search remain distinct measurement types. They may be joined by time/geography/segment but never collapsed into a single 'tourist count'.

Constraint: the Data Lab page uses an official download flow/data-use survey and states that unauthorized collection outside official download is prohibited. Therefore the repository records the source and canonical schema, but this batch does not claim binary attachment ingestion where the official interactive download flow was not completed by the connector.

## 2. Origin TOP15 mirror
The mirror registry is now classified country-by-country as VERIFIED / VERIFIED_LIMITED / PARTIAL. Strongest public mirrors identified in this batch include:
- Canada: Statistics Canada quarterly country-of-visit tables with visits, nights, expenditures and purpose/province cross-sections; CSV/SDMX available.
- United Kingdom: ONS annual/quarterly visits, nights, spend, purpose, country and mode; 2019 methodology break and a current destination-airport correction notice must be retained.
- Australia: ABS short-term resident-return series, including monthly series; treat as trips/border movements rather than unique persons.
- Singapore: SingStat monthly resident outbound departures by transport mode is a strong outbound-propensity denominator but is not destination-resolved.
- Indonesia: BPS outbound tourism publications provide recent destination/behavior/socioeconomic/spend context using multiple data sources.
- Japan: JNTO/Japan Tourism Statistics provides Japanese overseas traveler totals/port-month series and destination ranking context.

Countries with fragmented or non-uniform public outbound destination series remain PARTIAL rather than being filled with inferred values.

## 3. Competitive destination mirror
Comparable public destination sensors are now fixed for Korea, Japan, Taiwan, Thailand, Singapore, Vietnam and Hong Kong.
- Japan: unusually deep public layer including origin arrivals, purpose, booking method, stay, information sources, regional visitation/stays, spend/payment, satisfaction and revisit.
- Taiwan: official tables cover residence, nationality, gender, age, mode/port, stay length, purpose and expenditure.
- Thailand: official CKAN CSV/JSON covers foreign arrivals by year x month x nationality, 2015-01 through 2023-12 in the published resource.
- Singapore: official monthly arrivals by residence, sex/age, length of stay; quarterly receipts.
- Vietnam: official monthly visitor tables by transport and market.
- Hong Kong: retained as PARTIAL until the long historical layer is extracted at the same standard.

Comparison rule: Search != Booking != Arrival != Nights != Spend != Satisfaction. A destination cannot be declared to 'steal Korea demand' from arrival movement alone.

## 4. Temporal 10Y x 12M
The materialization contract now enforces a ragged panel rather than synthetic rectangular 120-month data.
- True monthly observations use YYYY-MM.
- Quarterly and annual observations remain at their native grain.
- Missing is never converted to zero.
- Publication/revision/valid-time are retained to prevent look-ahead leakage.
- Known method breaks, corrections and shocks are regime/quality tags, not automatic causal labels.

## Batch A completion judgment
Source discovery / routing / canonical normalization for workstreams 1–4 is substantially closed for the public layer. What remains inside these workstreams is mostly binary/raw extraction through official download interfaces and row-level harmonization rather than discovery of new source families.

Do not call this 'all raw rows ingested'. That claim would be false. The connector can verify and structure the sources, but several official attachments require the provider's download flow; those are tracked as DOWNLOAD_FLOW_REQUIRED instead of silently fabricated.

Next batch: 5 Supply/Platform/Search/VOC bulk public observations; 6 Money Flow + Failure Library; 7 Knowledge Graph materialization; 8 Opportunity dry-run.