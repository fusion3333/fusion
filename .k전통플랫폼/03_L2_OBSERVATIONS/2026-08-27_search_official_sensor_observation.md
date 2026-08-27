# 2026-08-27 SEARCH official sensor observation

## Observation
Korea Tourism Data Lab already exposes four distinct official SEARCH-adjacent sensor types that should not be collapsed into one metric:

1. monthly Google-derived Korea travel interest index for seven inbound origin markets;
2. annual survey-reported SNS/video information channel preference;
3. annual survey-reported online travel-product purchase-site preference;
4. pre-trip information-contact channel shares from the Foreign Tourist Survey, including monthly/quarterly recent tables.

The official Global Korea Travel Trend dashboard adds social buzz, engagement and potential reach as a fifth adjacent sensor.

## Evidence boundary
This supports the existence of measurable pre-trip attention and channel-choice signals. It does **not** support a full behavioral funnel from query to click, comparison, map use, OTA session, booking, payment, or abandonment.

Therefore:
- `SEARCH` should move from MISSING to PARTIAL evidence coverage.
- Google relative interest, survey-reported channel, and social-media metrics must remain separate canonical variables.
- No conversion or causal claim should be inferred from correlations shown by the dashboard.

## Known limitation
The Google-derived index is relative 0–100 rather than absolute query volume and is publicly supported for only seven origin countries. Long-term methodological stability and a 10+ year export remain unverified.

## Evidence references
- `.k전통플랫폼/02_L1_EVIDENCE/source_registry/SEARCH_OFFICIAL_SOURCE_REGISTRY_2026-08-27_A.csv`
- `.k전통플랫폼/02_L1_EVIDENCE/source_registry/SEARCH_EVIDENCE_BATCH_2026-08-27_A.md`

## Status
Evidence-supported L2 observation only. No hypothesis, score, causal model, business decision, or KTOF weighting change is authorized by this observation.