# 2024 Foreign Tourist Survey — verified sample, weighting, definition and regime observations

Date: 2026-08-30  
Canonical dataset: `KORC-FTS-001`  
Layer: L2 OBSERVATION  
Scope: evidence-supported only; no harmonization or architecture changes

## Verified observations

1. The official Korea Tourism Data Lab metadata reports a **realized 2024 sample of 16,216 respondents**. The design target is separately described as **16,000**, initially allocated equally over 12 months at 1,333 per month. Target and realized sample must not be conflated.

2. The 2024 eligible survey population is defined as foreign tourists aged **15 or older** who leave Korea after a stay of **90 days or less**. Exclusions include foreign persons with Korean nationality, travelers who only stay overnight in Korea for transit without domestic tourism, `따이공` traders, and pilots/crew/military personnel whose visit is not for tourism.

3. The official 2024 sample-allocation description is a four-stage process:
   - total target sample to months;
   - country allocation using the latest published three-month arrival statistics and modified proportional allocation, including square-root proportional allocation with minimum-allocation treatment for some groups;
   - country sample to airport/port survey site using latest three-month arrival proportions;
   - country sample to sex/age using latest three-month arrival proportions, with sex/age allocation generally applied to countries averaging at least 10,000 monthly arrivals and final adjustment for exclusion scale.

4. The official weight description states that valid cases obtained under the modified proportional allocation are **post-weighted by country × month × sex × age arrival proportions**. This verifies the weighting dimensions but does **not** verify the raw weight variable name, exact formula, trimming, calibration or nonresponse adjustment mechanics.

5. Same-year official metadata defines core concepts used by the survey:
   - `방한 목적`: the decisive purpose of the Korea visit, with leisure/recreation/holiday, visiting friends or relatives, business/professional activity, and education explicitly identified;
   - travel type: Individual/FIT, Package, and Air-tel/Semi-package are operationally defined;
   - `지출 경비`: total consumption expenditure made by or for the visitor over the Korea trip;
   - `1일 평균 지출 경비`: total visitor expenditure divided by total stay period.

6. The official comparability caution says some questions cannot be compared as a time series because question wording or answer options changed. It also states that **2023 and 2024 returned survey method/content to the pre-COVID (2019) level**, whereas 2020–2022 were conducted without sample allocation and with reduced questionnaire content. This is a regime-level statement only; it does not prove field-by-field identity with 2019 or 2023.

7. The official raw-data publication page dated 2025-06-10 lists three same-year artifacts: `2024년_외래관광객조사_원자료.zip`, `2024_외래관광객조사_코드북.pdf`, and `2024_외래관광객조사_코드북_별첨.xlsx`, and states that raw data are provided as SAV and Excel. The publication page is marked **KOGL Type 4**. Package bytes were not ingested in this run.

## Coverage change

The canonical crosswalk previously had only one 2024 row with `FIELD_EXTRACTION_REQUIRED`. This run adds same-year evidence for population/universe, realized sample, survey sites, allocation dimensions, weighting dimensions, travel-type definitions, expenditure definitions, and regime-comparability warnings. Raw-variable extraction remains incomplete.

## Explicit UNKNOWN / blockers

- raw variable names and exact response codes
- exact questionnaire wording and universe/skip logic at item level
- raw missing-value codes
- exact weight variable and formula; calibration/trimming/nonresponse details
- exact modified-proportional allocation formula and all minimum-allocation constants
- expenditure currency-conversion timing, international-transport inclusion variants, outlier/missing treatment, component aggregation, denominator edge cases
- respondent-row count/checksum validation against the downloadable SAV/XLSX
- exact field-level 2019↔2023↔2024 equivalence

These must remain `UNKNOWN`, `PARTIAL`, or `NOT_INGESTED` until the same-year PDF/XLSX/SAV contents are directly acquired and inspected.

## Sources

- Korea Tourism Data Lab, official `외래관광객조사` data-description metadata, 2024 basis: `https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do`
- Korea Tourism Data Lab, `2024년 외래관광객조사 원자료[한국문화관광연구원]`, posted 2025-06-10: `https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=309202&cbIdx=1127`

No canonical master, ontology, source-routing, psychology, KTOF, competitor, business or opportunity-scoring files were modified.
