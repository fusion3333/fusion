# MOVE — L2 Observations V2

## O1 Availability is not usability
A rail/bus/taxi/subway service may exist while a short-stay foreign traveler cannot easily discover, understand, reserve, pay for, transfer to, or complete it.

## O2 MOVE is a conversion funnel
Supply → Discover → Understand → Route → Book/Pay → ReachPlatform/Stop → Board → Transfer → LastMile → Arrive.
Each transition can fail independently.

## O3 Regional connectivity island
Candidate condition:
HighDemand + HighQualitySupply + AdequatePhysicalNetwork + LowForeignerUsability + LowObservedConversion.
Do not label a place an island until demand, supply and accessibility evidence are independently observed.

## O4 Last mile must be separated from trunk access
Fast rail to a city does not prove accessibility to the actual attraction. The final 3–20 km can dominate generalized friction through sparse buses, taxi availability, language, payment, luggage, night service or transfer uncertainty.

## O5 Sensor triangulation
Navigation search = intent proxy; telecom presence = presence proxy; card = transaction proxy; operator/AFC = network usage context. Divergence between sensors is itself evidence worth investigating.

## O6 Payment regime affects mobility
Foreign-card and open-loop changes can alter usable mobility without changing physical transport supply. Accessibility must therefore be mode×channel×stage×operator×date.

## O7 Failure requires denominators
Anecdotes and complaints discover failure classes. Failure rates require attempts. N telemetry should record route searches, route selections, bookings, boarding/arrival confirmations and explicit failure reason.

## Candidate metrics (definitions only; no fitted weights)
MobilityConversionGap = NavigationIntent - ActualPresence (only after compatible normalization)
LastMileAccessibilityRatio = ForeignerUsableOptions / TechnicallyAvailableOptions
ReachabilityCoverage = AccessibleHighValueAssets / HighValueAssets
TransferBurden = f(transfer_count, waiting, walking, luggage, language, hours)
JourneyCompletionRate = completed_arrivals / valid_move_attempts

No metric above is yet a KTOF weight.