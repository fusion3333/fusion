# Foreign Tourist Survey expenditure methodology breaks: 2020 and 2023

## Scope
Evidence-supported L2 observation only. This file does not harmonize the expenditure series, estimate break magnitudes, alter ontology, or construct any business/opportunity score.

## Verified observations

1. The Korea Culture & Tourism Institute Tourism Knowledge Information System explicitly states that Foreign Tourist Survey expenditure includes international transportation cost beginning in 2020. Therefore expenditure values before 2020 and from 2020 onward must not be treated as definition-identical without an explicit measurement bridge.

2. The same official methodology note states that through 2022, expenditure calculation excluded influential cases using fixed thresholds: US$10,000 for individual travel and US$11,000 for group/Air-tel travel.

3. Beginning in 2023, the official rule changes to a case-count-based treatment in which the upper 1% and lower 1% are replaced with the nearest values. This creates a second verified methodology boundary between 2022 and 2023.

4. The current official key-indicator page states the same two notes and is updated through 2024 data. This L2 therefore conservatively records the post-change percentile-replacement regime for 2023-2024 only; it does not project the rule into 2025+ without same-year evidence.

## Comparability consequence

- `2019 → 2020`: expenditure definition break due to inclusion of international transportation cost.
- `2022 → 2023`: expenditure-processing break due to replacement of fixed influential-case thresholds with upper/lower 1% nearest-value replacement.
- No numeric harmonization factor is calculated in this file.
- No inference is made that either break alone explains any observed year-over-year spending movement.

## Still UNKNOWN / MISSING

- Exact respondent-level expenditure component variable names for each affected year.
- Whether the fixed thresholds were applied to total expenditure, constructed per-person expenditure, or another intermediate field before final aggregation.
- Exact operator at the threshold boundary and the detailed exclusion workflow through 2022.
- 2023+ percentile convention, tie handling, grouping/stratification level, transform order, and whether the replacement occurs before or after currency conversion and component summation.
- Exact exchange-rate rule, missing-value rule, and denominator used in each published expenditure statistic.
- Quantified effect of either methodology break on historical means, medians, tails, or segment estimates.

## Provenance

Tier-A official source: 한국문화관광연구원 관광지식정보시스템, `한눈에 보는 관광통계 주요지표` and `외래관광객조사 조사결과요약` methodology notes.

Primary official page: https://know.tour.go.kr/stat/tourStatKeyIndicator19Re.do

The source is authoritative for the published-series methodology note, but same-year codebooks, user guides, editing reports, and raw microdata remain required to reconstruct the exact respondent-level transformation algorithm.