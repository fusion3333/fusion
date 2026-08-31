# 2012 Foreign Tourist Survey — official codebook first field materialization

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-31
Dataset: KORC-FTS-001

## Observation
The 2012 Foreign Tourist Survey field-extraction P0 can now move beyond artifact-existence-only status for two fields using same-year Tier-A official codebook evidence.

The Tourism Knowledge Information System official registry lists `2012년 외래관광객 실태조사 코드북` as a PDF registered on 2013-03-21. The official Tourism Data Lab attachment resolves to the year-specific endpoint with `bcIdx=14091`, and its search-indexed document text exposes field-level content.

Verified from the same-year official codebook snippet:

- `q1` = `문1. 여행 형태`
  - `1 개별여행`
  - `2 단체여행`
  - `3 Air-tel Tour`
  - `9 모름/무응답`
- `q2b` = `문2-2. 최근 3년간 한국방문 횟수`
  - raw variable name and the explicit three-year reference window are verified
  - the full 2012 value coding was not exposed in the acquired snippet and remains `UNKNOWN`

## Evidence boundary
This run does **not** copy q2b codes from 2011 or 2013 even though adjacent-year codebooks appear similar. The canonical authority requires same-year field evidence and prohibits adjacent-year interpolation.

The endpoint still returns `application/octet-stream` to direct rendered/open retrieval in the current acquisition environment. Therefore full-PDF page verification, universe/skip rules, weight variable, and remaining code values are not claimed here.

## Coverage change
2012 is no longer accurately represented as having zero same-year field extraction evidence. At minimum, the following are now evidence-supported:

- `q1` raw name + wording + displayed category codes + missing code
- `q2b` raw name + wording + explicit recent-three-year definition

The canonical crosswalk itself was not edited in this run to avoid a broad shared-file touch while the interactive lane may be active. The new L1 file is the narrow provenance source for a later mechanical reconciliation.

## Remaining blocker
Highest-priority 2012 blocker remains acquisition of the full same-year codebook content/bytes so that exact codes, universe/filter, companion raw fields, weight field, geography codes, missing schema, and other P0 variables can be extracted without inference.
