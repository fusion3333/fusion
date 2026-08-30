# 2009 Foreign Tourist Survey — pain / revisit / recommendation / region observation

## Scope
Narrow evidence-supported observation only. No ontology, architecture, scoring, business, psychology, competitor, or causal-model changes.

## Tier-A same-year evidence
The official Korea Tourism Data Lab 2009 Foreign Tourist Survey codebook directly exposes the following 2009 field families:

- `q19a1~q19a14`: trip inconvenience (`문19. 한국여행에서 불편했던 점`), with year-specific coded items including language communication, visa acquisition, unsuitable food, airport/seaport immigration procedures, difficulty obtaining tourism information, signage, high prices, congestion, tourism-worker unfriendliness, taxi service, pressure to purchase, public transport, accommodation facilities/service, and tourist-information-center facilities/service; `97 기타`, `98 없다`, `99 모름/무응답`.
- `q20`: intention to revisit Korea for tourism within three years, 5-point ordinal plus `9 모름/무응답`.
- `q21`: intention to recommend Korea as a tourism destination, 5-point ordinal plus `9 모름/무응답`.
- `q22`: degree to which the Korea image improved, 5-point ordinal plus `9 모름/무응답`.
- `yq8a1~yq8a99`: 16-province visit geography derived from questions 8/9, with Seoul, Busan, Daegu, Incheon, Gwangju, Daejeon, Ulsan, Gyeonggi, Gangwon, Chungbuk, Chungnam, Jeonbuk, Jeonnam, Gyeongbuk, Gyeongnam, Jeju, plus other / none-unknown-no-response codes.

Official source: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14088&cbIdx=1127&streFileNm=7fc6e5a1-6235-11e8-9868-892a614a29fd.pdf

## Verified coverage change
2009 is no longer wholly `FIELD_EXTRACTION_REQUIRED` for the PAIN, POST_TRIP revisit/recommendation/image, and first-level regional visitation families. Raw variable names and explicit same-year value frames are now fixed for these fields.

A direct cross-year harmonization warning is required: the official 2009 inconvenience item frame is not mechanically identical to 2008. In particular, the 2009 codebook uses `5 관광정보를 얻기 어렵다` and `13 숙박시설과 서비스`. Therefore 2008 inconvenience categories must not be copied forward or treated as identical without a year-specific bridge.

The 2009 16-province geography also remains a year-specific administrative frame. It must not be silently mapped to later first-level geography that includes Sejong without an explicit geography-version transformation.

## Tier-B archival methodology support
KOSSDA metadata for the 2009 survey records 11,912 valid cases, monthly field collection, self-administered mode, nationality-proportional quota sampling, and nationality-proportional post-weighting. This is retained as secondary archival support rather than a substitute for the Tier-A same-year raw/codebook artifacts.

KOSSDA metadata: https://kossda.snu.ac.kr/handle/20.500.12236/15519

## Remaining blockers
Still `UNKNOWN` / not directly ingested in this run:

- respondent-level raw SAV bytes, checksum and row-count verification against the archival 11,912 case count;
- exact 2009 weight variable name and formula, calibration cells, trimming/capping, nonresponse adjustment and zero-cell handling;
- exact universe/skip logic for `q19`, `q20`, `q21`, `q22`;
- detailed-place-code ↔ `yq8*` 16-province derivation mechanics;
- complete 2009 field inventory, missing-value schema, and questionnaire wording for all remaining lifecycle variables;
- attachment-level license/reuse scope.

Confidence for the directly exposed field names/value frames: **HIGH**. Confidence for the KOSSDA sample/methodology metadata: **MEDIUM-HIGH (Tier-B archival metadata)**.
