# TEMPORAL 10Y x 12M Graph V1

## Temporalized graph
Every eligible node/edge from WHO through MONEY_FLOW can carry a TemporalObservation.

TemporalObservation {
 axis_id,
 metric_id,
 entity_from,
 entity_to,
 origin,
 region,
 year_month,
 value,
 unit,
 denominator,
 native_frequency,
 temporal_precision,
 source_id,
 methodology_version,
 event_time,
 publication_time,
 observation_time,
 revision_time,
 valid_from,
 valid_to,
 missing_reason,
 confidence
}

## Derived temporal feature candidates
YoYChange
MoMChange
Rolling12M
SeasonalIndex
OriginSeasonalIndex
RegionSeasonalIndex
ActivitySeasonalIndex
PreShockBaseline
RecoveryRatio
TrendSlope
Volatility
Persistence
BreakProbability
LaggedCorrelation
CrossDestinationShare

No derived feature is a causal coefficient.

## Candidate dynamic edges
SEARCH[t-k] -> BOOK[t]
BOOK[t-k] -> ARRIVAL[t]
ARRIVAL[t] -> MOVE[t]
MOVE[t] -> DO[t]
DO[t] -> SPEND[t]
PAIN[t] -> SATISFACTION[t]
SATISFACTION[t] -> REVIEW/REFERRAL[t+k]
REVIEW/REFERRAL[t] -> SEARCH[t+k]
AIR_CAPACITY[t-k] -> ARRIVAL[t]
FX[t-k] -> BOOK/SPEND[t]
VISA_POLICY[valid_t] -> BOOK/ARRIVAL[t]
PLATFORM_CHANGE[valid_t] -> DISCOVERY/BOOK/PAYOUT[t]

k must be learned or estimated from evidence; it is not fixed here.

## Missingness taxonomy
SOURCE_NOT_EXISTED
SOURCE_NOT_PUBLIC
NOT_COLLECTED
METHODOLOGY_BREAK
SUPPRESSED
NOT_APPLICABLE
API_LIMIT
LICENSE_RESTRICTED
GROUND_NOT_MEASURED
TELEMETRY_NOT_YET_INSTRUMENTED

## Temporal opportunity classes
PERSISTENT_GAP
RECURRING_SEASONAL_GAP
EMERGING_GAP
RECOVERY_LAG
STRUCTURAL_BREAK_OPPORTUNITY
EVENT_WINDOW_OPPORTUNITY
DECLINING_OPPORTUNITY

These classes feed later ISLAND/BOTTLENECK/ASYMMETRY and OPPORTUNITY layers only after validation.