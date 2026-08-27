# ORIGIN TOP15 — Sequential Completion Evidence

Date: 2026-08-28

## Objective
Observe Korea's major inbound origin markets from BOTH sides: Korea inbound measurement and each origin country's own outbound measurement. The mirror is not assumed symmetric because definitions differ.

## Canonical identity
OriginMarket = residence/citizenship/nationality definition + source + period + outbound population + Korea-bound observed flow + alternative destinations + purpose/profile/spend where available.

## Evidence classes
O official population statistics; E enterprise/platform behavior; S social/VOC; R research; G field intelligence; N first-party telemetry.

## Verified official backbone
- Korea: Korea Tourism Data Lab/immigration official inbound nationality statistics remain the anchor for Korea-arrival ranking and monthly inbound series.
- Australia ABS Overseas Arrivals and Departures: monthly short-term resident returns by destination, downloadable CSV/XLSX. The series shown in current releases reaches at least 2016 monthly and explicitly warns that counts are border crossings rather than persons. Tables also cover intended length/reason and state of residence.
- UK ONS Travel Trends: annual visits/spending abroad plus nights, purpose, main country, mode, length of stay and nationality. 2009–2019 superseding series exists; new methods introduced in 2019. A 2024 destination-airport assignment error is currently flagged by ONS and must be quality-tagged.
- Canada Statistics Canada: resident outbound trips/expenditure are official; current releases expose overseas countries by age and quarterly outbound totals. Canonical ingestion should use downloadable tables/SDMX, not press-release prose.
- Indonesia BPS Outbound Tourism Statistics 2025: annual resident outbound trips with travel characteristics, socioeconomic characteristics and expenditure. Sources include immigration, Outbound Tourism Digital Survey and Mobile Positioning Data. Monthly outbound headline counts also exist.
- Singapore SingStat: monthly and annual outbound departures of Singapore residents by mode, downloadable Excel. Destination-specific Korea measurement must be paired with Korea/destination-side arrivals where SingStat destination detail is absent.
- Thailand NSO/Department of Tourism: outgoing Thai travellers by destination. Official 2023 table places Korea fifth with 5.96% of outgoing Thai travellers; series shown for 2020–2023.
- Japan Statistics Bureau handbook provides Japanese overseas travellers by destination using destination-side sources; JNTO provides strong monthly inbound-to-Japan series but must not be mislabeled as Japanese outbound.

## Partial markets
China, Taiwan, USA, Hong Kong, Philippines, Vietnam, Malaysia and Russia have official components, but a single canonical 10-year monthly destination-resolved outbound series has NOT been verified in this batch for every market. These remain PARTIAL rather than being falsely promoted to complete.

## Measurement rules
1. Korea inbound nationality != origin-country resident outbound unless definitions align.
2. Trips/border crossings != unique persons.
3. Country of citizenship != country of residence.
4. Destination-government arrival counts may be used as the destination-side mirror but must retain that government's visitor definition.
5. Annual origin data are never interpolated into monthly observations.
6. COVID and methodology changes remain explicit regimes.
7. Enterprise/SNS signals cannot replace official population denominators.

## Origin Mirror record
Each observation should carry: origin_market, residence_definition, citizenship_definition, destination, period, frequency, trips_or_persons, purpose, age/sex if available, party if available, nights, spend, mode, source_class, source_agency, methodology_version, regime, observed/inferred/proxy flag.

## Strategic consequence
The mirror lets Korea Tour distinguish: (a) origin travel appetite, (b) Korea share of outbound demand, (c) Korea-vs-competitor substitution, and later (d) latent Korea interest that fails to convert.

## Remaining non-search work
- ingest Korea 2025 full-country XLSX and calculate exact TOP15 ranking rather than preserving a provisional panel;
- bulk ingest official origin tables/API outputs;
- harmonize resident/citizen/trip definitions;
- build origin x destination x month panel where genuine monthly destination data exist;
- attach E/S/R sensors after official denominator is stable;
- G/N required for planner/payer/influencer and conversion chain.

## Gate
Public source discovery is sufficiently mature to lock the discovery layer, but raw harmonized TOP15 panel is incomplete. Decision: PUBLIC_SOURCE_DISCOVERY_LOCKED_MULTI_COUNTRY_RAW_HARMONIZATION_PARTIAL.