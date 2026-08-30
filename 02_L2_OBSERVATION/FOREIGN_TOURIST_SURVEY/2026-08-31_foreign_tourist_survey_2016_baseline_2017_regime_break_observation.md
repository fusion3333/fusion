# Foreign Tourist Survey 2016 baseline / 2017 regime-break observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-31
Dataset: KORC-FTS-001

## Observation

Tier-A Korea Tourism Organization survey-history evidence fixes several structural changes between the 2016 and 2017 Foreign Tourist Survey waves:

- sample size expanded from 12,003 respondents in 2016 to 13,841 in 2017;
- target-country coverage expanded from 16 to 19 countries, with Vietnam, Indonesia and the Philippines explicitly added in 2017;
- survey-site coverage expanded from 6 to 8 locations, with Cheongju Airport and Daegu Airport explicitly added in 2017;
- selected questionnaire content changed, including province-level accommodation-night and visit-place items;
- survey administration was transferred from the Korea Culture & Tourism Institute to the Korea Tourism Organization in 2017.

These are verified regime/frame changes and therefore 2016→2017 cannot be treated as a fully frame-identical longitudinal transition without same-year variable, code, weighting and site-allocation checks.

## Evidence boundary

This observation does **not** infer the exact 2016 list of 16 countries by subtracting the three 2017 additions, does **not** reconstruct the exact six 2016 survey sites from the later eight-site list, and does **not** define code-level equivalence for the changed visit-place or accommodation-night fields. Those require 2016 and 2017 same-year codebook/user-guide/raw extraction.

The official current history page supplies the historical break statement, but respondent raw bytes, weighting cells, site-by-month sample allocation, missing schema and attachment-level license were not acquired in this run.

## Remaining blockers

- exact 2016 country list from the 2016 country/city codebook;
- exact six-site 2016 fieldwork composition from the 2016 guide/report;
- 2016↔2017 code-level delta for visit-place and province accommodation-night variables;
- weighting formula/cells and any change induced by country/site-frame expansion;
- respondent-row ingestion, row count verification and checksums;
- attachment-level license scope.

## Source

Tier-A: Korea Tourism Organization, `외래관광객실태조사란?` survey history / overview.
https://kto.visitkorea.or.kr/coding/popup/popSearchSummary.jsp
