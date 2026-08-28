# Foreign Tourist Survey variable crosswalk V1 observation — 2026-08-28

Status: FIRST EVIDENCE-SAFE CROSSWALK PASS COMPLETE / FULL FIELD EXTRACTION BLOCKED

## Scope
This observation records the first canonical field-level crosswalk pass for the 2007–2025 Foreign Tourist Survey. It uses only fields/dimensions already verified in repository L1 manifests. It does not infer raw variable names, code values, weights, wording, universes, missing codes, or longitudinal equivalence from adjacent years.

Canonical crosswalk:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_VARIABLE_CROSSWALK_2007_2025_V1.csv`

## What is now materialized
The crosswalk has the required schema:
`survey_year, raw_variable, canonical_variable, canonical_axis, question_wording_source, code_values, universe_filter, unit, weight_variable, sample_design, stay_criterion, expenditure_basis, geography, missing_codes, comparability_status, regime_break, source_artifact, confidence, notes`.

Evidence-supported dimensions were materialized where repository manifests already verified them, including portions of:
- WHEN: survey month, prior-visit timing, decision timing
- WHO: residence country, demographics, travel type, repeat visit
- WHY: visit purpose, travel motivation, destination selection
- COMPETITIVE_DESTINATION: alternative-country consideration
- STAY: stay length
- DO: visited regions
- SPEND: shopping items and daily-average expenditure

## Preserved regime breaks
The crosswalk explicitly preserves, rather than smooths over:
- 2008 India addition / sample expansion from 11,453 to 11,978
- 2009 KTO → KCTI administration/provenance transition
- pre-2015 versus 2015+ repeat-visit definition break
- 2018 cruise exclusion, age quota addition, and stay-eligibility change to 90 days or less
- 2020–2022 COVID-modified regime
- 2023 restored-normal regime

## What remains UNKNOWN
A large share of the true field-level longitudinal crosswalk is still UNKNOWN because the repository does not yet contain extracted same-year codebook/questionnaire contents or downloaded respondent raw schemas for every wave.

Specifically still pending for many years:
- exact raw variable names
- exact question wording
- exact response codes
- exact universe/filter logic
- weight variable name and weighting design
- sample-design details
- exact expenditure unit/basis
- missing-value codes
- same-field longitudinal equivalence

UNKNOWN is intentional evidence preservation, not zero or absence.

## Access / extraction blocker
The official manifests show that several respondent raw ZIPs require the official applicant-information/download procedure. Codebook artifacts exist for many years, but their field contents are not fully materialized in the repository. Therefore a complete 2007–2025 field crosswalk cannot be truthfully claimed yet.

## Completion judgment
The previous state `VARIABLE_CROSSWALK_PENDING` is now too coarse. The defensible state is:
`VARIABLE_CROSSWALK_V1_PARTIALLY_MATERIALIZED_FIELD_EXTRACTION_AND_RAW_ACCESS_PENDING`.

This is not `HARMONIZATION_COMPLETE`, and respondent rows are still not claimed ingested.

## Next execution gate
1. Acquire or directly extract each same-year official codebook/questionnaire.
2. Acquire gated respondent raw ZIPs where authorized.
3. Replace UNKNOWN raw-variable/code/wording/weight/universe cells only with same-year evidence.
4. Build explicit equivalence groups and break groups across years.
5. Only after that create harmonized respondent extracts and populate graph rows.
