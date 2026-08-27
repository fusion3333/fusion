# PUBLIC DATA MAXIMUM COMPLETION V1

## Mission
Exhaust high-value data that can be acquired through public, official, enterprise-public, research and public-community sources before requesting Ground Intelligence or first-party N-Telemetry.

## Execution order
1. Korea official/public bulk data inventory and ingestion queue
2. Origin TOP15 government mirror
3. Competitive destination mirror
4. 10Y x 12M ragged temporal panel
5. Supply entity union and entity resolution
6. Search / platform / OTA / map coverage
7. multilingual SNS / review / VOC evidence
8. public money-flow and fee rules
9. known Failure Journey evidence library
10. materialized Knowledge Graph tables
11. Gap / Island / Bottleneck dry-run
12. explainable Opportunity candidate dry-run

## Source priority
O: official statistics, ministries, national tourism/statistics authorities
E: enterprise/platform first-party public disclosures and APIs
S: social/community/review evidence for discovery and hypotheses
R: academic/industry research for methods and validation
G: Ground Intelligence — explicitly deferred from this phase
N: first-party telemetry — explicitly deferred from this phase

## Measurement discipline
- zero != missing != not observed != unavailable != private != Ground-required != Telemetry-required
- survey estimates, mobile estimates, card estimates and administrative counts remain separate measurements
- do not backfill years before a sensor existed
- preserve observed_at, valid_time, publication_time and revision regime when available
- do not convert public listing counts into impressions, CTR, conversion or market share
- do not infer causal effects from temporal co-movement
- every derived Observation must retain provenance to source and transformation

## External benchmark confirmation
OECD 2025 tourism measurement guidance explicitly identifies transaction data, mobile positioning, web scraping, platform data, administrative data, flight data, Google search, rail and duty-free data as complementary sources. The OECD Korea Tourism Data Lab case study reports 578 public/private data types as of Feb 2025, including mobile positioning and credit-card expenditure, and warns that big-data visitor estimates are better used for trends than as precise official counts.

## Phase exit gate
Exit only when high-sensitivity public-source gaps have been exhausted or classified as PRIVATE / GROUND_REQUIRED / TELEMETRY_REQUIRED / NOT_OBSERVABLE. Then rerun all 25 axis readiness scores and produce a public-source ceiling estimate before field collection.