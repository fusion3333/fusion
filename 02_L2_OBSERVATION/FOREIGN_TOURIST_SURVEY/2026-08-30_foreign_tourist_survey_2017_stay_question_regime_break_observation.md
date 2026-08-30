# 2017 Foreign Tourist Survey — stay/question regime-break observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY  
Date: 2026-08-30  
Canonical dataset: `KORC-FTS-001`

## Evidence basis

Tier-A official Korea Tourism Organization materials establish several 2017 boundaries that matter for the still-pending same-year variable crosswalk.

L1 evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2017_STAY_QUESTION_REGIME_BREAK_EVIDENCE_2026-08-30.csv`

## Observations

1. **The 2017 published mean stay does not use the full survey-eligible stay universe.** The survey population admitted visitors staying from 1 day through 1 year, while the official 2017 result table reports mean stay (7.0 days) with visitors staying 61 days or more excluded. Therefore the published 7.0-day statistic must not be treated as a mean over every stay-eligible respondent.

2. **The regional stay-duration question changed format in 2017.** KTO's official survey-history note states that the `시도별 숙박일수` item changed from `_박` to `_박_일`. This is a verified questionnaire regime break. It does not by itself establish a lossless mapping between pre-2017 and 2017 raw fields.

3. **The visited-place item frame was adjusted in 2017.** The official history confirms `방문지 항목 일부 조정`, but does not enumerate the exact added/removed/renamed choices in the indexed publication. The detailed mapping remains `MISSING/UNKNOWN` pending direct 2017 questionnaire/codebook extraction.

4. **Survey market/instrument scope expanded in 2017.** The official history records expansion from 16 to 19 target countries through addition of Vietnam, Indonesia and the Philippines, together with added currency units. The exact added currency labels/codes and exchange-rate treatment are not exposed in this evidence and remain `UNKNOWN`.

## Harmonization constraint

No adjacent-year equivalence is asserted. In particular:

- do not compare the 2017 published 7.0-day mean with an unrestricted stay mean without matching analysis universes;
- do not mechanically equate pre-2017 regional-stay fields with the 2017 `_박_일` response format;
- do not assume the 2016 and 2017 visited-place choice frames are identical;
- do not infer added currency units, codes or conversion rules from neighboring waves.

## Remaining blocker

Direct ingestion/extraction of the official 2017 HWP codebook and questionnaire, plus the gated 2017 SAV raw file, is still required for exact `raw_variable`, wording, response codes, universe/skip, missing values, place-code mapping, stay-field derivation, currency fields and expenditure conversion mechanics.

No master architecture, ontology, source-routing, KTOF, psychology, business-strategy or opportunity-scoring files were changed.