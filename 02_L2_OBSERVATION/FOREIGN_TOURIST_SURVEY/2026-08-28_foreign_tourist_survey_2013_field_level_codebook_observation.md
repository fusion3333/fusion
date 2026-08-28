# 2013 Foreign Tourist Survey — field-level codebook observation

Date: 2026-08-28
Layer: L2 OBSERVATION
Scope: evidence-supported field extraction only
Source class: O (Official Data)

## Observation
The official 2013 Foreign Tourist Survey codebook materially closes part of the wave-level variable-crosswalk gap without requiring inference from adjacent years.

Verified same-year raw/codebook fields include:
- `chasu`: survey month (1–12)
- `nat`: residence-country code
- `city`, `sex`, `edu`, `job`, `age`: respondent geography/demographics
- `wt`: weight field exists; formula/design remain UNKNOWN
- `q1`: travel type
- `q2b`, `wq2b`: number of Korea visits in the recent three years and underlying raw field
- `q2c`, `q2c1`: prior-visit timing
- `q3a2`, `mq3a2`, `mmq3a2`: stay-length category/raw/transformed fields
- `q4a`, `q4b`, `q4c`, `q4b1`, `q4c1`: Korea-only versus adjacent-country itinerary structure
- `q19`: intention to revisit Korea within three years
- `q20`: recommendation intention field exists; full code frame not extracted in this pass
- `q21`: post-trip Korea-image-change field exists; full code frame not extracted in this pass
- `mday_av0`–`mday_av3`: daily-average expenditure raw fields for all/individual/group/Air-tel travel types, in USD

## Definition boundaries that must be preserved
1. `q2b` is explicitly a **recent-three-years** visit-count measure. The official survey history records a later 2015 change from the recent-three-years basis to a lifetime basis. Therefore 2013 `q2b` must not be pooled with 2015+ visit-frequency measures without an explicit semantic crosswalk.
2. Stay duration is represented by multiple fields with different semantics. `mq3a2` is raw; `mmq3a2` is a transformed raw field in which 61 days or more are SYSMISS. These are not interchangeable.
3. Daily-average expenditure fields are present and denominated in USD, but the exact denominator construction, outlier treatment and relation to total-expenditure fields were not reconstructed in this pass. No harmonized spend formula is asserted.
4. The official survey-history page records that in **2013 some response options for “places visited during the Korea trip” were changed**. Therefore place-code comparability across 2012→2013 must remain unresolved until the same-year place-field/code frame is extracted and explicitly crosswalked.

## Coverage effect
2013 moves from artifact-level existence toward `FIELD_LEVEL_VERIFIED` for the listed WHO/WHEN/STAY/SPEND/POST_TRIP fields. This does **not** mean the 2013 wave is harmonized or respondent rows are ingested.

No canonical completion score or harmonization status is raised by this observation.

## Remaining blockers
- respondent-level raw rows not ingested
- sample size and sampling frame not reconstructed in this pass
- `wt` weighting formula, calibration targets, strata and variance design UNKNOWN
- exact questionnaire universe/filter logic for conditional questions UNKNOWN
- full `q20` and `q21` code frames pending
- exact 2013 visited-place variables/code frame pending despite an official regime-change note
- daily-average expenditure denominator/outlier methodology pending
- license/reuse terms for the downloadable codebook/raw package remain UNKNOWN in the evidence file

## Official sources
- 2013 codebook: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14092&cbIdx=1127&streFileNm=f0cfd13a-6235-11e8-9868-892a614a29fd.pdf
- Official codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do?pageIndex=2&searchCondition=res_year&searchWord=
- Official survey history / overview: https://know.tour.go.kr/stat/fResearchSumDis19Re.do
