# SPEND — L1 Evidence Completion
Date: 2026-08-28
Status: PUBLIC SOURCE DISCOVERY COMPLETE / RAW HARMONIZATION PARTIAL

## Canonical question
Who spends how much, where, on what, when, through which channel/payment method, and how much of that spend is retained locally?

## Measurement separation
- Survey total expenditure != card-network observed spend.
- Card spend != total tourist spend because cash, alternative wallets and uncovered networks/merchants are missing.
- Transaction amount != supplier revenue != supplier profit != local retained value.
- Spend share != propensity to spend.
- Transaction count != unique tourists.

## O — Official backbone
1. Korea Tourism Data Lab exposes foreigner credit-card tourism consumption by region, industry and origin-country distribution. The regional foreign-tourism view explicitly includes foreign credit-card tourism consumption trends, industry cuts, tourism-consumption type and country-level distribution. It also states that the country-level view excludes online reservation service businesses. Source: https://datalab.visitkorea.or.kr/datalab/portal/loc/getAreaFocTourBeta.do
2. Korea Tourism Data Lab national foreign-market view exposes total foreign tourist card consumption, regional spend shares and industry-level foreign tourist card consumption. Source: https://datalab.visitkorea.or.kr/datalab/portal/nat/getNatFocTourAna.do
3. The 2025 Foreign Tourist Survey raw file and codebook are publicly listed, making traveler-level expenditure variables linkable to origin, demographics, purpose, stay, activities and satisfaction after harmonization. Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310809&cateCont=spt05&cbIdx=1127&pageIndex=1
4. Medical tourism is separately observable with foreigner credit-card spend and transaction counts by region, origin country and medical specialty. Source: https://datalab.visitkorea.or.kr/datalab/portal/theme/getMedicalTourSearch.do
5. KTO's Area Tourism Demand Strength API contains tourism-consumption-strength indicators derived from credit card, mobile and navigation data. This is context/derived demand, not a substitute for raw foreigner spend. Source: https://www.data.go.kr/data/15151868/openapi.do

## E — Enterprise backbone
BC Card's Financial Big Data Platform explicitly offers foreign-customer consumption data for domestic merchants, including nationality, visit region and merchant, and supports year/month/day plus province/city/dong aggregation with sales amount/count. Source: https://abp.bccard.com/dataFolio/dataFolioPage
This is a strong candidate for BUY/CONNECT because its administrative-dong and merchant-category resolution can fill gaps left by public dashboards, but network coverage must be retained as a provenance limitation.

## R — Research method evidence
Research on inbound tourism expenditure in Korea shows origin-market income, relative prices and real exchange rates can materially affect inbound tourism expenditure; these are candidate explanatory controls, not constants or final KTOF weights. Source: https://www.sciencedirect.com/science/article/pii/0160738395000739
Research on Seoul visitors also shows expenditure patterns differ by origin and trip purpose, reinforcing that per-capita averages must be segmented rather than treated as universal. Source: https://www.sciencedirect.com/science/article/pii/S0261517704000202

## Canonical SPEND dimensions
`ORIGIN_COUNTRY × WHO × YYYY-MM × REGION × ACTIVITY × MERCHANT_CATEGORY × CHANNEL × PAYMENT_METHOD × TRANSACTION_AMOUNT × TRANSACTION_COUNT × STAY_NIGHTS`

Optional derived measures after denominator validation:
- spend_per_arrival
- spend_per_night
- spend_per_completed_activity
- spend_per_transaction
- regional_spend_share
- category_spend_share
- night_value
- local_retention (requires MONEY_FLOW)

## Coverage caveats
Do not blend online OTA prepayments with in-destination card merchant spend unless transaction geography and service-consumption geography are separately modeled.
Do not treat card issuer country as identical to nationality/residence unless source documentation supports it.
Do not inflate missing cash/wallet payments to a total without a documented calibration method.

## Primary blockers
- 10+ year traveler-level expenditure/codebook harmonization.
- Full monthly foreigner `origin × region × industry` export/ingestion.
- Cash and alternative-wallet calibration.
- Online prepayment/OTA geography.
- Unique-card/unique-person denominator.
- Product/activity-level spend linkage.
- Supplier net receipt and local-retention economics (MONEY_FLOW/Ground/N).
