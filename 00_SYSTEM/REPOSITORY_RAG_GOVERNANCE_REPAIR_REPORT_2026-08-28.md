# Repository RAG Governance Repair Report — 2026-08-28

Status: REPAIR PASS COMPLETE / PHYSICAL MIGRATIONS SEPARATELY TRACKED
Project: Korea Inbound Tourism Opportunity Intelligence Engine

## Scope
Repository-wide audit focused on duplicated authority, semantic drift, identifier collision, stale status, project-scope contamination, false precision, graph overstatement and Foreign Tourist Survey authority fragmentation.

## Repairs completed

### 1. Canonical current-state authority router
Created `00_SYSTEM/CANONICAL_CURRENT_STATE_INDEX_V1.md` as MASTER / ALWAYS-REFERENCE. It defines precedence among canonical, active, historical and superseded artifacts and fixes current project semantics.

### 2. Source routing upgraded to O/E/S/R/G/N
Created `00_SYSTEM/SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V2.md` and promoted it over legacy V1 for current work.

Fixed meanings:
O Official; E Enterprise operational data; S Social/user-generated expression; R Research; G project-created field evidence; N system-native behavior/transaction telemetry.

### 3. Dataset identifier collision contained
Created `00_SYSTEM/CANONICAL_DATASET_ID_REGISTRY_V1.csv`.
The legacy `KOR-002` through `KOR-009` identifiers had conflicting meanings between `KOREA_OFFICIAL_RAW_BACKBONE_V1.csv` and `KOREA_OFFICIAL_SOURCE_COVERAGE_MATRIX_V2.csv`. New `KORC-*` canonical IDs resolve identity while preserving legacy aliases for provenance. Rule: never join on colliding legacy IDs alone.

### 4. Workstream status conflict resolved
Created `00_SYSTEM/WORKSTREAM_CURRENT_STATUS_REGISTRY_V1.csv`.
Workstream 04 current status is fixed as `PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_NUMERIC_JOIN_CONSTRAINTS`; older `...WITH_ACCESS_CONSTRAINTS` final wording is superseded for current-state reporting.

### 5. Completion dimensions separated
Created `00_SYSTEM/PIPELINE_STATUS_MODEL_V1.md` with independent SOURCE_DISCOVERY, BULK_INGESTION, HARMONIZATION, GRAPH_POPULATION and ENGINE_READINESS dimensions. Older single-status backlog files are historical planning evidence, not canonical current state.

### 6. Graph terminology repaired
Created `00_SYSTEM/GRAPH_MATERIALIZATION_SEMANTICS_V1.md` separating schema defined/locked, rows populated, joins validated and diagnostics validated. Older 'graph materialized' wording must not imply actual populated graph data without row artifacts.

### 7. Foreign Tourist Survey authority consolidated
Created `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_CANONICAL_AUTHORITY_INDEX_2026-08-28.md`.
Newer dated official manifests override stale UNKNOWN entries. Current state remains `OFFICIAL_RAW_CODEBOOK_MANIFEST_AND_REGIME_VERIFIED_VARIABLE_CROSSWALK_PENDING`; respondent rows are not claimed ingested.

### 8. Safety-alert project contamination removed from active PR state
Closed korea-tour PR #1 and PR #2 without merge and marked them as project-scope contamination. The safety-alert project belongs in the separate safe-alam repository and must not be used as tourism-engine evidence.

### 9. Root README repaired
README now routes RAG through the canonical current-state index, defines O/E/S/R/G/N correctly, distinguishes legacy namespaces, clarifies completion semantics and prevents graph/schema and public-source completion overclaims.

## Problems intentionally preserved as history rather than deleted

### Legacy `.k전통플랫폼`
Preserved because it contains valuable project genealogy, early hypotheses and source research. It is now explicitly subordinate to the current-state index. Deleting it would destroy provenance.

### Historical KTOF formula
Preserved as historical hypothesis. Current authority is `KTOF_AND_OPPORTUNITY_INTELLIGENCE_MODEL_V1.md`; equal-weight/fixed multiplicative early forms are not empirical production KTOF.

### Old completion percentages
Preserved as historical expert progress estimates. Without explicit denominator/formula they are `NOT_EMPIRICAL` and cannot be reported as measured precision.

### Old backlog/low-coverage queues
Preserved as historical operational snapshots. They do not override current workstream status registry or pipeline status model.

## Remaining physical migrations — not semantic blockers

1. Move existing files from legacy split `02_L2_OBSERVATIONS/` into canonical `02_L2_OBSERVATION/` with history-safe create/delete operations and link/path updates. Until then retrieval must search both; no new files should be added to plural namespace.
2. Rename `ENGINE_END_TO_END_MASTER_V1.md` to match its internal V2 title after all references are enumerated and updated atomically. Current-state index explicitly resolves the mismatch in the meantime.
3. Optionally add explicit historical headers inside every `.k전통플랫폼` file. Current root authority router already prevents them from overriding canonical state, so mass-editing historical evidence is not required for semantic correctness.
4. Migrate legacy CSVs to include `canonical_dataset_id` physically. Until migrated, joins must use `CANONICAL_DATASET_ID_REGISTRY_V1.csv` rather than legacy `KOR-*` alone.
5. Regenerate future backlog/queue versions using the five independent pipeline status dimensions instead of mutating old snapshots.

## Audit conclusion
The project architecture itself was not materially corrupted. The main defect was authority/governance drift caused by rapid evolution: multiple generations of valid-at-the-time documents remained simultaneously retrievable as if equally current. This repair pass establishes a single current-state routing layer and contains the highest-risk semantic/data-integrity conflicts.

The next substantive research/data phase can now proceed without first relying on stale 18-axis/OESR-only/equal-weight-KTOF assumptions.

Recommended next execution order:
`Foreign Tourist Survey variable crosswalk → actual sellability row observations → Ground supplier economics/WTP → lost-demand/native telemetry → intervention outcomes → business case / empirical KTOF learning`.
