# Cross Layer 4 — Capacity / Inventory / Time V1

## Purpose
Model effective tourism supply as time-varying, traveler-specific, channel-specific inventory rather than a static count of suppliers or registered rooms.

## Core correction
RegisteredSupply != OperatingSupply != ScheduledSupply != AvailableSupply != BookableSupply != ForeignerUsableSupply != ConfirmableSupply != ConsumableSupply.

The canonical object is not Supply(a) but EffectiveSupply(a,t,u,c), where a=asset/product, t=date/time slot, u=traveler/party, c=channel.

## Canonical state chain
Registered -> Operating -> Scheduled -> CapacityDefined -> InventoryOpen -> Discoverable -> Eligible -> Bookable -> Held -> Confirmed -> Consumed.

Failure states include CLOSED, BLACKOUT, SOLD_OUT, CAPACITY_TOO_SMALL, PARTY_MIX_INELIGIBLE, LANGUAGE_SLOT_UNAVAILABLE, GUIDE_UNAVAILABLE, BOOKING_CUTOFF, CHANNEL_ALLOCATION_EXHAUSTED, HOLD_EXPIRED, OVERBOOKED, OPERATIONAL_CANCELLATION.

## Dimensions
supplier_id
product_id
asset_id
location_id
service_date
start_time
end_time
timezone
day_of_week
season
holiday_event_regime
channel
market_language
traveler_origin
party_size
party_mix
capacity_type
physical_capacity
labor_capacity
guide_capacity
language_capacity
transport_capacity
channel_allocated_capacity
remaining_inventory
booking_cutoff
min_party
max_party
lead_time_min
blackout_flag
availability_status
inventory_observed_at
inventory_valid_from
inventory_valid_to

## Capacity taxonomy
1. Physical capacity: rooms, seats, tables, vehicles, workstations, venue slots.
2. Labor capacity: staff/guide/driver/artisan availability.
3. Language capacity: foreign-language capable service slots, not merely staff language skill.
4. Regulatory/safety capacity: legal maximum or permit/quota limit.
5. Channel capacity: inventory allocated to direct/OTA/reseller channels.
6. Operational capacity: capacity after closures, maintenance, weather, setup time and local operating rules.
7. Group-fit capacity: whether the remaining inventory can accommodate the requested party size and composition.
8. Experience-quality carrying capacity: maximum volume compatible with acceptable quality/crowding/sustainability; this must not be assumed equal to legal capacity.

## Key evidence and benchmark primitives
- Korean official supply data can measure registered/operating supply and, for tourism accommodation, establishment and room counts by region/type/grade. It is a structural capacity baseline, not real-time sellable inventory.
- Korea Tourism Data Lab updates tourism-business operating status monthly from local administrative licensing data. From 2026-01, suspended businesses are excluded from the count, demonstrating that even 'operating supply' has regime-dependent definitions.
- Viator's current Supplier API explicitly separates future calendar availability from real-time availability. Availability checks request a product, date, start time and traveler/ticket mix and return remaining capacity/pricing used to determine whether purchase can proceed.
- Viator also defines BookingCutoff and remaining Capacity. Capacity can be consumed differently by traveler types (e.g. infant exclusions). Therefore inventory is conditional on time and party composition, not a single product-level number.
- Viator connectivity documentation warns that cached calendar availability can lag supplier changes; real-time checking is required before booking. Thus observed inventory has an observation timestamp and staleness risk.
- Capacity-management research in hospitality/tourism distinguishes capacity management from demand management and shows that insufficient capacity affects waiting, crowding, employee strain, service quality and competitor leakage, while excess capacity causes underutilization and discount pressure.
- Capacity-constrained tourism research also shows that allocation mechanisms (quota, permits, pricing, booking windows) affect who actually gains access. Capacity optimization therefore cannot be reduced to revenue maximization alone for heritage/public assets.

## Mandatory anti-distortion rules
Registered rooms != rooms available tonight.
Property open != requested room/product available.
Product listed != scheduled on the requested date.
Scheduled != inventory open for this channel.
Inventory open != enough inventory for the requested party.
Available on cached calendar != confirmed real-time availability.
Remaining capacity != foreigner-usable capacity.
Physical capacity != quality/sustainable carrying capacity.
Sold out != high unmet demand unless attempted-demand denominator exists.
Low utilization != low demand unless price, discovery, channel and schedule constraints are controlled.

## Core measures (only where denominators are observed)
EffectiveSellableCapacity(a,t,u,c) = min(physical, labor, language, regulatory, operational, channel, group-fit capacities) after blackout/cutoff/eligibility constraints.

CapacityUtilization = ConsumedUnits / EffectiveSellableCapacity.

AvailabilityRate = AvailableRequestedSlots / RequestedSlots.

SelloutRate = SoldOutRequestedSlots / RequestedSlots.

CapacityLossByConstraint(k) = 1 - CapacityAfterConstraint(k) / CapacityBeforeConstraint(k).

ForeignUsabilityCapacityRatio = ForeignerUsableCapacity / TechnicallyAvailableCapacity.

InventoryStaleness = ObservationTime - SourceValidTime; no real-time inference when freshness exceeds source-specific SLA.

## Relationship to other layers
CHOICE: destinations/products with no feasible inventory must be excluded from the feasible choice set at t.
TRAVEL_PARTY: party size/mix changes feasible inventory; one remaining seat is not usable by a family of four.
BUDGET_WTP: scarcity and allocation may change observed price; do not infer WTP from scarcity price without choice evidence.
SEARCH: calendar visibility and sold-out surfaces alter discovery/consideration.
BOOK_PAY: inventory hold, cutoff and confirmation are transaction states.
MOVE: transport seat/vehicle/last-mile capacity can invalidate otherwise sellable experiences.
STAY: room-night inventory must be modeled by date/room/occupancy/channel, not registered rooms.
DO: experience slots, guide/artisan time and group limits define actual activity capacity.
SUPPLY/REAL_SELLABLE_SUPPLY: this layer turns static supply entities into time-indexed effective supply.
PLATFORM: channel allocation and cache refresh can create cross-platform availability asymmetry.
MONEY_FLOW: scarcity/yield/pricing affect unit economics but must be separated from capacity itself.
FAILURE_JOURNEY: SOLD_OUT, CUTOFF, CAPACITY_TOO_SMALL and channel-allocation exhaustion are explicit failure reasons.
TEMPORAL: capacity is first-class time-series data and may exhibit seasonality, event shocks and structural regime changes.

## Opportunity objects enabled
CapacityBottleneck: high validated demand + repeated constrained effective capacity + economically/operationally solvable constraint.
HiddenCapacity: low displayed/bookable inventory despite materially larger operating capacity due to channel, schedule or language constraints.
LanguageCapacityIsland: general physical slots exist but foreign-language service capacity is near zero.
GroupFitGap: inventory exists but common party configurations cannot book it.
ChannelAllocationIsland: direct capacity exists but global distribution channel inventory is absent/exhausted.
LastMinuteAvailabilityGap: physical capacity remains but stale/closed calendars or booking cutoff prevent conversion.
OvercapacityDistributionGap: persistent unused capacity with demand signals elsewhere and a discoverability/distribution mismatch.
QualityCapacityRisk: revenue expansion would exceed service-quality/social/environmental carrying capacity; reject as opportunity unless redesign increases sustainable capacity.

## Formula implications
Static Supply must not enter KTOF directly. The supply term must be generated from EffectiveSellableCapacity(a,t,u,c) or a derived accessibility/conversion measure.

For a journey/product request r:
Feasible_r = 1 only if all binding capacity and eligibility constraints are satisfied at the requested time/channel/party.

At opportunity level, capacity uplift should be evaluated as an intervention delta, not as raw capacity count:
DeltaEffectiveCapacity_i = EffectiveCapacity_after_i - EffectiveCapacity_before_i.
PotentialIncrementalConversions are bounded by both validated unmet demand and DeltaEffectiveCapacity.

## Public evidence ceiling / required private data
Public sources are strong for registered/operating facilities, room counts, some schedules and platform/API architecture. They are weak for supplier-level real-time inventory, channel allocation, guide/language staffing, inventory holds, no-show/overbooking, capacity rejection denominators and actual sustainable-quality limits.

Those require OTA/reservation-system data, Ground interviews and N-Telemetry.

## Decision
DESIGN_LOCKED_PUBLIC_EVIDENCE_PARTIAL_REALTIME_INVENTORY_PENDING
