# 2012 Foreign Tourist Survey — sample/weighting observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY  
Date: 2026-08-31  
Canonical dataset id: `KORC-FTS-001`

## Observation

The 2012 wave is no longer completely UNKNOWN at the sample-design level. Same-year metadata for the official-producer dataset archived by KOSSDA identifies the producer as Korea Culture & Tourism Institute, fieldwork period as January–December 2012, valid sample as 12,021 respondents, and the universe as foreign travelers aged 15 or older staying in Korea from 1 day through 1 year.

The same metadata identifies six fieldwork locations: Incheon International Airport, Gimpo International Airport, Gimhae International Airport, Jeju International Airport, Incheon International Port, and Busan International Port. The stated sampling procedure is proportional quota sampling by nationality, entry route, and sex based on entrant counts. The survey mode is self-administered, and Millward Brown Media Research is identified as the data collector.

The 2012 weighting basis is also explicitly described as post-survey weighting proportional to entrant counts by nationality. This closes the previous high-level UNKNOWN for whether weighting existed and what primary population dimension it used, but it does not establish the exact weight variable, formula, control totals, normalization, trimming/capping, zero-cell treatment, or whether additional adjustments were applied.

KOSSDA lists the same-year questionnaire PDF, SAV data, coding guide PDF, and user guide PDF. These artifacts were deposited by the official producer, but KOSSDA data access is member-restricted and the respondent SAV/raw bytes were not ingested in this repository run. The Tourism Knowledge Information System remains the Tier-A authority for official artifact availability; this observation uses KOSSDA as a Tier-B official-producer archive for detailed same-year metadata.

## Comparability boundary

No raw variable names, question wording, code values, missing codes, skip logic, expenditure definition, or cross-year equivalence are inferred from 2011 or 2013. The 2012 wave remains `FIELD_EXTRACTION_REQUIRED` for field-level crosswalk purposes until the same-year codebook/user guide contents are directly extracted.

## Concrete remaining blockers

- exact 2012 raw variable inventory and code values
- universe/skip/missing rules by variable
- raw weight variable name and exact weight formula/calibration procedure
- month-by-month and site-by-site achieved sample counts
- operational exclusions within the 1-day-to-1-year universe
- respondent SAV/official raw ZIP row-count and checksum validation
- attachment-level reuse/license terms beyond the copyright/access metadata

## L1 provenance

`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2012_SAMPLE_WEIGHTING_METADATA_EVIDENCE_2026-08-31.csv`

Primary metadata source: https://kossda.snu.ac.kr/handle/20.500.12236/15522
