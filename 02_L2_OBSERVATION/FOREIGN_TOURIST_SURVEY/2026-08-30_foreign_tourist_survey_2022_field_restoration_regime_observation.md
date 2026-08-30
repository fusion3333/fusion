# 2022 Foreign Tourist Survey — field restoration inside the COVID modified regime

Date: 2026-08-30
Layer: L2 OBSERVATION
Evidence basis: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2022_FIELD_RESTORATION_REGIME_EVIDENCE_2026-08-30.csv`

## Evidence-supported observation

The official Foreign Tourist Survey history states that the 2022 wave continued the 2020 methodology regime: a reduced questionnaire administered without a sample design. However, the same official history separately records four additions for 2022: **travel type, stay duration by province/city, main accommodation used, and satisfied activities**.

Therefore the 2020–2022 period is one broad COVID-modified methodology regime, but it must **not** be represented as a field-identical questionnaire block. 2022 contains documented field restoration/addition inside that regime.

The official history also places the next methodology boundary at 2023, when survey method and content returned to the pre-COVID 2019 level as inbound flows stabilized. That statement establishes a regime boundary only; it does not prove exact field identity between 2019 and 2023.

## Harmonization consequence

For 2022, presence of the four added field families is VERIFIED at the official-history level. Exact raw variable names, wording, response codes, geography coding, single/multiple-response structure, universe/skip rules, item missing codes, and respondent-level denominators remain UNKNOWN unless separately established from the 2022 same-year codebook/questionnaire/raw data.

In particular:
- `satisfied activities` must not be silently equated with `activities participated in` or generic item satisfaction;
- `province/city stay duration` must not be harmonized to older regional-stay variables without same-year unit/geography coding;
- `main accommodation used` needs its same-year category list and response structure;
- `travel type` needs its same-year codes before cross-wave mapping.

## Status

- Methodology regime: `COVID_2020_2022_MODIFIED_REGIME` — VERIFIED.
- 2022 field restoration/addition: VERIFIED for the four named field families.
- Field-level crosswalk for those families: `PENDING_SAME_YEAR_EXTRACTION`.
- Respondent raw rows: `NOT_INGESTED`.
- Cross-year equivalence: `NOT_VERIFIED`.

No master architecture, ontology, source-routing rule, KTOF logic, opportunity logic, or canonical crosswalk was modified.