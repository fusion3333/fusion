# BENCHMARK GAP OBSERVATIONS V1

Date: 2026-08-27
Status: L2 OBSERVATION — evidence-linked, not final causal claims.

## O-01 Full-cycle sensor fusion is industry-valid, but failure edges remain weak
Mabrian publicly covers pre/during/post sensors including trends, social, flight search, air booking, accommodation, spend, mobile and reviews. This validates a multi-sensor travel-cycle architecture. Public benchmark descriptions, however, do not expose a complete measurement of attempted-but-failed transitions such as search-found-but-unbookable, card-declined, language-abandoned or last-mile-abandoned journeys.
Implication: FAILURE JOURNEY remains a high-value BUILD/GROUND target rather than a commodity dashboard feature.

## O-02 Direct observation and inferred variables must be different entity states
ForwardKeys' public nationality method shows that commercially useful traveler attributes may be inferred from multiple signals when not directly observed. The correct Korea Tour lesson is not to copy the inference, but to formalize OBSERVED / INFERRED / PROXY / IMPUTED states with confidence and calibration provenance.
Implication: HUMAN psychology and destination-switching variables can be modeled later without contaminating direct evidence.

## O-03 Supply denominator is a strategic issue, not a cosmetic metric choice
AirDNA's occupancy logic excludes host-blocked days and distinguishes booked from blocked states. Its cross-platform de-duplication also shows that raw listing count can inflate true supply.
Implication for tourism experiences:
REGISTERED != LISTED != OPERATING != DISCOVERABLE != LANGUAGE_READY != BOOKABLE != PAYABLE != CAPACITY_READY != SOLD.
The Real Sellable Supply layer should use a state machine and explicit denominators.

## O-04 Historical actuals and future pacing must never share an unmarked measurement definition
AirDNA documents historical-vs-forward fee treatment differences; Amadeus uses future flight bookings and hotel on-the-books data. Therefore future demand is not simply another date value in the historical series.
Implication: introduce measurement_regime = ACTUAL / OTB / SEARCH_INTENT / FORECAST / NOWCAST and never silently concatenate them.

## O-05 Origin official data are heterogeneous by design
Japan is strong for outbound timing/port context; Canada is strong for destination-purpose-duration-spend cross tables; the UK is strong for destination-purpose-nights-spend-mode with explicit methodology regimes; Singapore is strong for monthly outbound mode; the Philippines has long age/nationality/purpose series but important missing destination/port years.
Implication: Canonicalization must be loss-aware. Missing monthly resolution or missing destination is itself a field, not a reason to fabricate a balanced panel.

## O-06 Benchmarking changes where Korea Tour should spend engineering effort
Commodity/specialist sensors: aviation schedules/search/bookings, hotel OTB, broad STR market feeds, proprietary transaction feeds -> BUY/CONNECT where economically justified.
Differentiating layers: origin mirror normalization, human-motive inference, failure journey, real sellable supply, cross-engine graph, island/bottleneck, revalue, explainable opportunity reasoning -> BUILD/GROUND.

## O-07 Next interactive-lane priority
Do not duplicate the Evidence Agent's Korean official-source acquisition. Interactive research should next expand the origin-country mirror and competitive-destination mirror, then add enterprise/social/research sensors around the same canonical measurements. Priority missing blocks remain: origin destination choice, search-to-book conversion, actual payment failure/abandonment, social/VOC at scale, supplier willingness/capacity, and transaction economics.
