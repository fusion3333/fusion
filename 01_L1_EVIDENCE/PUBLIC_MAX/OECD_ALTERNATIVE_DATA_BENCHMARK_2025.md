# OECD Alternative Tourism Data Benchmark — 2025

## Why retained
This evidence is used as a benchmark for the PUBLIC DATA MAXIMUM COMPLETION phase, not as a substitute for Korea-specific observations.

## OECD source families
OECD's 2025 tourism measurement work identifies transaction data, geospatial/mobile positioning, web scraping, platform data, administrative data, flight data, Google search data, national rail data and duty-free purchase data as relevant complements to traditional tourism statistics.

## Korea Tourism Data Lab benchmark
OECD's Korea Tourism Data Lab case study reports:
- 9 private-sector and 15 public-sector source families in the platform context;
- 578 public/private data types as of February 2025;
- official tourism statistics and Foreign Tourist Survey alongside mobile positioning and credit-card expenditure;
- a methodological warning that big-data visitor estimates may over- or underestimate actual visitor counts and are better interpreted for trends/growth than as precise official counts.

## International method patterns to reuse
- Türkiye: combines visitor survey and interbank-card data; card data can be separated by origin, MCC and physical/e-commerce, with residency rules and survey-based card-use calibration.
- Spain: experimental outbound expenditure statistics use bank transaction data for monthly detail across 120+ countries and combine this with mobile positioning for average daily expenditure.
- Lithuania/Slovenia/Australia: mobile positioning is used as a granular mobility complement, with explicit limitations around traveller type, demographics or measurement precision.
- Austria: payment data and survey data are combined because payment coverage and tourism classification are imperfect; mobile data was rejected for a use case when precision was insufficient.

## Engine implication
The benchmark validates a hybrid sensor architecture, but also reinforces our rules: sensor != truth, administrative/survey/big-data measurements remain distinct, calibration is required, and unavailable historical sensor periods must not be fabricated.