# 2015 Foreign Tourist Survey definition-break observation

## Evidence

Authoritative Korea Tourism Data Lab codebook for the 2015 Foreign Tourist Survey verifies respondent-level schema elements including survey month (1-12), residence country, demographics, weight, repeat-visit status/count, pre/post Korea multi-country visit, travel-decision timing, alternative-country consideration, visited regions, stay length, shopping items and daily-average expenditure raw variables.

Official KTO publication `숫자로 보는 한국관광 2019` explicitly states that the repeat-visit question was measured as visits during the most recent three years through 2014, while from 2015 onward respondents were asked without that time restriction. The publication reports annual repeat-visit distributions for 2014-2018 and flags this definition change in its note.

## Supported observation

The 2014→2015 boundary is a verified measurement-regime break for longitudinal repeat-visit analysis. A series that directly concatenates the pre-2015 'recent 3 years' visit-count variable with the 2015+ unrestricted lifetime-like count would mix different denominators/time windows.

## Repository handling

- Preserve the original year-specific repeat-visit variable and wording.
- Flag 2014→2015 as `DEFINITION_BREAK_REPEAT_VISIT_WINDOW`.
- Do not mechanically compute longitudinal level changes across this boundary without a compatible recode supported by the original questionnaires/raw data.
- 2016 official codebook/raw attachment remains `UNKNOWN` in this run; adjacent-year continuity must not be inferred.

## Sources

1. Korea Tourism Data Lab, `2015년 외래관광객 실태조사 코드북`, official PDF download: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=14094&cbIdx=1127&streFileNm=160719a1-6236-11e8-9868-892a614a29fd.pdf
2. Korea Tourism Organization, `숫자로 보는 한국관광 2019`, official PDF. The repeat-visit table note states: through 2014 the question referred to visits in the most recent three years; from 2015 it was asked without a period restriction.

## Confidence

HIGH for the existence and content of the 2015 codebook and for the 2014→2015 repeat-visit definition break. UNKNOWN for 2016 raw/codebook availability until an authoritative artifact is directly verified.