# BENCHMARK REVERSE ENGINEERING MASTER V1

Date: 2026-08-27
Status: ACTIVE MASTER
Purpose: systematically acquire, decompose, benchmark and selectively reuse public methods, data primitives, measurement definitions and architecture patterns from leading tourism/travel intelligence systems without copying proprietary code, confidential data or protected implementation details.

## 1. Core rule

We do not compete with specialist data engines by rebuilding every sensor. We treat best-in-class systems as SENSOR / METHOD / BENCHMARK candidates and map their public primitives into Korea Tour canonical measurements.

Pipeline:
BENCHMARK -> PUBLIC METHOD -> DATA PRIMITIVE -> MEASUREMENT DEFINITION -> LIMITATION -> REUSABILITY -> BUILD/BUY/CONNECT -> KOREA-TOUR GRAPH

Reverse engineering means lawful black-box/public-document analysis only: public product docs, methodology pages, APIs, reports, papers, dashboards, public samples, help centers and observable outputs. No credential bypass, scraping behind access controls, confidential material acquisition, or proprietary code copying.

## 2. Priority benchmark families

### A. Destination Intelligence / full-cycle
- Data Appeal + Mabrian
- Benchmark primitives: inspiration/search, social listening, flight search, air capacity, airfare, booking, accommodation, spend, interests/perception, mobile presence/mobility, reviews, sustainability, competitor benchmarking.
- Publicly stated architecture: 30+ global sources / 400+ tourism indicators; pre/during/post travel-cycle model; cross-layer analysis.
- Historical mapped POI/territory data publicly stated from Jan 2019; daily update with client publication lag stated in FAQ.
- Reuse target: SENSOR FUSION architecture, perception/satisfaction measurement pattern, destination competitor matrix, full-cycle sensor coverage map.

### B. Aviation demand / forward demand
- ForwardKeys
- Benchmark primitives: air schedules/capacity, searches, bookings/ticketing, origin/destination, inferred traveller nationality/profile, forward-looking demand.
- Public method clue: traveller nationality approximation combines origin, official-statistics correlation, itinerary, ticket-issuing office, stay length and other travel-profile signals; weekly updating is publicly described.
- Reuse target: multi-signal inference pattern, official-statistics calibration, forward-demand lead indicators.

### C. GDS / Air + Hotel intelligence
- Amadeus Travel Intelligence / Demand360
- Benchmark primitives: future air bookings, air visitors, hotel on-the-books occupancy, ADR, forward pacing.
- Reuse target: booking-pace / on-the-books / event-content impact measurement and lead-lag architecture.

### D. Accommodation / STR
- AirDNA
- Benchmark primitives: listing supply, available vs blocked nights, booked nights, occupancy, ADR, revenue, pacing, origin/geolocation, seasonality, regulation, market score.
- Public methodology examples: occupancy uses booked available days rather than all calendar days; revenue includes nightly rates + cleaning fees minus discounts/service-fee treatment as documented; Market Score compares Investability, Rental Demand, Revenue Growth, Seasonality and Regulation within-country; historical tourism data stated back to 2015.
- Reuse target: denominator discipline, available-vs-blocked state, historical vs forward measurement separation, market benchmarking.

### E. Korea transaction / consumption intelligence
- BC Card big-data business
- Benchmark primitives: consumption, market/channel/commercial-area analysis, local consumption, trend consulting, model building, visualization.
- Reuse target: SPEND measurement design and regional/category transaction decomposition.

### F. Korea public tourism intelligence
- Korea Tourism Data Lab / KTO and associated public/partner datasets
- Benchmark primitives: official visitor statistics, survey, mobile presence, navigation, card consumption, tourism-demand indices, national/region dashboards.
- Reuse target: Korean official backbone and calibration layer.

## 3. Mandatory decomposition for every benchmark

For every company/system create a BENCHMARK CARD containing:
1. Company/system
2. Customer/problem
3. Journey stage covered
4. Input sensors
5. Raw observable unit
6. Derived variables
7. Published formulas/definitions
8. Temporal granularity
9. Spatial granularity
10. Segment granularity
11. Historical depth
12. Refresh frequency
13. Forecast horizon
14. Validation/calibration method
15. Known bias/limitations
16. Export/API availability
17. Proprietary vs reproducible component
18. BUILD / BUY / CONNECT / IGNORE recommendation
19. Korea Tour canonical measurement mapping
20. Graph nodes/edges enabled
21. Opportunity/Gap use case
22. Evidence URLs + retrieval date

## 4. Benchmark-to-axis mapping

WHO: KTO, official origin-country statistics, ForwardKeys inferred profile, mobility/geolocation vendors.
WHY/HUMAN: official surveys + Data Appeal/Mabrian social/perception methods + academic motivation/destination-choice research.
WHEN: official monthly series + flight/hotel forward pacing + search/social lead signals.
WHERE: KTO/mobile/navigation + telecom/geolocation + platform POIs.
STAY: official survey + hotel/STR + AirDNA/Lighthouse/OTA.
DO: survey + POI/review/activity platforms + mobility + spend.
SPEND: official survey + card/payment processors + BC Card + international card/payment intelligence.
SEARCH: Google/search trend + flight search + social inspiration + OTA/app intent signals.
BOOK/PAY: GDS/OTA/platform booking + PG/card acceptance/failure + official regulatory/payment evidence.
MOVE: official transport + navigation + mobile presence + ticketing/AFC + last-mile platform data.
PAIN/VOC: complaints + reviews + social listening + customer-service/ground interviews.
SATISFACTION: survey + review NLP + repeat/revisit/share signals.
SUPPLY: licensing/official supply + maps/POI + OTA + operating/bookable/payable ground validation.
PLATFORM: OTA/GDS/maps/social/search coverage and conversion role.
MONEY FLOW: OTA commissions, PG/FX, card economics, supplier economics, CAC where public/obtainable.
ISLAND/BOTTLENECK: cross-sensor conversion losses and state-transition failures.
OPPORTUNITY: only after empirical evidence; no fixed KTOF weights yet.

## 5. Reverse-engineering workstreams

RE-01 Full-cycle sensor architecture: Data Appeal/Mabrian.
RE-02 Forward air demand: ForwardKeys + Amadeus.
RE-03 Accommodation state/forecast: AirDNA + hotel intelligence.
RE-04 Spend: Korean card + international payment/card methods.
RE-05 Mobility: telecom/navigation/AFC/geolocation methods.
RE-06 Sentiment/psychology: social listening + review NLP + research.
RE-07 Origin-country outbound intelligence: official government mirror + commercial augmentation.
RE-08 Competitive destination benchmarking: same canonical measures across Korea/Japan/Taiwan/Thailand/Singapore/Vietnam/etc.
RE-09 Failure journey: identify what benchmark systems do NOT measure well; attempted-but-failed becomes proprietary-data target.
RE-10 Real Sellable Supply: registered != operating != discoverable != language-ready != bookable != payable != willing != capacity-ready.

## 6. Reuse decision rule

CONNECT when a mature specialist sensor/API exists and reconstruction has low strategic value.
BUY when proprietary coverage materially exceeds reproducible public data and economics justify it.
BUILD when the layer is strategic differentiation: cross-engine graph, lost demand, failure journey, real sellable supply, gap/island/bottleneck, revalue and opportunity reasoning.
GROUND when online data cannot observe supplier willingness, capacity, operational friction or actual failed transactions.
IGNORE when marginal information value is low or definition/provenance is unreliable.

## 7. Key architecture lesson already visible

Leading systems validate our multi-sensor direction but also expose our differentiation.

Typical specialist destination intelligence:
SEARCH/SOCIAL + AIR + HOTEL + SPEND + MOBILE + REVIEW -> DASHBOARD/FORECAST/BENCHMARK

Korea Tour target:
HUMAN MOTIVE + ORIGIN MIRROR + COMPETITIVE DESTINATION + FULL JOURNEY + SUPPLY STATE + PLATFORM + TRANSACTION + FAILURE + GROUND TRUTH -> EXPLAINABLE GRAPH -> GAP/ISLAND/BOTTLENECK -> OPPORTUNITY -> EXPERIMENT -> OUTCOME -> LEARNING

The differentiation is therefore not possession of every raw sensor. It is the canonical cross-sensor graph, origin/destination mirroring, human-motive layer, explicit failure edges, real-sellable-supply state machine, explainable opportunity reasoning and closed-loop commercial validation.

## 8. Evidence status from first benchmark pass

Data Appeal/Mabrian: public documentation confirms multiple-source integration covering social/opinion, OTA/accommodation, GDS/air, card spend, telecom/app mobility, sustainability, competitor comparison, NLP sentiment/perception and API integration.
AirDNA: public documentation confirms available-vs-booked denominator discipline, revenue methodology, historical/forward pacing distinction, market-score components, geolocation visitation + STR dashboard, and long historical depth.
ForwardKeys: public documentation exposes a multi-variable approach to inferred nationality rather than treating nationality as directly observed in every aviation record.
Amadeus: public Travel Trends material demonstrates future-booking and on-the-books hotel indicators being used to measure content/event-related demand shifts.
BC Card: public corporate documentation confirms transaction-data supply/processing, commercial-area/marketing/trend consulting, analytical model construction and visualization.

## 9. Next files required

- 00_SYSTEM/BENCHMARK_METHOD_PRIMITIVE_REGISTRY.csv
- 00_SYSTEM/BENCHMARK_SENSOR_COVERAGE_MATRIX.csv
- 00_SYSTEM/BUILD_BUY_CONNECT_MATRIX_V2.csv
- 01_L1_EVIDENCE/BENCHMARKS/<company>_PUBLIC_METHOD_EVIDENCE.md
- 02_L2_OBSERVATION/BENCHMARKS/BENCHMARK_GAP_OBSERVATIONS_V1.md
- 03_L3_GRAPH/BENCHMARK_METHOD_TO_KTOUR_GRAPH_V1.md

## 10. Non-negotiable

Do not copy a competitor's score merely because it exists. Reconstruct the measurement definition, denominator, source class, time regime and bias first. A proprietary index may be used as a benchmark/target but cannot silently become a Korea Tour canonical variable.

Do not treat absence of public methodology as permission to guess. Mark PROPRIETARY/UNKNOWN.

Do not finalize KTOF weights until empirical data and commercial outcomes exist.
