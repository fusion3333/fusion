# FX official regime sensor observation — 2026-08-28

## Evidence status
Tier-A official source verified: Bank of Korea Financial and Economic Snapshot, Foreign Exchange Market dashboard.

Official source: https://snapshot.bok.or.kr/dashboard/B1

## What is now verified
The Bank of Korea exposes an official foreign-exchange dashboard with downloadable data for major-currency KRW exchange rates and effective exchange-rate indices. The dashboard states that KRW/USD and KRW/CNY are based on Seoul foreign-exchange-market interbank closing rates. It separately states that KRW/JPY uses the Hana Bank quoted rate at 15:30, with a methodology/time-of-day break for dates before 2016-07-29 (15:00 before that date). The dashboard also exposes KRW nominal effective exchange-rate information using the BIS Broad Index and labels the source as ECOS/BIS.

## Evidence-supported use in the temporal ledger
This is sufficient to register FX as an official time-varying regime/control sensor for the tourism time axis. The data may be joined by date/month after aggregation, but each currency series must preserve its own definition and method metadata.

Required fields for later normalized rows:
- period
- currency_pair_or_index
- value
- unit
- aggregation_method
- source_owner
- source_url
- source_series_definition
- methodology_break_flag
- retrieved_at

## Non-comparability / guardrails
1. A nominal bilateral exchange rate is not the same measure as a nominal or real effective exchange-rate index.
2. A daily interbank closing rate is not the same measure as a traveler’s retail cash-exchange rate, card-settlement rate, DCC rate or bank customer rate.
3. KRW/JPY has an explicit source/timing regime break at 2016-07-29 and must carry a regime flag when used across that boundary.
4. Exchange-rate movement alone does not establish a causal effect on visitor arrivals, spend or destination choice.
5. Exact ECOS table/item codes remain UNKNOWN until directly verified through ECOS metadata. Third-party code references are not accepted as Tier-A evidence.

## Coverage change
Before this acquisition, the temporal-regime backlog named FX as a required axis but no narrowly scoped Tier-A FX source manifest was present in the repository search used for this run. The source path and method boundaries are now verified and registered. Bulk 2015-present row ingestion remains pending because direct ECOS metadata/API extraction has not yet been completed in this run.

## Current status
`OFFICIAL_SOURCE_AND_METHOD_VERIFIED / BULK_MONTHLY_ROWS_PENDING`
