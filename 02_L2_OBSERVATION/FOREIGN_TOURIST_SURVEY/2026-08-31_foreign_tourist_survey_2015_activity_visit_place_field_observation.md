# 2015 Foreign Tourist Survey — activity / visit-place field observation

## Evidence-supported observation

Tier-A same-year official codebook evidence verifies that the 2015 Foreign Tourist Survey stores ranked Korea-visit activity fields as `q8a1`, `q8a2`, and `q8a3`. The codebook table exposes the activity response frame on `q8a1`: shopping; food tourism; hot spring/spa; rest/relaxation; beauty tourism; medical tourism; entertainment; casino; theme park; sports; leisure sports; professional sports; industrial-site inspection; training/education/research; meetings/conferences/academic meetings/exhibitions; business; palace/historic-site visit; natural scenery; performances/folk events/festivals; museum/exhibition visit; city-tour bus; traditional-culture experience; other; unknown/nonresponse.

The same codebook also verifies `q8b` as "good/preferred activity during Korea visit", but the retrieved official excerpt does not independently expose its exact code frame, multiplicity, universe/skip or missing behavior. Those fields remain `UNKNOWN` rather than being inferred from `q8a*`.

The same-year codebook verifies a detailed visit-place field family `q9a1~q9a33` for Korea travel locations. The currently retrievable official excerpt points to the following page for the place mapping but does not expose the full 2015 detailed-place code table. Therefore the existence of the 33-field family is `VERIFIED`, while exact place labels/codes, response encoding, geography derivation, multiplicity, universe and missing codes remain `MISSING/UNKNOWN`.

## Comparability constraint

Do not backfill the 2015 `q9a1~q9a33` place frame from 2014 or 2016. The master evidence discipline requires same-year field extraction, and detailed visit-place frames are explicitly treated as year-specific until direct mapping is acquired.

## Direct blocker

Acquire the full same-year 2015 codebook page(s) containing the `q9a1~q9a33` place mapping and, if accessible, the raw respondent package. Required unresolved fields are: exact place code↔label mapping; any derived 17-si/do or region variables; `q8b` code/multiplicity; activity/place universe and skip rules; missing-value schema; respondent denominator; and raw-value validation.

## Source

- Tier-A: Korea Tourism Organization / Tourism Knowledge Information System, `2015년 외래관광객 실태조사 코드북` — https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14094&cbIdx=1603&streFileNm=160719a1-6236-11e8-9868-892a614a29fd.pdf

No master architecture, ontology, source-routing, psychology, KTOF, business/opportunity logic, or canonical harmonization rule was modified.
