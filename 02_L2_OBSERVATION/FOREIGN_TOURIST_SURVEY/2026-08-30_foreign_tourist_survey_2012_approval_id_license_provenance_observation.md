# 2012 Foreign Tourist Survey — approval-ID and license provenance observation

Date: 2026-08-30
Layer: L2 OBSERVATION
Scope: evidence-supported provenance only; no architecture/ontology/scoring changes

## Verified

1. The current official Tourism Knowledge Information System identifies the Foreign Tourist Survey as a government-approved survey statistic under approval number **314002**.
2. A Statistics Korea-hosted research publication independently lists **외래관광객실태조사 (314002호)**.
3. The same-year 2012 official publication previously registered in L1 prints **31402**. Preserve that five-digit value as a historical published identifier; do not silently rewrite the source text.
4. A republication of the Statistics Korea 2018 change-approval notice identifies the same survey as approval No. **314002**, with original approval date **1980-05-08**. This strongly supports a single-statistic lineage, but the retrieved evidence does not explicitly document the administrative rule by which `31402` became `314002`.
5. The MCST publication page for the 2012 annual report explicitly assigns **KOGL Type 4 (attribution + noncommercial + no derivatives)** to the posted 2012 Foreign Tourist Survey work.

## Evidence consequence

- `314002` is VERIFIED as the current/canonical approval identifier.
- Historical `31402` should remain preserved in source-level provenance as `HISTORICAL_PUBLISHED_ID` rather than treated as a competing current identifier.
- The former `CONFLICTING` state can therefore be narrowed to `PARTIALLY_RESOLVED / HISTORICAL_ID_FORMAT_UNEXPLAINED`: the current identifier itself is no longer uncertain; only the exact administrative formatting/renumbering mechanism remains UNKNOWN.
- KOGL Type 4 is verified for the MCST-posted 2012 report publication. It must **not** be propagated automatically to independently hosted codebooks, user guides, raw microdata, or download packages whose artifact-specific terms were not verified.

## Remaining blocker

To fully close the historical identifier lineage, acquire the original Statistics Korea approval/change record or another Tier-A archival document that explicitly explains whether `31402` is a legacy five-digit code representation, a later six-digit recoding, or a publication truncation. Until then, do not label the historical five-digit value a typo.

## L1 source

`01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2012_APPROVAL_ID_LICENSE_PROVENANCE_EVIDENCE_2026-08-30.csv`
