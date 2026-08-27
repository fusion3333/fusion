# WHY + HUMAN PSYCHOLOGY GRAPH V1
Date: 2026-08-28

## Core nodes
TravelerSegment, OriginMarket, TripPurpose, Exposure, Content, InterestTrigger, DestinationImage, Emotion, IdentityFit, SocialProof, PerceivedValue, PerceivedRisk, PerceivedEffort, ConsiderationSet, DestinationIntent, SearchEvent, Plan, Attempt, Booking, Payment, Arrival, Experience, Barrier, Abandonment, EventRegime.

## Core state path
EXPOSED? → AWARE → INTERESTED → CONSIDERING → INTENDING → SEARCHING → PLANNED → ATTEMPTED → BOOKED → PAID → ARRIVED.
Every arrow may branch to NO_CHANGE / DELAYED / ABANDONED / SWITCHED_DESTINATION / UNKNOWN.

## Evidence edges
`TravelerSegment --HAS_STATED_PURPOSE--> TripPurpose`
`Exposure --ASSOCIATED_WITH--> InterestTrigger`
`InterestTrigger --PRECEDES_RECALLED--> ConsiderationSet`
`DestinationImage --ASSOCIATED_WITH--> DestinationIntent`
`Barrier --BLOCKS_OR_DISCOURAGES--> Attempt`
`SearchEvent --PRECEDES--> Booking`
`Booking --PRECEDES--> Arrival`

## Causal rule
Do not write CAUSES unless supported by experimental/quasi-experimental or sufficiently identified longitudinal evidence. Default public-survey edges are STATED / ASSOCIATED / PRECEDES / CORRELATES_WITH.

## Conditioning
All WHY edges should be conditionable by WHO segment, origin market, time/regime and journey stage. Later WHEN adds temporal shocks; Origin Mirror adds origin-side alternatives; Competitive Destination Mirror adds destination substitution.

## Missingness
Unobserved exposure, subconscious motive, abandoned desire and cross-platform conversion are explicit UNKNOWN/LATENT nodes, never zero.
