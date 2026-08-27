# MOVE — L1 Evidence Completion — 2026-08-28

## Scope
MOVE is domestic traveler mobility after/around arrival in Korea. Border-entry mode is context, not a substitute for domestic movement.

Canonical journey:
ArrivalGateway → TrunkTransport → Transfer → LocalTransport → LastMile → DestinationArrival → Return/NextDestination.

## Verified public evidence backbone
1. KTO/KCTI 2025 Foreign Tourist Survey: official raw data/codebook/report are available; use for visitor-reported transport and trip behavior.
2. KTO/Data.go.kr publishes inbound foreign-visitor transport-mode and monthly aggregates. These measure arrival/border mode and must not be mislabeled as domestic OD.
3. Tourism Data Lab exposes telecom regional visitation, card tourism spending, and navigation regional search/ranking sensors. These are distinct measurements and should be joined by region/time, not treated as identical populations.
4. Seoul official transport guidance documents subway, single-journey ticketing, multilingual route support and taxi app differences for users with/without Korean phone/card.
5. Seoul announced EMV open-loop transition for foreign-tourist transit accessibility; this is a dated regime change, not a timeless property.
6. KTO 2026 tourist-taxi/city-tour-bus program explicitly targets regional travel friction, partnering with platforms supporting international payments. This is evidence that regional booking/usability friction is operationally recognized.
7. Rail, bus, AFC and local ridership datasets provide trunk/network context. Where nationality is absent they are NETWORK_CONTEXT only.

## Measurement separations
TransportSupply != ForeignerUsableSupply
NavigationIntent != ActualPresence
ActualPresence != TicketTransaction
TicketTransaction != CompletedJourney
BorderEntryMode != DomesticModeChoice
AggregateRidership != ForeignTouristRidership
Complaint != VerifiedViolation
RouteSearch != Arrival

## Required dimensions
origin_country, traveler_segment, yyyy_mm, origin_node, destination_node, mode, operator, journey_stage, language_ready, booking_channel, payment_access, luggage_support, operating_hours, transfer_count, travel_time, generalized_cost, accessibility_state, evidence_sensor, measurement_definition, quality_flag.

## Public blind spots
- nationwide foreign-tourist interregional OD with consistent long history
- nationality-resolved rail/bus/AFC usage
- true last-mile attempted-but-failed denominator
- route-search to actual-arrival conversion
- luggage-caused abandonment
- missed connection/boarding and sold-out substitution
- foreigner-specific effective travel time including confusion/waiting
- multimodal cross-platform journey paths

These are G/N/proprietary requirements, not permission to fabricate estimates.