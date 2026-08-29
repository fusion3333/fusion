# 2016–2022 Foreign Tourist Survey weight-variable/regime observation

## Scope
Evidence-supported observation only. This file does not harmonize survey constructs, redesign the canonical ontology, or infer any weighting formula.

## Verified observations

1. The Korea Culture & Tourism Institute Tourism Knowledge Information System explicitly instructs analysts that the Foreign Tourist Survey through 2019 uses the weight variable `WT`. The same guidance explains applying the weight in SPSS via the weight-variable workflow. This closes the raw weight-variable-name gap for 2016, 2017, 2018 and 2019 at the field-name/presence level.

2. The same official FAQ states that Foreign Tourist Survey data from 2020 onward, in the COVID-19 period covered by the then-published datasets, were a census of departing foreign tourists and therefore did not apply weights. Because the FAQ was registered on 2023-09-22 and 2022 results were already published, this evidence is retained for 2020–2022 only; it is not projected mechanically into 2023+.

3. This is a genuine comparability boundary for weighting practice: pre-2020 weighted sample data must not be processed as if the COVID census-era files used the same `WT` field, and no synthetic `WT` should be created for 2020–2022 from an adjacent-year schema.

## Still UNKNOWN / MISSING

- 2016–2019 numerical weight construction formula.
- Calibration/post-stratification cells, base/design weight derivation, nonresponse adjustment, trimming, strata and PSU details for each year.
- Whether any auxiliary field labelled "가중치" exists in 2020–2022 raw files despite the official instruction that weighting is not applied; raw rows were not ingested in this run.
- Any weighting regime or field name for 2023+; the 2023 FAQ statement is not extended beyond the data vintages available when it was published.

## Provenance and limitation

Tier-A source: 한국문화관광연구원 관광지식정보시스템, `2023년 제4회 관광통계 인포그래픽 공모전 FAQ`, registered 2023-09-22. Official page: https://know.tour.go.kr/customer/contestevent/detail19Re.do?seq=27281

The FAQ is authoritative operational guidance for use of the system's survey microdata, but it is not a substitute for same-year codebooks/user guides when reconstructing numerical weighting methodology or other raw-variable definitions.
