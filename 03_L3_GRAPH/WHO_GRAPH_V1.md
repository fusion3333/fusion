# WHO Graph V1

Date: 2026-08-27
Status: L3 GRAPH CONTRACT

## Core nodes
- `TravelerSegment`
- `OriginMarket`
- `ResidenceRegion`
- `TravelParty`
- `Trip`
- `SurveyPopulation`
- `AdministrativePopulation`
- `Observation`
- `Source`
- `MethodologyRegime`

## TravelerSegment canonical attributes
`nationality, country_of_residence, origin_region, age_band, sex_gender, income_band, planned_travel_budget, occupation, education, language_profile, repeat_visitor, prior_korea_visit_count, travel_form`

All attributes carry `observed/inferred/unknown`, source, period, measurement type and confidence.

## TravelParty attributes
`party_type, party_size, children_present, senior_present, planner, payer, booking_operator, influencer_within_party`

Planner/payer/influencer default to UNKNOWN unless directly observed.

## Critical edges
`TravelerSegment --RESIDES_IN--> OriginMarket/ResidenceRegion`
`TravelerSegment --TRAVELED_WITH--> TravelParty`
`TravelParty --PARTICIPATED_IN--> Trip`
`TravelerSegment --HAS_TRAVEL_FORM--> Trip`
`TravelerSegment --HAS_REPEAT_STATE--> Trip`
`Observation --MEASURES--> TravelerSegment`
`Observation --USES_POPULATION--> SurveyPopulation|AdministrativePopulation`
`Observation --SUPPORTED_BY--> Source`
`Observation --DEFINED_UNDER--> MethodologyRegime`

## Downstream edges to other axes
`TravelerSegment --MODULATES--> WHY`
`TravelerSegment --MODULATES--> SEARCH`
`TravelParty --CONSTRAINS--> PLAN`
`TravelParty --CONSTRAINS--> STAY`
`TravelParty --CONSTRAINS--> MOVE`
`TravelerSegment --ASSOCIATED_WITH--> WHERE`
`TravelerSegment --ASSOCIATED_WITH--> DO`
`TravelerSegment --ASSOCIATED_WITH--> SPEND`

`MODULATES/ASSOCIATED_WITH` are not causal assertions until supported by appropriate research/outcome evidence.

## Population separation
Never merge these nodes:
- `RealizedInboundVisitor`
- `PotentialKoreaTraveler`
- `PlatformTravelerUser`
- `SurveyRespondent`
- `AdministrativeTourismVisitor`

Crosswalks may connect them through calibration relationships, but identity equivalence is forbidden.

## Time model
Administrative WHO observations: month-capable.
Survey WHO observations: survey-wave/year unless report explicitly provides month/quarter.
`methodology_regime` required for survey longitudinal joins.

## Missingness model
UNKNOWN is a state, not zero.
`planner/payer/influencer/language/digital_literacy` can be absent while core demographic segment remains valid.

## Engine role
WHO supplies segmentation and denominators. It does not itself generate Opportunity. It conditions later calculations such as demand, friction, conversion, mobility, spend and product match.
