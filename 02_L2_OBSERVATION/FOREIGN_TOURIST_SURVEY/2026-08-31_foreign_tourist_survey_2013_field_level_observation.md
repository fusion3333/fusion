# 2013 Foreign Tourist Survey — same-year field-level observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-31
Canonical dataset: `KORC-FTS-001`

## Evidence basis
Tier-A same-year official 2013 Foreign Tourist Survey codebook published through Korea Tourism Data Lab / Korea Tourism Organization, cross-checked against the current official Foreign Tourist Survey registry and official survey-history page. The official 2013 results notice separately states that fieldwork covered January–December 2013 and 12,030 departing foreign visitors at Incheon, Gimpo, Jeju and Gimhae airports plus Incheon and Busan ports.

L1 evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2013_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-31.csv`

## Supported observations
1. The 2013 wave has explicit same-year raw fields for survey month (`chasu`), residence country (`nat`), residence city (`city`), travel type (`q1`), recent-three-year repeat visits (`q2b`, raw companion `wq2b`), information sources (`q8a1~q8a3`), accommodation (`q10a1~q10a7`), visit places (`q11a1~q11a27`, `q11b1~q11b27`), three-year revisit intention (`q19`), recommendation intention (`q20`), Korea-image change (`q21`), daily-average expenditure (`mday_av0~mday_av3`) and survey weight (`wt`).

2. `nat` is a 2013-specific residence-country frame: Japan, China, Hong Kong, Singapore, Taiwan, Thailand, Malaysia, Australia, United States, Canada, United Kingdom, Germany, France, Russia, Middle East, India and Other. Later origin-country classifications must not be back-cast without an explicit same-year crosswalk.

3. The official codebook explicitly routes `city` to a separate same-year country/city codebook. The current official registry independently lists `2013년 외래관광객 실태조사 코드북_국가 및 도시` as a PDF artifact. This closes the artifact-existence question for 2013 country/city mapping, but not full mapping ingestion.

4. The repeat-visit variable `q2b` is explicitly based on visits during the most recent three years. This basis is not equivalent to later lifetime visit-count regimes unless an explicit longitudinal break/equivalence rule is supported by same-year evidence.

5. The official survey history explicitly states that some response options in the `한국 여행 중 방문지` question changed in 2013. Therefore 2013 visit-place codes are a regime boundary and adjacent-year visit-place equivalence must not be inferred mechanically.

6. `q19` is three-year revisit intention, `q20` is Korea travel recommendation intention, and `q21` is post-trip Korea-image change. The codebook shows a common visible response block including 1–5 plus `8=해당 없음`, `9=모름/무응답`; however exact semantic anchors for the q21 1–5 scale were not separately exposed in the retrieved Tier-A text and remain partial rather than inferred.

7. `mday_av0~mday_av3` are explicitly marked as daily-average expenditure raw fields in USD for all travelers / independent / group / Air-tel respectively. The derivation formula, exchange-rate source/date, airfare/package treatment, missing/outlier processing and relationship to total-trip expenditure remain UNKNOWN.

8. `wt` is confirmed as the same-year raw weight field. Its weighting formula, population controls, adjustment dimensions, trimming/capping, calibration and nonresponse treatment remain UNKNOWN.

## Remaining P0 blockers
- full 2013 variable inventory and complete country/city code mapping ingestion;
- exact universe/filter/skip logic and respondent-level missing schema for the extracted fields;
- monthly realized sample counts and exact fieldwork dates;
- weight mechanics and population controls behind `wt`;
- complete visit-place frame and explicit 2012↔2013 / 2013↔2014 equivalence-break mapping;
- expenditure derivation and exchange-rate methodology for `mday_av*`;
- raw respondent ZIP byte-level ingestion, row count and checksums;
- attachment-level redistribution/license scope.

No master architecture, ontology, source-routing, psychology, KTOF, business/opportunity logic or canonical longitudinal harmonization rules were changed.
