# COMPETITIVE DESTINATION GRAPH V1
Date: 2026-08-28

## Purpose
Represent destination competition as an origin- and segment-conditioned choice graph rather than a global ranking.

## Core nodes
- `OriginMarket`
- `TravelerSegment`
- `TripPurpose`
- `Destination`
- `DestinationAttribute`
- `SearchSignal`
- `BookingSignal`
- `ArrivalObservation`
- `SpendObservation`
- `AirAccess`
- `FareObservation`
- `VisaPolicy`
- `CalendarEvent`
- `ShockRegime`
- `PainSignal`
- `SatisfactionSignal`

## Core edges
`OriginMarket -> HAS_OUTBOUND_PROPENSITY -> TravelerSegment`
`TravelerSegment -> HAS_PURPOSE -> TripPurpose`
`TravelerSegment -> CONSIDERS -> Destination`
`Destination -> HAS_ATTRIBUTE -> DestinationAttribute`
`OriginMarket -> SEARCHES -> Destination`
`OriginMarket -> BOOKS -> Destination`
`OriginMarket -> ARRIVES_AT -> Destination`
`OriginMarket -> SPENDS_AT -> Destination`
`OriginMarket -> HAS_AIR_ACCESS_TO -> Destination`
`Destination -> HAS_VISA_REGIME_FOR -> OriginMarket`
`CalendarEvent -> MODULATES -> OriginMarket`
`ShockRegime -> AFFECTS -> Destination`
`TravelerSegment -> REPORTS_PAIN_AT -> Destination`
`TravelerSegment -> REPORTS_SATISFACTION_AT -> Destination`

## Competition edge
A direct `COMPETES_WITH` edge is never created merely because two destinations are in Asia. It requires evidence that the same origin/segment/purpose places them in a common choice set, or controlled panel evidence consistent with substitution.

Suggested edge attributes:
- `origin_market`
- `traveler_segment`
- `trip_purpose`
- `time_window`
- `evidence_type`
- `confidence`
- `substitution_status = OBSERVED|INFERRED|HYPOTHESIS|UNKNOWN`

## State distinction
`SEARCHED != CONSIDERED != BOOKED != ARRIVED != SPENT != SATISFIED`

## Destination-share object
Only construct `DestinationShare` when denominator compatibility is verified. Store native counts and definitions permanently; derived harmonized ratios must point back to their source measurements.

## Korea underpenetration test sequence
`High Origin Outbound Propensity`
+ `High Korea Awareness/Search`
+ `Strong Comparator Realized Share`
+ `Lower Korea Realized Share`
-> inspect `AIR_ACCESS / FARE / VISA / HOTEL_PRICE / PAYMENT / MOBILITY / VALUE / EXPERIENCE_SUPPLY`
-> candidate `CompetitiveFrictionGap`.

This sequence identifies a research candidate, not an opportunity score. Economic ranking remains downstream.
