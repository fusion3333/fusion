# DO — L3 GRAPH V1
Date: 2026-08-28

## Core nodes
`TravelerSegment`, `Motive`, `ActivityFamily`, `ActivityProduct`, `Place`, `Supplier`, `TimeSlot`, `Booking`, `Payment`, `MobilityLeg`, `StayNight`, `Spend`, `Review`, `Outcome`.

## State edges
`TravelerSegment -> WANTS -> ActivityFamily`
`Motive -> INCREASES_RELEVANCE_OF -> ActivityFamily`
`ActivityFamily -> EXPRESSED_AS -> ActivityProduct`
`ActivityProduct -> LOCATED_AT -> Place`
`ActivityProduct -> OFFERED_BY -> Supplier`
`TravelerSegment -> PLANS -> ActivityProduct`
`TravelerSegment -> DISCOVERS -> ActivityProduct`
`TravelerSegment -> BOOKS -> ActivityProduct`
`TravelerSegment -> ATTEMPTS -> ActivityProduct`
`TravelerSegment -> COMPLETES -> ActivityProduct`
`TravelerSegment -X-> SKIPS -> ActivityProduct`
`ActivityProduct -> REQUIRES -> Booking/Payment/MobilityLeg/TimeSlot`
`ActivityProduct -> OCCURS_DURING -> StayNight`
`ActivityProduct -> GENERATES -> Spend`
`ActivityProduct -> GENERATES -> Review`
`ActivityProduct -> CONTRIBUTES_TO -> Outcome`

## Sequence/bundle edges
`ActivityProduct -> NEXT_ACTIVITY -> ActivityProduct`
`ActivityFamily -> CO_OCCURS_WITH -> ActivityFamily`
`ActivityProduct -> BUNDLABLE_WITH -> ActivityProduct`

Examples:
- `HANBOK -> PALACE -> PHOTO -> FOOD`
- `TEMPLE -> TEA -> CRAFT -> HANOK`
- `BEAUTY_CLINIC -> SHOPPING -> CAFE -> NIGHTLIFE`

## Failure edges
- `PLANNED -X-> DISCOVERED`: DISCOVERY
- `DISCOVERED -X-> BOOKED`: LANGUAGE / NO_BOOKING / SOLD_OUT / PRICE / TRUST
- `BOOKED -X-> ATTEMPTED`: SCHEDULE / WEATHER / MOBILITY / HEALTH / PARTY_CONSTRAINT
- `ATTEMPTED -X-> COMPLETED`: CAPACITY / SERVICE / ACCESS / OPERATOR_FAILURE
- `DESIRED -X-> PLANNED`: TIME_BUDGET / INFORMATION / PRIORITY / TRIP_LENGTH

## Measurement-state labels
Every DO edge must be tagged as one of:
`OBSERVED`, `SELF_REPORTED`, `PLATFORM_BOOKING`, `TRANSACTION_CONFIRMED`, `INFERRED`, `PROXY`, `UNKNOWN`.

## Critical derived objects
### ActivityConversionGap
`planned_or_desired activity > actual completed activity`, with comparable denominator and segment.

### ActivityBundleOpportunity
Repeated co-occurrence/sequence + high satisfaction/spend + fragmented supply/booking.

### ActivityDepth
Number/diversity/time/spend of completed activities per usable trip day; exact formula to be validated later.

### RegionalActivityLeakage
High region presence but low completed/paid activity depth, conditional on available supply.

## Causality rule
No edge is labeled CAUSES from cross-sectional association alone. Content exposure, accessibility, activity completion, spend and satisfaction require temporal or quasi-experimental validation for causal claims.