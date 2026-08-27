# SEARCH official evidence batch A — 2026-08-27

## Scope
This batch fills the SEARCH / information-acquisition evidence gap using only Korean official Tier-A/Tier-B sources. It does not model psychology, causal effects, competitor behavior, or opportunity scores.

## Evidence 1 — Google-based Korea travel interest index
Source: Korea Tourism Data Lab, country analysis dashboard.

Official description: for users located in seven major inbound markets (Japan, Taiwan, United States, Hong Kong, Philippines, Vietnam, Singapore), Korea-travel-related Google keyword search frequency in local languages is indexed and weighted using the previous year's inbound visitor counts. The dashboard states that the monthly index has a positive correlation with monthly inbound foreign visitor counts.

Measurement handling:
- Store as `korea_travel_search_interest_index`.
- Unit: relative index 0–100 within the selected analysis period.
- Geography: origin country.
- Time: monthly.
- Do NOT treat as absolute query volume.
- Do NOT compare raw level across arbitrary windows without recording the selected window because the minimum/maximum rescale within the period.
- Coverage is restricted to seven supported countries.
- Keyword dictionary and Google raw-volume construction are not fully exposed; provenance must therefore retain the Data Lab derived-index status.

Source URL: https://datalab.visitkorea.or.kr/datalab/portal/nat/getForTourForm.do

## Evidence 2 — intended/used SNS-video channel and online purchase site
Source: Korea Tourism Data Lab, Potential Korea Visitor Survey.

Official dashboard provides annual 2022–2025 tables for:
1. first-choice SNS/video platform used or intended to obtain Korea travel information; and
2. first-choice online site used or intended to purchase Korea-related travel products.

Measurement handling:
- Store survey channel variables separately from behavioral logs.
- Suggested canonical fields: `info_channel_first_choice_survey_pct` and `online_purchase_site_first_choice_survey_pct`.
- Geography: residence/origin market where country tables are available.
- Time: annual, 2022–2025.
- These variables measure reported use/intention, not observed clickstream or actual conversion.
- Preserve survey year, sample design, weights, and question wording because the survey frame can change by year.

Source URLs:
- https://datalab.visitkorea.or.kr/datalab/portal/nat/getForTourDashForm.do
- https://datalab.visitkorea.or.kr/datalab/portal/ts/getPotTourExmn.do

## Evidence 3 — pre-trip Korea information contact channels
Source: 2025 Foreign Tourist Survey Q1 provisional report, Korea Tourism Organization / Korea Culture & Tourism Institute.

The official report contains multiple-response tables by year/quarter/month for pre-trip Korea information contact routes. For 2024, the report shows annual values including internet sites/apps 69.2%, friends/family/colleagues 51.5%, major media 25.9%, airlines/hotels 10.9%, and origin-country offline travel agencies 11.1%. The same table provides monthly 2024 values and 2025 Q1 provisional monthly values.

Measurement handling:
- Store as `pretrip_information_contact_pct` with `channel`, `survey_year`, `period`, `provisional_flag`.
- Multiple-response percentages must not be summed to 100%.
- This is an information-contact measure, not a search-query measure and not a search-to-book conversion measure.
- 2025 Q1 values are provisional and must remain flagged.

Source URL: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=309194&cbIdx=1127&streFileNm=5ee75d9e-e097-4aca-9103-863fef84bf59.pdf

## Evidence 4 — official global social-media trend measurements
Source: Korea Tourism Data Lab, Global Korea Travel Trend.

The dashboard defines:
- mentions/buzz = count of online posts,
- engagement = total reactions/comments/shares/views,
- potential reach = follower/view-based potential exposure metric.

Measurement handling:
- Keep these as `social_buzz`, `social_engagement`, `social_potential_reach`.
- Do not merge into search volume.
- `potential_reach` is not actual impression count.
- Platform coverage, keyword set, deduplication logic and sampling details are not sufficiently exposed in the public page; retain `methodology_detail=PARTIAL`.

Source URL: https://datalab.visitkorea.or.kr/datalab/portal/nat/getTrendTourForm.do

## Directly supported observations
1. The SEARCH axis is not fully MISSING: Korea has an official monthly origin-market search-interest proxy for seven major inbound countries.
2. Official surveys provide annual information-channel and online-purchase-site preferences for 2022–2025, and the foreign-tourist survey provides monthly/quarterly information-contact tables at least for recent years.
3. No source in this batch provides full `query -> comparison -> map -> OTA -> booking -> payment` user-level conversion. That remains MISSING / proprietary unless another dataset is found.
4. Search-interest index, survey-reported channels, and social buzz are different sensors and must remain separate canonical measurements.

## Remaining blockers
- Historical 10+ year monthly Google/search series under stable methodology: UNKNOWN.
- Search keyword dictionary and absolute query counts: NOT PUBLIC in verified source.
- Country-level search-to-OTA referral/clickstream: MISSING.
- Query-to-booking conversion and abandoned-search reasons: MISSING.
- Map/navigation search to physical visit linkage for foreign visitors: PARTIAL/UNKNOWN.

## Confidence
- Source existence and definitions: HIGH.
- Long-run comparability beyond disclosed periods: LOW/UNKNOWN until downloads and metadata are inspected.
- Causal interpretation: NOT PERMITTED from this batch.