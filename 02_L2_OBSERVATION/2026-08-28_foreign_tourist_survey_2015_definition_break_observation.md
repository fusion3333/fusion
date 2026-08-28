# 2015 Foreign Tourist Survey definition-break observation

Date: 2026-08-28

## Verified evidence
The official 2015 codebook exposes respondent-level survey month, residence country, demographics, weight, repeat-visit, multi-country visit, decision timing, alternative-country consideration, visited regions, stay length, shopping and expenditure fields.

KTO publication evidence verifies a 2014→2015 repeat-visit definition break: through 2014 the question referred to visits during the most recent three years; from 2015 onward the period restriction was removed.

## Canonical handling
- Flag `DEFINITION_BREAK_REPEAT_VISIT_WINDOW` at 2014→2015.
- Preserve original year-specific wording/codes.
- Do not mechanically concatenate repeat-visit levels across the break.

## Corrected stale statement
Earlier text in the legacy observation said 2016 raw/codebook availability was UNKNOWN. That is superseded. Official 2016 respondent raw ZIP, main codebook, country/city codebook, user guide and report are now VERIFIED_AVAILABLE; the questionnaire index entry exists but shows `No File`.

P0 remains field-level harmonization, not artifact discovery.