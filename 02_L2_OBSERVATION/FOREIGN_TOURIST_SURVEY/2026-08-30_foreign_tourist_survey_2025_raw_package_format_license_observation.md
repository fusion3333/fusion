# 2025 외래관광객조사 raw package format / license observation

Date: 2026-08-30
Layer: L2 OBSERVATION
Scope: evidence-only repository maintenance

## Evidence-supported observation

한국관광공사 한국관광 데이터랩의 2025년 외래관광객조사 원자료 공식 게시물은 원자료가 `sav 및 엑셀 파일`로 제공된다고 직접 명시하고, 같은 게시물에 `2025년_외래관광객조사_원자료.zip`과 별도의 `2025년_외래관광객조사_코드북.xlsx`를 함께 첨부한다.

따라서 2025 wave의 raw ingestion target format은 단순 ZIP 존재 수준을 넘어 `SAV + Excel raw data`와 `XLSX codebook`까지 VERIFIED로 좁힐 수 있다. 그러나 이번 evidence acquisition에서는 ZIP/XLSX bytes를 직접 ingest하지 않았으므로 respondent row count, internal filenames, checksums, raw variable names, value labels, universe/skip, item-level missing codes, weight mechanics 및 2024와의 field equivalence는 여전히 `NOT_INGESTED/UNKNOWN`이다.

공식 게시 페이지에는 공공누리 제4유형이 표시된다. 다만 게시 페이지의 라이선스 표시는 확인됐지만 ZIP 내부의 모든 원자료 파일에 대한 재배포 권한 범위를 별도로 검증하지 않았으므로 attachment-level redistribution scope는 보수적으로 `UNKNOWN / CHECK_REQUIRED`로 유지한다.

## Provenance boundary

- Distribution page: 한국관광공사 한국관광 데이터랩
- Survey-data contact shown on page: 한국문화관광연구원 데이터전략팀
- Publication date: 2026-06-04
- Survey period: 2025
- Geography: Korea inbound foreign visitors

## Remaining blocker

다음 직접 blocker는 공식 ZIP과 XLSX를 byte-level로 획득·ingest하여 파일 checksum, 내부 파일명, respondent row count, 전체 raw variable/value-label inventory, universe/skip, missing, weight variable/mechanics를 same-year 기준으로 검증하는 것이다. 2024 변수나 코드 구조를 2025에 자동 상속하지 않는다.

## L1 dependency

`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2025_RAW_PACKAGE_FORMAT_LICENSE_EVIDENCE_2026-08-30.csv`

No master architecture, ontology, source-routing, psychology, KTOF, business or opportunity-scoring files were modified.
