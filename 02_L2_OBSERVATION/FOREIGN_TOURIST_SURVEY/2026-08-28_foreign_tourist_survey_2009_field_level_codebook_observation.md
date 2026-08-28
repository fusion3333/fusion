# 2009 Foreign Tourist Survey field-level codebook observation

Date: 2026-08-28
Layer: L2 OBSERVATION
Scope: evidence-supported only

## Observation

The official 2009 Foreign Tourist Survey codebook is sufficiently exposed through the Korea Tourism Data Lab index to move a meaningful subset of the 2009 wave from concept/artifact-only verification to field-level verification without inferring from adjacent years.

Verified raw fields include `chasu` (survey month), `nat` (residence-country grouping), `city` (residence city with a separate official country/city codebook), `sex`, `age`, `dd11` (travel type), `q2` (visit purpose), `q2b` (destination-selection process), `q2b1:q2b3` (alternative countries considered), `q2c1:q2c3` (travel motivations), `q3a1:q3a3` (information sources), `q13a1:q13a3` (shopping items), `q14a1:q14a2` (shopping places), `q17b` and `q17a1:q17a7` (overall and dimensional satisfaction), and `wt` (weight).

The expenditure block is also field-level verified. The codebook states that monetary values are standardized to USD. `mtzq16` is the raw overall expenditure field. For individual travelers, `mzq16a0` is a total that explicitly excludes international air/ship fare, with components `mzq16a1:mzq16a10`. Group-tour expenditure uses a separate total `mzq16b0` and separate components `mzq16b1:mzq16b9`. Therefore, 2009 expenditure totals are not a single mechanically interchangeable basis across travel types.

## Comparability boundary

This extraction does not establish longitudinal equivalence with 2008, 2010, or later waves. Country codes, age bands, shopping categories, purpose categories, expenditure bases, missing-value conventions, conditional universes, and multi-response treatment remain year-specific unless separately crosswalked.

The official survey history records 2009 as an administration/provenance regime change from Korea Tourism Organization to the Korea Culture and Tourism Institute. That administrative change is preserved as provenance but is not treated by itself as proof of a measurement discontinuity.

## Remaining blockers

Respondent-level raw rows are still not ingested. Full binary codebook/questionnaire extraction is still required for exact universe/filter logic, complete missing-code treatment, weight-construction methodology, and any fields not exposed by the indexed codebook text. The current canonical crosswalk file was intentionally not edited in this evidence-agent pass because it was recently modified by the interactive lane; this L1/L2 evidence is ready for a later mechanical crosswalk update.

## Evidence

Primary field source: Korea Tourism Data Lab official 2009 Foreign Tourist Survey codebook (`bcIdx=14088`, `cbIdx=1127`).

Registry corroboration: Tourism Knowledge Information System official codebook registry lists the 2009 codebook and separate country/city codebook; official survey history records the 2009 administration change.
