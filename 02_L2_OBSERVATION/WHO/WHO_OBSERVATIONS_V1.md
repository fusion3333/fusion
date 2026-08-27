# WHO — L2 Observations V1

Date: 2026-08-27
Evidence basis: WHO completion pack + pre-existing korea-tour official inbound/survey evidence.

## O-WHO-001 — WHO has two measurement spines
The WHO axis cannot be represented by one table. It requires at least:
1. ADMIN spine: monthly tourism visitor volume × nationality × sex × age.
2. SURVEY spine: residence/origin context × companion/party × travel form × repeat visit × socioeconomic fields.

Joining these requires period, source population, weighting and methodology-regime metadata. Survey shares must not overwrite administrative counts.
Confidence: HIGH.

## O-WHO-002 — Nationality and residence must be separate graph attributes
KTO tourism statistics are built from administrative inputs but acknowledge residence-country guidance and source limitations. Potential/visitor surveys can directly capture residence/origin context. Therefore `nationality` cannot be silently used as `country_of_residence`.
Confidence: HIGH.

## O-WHO-003 — Party structure is directly observable in official survey data
Foreign Tourist Survey reporting directly measures companion categories such as friends, spouse/partner, family/relatives, children, coworkers and parents. Social media is therefore secondary for population structure and primary only for richer social-role context.
Confidence: HIGH.

## O-WHO-004 — WHO affects downstream journey behavior
Independent tourism research using Korea visitor data reports demographic/companion differences associated with information sources, travel form, expenditure, stay, accommodation, transport and multi-destination behavior. Therefore WHO should connect to WHY/SEARCH/PLAN/WHERE/STAY/SPEND rather than remain a dashboard dimension.
Confidence: MEDIUM-HIGH because effect sizes are study/method dependent.

## O-WHO-005 — 10-year requirement is variable-specific
Nationality/sex/age volume can exceed the 10-year requirement through official monthly statistics. Companion/travel-form and socioeconomic variables depend on annual survey questionnaire continuity. Income/budget cannot be backfilled to 10 years unless codebooks prove comparability.
Confidence: HIGH.

## O-WHO-006 — Potential traveler and realized traveler are different populations
Potential Korea Visitor Survey is valuable for future demand, origin sub-region and intended behavior, but must never be pooled as realized inbound visitors. It is a separate `TravelerState = POTENTIAL` population.
Confidence: HIGH.

## O-WHO-007 — Core public source discovery is no longer the bottleneck
For nationality/age/sex/party/repeat/travel-form, authoritative sources are identified. The bottleneck is now raw acquisition, variable harmonization and longitudinal crosswalks. Additional generic web searching has low expected information gain.
Confidence: HIGH.

## Remaining UNKNOWN / GROUND / N
- planner inside party: GROUND/N_REQUIRED
- payer inside party: GROUND/N_REQUIRED
- influencer inside party: GROUND/N_REQUIRED
- digital literacy: SURVEY/GROUND/N_REQUIRED
- detailed language proficiency: SURVEY/GROUND_REQUIRED
- consistent 10y income/budget: UNKNOWN pending codebook audit
- platform-specific party occupancy/conversion: PROPRIETARY/N_REQUIRED

No opportunity score or causal weight is assigned from WHO alone.
