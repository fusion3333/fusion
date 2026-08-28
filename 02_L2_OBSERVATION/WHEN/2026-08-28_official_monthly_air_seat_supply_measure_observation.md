# Official monthly international air-seat supply measure — 2026-08-28

## Evidence-supported observation
The Ministry of Land, Infrastructure and Transport Aviation Portal monthly `항공시장동향` reports publish **international supplied seats (`공급석`) together with international passengers and load factor** at airline / airline-group / total-market level.

Verified examples:
- March 2016 report: March 2015 vs March 2016 international supplied seats are published by Korean full-service carriers, low-cost carriers, Korean-carrier total, foreign-carrier total and total market.
- April 2018 report: April 2017 vs April 2018 supplied seats are published with the same core measures.
- March 2021 issue (reporting February): February 2020 vs February 2021 supplied seats are published; the COVID-era collapse is directly visible and requires a regime flag.

## What this resolves
The `WHEN / 10-year monthly time axis` backlog previously treated air-seat capacity as an unresolved source problem. It is now verified that an official Tier-A monthly report family contains an actual `seat` measure, not merely flights or passenger counts.

## What this does NOT resolve
- This run does **not** prove uninterrupted 2015-01~2026-08 archive completeness.
- It does **not** establish a stable bulk/API endpoint for all monthly rows.
- It does **not** establish origin-country / departure-city / route-level seat capacity for every month.
- `international supplied seats` != `foreign-tourist seats` != `arriving foreign tourists`.
- COVID-era months must not be harmonized as a normal-regime continuation without explicit regime treatment.

## Repository status
`OFFICIAL_MONTHLY_SEAT_MEASURE_VERIFIED_BULK_CONTINUITY_PENDING`

No coverage-score change is justified until archive continuity and actual monthly-row ingestion are verified.