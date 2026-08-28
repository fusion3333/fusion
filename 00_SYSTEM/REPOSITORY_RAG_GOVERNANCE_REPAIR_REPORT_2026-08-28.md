# Repository RAG Governance Repair Report — 2026-08-28

Status: GOVERNANCE CLOSEOUT COMPLETE
Project: Korea Inbound Tourism Opportunity Intelligence Engine

## Scope
Repository-wide audit focused on duplicated authority, semantic drift, identifier collision, stale status, project-scope contamination, false precision, graph overstatement, L2 namespace split and Foreign Tourist Survey authority fragmentation.

## Completed repairs

### 1. Canonical current-state authority router
`00_SYSTEM/CANONICAL_CURRENT_STATE_INDEX_V1.md` is MASTER / ALWAYS-REFERENCE and defines repository authority precedence.

### 2. Core document status registry
`00_SYSTEM/CANONICAL_DOCUMENT_STATUS_REGISTRY_V1.csv` classifies core artifacts as CANONICAL / ACTIVE / HISTORICAL / SUPERSEDED / ARCHIVE.

### 3. Source routing upgraded to O/E/S/R/G/N
`00_SYSTEM/SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V2.md` is canonical.
Fixed meanings: O Official; E Enterprise operational data; S Social/user-generated expression; R Research; G project-created field evidence; N system-native behavior/transaction telemetry.
The current project frame is 25 base axes + 8 cross-layers.

### 4. Dataset identifier collision contained
`00_SYSTEM/CANONICAL_DATASET_ID_REGISTRY_V1.csv` resolves legacy KOR-* collisions through canonical IDs and legacy aliases. Never join on colliding legacy IDs alone.

### 5. Legacy `.k전통플랫폼` authority contained
The subtree README is explicitly `HISTORICAL / PROTOTYPE` with `DO NOT USE AS CURRENT STATE WITHOUT CANONICAL CROSSCHECK`.
The subtree is ARCHIVE for current-state purposes.

### 6. Historical KTOF formula superseded
`.k전통플랫폼/00_SYSTEM/KTOF_OPPORTUNITY_ENGINE_V1.md` now directly carries a HISTORICAL / SUPERSEDED warning.
Current KTOF authority is `00_SYSTEM/KTOF_AND_OPPORTUNITY_INTELLIGENCE_MODEL_V1.md`.
`KTOF^(0)` is the current hypothesis/measurement model; `KTOF^(*)` is the future empirically estimated formula. Early equal-weight/fixed multiplicative forms are not validated production scoring formulas.

### 7. Workstream final status unified
`00_SYSTEM/WORKSTREAM_CURRENT_STATUS_REGISTRY_V1.csv` is the single current final-status authority for workstreams 01–08.
Workstream 04 current status is `PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_NUMERIC_JOIN_CONSTRAINTS`; earlier `...WITH_ACCESS_CONSTRAINTS` wording is superseded for final-state reporting.

### 8. Pipeline completion dimensions separated
`00_SYSTEM/PUBLIC_DATA_INGESTION_BACKLOG_V2.csv` is the active backlog and separates:
- SOURCE_DISCOVERY_STATUS
- BULK_INGESTION_STATUS
- HARMONIZATION_STATUS
- GRAPH_POPULATION_STATUS
- ENGINE_READINESS_STATUS

V1 is SUPERSEDED for current-state use.

### 9. Completion scores relabeled
`AXIS_COMPLETION_STATUS_V1.csv` and `CROSS_LAYER_COMPLETION_STATUS_V1.csv` retain the historical planning estimates but now explicitly label the numeric readiness columns `EXPERT_ESTIMATE_NOT_EMPIRICAL`.
They are not measured statistical precision.

### 10. Graph terminology repaired
`00_SYSTEM/GRAPH_MATERIALIZATION_SEMANTICS_V1.md` separates schema lock, row population and join validation.
Canonical terms include GRAPH_SCHEMA_LOCKED, GRAPH_ROWS_POPULATED and GRAPH_JOIN_VALIDATED. 'Materialized' alone cannot imply all three.

### 11. L2 namespace physically unified
Root canonical L2 namespace is now only `02_L2_OBSERVATION/`.
The former root `02_L2_OBSERVATIONS/` split namespace was physically migrated and removed.
Foreign Tourist Survey observations were moved under `02_L2_OBSERVATION/FOREIGN_TOURIST_SURVEY/`; FX/air-seat observations under WHEN; card observations under CARD_PAYMENT; WHY observation into the canonical L2 namespace.
No new root files may be written to `02_L2_OBSERVATIONS/`.

### 12. Foreign Tourist Survey authority consolidated
Created `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_CANONICAL_MANIFEST_2007_2025_V1.csv` as the single current wave-level artifact/access/regime view.
`FOREIGN_TOURIST_SURVEY_CANONICAL_AUTHORITY_INDEX_2026-08-28.md` routes through that manifest first, with dated manifests preserved for provenance.
Current state remains `OFFICIAL_RAW_CODEBOOK_MANIFEST_AND_REGIME_VERIFIED_VARIABLE_CROSSWALK_PENDING`; respondent rows are not claimed ingested.

### 13. Safety-alert project separated
Korea-tour PR #1 and #2 are closed without merge and marked not planned in this repository.
The canonical safety-alert repository is `fusion3333/safe-alam`.
That repository contains the actual Expo app structure (`app/`, `src/`, `server/`, `scripts/`, `docs/`, `.github/`, `eas.json`, package/config files) and remains the sole active home for that project.
No safety-alert code/PR state should be treated as Korea-tour evidence or backlog.

## Intentionally preserved history
Historical source research, early hypotheses, early scorecards, old queues and `.k전통플랫폼/**` are preserved for genealogy/provenance. They are not current authority.

`ENGINE_END_TO_END_MASTER_V1.md` retains its legacy filename for reference stability even though its internal architecture is newer. The Current State Index resolves this explicitly; renaming is not required for semantic correctness and is intentionally deferred to avoid breaking references.

## Governance result
The requested governance sequence is complete:
Canonical authority → dataset identity → O/E/S/R/G/N routing → legacy containment → KTOF supersession → workstream status → L2 unification → Survey canonical manifest → split backlog statuses → estimate labeling → graph terminology → safety repository separation.

The repository can now proceed to substantive evidence/data work without relying on stale 18-axis/OESR-only/equal-weight-KTOF/single-status assumptions.

## Next execution order
`Foreign Tourist Survey variable crosswalk → Sellability → Ground Economics → WTP → Lost Demand → Native Transaction → Intervention Outcome → Business Case → empirical KTOF learning`
