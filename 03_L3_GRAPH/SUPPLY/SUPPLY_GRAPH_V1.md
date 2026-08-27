# SUPPLY — L3 Graph V1

## Core nodes
Supplier; LegalEntity; Asset; Experience; AccommodationUnit; Product; Location; Category; Person_Artisan; Organization; OfficialListing; PlatformListing; SocialProfile; CapacityState; OperatingState; EvidenceSource.

## Core edges
LegalEntity --OPERATES--> Supplier
Supplier --OWNS_OR_CONTROLS--> Asset
Supplier --OFFERS--> Product
Product --DELIVERS--> Experience
Supplier --LOCATED_AT--> Location
Supplier --CLASSIFIED_AS--> Category
Person_Artisan --PROVIDES--> Experience
Supplier --REPRESENTED_BY--> OfficialListing
Supplier --LISTED_ON--> PlatformListing
Supplier --HAS_SOCIAL_PROFILE--> SocialProfile
Supplier --HAS_OPERATING_STATE--> OperatingState
Product --HAS_CAPACITY_STATE--> CapacityState
EvidenceSource --SUPPORTS--> Node/Edge

## Supply state machine
UNKNOWN
-> IDENTIFIED
-> IDENTITY_RESOLVED
-> LEGAL_STATUS_RESOLVED
-> OPERATING_CANDIDATE
-> DISCOVERABILITY_OBSERVED
-> COMMERCIAL_PATH_OBSERVED
-> SELLABILITY_PENDING

The next axis REAL_SELLABLE_SUPPLY owns the transition from COMMERCIAL_PATH_OBSERVED to VERIFIED_FOREIGNER_SELLABLE.

## Entity-resolution key candidates
normalized_name + address + coordinates + phone + registration/permit id + website domain + platform ids.

## Temporal model
Every mutable edge carries observed_at, source_date and confidence. Closure, suspension, reopening, platform listing and product availability are events rather than destructive overwrites.

## Measurement candidates
OfficialCoverage = matched_official_content / resolved_operating_supplier_universe
PlatformCoverage = platform_listed / resolved_relevant_supplier_universe
MultilingualDiscoveryCoverage = multilingual_discoverable / resolved_relevant_supplier_universe
LatentSupplyShare = verified_noncanonical_or_social_discovered / verified_relevant_supply

Denominators must name the universe explicitly. No metric may use 'all Korean tourism supply' unless the universe definition is materialized.

## Prohibited graph shortcuts
REGISTERED --IMPLIES--> OPERATING
OPERATING --IMPLIES--> BOOKABLE
LISTED --IMPLIES--> AVAILABLE
MULTILINGUAL_PAGE --IMPLIES--> LANGUAGE_SERVICE
ROOM_COUNT --IMPLIES--> LIVE_INVENTORY
SOCIAL_POST --IMPLIES--> COMMERCIAL_PRODUCT

## Cross-axis joins
Demand/WHO/WHY/WHEN -> desired supply family
SEARCH -> discoverability edges
BOOK_PAY -> commercial transaction edges
MOVE -> physical accessibility
STAY/DO -> consumption/experience edges
SPEND -> transaction/yield edges
PAIN/SATISFACTION -> quality/recovery/reputation edges

This graph is intentionally pre-KTOF: it defines measurable states before weights or opportunity scores.