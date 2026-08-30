# Foreign Tourist Survey 2017–2019 country/city codebook registry observation

Date: 2026-08-31
Layer: L2 OBSERVATION
Scope: evidence-supported artifact coverage only
Canonical dataset: KORC-FTS-001

## Observation
The current official Tourism Knowledge Information System codebook registry explicitly lists separate country/city codebook artifacts for the 2017, 2018 and 2019 Foreign Tourist Survey waves.

- 2017: `2017년 외래관광객 실태조사 코드북_국가 및 도시` (HWP), registered 2018-08-06.
- 2018: `2018년 외래관광객 실태조사 코드북_국가 및 도시` (HWP), registered 2019-07-08.
- 2019: `2019년 외래관광객조사 코드북_국가 및 도시` (HWP), registered 2020-06-24.

This closes the canonical manifest's prior `UNKNOWN` artifact-existence state for `country_city_code` in 2017–2019. The manifest is mechanically updated to `VERIFIED_AVAILABLE` for those waves.

## Preserved conflict
For the 2019-titled country/city codebook, the current official registry displays `2020` in the registry's survey-year column while the artifact title explicitly says `2019년 외래관광객조사 코드북_국가 및 도시`. This is recorded as a metadata conflict rather than silently corrected.

## What this does not establish
Artifact existence does not establish exact country/city code values, value labels, raw-variable linkage, missing codes, universe/filter, longitudinal equivalence, or respondent-level validity. No 2017↔2018↔2019 code harmonization is asserted.

The 2018 survey-regime break remains authoritative and independent of this artifact-coverage update.

## Remaining blocker
Open/ingest the same-year HWP country/city codebooks (or another authoritative representation of their contents) and extract exact mappings, raw linkage, missing schema and attachment-level license. For 2019, independently resolve the registry-year/title metadata conflict using the artifact detail/file metadata if available.

## Evidence
Tier-A official registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
L1 evidence: `FOREIGN_TOURIST_SURVEY_2017_2019_COUNTRY_CITY_CODEBOOK_REGISTRY_EVIDENCE_2026-08-31.csv`
