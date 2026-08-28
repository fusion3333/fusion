# Foreign Tourist Survey raw artifact continuity observation — 2026-08-28

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Source class: O (official)
Measurement type: SURVEY / RAW MICRODATA ARTIFACT LISTING
Canonical dataset: FOREIGN_TOURIST_SURVEY

## Observation
The current official Tourism Knowledge Information System data-download page lists an individual raw-data artifact for every annual Foreign Tourist Survey wave from 2007 through 2025. This closes prior artifact-existence gaps for 2010, 2011, 2013, 2014, 2015 and 2020 in the canonical manifest.

The newly verified filenames are:
- 2010: `2010년 외래관광객 실태조사 원자료.zip`
- 2011: `2011년 외래관광객 실태조사 원자료.zip`
- 2013: `2013년 외래관광객 실태조사 원자료.zip`
- 2014: `2014년 외래관광객 실태조사 원자료.zip`
- 2015: `2015년 외래관광객 실태조사 원자료.zip`
- 2020: `2020년_외래관광객조사_데이터_1718598135136.zip`

The same official page requires applicant information and use purpose before download. Artifact listing availability therefore does not mean the respondent rows have been ingested into this repository.

For 2020, separate official lists also verify a 2020 codebook PDF and a 2020 annual report PDF. The 2020 wave remains in the changed COVID-era 2020–2022 methodology regime; artifact availability must not be interpreted as statistical comparability with 2019 or 2023+.

## Coverage change
`RAW_ARTIFACT_EXISTENCE`: VERIFIED_CONTINUOUS_2007_2025

No change to:
- `BULK_INGESTION_STATUS = NOT_INGESTED`
- `HARMONIZATION_STATUS = VARIABLE_CROSSWALK_PENDING`
- respondent-level data availability inside repository
- field-level comparability across survey regimes

## Provenance
Primary official raw listing: `https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do`
Official codebook listing: `https://stat.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do`
Official report listing: `https://stat.tour.go.kr/stat/fReportsOfForeignerDis19Re.do`
Acquired/verified: 2026-08-28
Publisher: 한국문화관광연구원 관광지식정보시스템
License: UNKNOWN for the raw microdata artifacts in this run
Confidence: HIGH for artifact existence; NOT ASSESSED for un-ingested field content

## Remaining blocker
Direct authorized raw acquisition and a field-level crosswalk of variable names, exact question wording, response codes, weights, sampling/universe definitions, stay-duration definitions and expenditure definitions across waves remain required before harmonized respondent extracts can be claimed.
