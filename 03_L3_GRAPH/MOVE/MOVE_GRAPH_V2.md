# MOVE Graph V2

## Node types
TravelerSegment, ArrivalGateway, TransportMode, Operator, StationStop, Route, Transfer, LocalMobility, DestinationAsset, BookingChannel, PaymentRail, AccessibilityFeature, FrictionEvent, MovementAttempt, PresenceObservation, TransactionObservation, RegimeEvent.

## Canonical edges
TravelerSegment -> SEARCHES_ROUTE -> Route
Route -> USES_MODE -> TransportMode
TransportMode -> OPERATED_BY -> Operator
Route -> CONNECTS -> StationStop
StationStop -> REQUIRES_TRANSFER -> Transfer
Transfer -> CONNECTS_TO -> LocalMobility
LocalMobility -> REACHES -> DestinationAsset
MovementAttempt -> MAY_FAIL_AT -> FrictionEvent
RegimeEvent -> CHANGES_USABILITY_OF -> TransportMode
PresenceObservation -> OBSERVES -> DestinationAsset
TransactionObservation -> OBSERVES_PAYMENT_AT -> DestinationAsset

## Forbidden inference edges
NavigationSearch -/-> ActualVisit
AFCRidership -/-> ForeignTouristRidership unless nationality evidence exists
TransportExists -/-> ForeignerUsable
Complaint -/-> Violation
ForeignCardAcceptedAtOneStage -/-> EndToEndPaymentWorks
ArrivalAirport -/-> DomesticDestination

## Cross-axis edges
WHO conditions mode preference and accessibility needs.
WHEN changes schedules, capacity, weather and operating hours.
SEARCH creates navigation intent.
BOOK_PAY determines ticket/reservation/payment success.
STAY anchors daily origin nodes.
DO supplies destination assets.
SPEND provides transaction observations.
PAIN supplies friction events.
SUPPLY/REAL_SELLABLE_SUPPLY determines destination availability.
FAILURE_JOURNEY consumes failed MOVE transitions.
N_TELEMETRY supplies denominators and completed paths.

## Opportunity precursor
RegionalConnectivityIsland is a derived candidate node only when independent evidence supports demand, asset quality/supply, physical connectivity, foreigner usability and observed conversion gap.