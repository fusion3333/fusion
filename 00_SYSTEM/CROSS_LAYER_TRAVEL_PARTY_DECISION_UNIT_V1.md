# Cross Layer 2 — TRAVEL PARTY / DECISION UNIT V1

Status: DESIGN_LOCKED_PUBLIC_EVIDENCE_PARTIAL_DYAD_GROUP_TELEMETRY_PENDING
Date: 2026-08-28

## Purpose
Replace the implicit single-traveler decision-maker assumption with a multi-actor Decision Unit that can represent who initiates, searches, influences, decides, pays, books, travels, consumes, complains, reviews and delegates at each journey stage and subdecision.

## Why this layer is required
Tourism decisions are often joint, distributed or delegated. Research on family/group vacation decisions shows that influence varies by stage and subdecision, and that a single household respondent can misidentify who actually influenced a decision. Therefore Traveler != DecisionMaker and Payer != Planner != User must be explicit engine rules.

## Canonical actors
- INITIATOR: first triggers or proposes the trip/choice.
- GATEKEEPER: controls which information/options reach the group.
- SEARCHER / INFORMATION_GATHERER: performs search and comparison.
- INFLUENCER: changes criteria, preferences or consideration sets.
- DECIDER: has final formal/informal decision power for a subdecision.
- PLANNER / COORDINATOR: assembles itinerary and constraints.
- BUYER / BOOKER: executes the reservation/purchase.
- PAYER: bears all or part of economic cost.
- USER / TRAVELER: consumes the trip/product.
- COMPANION: participates and imposes preferences/constraints even without transaction control.
- DEPENDENT: child/elderly/disabled traveler whose needs can alter feasible options.
- HOST / INVITER / SPONSOR: local host, employer, institution or other actor affecting choice/payment.
- SOCIAL_SURROGATE: actor to whom a decision is explicitly or implicitly delegated.
- EXTERNAL_INFLUENCER: creator, friend, relative, agent or community member outside the traveling party.

Roles are many-to-many: one person may hold several roles, and one role may be shared by several people.

## Decision grain
Never assign one permanent 'family decision maker'. Store influence at:
DecisionUnit × DecisionEpisode × Stage × Subdecision × Actor × Time.

### Journey stages
INSPIRATION -> CONSIDERATION -> SEARCH -> COMPARE -> PLAN -> BOOK -> PAY -> PRE_TRIP -> IN_TRIP -> RECOVERY -> POST_TRIP

### Required subdecisions
DESTINATION
DATE
TRIP_DURATION
BUDGET
TRANSPORT_TO_KOREA
ACCOMMODATION
REGION
LOCAL_TRANSPORT
ACTIVITY
FOOD
SHOPPING
HEALTH_WELLNESS
SAFETY
LANGUAGE_SUPPORT
BOOKING_CHANNEL
PAYMENT_METHOD
CANCELLATION_CHANGE

## Core objects
### DecisionUnit
unit_id
unit_type = SOLO | COUPLE | FAMILY | FRIENDS | COLLEAGUES | TOUR_GROUP | MULTIGENERATIONAL | HOSTED | OTHER
party_size
adult_count
child_count
elder_count
relationship_structure
origin_market
trip_id

### Actor
actor_id
unit_id
travels_flag
age_band
relationship_role
income_control_proxy
language_capability
mobility/accessibility_need

### DecisionEpisode
choice_id
unit_id
stage
subdecision
candidate_set
chosen_option
outcome
conflict_flag
delegation_flag
consensus_state
observed_at

### ActorInfluence
choice_id
actor_id
role
influence_strength
influence_direction
preferred_option
veto_flag
information_contribution
financial_contribution
confidence
source_id

## Required graph edges
MEMBER_OF
TRAVELS_WITH
INITIATED
SEARCHED_FOR
INFLUENCED
PREFERRED
VETOED
DECIDED
PLANNED
BOOKED
PAID_FOR
DELEGATED_TO
CONSTRAINED
USED
COMPLAINED
REVIEWED
REFERRED

## Consensus and conflict
Group choice must represent more than a simple average of individual preferences.

Store:
- preference overlap
- conflict presence
- conflict object
- influence strategy when observed
- veto/constraint
- compromise option
- consensus / dominant-actor / delegated / unresolved outcome

A destination can be selected because it maximizes joint utility, because a dominant actor prevails, because another actor's veto removes alternatives, or because the group delegates the choice.

## Formal model direction
For actor m and option d at episode e:
U_m(d,e) = actor-specific utility.

Group utility must not initially be fixed to a simple mean. Candidate families include weighted utility, bargaining/consensus models, veto-constrained choice, and delegated choice.

Conceptual form:
GroupChoice(d|e) = F({U_m(d,e)}, Influence_m,e, Veto_m,e, BudgetControl_m,e, Delegation_e, Constraints_e).

Weights are empirical and may vary by stage/subdecision. No gender-fixed or parent-fixed weights are allowed.

## Public evidence and sensors
1. Tourism Management (2004), group package-tour family decision research: decisions tend to be joint at problem recognition and final decision; information-search influence can differ by member. Supports stage-varying influence, not universal household leadership.
2. Data in Brief / University of Malaga dyadic dataset (2019): 375 couples, each partner answered separately; influence measured across initiation/search/final decision and destination/accommodation/transport/budget/date/activities/restaurants. Supports actor × stage × subdecision grain and dyadic disagreement measurement.
3. Journal of Destination Marketing & Management (2019): asking only one partner is insufficient to determine tourism influence; discrepancy depends on decision aspect. Supports multi-respondent Ground design.
4. Tourism Management (2016) social-surrogate study: travel decisions may be delegated to companions. Supports DELEGATED_TO and SOCIAL_SURROGATE.
5. Service Business (2025): children's perceptions and influence should be represented rather than treating the household as adults-only.
6. Expedia Group family research: family trip planning is frequently collaborative and children can influence destination/activity choices. Enterprise evidence supports child/companion influence as an observable market phenomenon.
7. Korea Tourism Data Lab 2025 Foreign Tourist Survey: official companion-type sensor includes friends, spouse/partner, family/relatives, children, colleagues and parents. This measures party composition, NOT decision authority.
8. KTO Potential Korea Traveler Survey provides origin-market demand/intention segmentation and can join the Decision Unit layer, but public summaries do not by themselves identify planner/payer/decider roles.

## Critical measurement rule
COMPANION_TYPE != DECISION_ROLE.

Official inbound surveys can tell us who traveled together. They cannot automatically tell us who initiated, searched, paid, vetoed or decided. Never infer decision authority from companion composition alone.

## Ground Intelligence additions
For sampled parties/suppliers, ask separately when possible:
- Who first suggested Korea?
- Who searched most?
- Who narrowed the destination set?
- Who chose dates?
- Who set the maximum budget?
- Who chose/paid airfare, lodging and activities?
- Whose preference could veto an option?
- Did anyone delegate choices to another member?
- Which member's needs most constrained itinerary/mobility/food?
- Who handled problems/refunds?
- Who posted/recommended afterward?

For couples/families, do not rely on one respondent when a high-value decision requires influence attribution. Collect dyadic/multi-actor responses or mark ROLE_ATTRIBUTION_UNVERIFIED.

## Telemetry additions
When consented/possible, separate:
search_actor_id
planner_actor_id
booker_actor_id
payer_actor_id
traveler_actor_ids
referrer_actor_id

Do not assume account owner == payer == traveler == decision maker.

## Opportunity implications
This layer enables:
- planner-targeted acquisition
- payer-targeted pricing/payment design
- child/elder constraint-aware product design
- group booking and split-payment opportunities
- delegated concierge products
- influencer/companion-specific content
- conflict-reducing itinerary/package design
- identification of products with high traveler desire but payer resistance

## Anti-distortion rules
1. Never infer household decision power from gender alone.
2. Never infer payer from booker/account holder.
3. Never infer decision-maker from survey respondent.
4. Never infer influencer from companion type.
5. Roles may change by stage and subdecision.
6. Children/dependents can exert influence without payment authority.
7. A non-traveling actor may still be payer/influencer/sponsor.
8. Delegated decisions are not individual autonomous choices.
9. Joint decisions require actor-level or explicitly joint evidence.
10. Unknown role stays UNKNOWN; do not fill it from stereotypes.

## Current readiness
Public Evidence Readiness: 0.91
Engine-ready: 0.63

## Main blockers
- Korea-inbound actor-level planner/payer/decider data
- multi-respondent household/group observations
- actor-specific consideration-set transitions
- actual split-payment and budget-control observations
- role switching across journey stages
- delegated-choice telemetry

## Completion decision
DESIGN_LOCKED_PUBLIC_EVIDENCE_PARTIAL_DYAD_GROUP_TELEMETRY_PENDING

The layer is structurally ready for integration. Empirical actor influence weights remain unfrozen until Ground/N-Telemetry/outcome data exist.