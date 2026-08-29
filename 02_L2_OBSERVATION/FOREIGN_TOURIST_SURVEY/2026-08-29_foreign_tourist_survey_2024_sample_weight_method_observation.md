# 2024 Foreign Tourist Survey — sample / weighting method observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-29
Canonical dataset: KORC-FTS-001
Parent L1: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2024_SAMPLE_WEIGHT_METHOD_EVIDENCE_2026-08-29.csv`

## Verified observations

1. The official Korea Tourism Data Lab metadata reports a realized 2024 Foreign Tourist Survey size of **16,216 respondents**. This is distinct from the planned annual allocation of 16,000.

2. The same-year population definition is age 15+, Korea stay of 90 days or less, with explicit exclusions for foreign residents with Korean nationality, transit-only overnight cases, daigong/bodaeri traders, and captains/crew/military without a tourism purpose.

3. The official 2024 design describes stratified extraction considering nationality, entry route, sex and age. Planned allocation is four-stage: annual-to-month allocation; country allocation using the latest three months of arrival statistics under modified proportional allocation; country-to-airport/port proportional allocation; and country-by-sex-by-age allocation. Country allocation uses square-root proportional allocation with minimum allocations for some low-volume/high-exclusion groups. Sex/age allocation is described for countries averaging at least 10,000 monthly arrivals, subject to exclusion structure.

4. The official 2024 weighting description states that valid samples are post-weighted to inbound proportions by **country × month × sex × age**. This verifies the weighting dimensions and post-weighting concept, but not the raw weight field name or exact formula.

5. Official 2024 survey locations are Incheon T1/T2, Gimpo, Gimhae, Jeju, Daegu and Cheongju airports, plus Busan, Incheon, Pyeongtaek and Gunsan ports. Site-level realized samples remain unknown.

6. The published country-group frame contains 20 named groups plus Other. The exact raw codes and the constituent-country mapping of Middle East and Other remain unknown.

7. Official terminology defines total expenditure as total consumption spending made by or for the visitor over the Korea trip, and daily average expenditure as total expenditure divided by total stay duration. Currency conversion, respondent-level component inclusion, the ordering of the 2023+ upper/lower 1% replacement rule, and denominator edge cases remain unresolved.

## Comparability restraint

The official metadata says 2023 and 2024 returned survey method/content to the pre-COVID 2019 level, while 2020–2022 used no sample allocation and reduced questions. Treat this as a regime-level statement only. It does **not** prove identical raw variables, codes, wording, weights, survey locations or transformations across 2019/2023/2024.

## Remaining blocker

The P0 gate still requires direct extraction from the 2024 main PDF codebook and the separate country/visit-location XLSX: raw variable names, exact codes/labels, question wording, per-variable universe/skip rules, missing codes, raw weight field/formula, country/location mappings, expenditure component fields and transformations. Respondent raw rows remain not ingested.
