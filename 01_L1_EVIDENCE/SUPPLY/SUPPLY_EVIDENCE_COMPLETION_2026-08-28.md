# SUPPLY — L1 Evidence Completion (2026-08-28)

## Decision
Public-source discovery is sufficiently mature to lock the **existence/structure layer of Korean tourism supply**, while explicitly refusing to equate registered or discoverable supply with foreigner-sellable supply.

## Canonical evidence backbone
1. **MOIS / local-government licensing data**: nationwide permit/registration records provide business name, address, status and category. KTO Tourism Data Lab states its tourism-business aggregation is based on local administrative licensing data and is updated monthly; from Jan 2026 suspended businesses are excluded from its aggregation logic.
2. **KCTI Tourism Industry Survey**: the 2024 Tourism Promotion Act population reports 43,928 businesses, 219,133 workers and KRW 27.6011T revenue. The broader tourism-industry special-classification frame reports 70,867 businesses and KRW 87.5012T revenue. These are different statistical universes and MUST NOT be merged as one count.
3. **KCTI raw-data archive**: downloadable raw survey files exist across multiple years, including 2022-2024, enabling later historical harmonization.
4. **MCST accommodation inventory**: 2025 Q4 official accommodation statistics provide business and room counts by region/category/grade.
5. **KTO TourAPI / VisitKorea**: visitor-facing supply discovery spans tourist attractions, experience programs, cultural facilities, festivals/events, leisure/sports, accommodation, shopping and food; multilingual APIs/content exist.

## Canonical supply families
ACCOMMODATION; FOOD; TRADITIONAL_CULTURE; CRAFT_ARTISAN; HANBOK; TEMPLE_RELIGIOUS; HERITAGE; PERFORMANCE; FESTIVAL_EVENT; KPOP_HALLYU; BEAUTY; MEDICAL; WELLNESS_HANBANG; SHOPPING; MARKET_LOCAL_LIFE; ALCOHOL_TRADITIONAL_BEVERAGE; NATURE_OUTDOOR; LEISURE_SPORTS; FAMILY_EDUCATION; GUIDE_INTERPRETATION; TRANSPORT_TOUR; MICE; NIGHTLIFE; PHOTO_CONTENT; OTHER_LOCAL_EXPERIENCE.

## Mandatory identity/state fields
supplier_id; source_supplier_id; legal_name; display_name; supply_family; subtype; region; sigungu; address; coordinates; legal_status; permit_date; closure/suspension_state; source_date; source_family; evidence_grade.

## Mandatory separation rules
- RegisteredSupply != OperatingSupply
- OperatingSupply != DiscoverableSupply
- DiscoverableSupply != BookableSupply
- BookableSupply != ForeignerUsableSupply
- ForeignerUsableSupply != CapacityAvailableSupply
- RoomCount != AvailableRoomNights
- TourAPI listing != complete market census
- Platform absence != supplier absence
- Business count under Tourism Promotion Act != business count under tourism-industry special classification

## Evidence gap intentionally deferred to REAL_SELLABLE_SUPPLY
Language, foreign-card payment, overseas identity/account requirements, live inventory, instant booking, cancellation/refund, actual foreign-customer share, capacity, supplier willingness, package/recombination willingness, operational reliability and conversion telemetry are NOT existence-layer facts.

## Lock
SUPPLY public discovery can be locked once the source hierarchy and ontology are preserved. Remaining work is bulk ingestion/dedup/entity resolution and sellability verification, not indiscriminate web searching.