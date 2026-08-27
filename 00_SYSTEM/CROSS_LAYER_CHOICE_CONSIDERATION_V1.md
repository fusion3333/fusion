# CROSS LAYER 01 — CHOICE / CONSIDERATION SET V1

## Why this layer exists
The existing WHY, SEARCH and COMPETITIVE_DESTINATION axes do not fully represent the sequential process by which a traveler becomes aware of Korea, places Korea into a feasible choice set, compares Korea with alternatives, rejects or retains destinations, and finally selects Korea or another destination.

This is a cross-layer, not a new standalone axis. It connects WHY + SEARCH + COMPETITIVE_DESTINATION + ORIGIN_TOP15 + WHEN + BOOK_PAY.

## Canonical state sequence
AVAILABLE_SET -> AWARENESS_SET -> INITIAL_CONSIDERATION_SET -> LATE_CONSIDERATION_SET -> ACTION_SET -> CHOSEN_DESTINATION

Parallel terminal states:
EXCLUDED -> UNAVAILABLE -> SURROGATE/SUBSTITUTE -> DEFERRED -> NO_TRIP

## Evidence basis
Tourism choice-set literature has long modeled destination selection as sequential set formation rather than one-shot choice. Crompton's tourism choice-set framework distinguishes initial consideration, late consideration, action and interaction sets. Later research maps destination rejection and selection explicitly, and two-stage/nested choice models show that destination choice is influenced by destination categorization, affective image and traveler constraints.

Current industry evidence also supports a non-fixed early destination set. Expedia/Luth path-to-purchase research across seven markets used 70k+ digital panel travelers and 5,713 survey respondents. More than half of travelers began without a single fixed destination or considered multiple destinations; the research identifies weather/season, trip type, travel cost, access and travel time as important similarities/differences among considered destinations.

KTO's 2025 Potential Foreign Visitor Survey provides a Korea-specific official bridge for this layer because it includes potential visitors, visit intention, desired travel patterns and market-level comparison/consideration questions. This should be joined to actual inbound survey data but must not be treated as observed booking/arrival behavior.

## Required objects
TravelerDecisionUnit
ChoiceEpisode
DestinationCandidate
ChoiceSetMembership
ChoiceSetTransition
ChoiceConstraint
ChoiceAttributeEvaluation
ChosenDestination
RejectedDestination
SubstituteDestination
NoTripOutcome

## Required dimensions
traveler_segment_id
party_decision_unit_id
origin_market
choice_episode_id
destination_id
choice_set_stage
membership_status
entry_reason
exit_reason
constraint_code
attribute_code
attribute_value
consideration_rank
observed_at
event_time
source_id
confidence

## Choice transition model
For traveler/party u, destination d and decision time t:
P(d enters consideration | awareness, motive, image, constraints, exposure)
P(d survives to late set | relative utility, access, cost, time, risk, social proof)
P(d chosen | late set, budget, availability, booking friction, competing alternatives)

No empirical coefficients are frozen at this stage.

## Critical measurement rules
Awareness != Consideration.
Consideration != Preference.
Preference != Choice.
Choice != Booking.
Booking != Arrival.
Rejected != Disliked: a destination may be rejected because of price, time, visa, air access, party constraints or inventory.
No Korea search != no Korea awareness.
Japan arrival != evidence that Japan directly substituted for Korea unless the traveler-level choice set or a defensible quasi-experimental design supports the substitution claim.

## Diagnostic objects enabled
AWARENESS_TO_CONSIDERATION_GAP
CONSIDERATION_TO_ACTION_GAP
KOREA_UNDERPENETRATION
COMPETITOR_SUBSTITUTION_CANDIDATE
CONSTRAINT_REJECTION
PRICE_REJECTION
ACCESS_REJECTION
NO_TRIP_LATENT_DEMAND

## Formula interface
This layer supplies the denominator for destination choice. The choice probability must be conditional on the feasible/considered set C_u,t rather than the universe of all destinations:
P(d|u,t) = P(d | C_u,t, X_u,t, Z_d,t)

Later empirical modeling candidates include conditional/multinomial logit, nested logit, mixed logit and staged consideration-set models. Model selection must be empirical and time-safe.

## Data gaps
Korea-specific traveler-level longitudinal choice-set transitions are not publicly observed at scale. KTO potential-traveler survey can measure stated consideration and intention, while Expedia-type digital panels show path behavior in selected foreign markets. Actual switching/rejection reasons require survey microdata, Ground interviews, partner-panel data or first-party telemetry.

## Status
DESIGN_LOCKED_PUBLIC_EVIDENCE_PARTIAL_BEHAVIORAL_TRANSITIONS_PENDING