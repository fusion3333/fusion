# 2020 Foreign Tourist Survey field-coverage break observation

## Evidence boundary

This observation is limited to explicit same-series coverage notes published in the official 2022 Foreign Tourist Survey report distributed through Korea Tourism Data Lab. It does not infer unobserved 2020 raw-variable names, response codes, missing codes, or questionnaire routing from adjacent years.

## Verified observations

1. **Travel type was not collected in 2020.** The official 2022 report explicitly notes that the travel-type item was not surveyed in 2020. Any 2020 travel-type value must therefore remain structural `NOT_COLLECTED`, not be imputed from 2019/2021/2022 and not be interpreted as respondent nonresponse.

2. **Province-level stay duration was not collected in 2020.** This is narrower than overall Korea stay duration. The evidence must not be used to erase or negate an overall-stay field if the 2020 codebook/raw data separately verifies one.

3. **Main accommodation and accommodation-specific stay duration were not collected in 2020.** These are survey-design absences. Adjacent-year accommodation category mappings must not be projected through 2020.

4. **Major participation activities have an intra-year coverage break.** The official report states that the 2020 major-activities item was surveyed **from August onward**. Therefore an annual 2020 activity measure cannot be assumed to have Jan-Dec questionnaire coverage. Jan-Jul should remain structural `NOT_COLLECTED/UNKNOWN` unless direct 2020 raw evidence establishes a different fielding boundary.

5. **Satisfied activities were not collected in 2020.** This is distinct from overall Korea-trip satisfaction; the latter must be handled separately and only from direct evidence.

## Harmonization implication

The 2020 COVID regime is not only a generic methodology break. It contains field-specific structural absences and at least one within-year questionnaire start boundary. Harmonized extracts must distinguish `NOT_COLLECTED` from ordinary missing/nonresponse and must attach the August-start limitation to 2020 major-activity observations.

## Remaining blocker

Direct ingestion of the official 2020 codebook/raw package remains required for the complete field inventory, exact raw variable names, response/value labels, item universe/skip logic, missing codes, actual monthly denominators, and the exact August fielding start date. The official codebook registry confirms a 2020 PDF exists, but this observation does not claim that its field-level contents were parsed.

## Source

- Korea Tourism Data Lab / Korea Culture & Tourism Institute, official 2022 Foreign Tourist Survey report PDF: `https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=304593&cbIdx=1603&streFileNm=85f1e3b2-6b84-4f9f-8253-bd87e0b6fbbd.pdf`
- Tourism Knowledge Information System official codebook registry: `https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do`

Confidence: **HIGH** for the explicitly annotated collected/not-collected boundaries; **UNKNOWN/PENDING** for raw field mechanics not exposed by these notes.
