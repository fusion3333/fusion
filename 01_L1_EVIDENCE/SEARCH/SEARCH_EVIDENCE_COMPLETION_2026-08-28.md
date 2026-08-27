# SEARCH — L1 EVIDENCE COMPLETION
Date: 2026-08-28
Status: PUBLIC SOURCE DISCOVERY COMPLETE / BEHAVIORAL CONVERSION PARTIAL

## Objective
Observe how an overseas traveler moves from awareness to active information seeking and eventually toward a transaction, without collapsing inspiration, search, comparison, map use, OTA use and booking into one variable.

## Canonical funnel
`EXPOSURE -> INSPIRATION -> PASSIVE_DISCOVERY -> ACTIVE_SEARCH -> RESULT_EXPOSURE -> COMPARISON -> PLACE_DETAIL -> MAP/ROUTE -> OTA/SUPPLIER -> BOOK_ATTEMPT -> ABANDON/CONVERT`

## Measurement rules
- Social inspiration != active search.
- Google/KTO search index != absolute query count.
- Search result exposure != click.
- Click != supplier detail consumption.
- Map view != physical visit.
- OTA detail view != booking attempt.
- Booking attempt != booking success.
- Survey-recalled information source != observed behavioral event.
- Platform first-party data must retain platform-population scope.

## O — Official
KTO Foreign Tourist Survey and Potential Korea Traveler Survey form the canonical stated-information/consideration layer. KTO Data Lab provides Google Korea-travel-interest time series for selected origin markets and must be treated as a normalized interest proxy rather than absolute search volume.

## E — Enterprise
Google/Maps, Expedia Group, Booking.com and OTA surfaces provide complementary sensors for discovery, research, reviews, price, availability and booking transition. Expedia Group 2025 Traveler Value Index reports social media as a travel-inspiration source for 61% of surveyed consumers, versus 35% in its 2023 study, and 73% report influencer recommendations affected booking decisions. This is a global benchmark, not a Korea inbound rate.

Expedia purchase-path research distinguishes inspiration/research channels and shows social media used for destination inspiration/recommendation. Booking.com travel research provides another large multi-market planning/technology sensor. Enterprise observations remain scoped to their survey/platform populations.

## S — Social/VOC
Instagram, YouTube, TikTok, Reddit and origin-specific social ecosystems are used to discover vocabulary, inspiration pathways, recommendation patterns, false expectations and friction. Social counts are not population prevalence unless a valid denominator/sample exists.

## R — Research
Use information-search, destination-choice, consideration-set and path-to-purchase literature to validate constructs and lag structure. Research supports architecture; it does not replace Korea-specific measurements.

## G — Ground
Required questions: first awareness source; first active query; exact query language; channel switching; map use; OTA use; reason for abandoning a place/product; whether a desired experience was never found.

## N — Telemetry
Required events: SEARCH_STARTED, QUERY_SUBMITTED, RESULT_SHOWN, RESULT_CLICKED, FILTER_USED, MAP_OPENED, ROUTE_REQUESTED, SUPPLIER_VIEWED, OTA_OUTBOUND_CLICK, BOOK_STARTED, BOOK_ABANDONED, BOOK_SUCCESS. Only this layer can provide clean event denominators for conversion/failure once deployed.

## Search Island definition
A candidate SEARCH_ISLAND exists when demand/interest evidence is high, relevant supply exists, but foreign-language discoverability/result exposure/click-through or bridge-to-booking is weak. It remains a candidate until denominators are observed.

## Remaining blockers
1. Korea-specific query-level Google/YouTube/social absolute volume is mostly unavailable publicly.
2. Result impressions, CTR, ranking exposure and cross-platform user paths are proprietary.
3. OTA browse-to-book and abandon denominators are proprietary.
4. Historical platform algorithm/ranking regimes are difficult to reconstruct.
5. Cross-device identity stitching requires consented first-party telemetry.

## Completion assessment
Public Evidence Readiness: 0.81
Engine-ready: 0.57
Decision: PUBLIC_SOURCE_DISCOVERY_LOCKED_BEHAVIORAL_FUNNEL_PARTIAL
