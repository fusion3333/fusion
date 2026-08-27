# MOVE FOREIGN TRAVELER OBSERVATIONS V2
Date: 2026-08-27
Status: L2 OBSERVATION — evidence-supported, provisional

## O-MOVE-01 — Korea has high transport supply but heterogeneous foreign-traveler usability
The evidence supports separating technical network availability from foreigner usability. Rail, subway, bus, taxi, rental and airport transport are abundant, but acquisition/payment/language/identity rules vary by operator, product, channel and date.

## O-MOVE-02 — Payment accessibility is a state machine
A foreign-issued card may work for one step and fail at another. Canonical stages: PURCHASE -> TOPUP -> ONLINE_BOOKING -> TICKET_ISSUE -> TAP/CONSUME -> REFUND. Therefore `foreign_card_acceptance` cannot be a single national boolean.

## O-MOVE-03 — Platform localization can remove several frictions at once
k.ride demonstrates a foreigner-specific bundle: multilingual destination search, translated driver communication and cashless payment. Uber supplies a globally familiar request/payment/tracking interface. These systems imply that mobility friction is partly an interface/connectivity problem, not only physical transport scarcity.

## O-MOVE-04 — Airport arrival is a high-information-choice node
Incheon exposes rail, multiple bus classes, taxi/call-van and other options immediately after arrival. Choice depends on arrival time, destination, party size, luggage, language, price, transfers and last-mile requirements. Annual mode totals alone will miss this decision structure.

## O-MOVE-05 — Last mile remains the likely regional conversion breaker
National/intercity trunk transport can be strong while the final 3–20 km remains difficult. The priority test is: HIGH SEARCH/DEMAND + QUALITY SUPPLY + TRUNK ACCESS + LOW ACTUAL PRESENCE. When observed, inspect local frequency, taxi availability, language, payment, luggage, operating hours, supplier pickup and return-trip risk before concluding lack of demand.

## O-MOVE-06 — Social VOC is useful for failure taxonomy, not prevalence
Traveler communities repeatedly surface identity/payment setup, transit-card choice/top-up, map choice, luggage, late-night and taxi-pricing concerns. These are candidate failure codes. Their frequency cannot be interpreted as population incidence without denominator data.

## O-MOVE-07 — Existing public sources do not reveal the most valuable failures
The biggest strategic gap is operational telemetry: quote/request/match/board/complete funnels; foreign payment declines; top-up failures; booking abandonment; dispatch failure; and last-mile non-completion. This justifies adding N=Operational/First-party Telemetry beyond O/E/S/R/G.

## New canonical MOVE graph
ARRIVAL -> DISCOVER_MODE -> UNDERSTAND_ROUTE -> ACQUIRE_CARD/TICKET -> BOOK/TOPUP -> PAY -> BOARD -> TRANSFER -> LAST_MILE -> ARRIVE -> EXPERIENCE

Each transition can carry SUCCESS or FAILURE and reason codes: LANGUAGE, IDENTITY, ACCOUNT, CARD, CASH, TOPUP, FEE_FX, AVAILABILITY, SOLD_OUT, DISPATCH, WAIT_TIME, HOURS, TRANSFER, LUGGAGE, PARTY_SIZE, ACCESSIBILITY, TRUST, PRICE, NAVIGATION, RURAL_LAST_MILE, RETURN_RISK, UNKNOWN.

## Derived metrics to keep provisional until denominators exist
ForeignerUsableSupplyRatio = foreigner-usable options / technically available options.
MobilityConversionGap = navigation/search intent - actual presence, only when sensors are definitionally aligned.
LastMileCompletionRate = completed POI arrivals / last-mile attempts.
PaymentCompletionRate = successful transport payments / payment attempts.
BookingCompletionRate = issued bookings / booking attempts.
RegionalConnectivityIsland candidate = high demand + high-quality supply + trunk accessibility + low foreigner usability + low actual conversion.

## Priority joins with other axes
SEARCH x MOVE: searched but route/transport not completed.
MOVE x SUPPLY: reachable registered asset vs actually accessible sellable asset.
MOVE x SPEND: mobility friction followed by suppressed local transaction.
MOVE x STAY: lodging location and trip radius/mode dependence.
MOVE x PAIN: reported/verified friction by stage.
MOVE x HUMAN: risk aversion, convenience preference, novelty, family/luggage constraints.
MOVE x ORIGIN: home-country transit/app/payment familiarity affecting Korean mode choice.

## Next acquisition target
Do not spend the next batch proving that Korea has trains/buses/taxis. Acquire denominators for FAILURE: attempts, failures, channel, nationality/origin, month/season, location and reason. That is the shortest path from MOVE inventory to opportunity intelligence.
