# SUPPLY — L2 Observations V1

## O1. Supply is a multi-universe object
Korean tourism supply cannot be represented by one official count. Legal tourism businesses, broader tourism-industry businesses, accommodation capacity and visitor-facing tourism content are different measurement universes.

## O2. Official registered supply is already large
The 2024 Tourism Promotion Act frame contains 43,928 businesses; the tourism-industry special-classification frame contains 70,867. The primary analytical problem is therefore not simply 'does supply exist?' but which supply is relevant, operating, reachable and commercially usable by a given traveler.

## O3. Administrative status is necessary but insufficient
Licensing data is the strongest legal/existence backbone, but active registration cannot prove opening hours, inventory, quality, language, payment, booking, capacity or willingness to receive foreign customers.

## O4. Visitor-facing content and legal inventory have different biases
TourAPI/VisitKorea is strong for tourism-content discovery and multilingual representation, while licensing data is strong for legal entities. Their intersection and difference are themselves measurements.

Candidate states:
- LICENSED_NOT_DISCOVERABLE
- DISCOVERABLE_NOT_LICENSE_MATCHED
- DISCOVERABLE_MULTILINGUAL
- OFFICIAL_CONTENT_ONLY
- PLATFORM_ONLY
- SOCIAL_ONLY_LATENT_SUPPLY

## O5. Hidden traditional/local supply is structurally undercounted by tourism-only registries
Artisans, workshops, food makers, cultural practitioners and local businesses can create tourism value without belonging cleanly to a Tourism Promotion Act category. Therefore SUPPLY must permit cross-registry discovery and later Ground verification.

## O6. Capacity is a separate state
Business count cannot stand in for capacity. Accommodation illustrates this directly: establishments and rooms are distinct official measures. Experiences require session capacity, operating days, group limits and seasonal capacity, most of which are not in the public backbone.

## O7. Supply needs temporal versioning
KTO notes that licensing information changes continuously and changed its aggregation logic in 2026 to exclude suspended businesses. Every supplier state therefore requires `valid_from`, `valid_to` or at minimum `observed_at`.

## Opportunity diagnostics enabled after entity resolution
- high demand + high registered supply + low global discovery => DISTRIBUTION_ISLAND candidate
- high demand + low registered supply + high social/latent supply => INFORMAL_OR_MISCLASSIFIED_SUPPLY candidate
- high demand + high visitor-facing content + low commercial inventory => COMMERCIALIZATION_GAP candidate
- high quality/reputation + low multilingual/OTA coverage => UNDER_DISTRIBUTED_ASSET candidate

These are diagnostic hypotheses, not KTOF scores.