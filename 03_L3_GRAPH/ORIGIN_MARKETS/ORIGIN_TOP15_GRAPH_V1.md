# Origin TOP15 Graph V1

## Nodes
OriginMarket, OriginPopulation, OutboundTrip, KoreaArrival, AlternativeDestination, Purpose, TravelerSegment, Calendar, FX, AirRoute, VisaPolicy, SearchSignal, BookingSignal, Spend, Stay, SourceMeasurement, MethodologyRegime.

## Core edges
OriginMarket -> GENERATES -> OutboundTrip
OutboundTrip -> DESTINATION -> KoreaArrival / AlternativeDestination
TravelerSegment -> MEMBER_OF -> OriginMarket
OutboundTrip -> HAS_PURPOSE -> Purpose
OriginMarket -> EXPOSED_TO -> Calendar/FX/VisaPolicy
OriginMarket -> CONNECTED_BY -> AirRoute
OriginMarket -> EMITS -> SearchSignal
SearchSignal -> MAY_PRECEDE -> BookingSignal
BookingSignal -> MAY_PRECEDE -> KoreaArrival
SourceMeasurement -> OBSERVES -> node/edge
MethodologyRegime -> QUALIFIES -> SourceMeasurement

## Evidence state
Every edge: OBSERVED | INFERRED | PROXY | IMPUTED | UNKNOWN.
Every measure: source agency, native frequency, definition, methodology version, revision flag.

## Forbidden joins
Nationality==Residence; trip==person; departure==arrival; annual==monthly; search==booking; booking==arrival.

## Future opportunity edges
OriginMarket -> UNDER_INDEXES_IN -> Korea
OriginMarket -> OVER_INDEXES_IN -> CompetitorDestination
KoreaInterest -> FAILS_TO_CONVERT_TO -> KoreaArrival
These require empirical denominator/calibration before activation.