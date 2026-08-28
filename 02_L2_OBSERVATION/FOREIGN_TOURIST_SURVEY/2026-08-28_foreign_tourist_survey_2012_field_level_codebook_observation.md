# 2012 Foreign Tourist Survey field-level codebook observation

Date: 2026-08-28
Evidence class: O (Official Data)
Priority: P0 Foreign Tourist Survey variable crosswalk
Status: EVIDENCE-SUPPORTED L2 OBSERVATION

## Verified new evidence

The same-year official 2012 Foreign Tourist Survey codebook is directly reachable from the Korea Tourism Data Lab attachment endpoint and is separately listed in the Korea Tourism Knowledge Information System codebook registry. This closes the prior blocker that only artifact existence, not direct same-year field content, had been verified for 2012.

Directly verified field-level content includes:

- `q1` = travel type, coded `1 individual`, `2 group`, `3 Air-tel Tour`, `9 unknown/no response`.
- `q2b` = number of Korea visits during the recent 3 years, coded `1 one visit`, `2 two`, `3 three`, `4 four or more`, `9 unknown/no response`.
- `wt` = survey weight field. Its presence is verified, but construction/calibration/trimming/variance methodology is not.
- `mday_av0` through `mday_av3` = raw daily-average expenditure fields for overall, individual travel, group travel and Air-tel respectively, with the codebook indicating raw dollar values. The exact denominator, currency-conversion procedure, outlier handling and missing-value behavior remain unverified.

The official 2012 publication page states an annual survey scale of approximately 12,000 respondents, approximately 1,000 per month, and lists the survey domains covering travel behavior, expenditure/shopping and post-trip evaluation. It also records 2012 as the year the survey was selected for construction in Statistics Korea's Nara Statistics system.

## Comparability boundaries

`q2b` is explicitly a **recent-3-years** visit-frequency measure. Official survey history records a later definition change in 2015 from recent 3 years to lifetime visit frequency. Therefore the 2012 field must not be pooled mechanically with 2015+ repeat-visit fields.

The 2011 survey-history regime states that the target population was expanded to visitors staying from 1 day through 1 year. That history is relevant context for 2012, but exact 2012 eligibility wording is still pending same-year guide/questionnaire verification and is therefore not promoted to fully verified field metadata.

Daily-average expenditure fields are year-specific survey constructs. Their labels alone do not prove a harmonized denominator across waves.

## Concrete conflict

Two Tier-A official pages expose different statistical approval-number strings:

- the official 2012 publication page states approval number `31402`;
- the current official survey-summary page displays `314002`.

This may reflect historical renumbering, formatting normalization or a publication typo, but no evidence acquired in this run resolves which explanation is correct. The field is therefore registered as `CONFLICTING`, and no silent normalization should be made until a Statistics Korea historical approval registry or archived same-year legal documentation is checked.

## Remaining blockers

Respondent raw rows are still not ingested. Exact universe/filter logic, full variable inventory, missing-code behavior, survey-weight formula, sample allocation/calibration, detailed expenditure basis, currency conversion, outlier treatment and same-year eligibility wording remain `UNKNOWN/PENDING`.

No canonical crosswalk, architecture, scoring logic or coverage score was modified in this run.

## Sources

- Korea Tourism Data Lab, official 2012 publication page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=10899&cateCont=&cbIdx=1603&searchKey=&searchKey1=&searchKey2=&searchKey3=&tgtTypeCd=
- Korea Tourism Data Lab, official 2012 codebook attachment: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14091&cbIdx=1127&streFileNm=df541bf7-6235-11e8-9868-892a614a29fd.pdf
- Korea Tourism Knowledge Information System, official codebook registry: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do?pageIndex=2&searchCondition=res_year&searchWord=
- Korea Tourism Knowledge Information System, official survey history/summary: https://know.tour.go.kr/stat/fResearchSumDis19Re.do
