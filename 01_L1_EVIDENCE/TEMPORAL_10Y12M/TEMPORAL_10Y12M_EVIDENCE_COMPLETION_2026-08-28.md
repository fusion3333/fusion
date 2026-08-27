# TEMPORAL 10Y x 12M Evidence Completion — 2026-08-28

## Purpose
Convert the previously locked static axes into a time-indexed tourism network without fabricating temporal precision that the source does not contain.

## Verified public primitives
1. KTO's 2015 Korea Tourism Statistics publication contains monthly foreign visitor series and explicitly shows a major MERS-era structural shock. This establishes a pre-COVID monthly official backbone and demonstrates why event regimes must be stored rather than smoothed away.
2. KTO DataLab states recurring publication schedules: Korea tourism statistics monthly; national analysis around monthly; regional analysis monthly. Private-derived sensors have different refresh schedules.
3. KTO country dashboards expose inbound visitor trends alongside FX and oil, while traveler behavior/satisfaction is sourced separately from the Foreign Tourist Survey. Therefore arrival time series and survey behavior are different measurement layers.
4. KTO DataLab states foreign visitor and tourism consumption big-data series are available from 2020, and some global simple-payment consumption only from 2024. A 2015-2025 panel cannot backfill these sensors as if they existed for the whole decade.
5. Regional DataLab warns that visitor and stay metrics have different counting rules and that current regional data begin in 2020. Temporal joins must preserve metric-specific denominators.
6. KTO's Korea outbound destination tables are assembled from destination-country tourism/government statistics because Korea's departure card no longer identifies destination after July 2006. This validates the Origin Mirror architecture and requires source-country-specific revision/calendaring metadata.

## Canonical temporal key
axis_id x metric_id x origin x destination/region x YYYY-MM x source_id x methodology_version x observed_at

## Required time layers
EVENT_TIME: when traveler/supplier behavior occurred.
PUBLICATION_TIME: when source released it.
OBSERVATION_TIME: when we collected it.
REVISION_TIME: when source revised it.
VALID_TIME: period for which a rule, visa regime, route, platform fee, methodology or product condition was effective.

Never collapse these into a single date.

## Regime ledger
At minimum preserve: MERS 2015; THAAD/China group-tour shock; PyeongChang 2018; COVID border regime 2020-2022; reopening/recovery; visa/K-ETA changes; route/seat shocks; major platform/payment changes; exchange-rate shocks; large cultural/sports events; weather/disaster disruptions.

These are event labels/candidate explanatory variables, not causal coefficients.

## Coverage warning
10Y x 12M does NOT mean every variable has 120 monthly observations. Each metric carries coverage_start, coverage_end, native_frequency, temporal_precision, missing_reason and methodology_version. Annual-only variables remain annual until a defensible higher-frequency source exists.