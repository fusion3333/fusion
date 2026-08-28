# 2010 Foreign Tourist Survey — field-level codebook observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-28
Dataset: KORC-FTS-001
Wave: 2010

## Observation
The official 2010 Foreign Tourist Survey codebook exposes same-year respondent field names and code frames for survey month (`chasu`), residence country (`nat`), residence city (`city`, delegated to a separate same-year country/city codebook), sex (`sex`), age (`dd2`), survey weight (`wt`), travel type (`dd11`), recent-3-year repeat visits (`mq1a`), visit purpose (`q2`), destination-selection process (`q2b`), alternative countries (`q2b1:q2b3`), travel motivations (`q2c1:q2c3`), information sources (`q3a1:q3a3`), stay length (`mq6`), shopping items (`q13a1:q13a3`), shopping places (`q14a1:q14a3`), expenditure variables (`mtzq16`, `mzq16a0:a10`, `mzq16b0:b9`) and satisfaction (`q17a1:q17a7`, `q17b`).

## Definition boundaries
- `mq1a` is explicitly defined as number of Korea visits during the **recent 3 years**. It must not be equated to later unrestricted repeat-visit measures.
- `mtzq16` is the raw total expenditure measure with monetary amounts standardized to USD.
- `mzq16a0` is the individual-traveler total excluding international airfare/ship fare; `mzq16a1:a10` separately expose lodging, shopping, food/beverage, domestic transport, entertainment, Korean travel-agency cost, culture, sports, other, and international airfare/ship fare.
- `mzq16b0` and `mzq16b1:b9` are a separate group-tour expenditure structure. The group and individual totals must not be mechanically treated as the same expenditure basis.
- `mq6` is verified as the 2010 stay-length raw variable, but its exact unit/coding is not established by the currently extracted official snippet and therefore remains UNKNOWN.

## Methodology regime
KTO's official survey-history page records a 2010 within-year collection-location change: excluding Jeju airport, from April the survey location changed from passenger-terminal departure areas to check-in-counter lobbies. This is a verified 2010 methodology event and must be preserved as a possible comparability boundary. Exact airport-level allocation and any resulting weighting adjustment remain UNKNOWN.

## What is not claimed
This observation does not claim respondent raw rows have been ingested, does not establish the `wt` weighting formula or sample design, does not infer universe/filter logic where the questionnaire has not been reconciled, and does not assert longitudinal equivalence with 2009 or 2011. The 2011 documented population expansion is a separate regime break and no backward inference is made into 2010.

## Provenance
Primary field source: official Korea Tourism Data Lab 2010 codebook:
https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14089&cbIdx=1127&streFileNm=b4e95833-6235-11e8-9868-892a614a29fd.pdf

Primary methodology source: official Korea Tourism Organization survey-history page:
https://kto.visitkorea.or.kr/coding/popup/popSearchSummary.jsp

Detailed row-level evidence is registered in:
`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2010_FIELD_LEVEL_CODEBOOK_EVIDENCE_2026-08-28.csv`
