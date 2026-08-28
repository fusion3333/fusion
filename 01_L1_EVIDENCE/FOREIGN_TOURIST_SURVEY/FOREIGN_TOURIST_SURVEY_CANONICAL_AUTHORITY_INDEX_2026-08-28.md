# Foreign Tourist Survey — Canonical Authority Index

Status: CANONICAL AUTHORITY ROUTER / VARIABLE CROSSWALK PENDING
Date: 2026-08-28
Canonical dataset id: `KORC-FTS-001`

## Current truth
The Foreign Tourist Survey official-artifact investigation has progressed beyond older inventory files. Older UNKNOWN/partial entries must not override newer dated manifests below.

## Active evidence order
Use the most specific dated manifest for the survey year/artifact first:

1. `FOREIGN_TOURIST_SURVEY_2007_2009_OFFICIAL_ARTIFACT_MANIFEST_2026-08-28.csv`
   - official respondent raw ZIP entries verified for 2007, 2008, 2009
   - official year-specific codebooks/questionnaires verified
   - 2009 user guide verified
   - raw access uses official application/download procedure

2. `FOREIGN_TOURIST_SURVEY_HISTORICAL_CODEBOOK_MANIFEST_2010_2014_2026-08-28.csv`
   - use for the historical years covered by that manifest; do not infer adjacent-year equivalence

3. `FOREIGN_TOURIST_SURVEY_2015_CODEBOOK_MANIFEST_2026-08-28.csv`
   - use for 2015 codebook/definition evidence

4. `FOREIGN_TOURIST_SURVEY_2012_2016_OFFICIAL_ARTIFACT_MANIFEST_2026-08-28.csv`
   - 2012 official raw ZIP, codebook, user guide and report verified
   - 2016 official raw ZIP, codebook, country/city codebook, user guide and report verified
   - raw bytes were not ingested in that run

5. `FOREIGN_TOURIST_SURVEY_2017_2019_RAW_ATTACHMENT_MANIFEST_2026-08-28.csv`
   - official raw attachments verified for 2017, 2018, 2019
   - preserve the documented 2017/2018/2019 methodology/regime changes
   - 2018 is a major comparability break: cruise exclusion, age allocation, stay eligibility ≤90 days and other changes

6. `FOREIGN_TOURIST_SURVEY_OFFICIAL_RAW_MANIFEST_2026-08-28.csv`
   - current evidence for 2015 and 2020–2025 where listed
   - 2020–2022 COVID-modified regime must not be mechanically pooled with normal regimes
   - 2023 restoration and later normal regime must retain regime tags

7. `FOREIGN_TOURIST_SURVEY_SUPPORTING_ARTIFACT_GAP_MANIFEST_2016_2019_2026-08-28.csv` and dated L2 observations
   - use for questionnaire/user-guide/supporting-artifact gaps and explicit non-publication/absence evidence

## Supersession rule
Any older inventory saying that the 2012 codebook/raw/user guide/report or 2016 raw/codebook/user guide/report is UNKNOWN is stale for current-state reporting. Preserve it only as historical evidence of what had not yet been verified at that earlier time.

## Current completion state
`OFFICIAL_RAW_CODEBOOK_MANIFEST_AND_REGIME_VERIFIED_VARIABLE_CROSSWALK_PENDING`

This does NOT mean respondent rows are ingested. It means official artifact existence/provenance and important regime boundaries have been substantially verified while field-level longitudinal harmonization remains pending.

## Next required P0 work
Create a year-by-year variable crosswalk with at least:
`survey_year, raw_variable, canonical_variable, question_wording/source, code_values, universe/filter, unit, weight_variable, sample_design, stay_criterion, expenditure_basis, geography, missing_codes, comparability_status, regime_break, source_artifact, confidence, notes`.

No adjacent-year schema, wording, weights or code equivalence may be inferred without same-year evidence.
