# Foreign Tourist Survey supporting-artifact routing constraint — 2016–2019

## Evidence-supported observation

The official Korea Tourism Knowledge Information System does not expose a uniform supporting-artifact stack across the 2016–2019 Foreign Tourist Survey years.

- 2016: the questionnaire is listed in the official questionnaire index, but the index shows **No File**. The same official system separately lists a 2016 user guide PDF.
- 2017–2019: the official user-guide index explicitly states that separate user guides were **not issued** after survey administration transferred to Korea Tourism Organization. By contrast, the official questionnaire index provides PDF questionnaires for 2017, 2018 and 2019.

## Repository implication

This is an evidence-routing constraint, not a reason to interpolate definitions across years.

For field-level harmonization:

1. 2016 exact question wording must remain UNKNOWN unless it can be recovered from the same-year codebook, user guide, report, raw metadata, or another authoritative same-year artifact. The missing questionnaire PDF must not be reconstructed from 2015 or 2017.
2. 2017–2019 methodology and definitions must route to same-year report/questionnaire/codebook/raw artifacts. The absence of a user guide is structural and should not remain mislabeled as an unresolved download task.
3. 2018 requires extra caution because the official survey history records population/sample-design changes, including exclusion of cruise tourists, addition of age allocation, and shortening of the eligible stay criterion from one year or less to 90 days or less.

## Non-equivalence guard

`missing questionnaire artifact != missing survey data`

`no user guide published != permission to inherit a neighboring year's methodology`

`artifact existence != variable-definition equivalence`

## Coverage decision

No coverage-score increase. The finding narrows the P0 crosswalk blocker by identifying the correct source-routing fallback for 2016–2019, but variable-level wording/code/value harmonization remains pending.

## Provenance

Official source: Korea Tourism Knowledge Information System, Foreign Tourist Survey questionnaire index, user-guide index and survey overview. Verified 2026-08-28.

License for these index-level metadata observations: UNKNOWN. Confidence: HIGH.