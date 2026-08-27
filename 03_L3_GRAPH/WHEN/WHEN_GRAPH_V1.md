# WHEN — Temporal Graph V1

## Core nodes
TravelerSegment; OriginCalendar; KoreaCalendar; Month; Season; SearchSignal; BookingAttempt; Arrival; Stay; Activity; Spend; Satisfaction; AirCapacity; Price; FX; VisaPolicy; Event; Weather; ShockRegime; CompetitorDestination.

## Core edges
TravelerSegment -> HAS_ORIGIN_CALENDAR -> OriginCalendar
OriginCalendar -> SHIFTS_AVAILABLE_TRAVEL_WINDOW -> Month
KoreaCalendar -> CREATES_DESTINATION_EVENT_WINDOW -> Month
SearchSignal -> PRECEDES_CANDIDATE -> BookingAttempt
BookingAttempt -> PRECEDES_CANDIDATE -> Arrival
AirCapacity -> CONSTRAINS_OR_ENABLES -> Arrival
Price/FX -> MODULATES -> BookingAttempt
VisaPolicy -> MODULATES_ACCESS -> Arrival
ShockRegime -> DISTORTS -> SearchSignal/BookingAttempt/Arrival/Spend
Arrival -> CONDITIONS -> Stay/Activity/Spend
CompetitorDestination -> COMPETES_FOR_SAME_ORIGIN_WINDOW -> Arrival

## Causality rule
PRECEDES_CANDIDATE and ASSOCIATED_WITH are default edges. CAUSES is forbidden without credible identification or experiment.

## Grain
Preferred fact key: origin_country × traveler_segment × YYYY-MM × journey_stage × destination/geography × measurement_source.

## Regime-aware comparison
Every time-series observation carries regime_id and comparability_flag. Pandemic and survey-method changes remain visible rather than being smoothed away.