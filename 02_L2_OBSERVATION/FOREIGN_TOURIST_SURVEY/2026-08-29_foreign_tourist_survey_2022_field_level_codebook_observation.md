# 2022 Foreign Tourist Survey — field-level codebook observation

Status: EVIDENCE-SUPPORTED L2 OBSERVATION
Date: 2026-08-29
Dataset: KORC-FTS-001

## Verified same-year evidence

The official 2022 codebook exposes directly usable field-level evidence for time, spend, satisfaction and post-trip intent. Verified raw fields include `D_MON`, `D_BUN`, `C총액1인MIS`, `DAYall평균`, `DAY평균`, `RDAY평균`, `Q7`, `Q8`, and `Q9`.

`D_MON` codes months 1–12 and `D_BUN` codes quarters 1–4. Their existence verifies recorded monthly/quarterly fields, but does not by itself prove that every questionnaire item has a statistically valid monthly estimator.

## Spend processing rule

The codebook distinguishes raw and transformed daily-spend fields. `DAYall평균` is the raw 1-person total-spend-derived daily field. `DAY평균` explicitly excludes stays of 61 days or longer and cases above the maximum expenditure amount. `RDAY평균` is the categorized version of that analytical field, with categories <=US$50, >50–100, >100–300, >300–500, and >500.

`C총액1인MIS` categorizes total per-person expenditure and explicitly carries `98=maximum-amount exceed case`. The official 2022 report further states that amounts above US$10,000 are excluded when calculating average per-person and item-level expenditure.

This 61-day exclusion is an analysis transformation. It must not be reinterpreted as proof that the survey respondent-eligibility stay criterion was <=60 days.

## Satisfaction and post-trip intent

`Q7` is overall Korea-trip satisfaction on a 5-point scale from very dissatisfied to very satisfied. `Q8` is intention to revisit Korea for tourism within the next three years, also on a 5-point agreement scale. `Q9` is intention to recommend to others on the same 5-point agreement scale.

This directly verifies the 2022 presence and wording of recommendation intention, rather than inferring it from 2021 or later waves.

## Report artifact correction

The official report registry lists `2022년 외래관광객조사 보고서` as a PDF registered on 2023-05-31. The canonical manifest previously marked the 2022 report as `UNKNOWN`; that field can therefore be mechanically promoted to `VERIFIED_AVAILABLE`.

## Regime boundary

2022 remains inside the 2020–2022 COVID-modified survey regime. Existing official guidance states that this regime did not use the normal pre-COVID sample-design/weighting process. No pre-2019 or 2023+ weight variable, sample design, missing-code scheme, or universe definition is copied into 2022.

## Remaining UNKNOWN / MISSING

The following remain unresolved and must not be inferred from adjacent years: complete raw-variable inventory; exact respondent universe and stay-eligibility criterion; residence-country and geography code frames; all per-variable skip/filter conditions; missing codes outside the explicitly observed maximum-spend code; exact construction formula and denominator for `DAYall평균`/`DAY평균`; FX conversion rules; detailed expenditure component inclusion/exclusion; questionnaire artifact status; country/city auxiliary codebook; respondent-row ingestion.

## Sources

- Official 2022 codebook PDF distributed through Korea Tourism Data Lab.
- Tourism Knowledge Information System official codebook registry, which lists the 2022 codebook PDF registered 2023-06-26.
- Tourism Knowledge Information System official report registry, which lists the 2022 report PDF registered 2023-05-31.
- Official 2022 report text for maximum-expenditure and 61+ day analytical exclusion rules.

No longitudinal harmonization or opportunity/business inference is made in this observation.
