# 2019 Foreign Tourist Survey — final package/sample/language/geography observation

Date: 2026-08-30
Layer: L2 OBSERVATION
Canonical dataset: KORC-FTS-001
Evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2019_FINAL_PACKAGE_SAMPLE_LANGUAGE_GEOGRAPHY_EVIDENCE_2026-08-30.csv`

## Evidence-supported observations

1. The 2019 annual final release reports a realized sample of 16,076 and exposes all twelve monthly realized respondent counts. These are final annual-package counts and should not be replaced by earlier quarterly planned/partial totals.

2. The official 2019 survey history explicitly records a geography-classification change for Middle Eastern markets: Central Asia, GCC, and Other Middle East. This is a comparability boundary. Exact member-country mapping is still UNKNOWN and must come from the same-year country/city codebook rather than inference.

3. The final 2019 survey used 13 respondent-language questionnaires: English, Japanese, Simplified Chinese, Traditional Chinese, Thai, German, French, Russian, Filipino, Vietnamese, Indonesian, Mongolian, and Arabic. The official 2018 overview listed 12 languages without Arabic, so the survey-language instrument roster is not identical across 2018 and 2019.

4. The final publication page lists a questionnaire ZIP with 14 types including Korean. This does not conflict with the 13 respondent-language roster: the page itself states that the 14-package count includes Korean. Do not encode 14 as the respondent-language count.

5. The final 2019 page verifies presence of the major WHO/WHY/SEARCH/STAY/DO/SPEND/SATISFACTION domains, but this remains domain-level evidence. It does not resolve raw variable names, exact response codes, universe/skip logic, item-level missing codes, or transformations.

## Coverage change

This closes final-package verification for 2019 monthly realized sample counts, the Middle-East geography split statement, and the questionnaire-language/package-count distinction. It does not close the canonical P0 field-level crosswalk gate.

## Remaining blockers

- exact Central Asia / GCC / Other Middle East country membership and raw geography codes
- raw variable names and response-code sets for the verified domains
- exact questionnaire wording and universe/skip logic
- item-level missing codes and derived-variable transforms
- direct ingestion of the official SAV/HWP questionnaire/codebook artifacts

No adjacent-year schema or country mapping is inferred.