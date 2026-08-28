# Foreign Tourist Survey — Canonical Authority Index

Status: CANONICAL AUTHORITY ROUTER / VARIABLE CROSSWALK V1 PARTIALLY MATERIALIZED
Date: 2026-08-28
Canonical dataset id: `KORC-FTS-001`

## Current truth
The Foreign Tourist Survey official-artifact investigation has progressed beyond older inventory files. Older UNKNOWN/partial entries must not override newer dated manifests.

The single current artifact/access/regime view is:
`FOREIGN_TOURIST_SURVEY_CANONICAL_MANIFEST_2007_2025_V1.csv`

The first evidence-safe field crosswalk is:
`FOREIGN_TOURIST_SURVEY_VARIABLE_CROSSWALK_2007_2025_V1.csv`

Use the canonical manifest first for wave-level current state. Use the crosswalk for field/dimension state. Use the dated evidence manifests below to trace provenance and detail behind each cell.

## Active evidence order
1. `FOREIGN_TOURIST_SURVEY_CANONICAL_MANIFEST_2007_2025_V1.csv`
   - canonical wave-level truth for 2007–2025
   - columns separate raw/questionnaire/codebook/user-guide/report/country-city-code/access/regime
   - preserves UNKNOWN / NOT_VERIFIED / NOT_PUBLISHED_BY_DESIGN instead of interpolating

2. `FOREIGN_TOURIST_SURVEY_VARIABLE_CROSSWALK_2007_2025_V1.csv`
   - first canonical field-level crosswalk pass
   - materializes only dimensions already supported by same-year L1 evidence
   - leaves exact raw names/codes/wording/weights/universes UNKNOWN where not yet extracted
   - must not be interpreted as harmonization complete

3. `FOREIGN_TOURIST_SURVEY_2007_2009_OFFICIAL_ARTIFACT_MANIFEST_2026-08-28.csv`
   - respondent raw ZIP entries verified for 2007–2009
   - year-specific codebooks/questionnaires verified
   - 2009 user guide verified

4. `FOREIGN_TOURIST_SURVEY_HISTORICAL_CODEBOOK_MANIFEST_2010_2014_2026-08-28.csv`
   - historical codebook evidence; do not infer adjacent-year equivalence

5. `FOREIGN_TOURIST_SURVEY_2015_CODEBOOK_MANIFEST_2026-08-28.csv`
   - 2015 codebook/definition evidence

6. `FOREIGN_TOURIST_SURVEY_2012_2016_OFFICIAL_ARTIFACT_MANIFEST_2026-08-28.csv`
   - 2012 raw ZIP/codebook/user guide/report verified
   - 2016 raw ZIP/codebook/country-city codebook/user guide/report verified
   - raw respondent bytes were not ingested in that evidence run

7. `FOREIGN_TOURIST_SURVEY_2017_2019_RAW_ATTACHMENT_MANIFEST_2026-08-28.csv`
   - raw attachments verified for 2017–2019
   - 2018 major comparability break: cruise exclusion, age allocation, eligible stay ≤90 days and other changes

8. `FOREIGN_TOURIST_SURVEY_OFFICIAL_RAW_MANIFEST_2026-08-28.csv`
   - later-wave raw evidence where listed
   - 2020–2022 COVID-modified regime must not be mechanically pooled with normal regimes

9. `FOREIGN_TOURIST_SURVEY_SUPPORTING_ARTIFACT_GAP_MANIFEST_2016_2019_2026-08-28.csv` and canonical `02_L2_OBSERVATION/FOREIGN_TOURIST_SURVEY/` observations
   - supporting-artifact gaps/non-publication and routing constraints

## Supersession rule
Any older inventory saying that the 2012 codebook/raw/user guide/report or 2016 raw/codebook/user guide/report is UNKNOWN is stale for current-state reporting. Preserve it only as historical evidence of what had not yet been verified at that earlier time.

## Current completion state
`VARIABLE_CROSSWALK_V1_PARTIALLY_MATERIALIZED_FIELD_EXTRACTION_AND_RAW_ACCESS_PENDING`

This does NOT mean respondent rows are ingested or longitudinal harmonization is complete. It means a canonical crosswalk table now exists and evidence-supported fields have been placed into it, while unsupported field details remain explicitly UNKNOWN.

## Remaining P0 gate
Complete same-year field extraction for every wave with at least:
`survey_year, raw_variable, canonical_variable, question_wording/source, code_values, universe/filter, unit, weight_variable, sample_design, stay_criterion, expenditure_basis, geography, missing_codes, comparability_status, regime_break, source_artifact, confidence, notes`.

Then build explicit longitudinal equivalence/break groups and only afterward create harmonized respondent extracts.

No adjacent-year schema, wording, weights or code equivalence may be inferred without same-year evidence.
