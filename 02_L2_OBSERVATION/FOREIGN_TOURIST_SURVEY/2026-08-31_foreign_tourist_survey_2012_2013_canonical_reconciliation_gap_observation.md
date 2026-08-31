# Foreign Tourist Survey 2012–2013 canonical reconciliation gap

## Scope
Repository-maintenance observation only. No new ontology, architecture, harmonization, causal inference, business logic, or cross-year equivalence is introduced.

## Verified state
The canonical authority explicitly requires same-year field materialization and preservation of UNKNOWN where same-year evidence is absent. The current canonical crosswalk still contains a single all-UNKNOWN 2012 placeholder and only generic 2013 month/residence/demographic rows, while newer same-year L1 evidence now verifies additional 2012 and 2013 fields.

### 2012
`FOREIGN_TOURIST_SURVEY_2012_OFFICIAL_CODEBOOK_FIELD_SNIPPET_EVIDENCE_2026-08-31.csv` verifies:
- `q1` travel type: raw variable, wording, category codes 1/2/3 and missing code 9.
- `q2b` recent-3-years visit count: raw variable and explicit three-year reference window. Full 2012 value codes remain UNKNOWN.

### 2013
`FOREIGN_TOURIST_SURVEY_2013_SAME_YEAR_FIELD_AND_METHOD_EVIDENCE_2026-08-31.csv` verifies same-year field evidence for `q1`, `q2b`, `q2c`, `q3a2`, `q5`, `q6`, `q6a1`, `q7`, and `q7a1`. It also verifies wave-level method metadata: 12,030 valid cases; age 15+; 1-day-to-1-year stay eligibility; monthly 2013 fieldwork; self-administered collection; six airport/port survey sites; nationality×entry-route×sex proportional quota sampling; and existence of weighting. Exact weight variable/formula/control totals remain UNKNOWN.

## Repository consequence
This creates a concrete current-state discrepancy: field evidence coverage is ahead of canonical crosswalk materialization for 2012–2013. The discrepancy is registered in `FOREIGN_TOURIST_SURVEY_CANONICAL_CROSSWALK_RECONCILIATION_GAP_2012_2013_2026-08-31.csv` so future canonical maintenance can update those rows mechanically without re-researching or inferring adjacent-year definitions.

The canonical crosswalk itself was not replaced in this run because safe replacement requires preserving the complete existing table; the connector response for the 21KB file is truncated in the current execution environment. A partial-file rewrite would risk deleting unrelated canonical rows and would violate the narrow-maintenance rule.

## Comparability / missingness guards
- 2012 `q2b` codes remain UNKNOWN; do not copy 2011 or 2013 values.
- 2013 `q2b` is explicitly a recent-three-years measure and must not be silently equated with later lifetime/no-time-limit repeat-visit definitions.
- 2013 `q2c` only has the quarter codes exposed by the indexed excerpt; no unseen 2013-quarter code is inferred.
- `q6`/`q6a1` measure pre-trip consideration, not observed substitution behavior.
- q6a2–q6a5 and q7a2/q7a3 are not materialized from q6a1/q7a1 without direct same-year mechanics.
- Universe/skip rules, exact weight variable/formula, attachment reuse licenses, and respondent-row checksums remain UNKNOWN/MISSING where not directly verified.

## Coverage effect
No respondent raw rows were acquired and no longitudinal harmonization status is promoted. The verified change is repository coverage accounting: 2012 has two same-year field mappings available for canonical reconciliation, and 2013 has nine same-year field mappings plus wave-method metadata available for canonical reconciliation. P0 remains `FIELD_EXTRACTION_AND_RAW_ACCESS_PENDING` until the canonical crosswalk is safely reconciled and remaining same-year fields/raw access are completed.
