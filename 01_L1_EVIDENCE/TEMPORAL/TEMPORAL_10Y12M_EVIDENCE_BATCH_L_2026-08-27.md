# 10Y x 12M TEMPORAL — L1 EVIDENCE BATCH L
Date: 2026-08-27
Status: ACTIVE

## Goal
Build comparable 120+ month panels without inventing monthly detail or silently bridging methodology breaks.

## Strong monthly official backbones
- Korea KTO monthly XLSX for all countries / major countries, including 2025 monthly publications and historical annual series.
  https://datalab.visitkorea.or.kr/site/portal/ex/bbs/List.do?cbIdx=1603
- Japan JNTO nationality x month visitor arrivals, history 2003 onward.
  https://www.jnto.go.jp/statistics/data/visitors-statistics/
- Taiwan Tourism Administration monthly visitor analyses plus long-run statistical database.
  https://stat.taiwan.net.tw/statistics
- Vietnam national tourism authority monthly market/mode series.
  https://vietnamtourism.gov.vn/en/statistic/international
- Thailand official quarterly/monthly tourism statistics; register exact downloadable table before harmonization.

## Enterprise monthly/forward sensors
`Google/Search`, `GDS flight search/booking`, `air capacity/fare`, `OTA price/availability`, `hotel OTB`, `card spend`, `mobile presence`, `navigation`.
These require separate `ACTUAL`, `SEARCH_INTENT`, `OTB`, `NOWCAST`, `FORECAST` observation states.

## Required temporal dimensions
`year`, `month`, `season`, `origin_country`, `destination`, `segment`, `measurement_id`, `source_regime`, `publication_date`, `observation_period`.

## Event/regime nodes
At minimum flag COVID border regimes, visa/ETA policy changes, FX shocks, direct-route launches/cuts, major K-content events, disasters, large festivals/events, payment/transport system changes and methodology revisions.

## Non-negotiable rules
1. Annual-only data stay annual.
2. Quarterly data are not interpolated to months unless explicitly MODEL_DERIVED and justified.
3. Survey redesign/sample-frame changes create a new methodology regime.
4. 2020-2022 tourism survey values require COVID-era treatment, not naive trend continuation.
5. Publication date and observation month are different fields.

## Derived analytics allowed after normalization
- seasonality profile
- YoY / pre-COVID comparison
- lead/lag cross-correlation
- change-point detection
- event-study windows
- rolling destination share

Correlation or lead-lag does not become causal evidence automatically.
