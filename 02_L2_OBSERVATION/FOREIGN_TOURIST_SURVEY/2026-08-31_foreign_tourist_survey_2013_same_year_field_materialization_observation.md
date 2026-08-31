# 2013 Foreign Tourist Survey — same-year field materialization observation

Date: 2026-08-31
Dataset: KORC-FTS-001
Scope: evidence-supported L2 observation only

## Verified new coverage
The 2013 Foreign Tourist Survey same-year official KTO codebook is indexed at the Korea Tourism Data Lab download endpoint and exposes field-level content sufficient to materialize a first high-confidence subset without borrowing any adjacent-year schema.

Verified same-year raw fields include:
- `q1` travel form: individual / group / Air-tel Tour / nonresponse.
- `q2b` recent Korea visit count with an explicit **recent 3 years** reference window; `w q2b` is visible as a raw companion field.
- `q2c` most recent Korea visit timing by year-quarter, with visible codes spanning 2009Q1 through 2012Q4 and nonresponse. No unseen 2013 quarter codes were inferred.
- `q3a2` Korea stay length, with categories 1–10 days, 11–60 days, 61+ days and nonresponse; raw companion fields `m q3a2` and `m m q3a2` are visible.
- `q5` Korea-trip decision timing, including a raw-month companion `m q5`.
- `q6` whether Korea was the initial destination or selected after comparison with another country.
- `q6a1` first competing destination considered, with same-year country codes directly exposed.
- `q7` visit purpose.
- `q7a1` first-ranked trip motivation; second- and third-ranked fields `q7a2/q7a3` are visible but their response mechanics are not independently extracted here.

## Methodology boundary
KOSSDA's detailed metadata for `A1-2013-0101` identifies the producer as Korea Culture & Tourism Institute, collection period `2013-01 ~ 2013-12`, geography as Incheon/Gimpo/Gimhae/Jeju international airports plus Incheon/Busan international ports, universe as foreign travelers age 15+ staying 1 day to 1 year, self-administered mode, and nationality × entry-route × sex proportional quota sampling. Valid cases are 12,030. The page states that weighting exists but does not expose the exact weight variable, formula, population controls, normalization, trimming or cell treatment.

KOSSDA also lists same-wave questionnaire, coding-guide and user-guide PDFs. Its copyright field names MCST and KCTI, but this is not treated as an attachment-level reuse license.

## Comparability constraint
The 3-year visit-count reference window and all category/code mappings above are preserved as 2013-specific facts. No longitudinal equivalence or adjacent-year substitution is asserted. The KTO PDF direct-open route currently returns `application/octet-stream`, so this run relies on the official KTO search-index extraction for the visible codebook rows and marks non-visible universe/skip/weight details UNKNOWN.

## Remaining direct blockers
- exact universe/skip mechanics for the extracted questions
- exact respondent weight variable and formula/control cells
- raw numeric domains for `w q2b`, `m q3a2`, `m m q3a2`, `m q5`
- complete 2013 codebook field extraction beyond the materialized subset
- respondent raw-byte ingestion, row count and checksum
- monthly/site-level realized sample counts
- attachment-level reuse/license terms

No architecture, ontology, source-routing, psychology, origin-market, competitor/meta-intelligence, KTOF, business-strategy or opportunity-scoring files were modified.
