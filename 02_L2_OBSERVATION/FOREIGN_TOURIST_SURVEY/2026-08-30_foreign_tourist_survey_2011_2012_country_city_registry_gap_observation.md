# 2011–2012 Foreign Tourist Survey — country/city registry-gap observation

Date: 2026-08-30
Canonical dataset: `KORC-FTS-001`
Layer: L2 OBSERVATION
Evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2011_2012_COUNTRY_CITY_REGISTRY_GAP_EVIDENCE_2026-08-30.csv`

## Evidence-supported observations

1. The current official Tourism Knowledge Information System codebook registry contains 29 entries across two pages. On page 2, 2011 and 2012 each have a main annual codebook entry, but neither year has a separately titled country/city codebook entry.

2. This is not a generic registry behavior. The same official sequence explicitly lists a separate `2010년 외래관광객 실태조사 코드북_국가 및 도시` artifact, and the following year with a separately listed country/city artifact is 2013. The current registry therefore exposes a bounded 2011–2012 supporting-artifact listing gap between years where separate country/city artifacts are explicitly visible.

3. The evidence state is `NOT_LISTED_ON_CURRENT_OFFICIAL_REGISTRY`, not `NOT_PUBLISHED`, `DOES_NOT_EXIST`, or `SAME_AS_ADJACENT_YEAR`. A country/city mapping could be embedded in another same-year artifact, could have existed historically but not be surfaced on the current registry, or could have used another documented mapping. None of those possibilities is resolved here.

4. Consequently, exact 2011–2012 raw city-code mappings remain unresolved. No 2010 or 2013 mapping may be borrowed into 2011 or 2012 without same-year evidence.

## Coverage change

The prior state for 2011 and 2012 country/city supporting artifacts was simply `UNKNOWN/unverified`. It is now narrowed to the verified current-registry state `NOT_LISTED_ON_CURRENT_OFFICIAL_REGISTRY`, while the underlying mapping content remains `UNKNOWN`.

## Remaining blockers

- Same-year 2011 and 2012 codebook/user-guide/questionnaire inspection for any embedded country/city mapping or reference to a common external mapping.
- Raw respondent ingestion to identify the actual `city` field coding and observed value domain.
- Historical/archived official registry evidence, if any, establishing whether a separate 2011 or 2012 country/city artifact was once published.
- Attachment-level reuse/license terms for any recovered mapping artifact.

No longitudinal mapping equivalence or harmonization is asserted.