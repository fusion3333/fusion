# Foreign Tourist Survey regime observation — 2026-08-28

## Evidence-supported observation
Official Korea Tourism Data Lab source pages establish a material survey-regime break for the Foreign Tourist Survey.

- 2020-2022: survey method and content were changed/reduced because inbound foreign visitor volume collapsed during COVID-19.
- 2021: the official page specifies a temporary structured questionnaire for core indicators, with additional questions collected through QR-based follow-up.
- 2023: the official page states that the survey resumed at approximately the pre-COVID 2019 level.
- 2024 and 2025: official raw files and codebooks are again published in SAV/XLSX-based packages.

## Interpretation rule
Do not treat 2020-2022 and 2023+ as a mechanically homogeneous respondent-level panel. Any longitudinal analysis must carry a `survey_method_regime` field and test whether each variable/question wording, response coding, sampling/weighting and collection mode is comparable before pooling.

## Confirmed official raw/codebook availability in this run
- 2021: raw ZIP + PDF codebook
- 2022: SAV + PDF codebook
- 2023: SAV + XLSX + PDF code table
- 2024: raw ZIP containing SAV/XLSX + PDF codebook + XLSX appendix
- 2025: raw ZIP containing SAV/XLSX + XLSX codebook
- 2015: official codebook directly verified; raw attachment availability not re-verified in this run

## Missing/unknown
- Exact 2020 attachment metadata was not independently recovered in this run, although later official pages explicitly identify 2020 as part of the changed 2020-2022 regime.
- 2016-2019 raw-file attachment metadata was not re-verified in this run.
- Variable-level crosswalk across years remains pending and must not be inferred from similar labels alone.

## Sources
- 2021 official raw page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=301765&cateCont=spt05&cbIdx=1127&pageIndex=1&subFlag=Y&tabFlag=N
- 2022 official raw page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=304817&cbIdx=1127&pageIndex=1
- 2023 official raw page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=307451&cateCont=spt05&cbIdx=1127&pageIndex=1
- 2024 official raw page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=309202&cateCont=spt05&cbIdx=1127&pageIndex=1
- 2025 official raw page: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310809&cateCont=spt05&cbIdx=1127&pageIndex=1
- 2015 official codebook: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14094&cbIdx=1127&streFileNm=160719a1-6236-11e8-9868-892a614a29fd.pdf

Confidence: HIGH for the regime break and 2021-2025 attachment availability; UNKNOWN/PARTIAL for years explicitly flagged above.
