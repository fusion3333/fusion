# WHEN — Evidence Completion

## Objective
Close the public-source discovery layer for WHEN: not merely seasonality, but the temporal state of inbound tourism from awareness/intent through arrival and post-arrival behavior.

## Canonical time dimensions
- calendar_date, year, month, week where supported
- season (derived, never a replacement for month)
- origin-country holiday / school-break calendar
- Korean holiday/event/festival calendar
- booking/search lead time where observable
- arrival/departure window
- shock/regime identifier

## Verified official backbone
1. KTO Korean Tourism Statistics publishes monthly inbound statistics and downloadable country/month workbooks. The 2024-12 publication exposes all-country, major-country, 2019-comparison and monthly-statistics XLSX files.
2. KTO annual statistics span 1975-2025 for inbound/outbound and tourism receipts/expenditure; annual series is context, not a substitute for monthly panels.
3. MOJ Immigration Statistics Monthly publishes monthly foreign-entry raw XLSX tables and terminology documentation, providing an administrative cross-check.
4. KTO country analysis exposes sex/age, purpose and transport and warns that 2020-2022 Foreign Tourist Survey methodology/content changed, so survey behavior cannot be treated as one uninterrupted homogeneous series.
5. KTO Potential Visitor Survey provides 2022-2025 intention/behavior tables and 2025 raw-data application materials; intention timing must remain separate from actual arrival.

## Historical shock evidence
KTO's 2015 tourism statistics explicitly show the MERS regime: pre-MERS growth, severe contraction during spread, and recovery afterward. KTO's 2016 report shows base effects, school/vacation season, short-haul popularity, cruise/air-seat expansion and route additions as timing-related market context. These prove that raw month-of-year seasonality is confounded by shocks and supply regimes.

## Required temporal model
Observed(t) must be decomposed conceptually into:
- structural trend
- recurring seasonality
- origin-calendar effects
- destination-calendar effects
- access/capacity effects
- price/FX effects
- policy/visa effects
- exogenous shock/regime effects
- campaign/content/event pulses
- residual

No coefficient is fixed yet. This is a measurement contract, not the final KTOF formula.

## Regime ledger requirement
At minimum tag COVID-19, MERS, major visa/K-ETA changes, route openings/closures, airline seat shocks, major geopolitical restrictions, large destination events, survey methodology breaks, and material payment/mobility-system changes. Event dates must come from authoritative sources before causal use.

## 10Y×12M panel rule
Target canonical panel = 2015-2025 monthly, preserving all 132 months. 2020-2022 are NOT deleted: they are tagged as pandemic/methodology regimes. For each origin market store value, source, definition, revision status and comparability flag.

## Measurement prohibitions
- annual / 12 is not monthly data
- quarterly values must not be interpolated into fake monthly observations
- Google relative interest is not absolute search volume
- seat capacity is not realized passengers
- holiday coincidence is not causal effect
- month correlation is not traveler-level timing causality
- survey intention is not arrival

## Public-layer gaps
The main remaining work is bulk ingestion/harmonization rather than discovering more generic sources: country×month raw panels; origin holiday calendars; route/seat histories; exchange-rate/price covariates; exact policy/event ledger; historical survey-variable harmonization.

## Proprietary / Ground / N boundary
Public data does not reliably reveal individual exposure→search→plan→book→pay→arrive timestamps, abandonment lead time, personal leave constraints, or exact why-now decision moments. Those require partner logs, first-party telemetry, or structured traveler interviews.

## Completion judgment
Public source discovery readiness: 0.88.
Engine-ready: 0.70.
Decision: PUBLIC_SOURCE_DISCOVERY_LOCKED_RAW_PANEL_EVENT_LEDGER_PARTIAL.
