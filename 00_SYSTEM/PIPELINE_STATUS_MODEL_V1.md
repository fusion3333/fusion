# Pipeline Status Model V1

Status: CANONICAL GOVERNANCE CONTRACT
Date: 2026-08-28

## Problem resolved
Older backlog/status files mixed source discovery, bulk ingestion, harmonization, graph construction and engine readiness in one status field. Those states answer different questions and must never be treated as one completion percentage.

## Required independent status dimensions

### 1. SOURCE_DISCOVERY_STATUS
Allowed examples: NOT_STARTED, IN_PROGRESS, VERIFIED_PARTIAL, PUBLIC_SOURCE_MAXIMUM_COMPLETE, ACCESS_CONSTRAINED, COMMERCIAL_RESTRICTED.
Question: Have the relevant source families and official/public acquisition routes been defensibly identified?

### 2. BULK_INGESTION_STATUS
Allowed examples: NOT_STARTED, MANIFEST_ONLY, PARTIAL_ROWS, BULK_PENDING, BULK_COMPLETE, ACCESS_CONSTRAINED.
Question: Are actual source rows/files physically acquired and represented in the project data layer?

### 3. HARMONIZATION_STATUS
Allowed examples: NOT_STARTED, SCHEMA_DEFINED, CROSSWALK_PENDING, PARTIAL, REGIME_REVIEW_REQUIRED, COMPLETE_FOR_DEFINED_SCOPE.
Question: Are variables/units/codes/universes/regimes crosswalked into canonical measures?

### 4. GRAPH_POPULATION_STATUS
Allowed examples: SCHEMA_NOT_DEFINED, SCHEMA_LOCKED, PARTIAL_ROWS_POPULATED, ROWS_POPULATED, JOIN_VALIDATED.
Question: Do actual graph node/edge rows exist and have joins been validated?

### 5. ENGINE_READINESS_STATUS
Allowed examples: NOT_READY, DIAGNOSTIC_ONLY, PARTIAL, READY_FOR_DEFINED_DIAGNOSTIC, GROUND_REQUIRED, N_REQUIRED, CAUSAL_VALIDATION_REQUIRED, EMPIRICALLY_VALIDATED.
Question: Can the evidence support the intended diagnostic/decision without prohibited inference?

## Additional status dimensions where needed
- COMPARABILITY_STATUS
- MISSINGNESS_STATUS
- ACCESS_STATUS
- LICENSE_STATUS
- CAUSAL_VALIDATION_STATUS
- BUSINESS_READINESS_STATUS

## Migration rule
Existing files such as `PUBLIC_DATA_INGESTION_BACKLOG_V1.csv`, `LOW_COVERAGE_COMPLETION_QUEUE_V2.csv`, axis completion files and completion reports remain evidence of historical/project progress, but their single status/coverage field must not be interpreted as the canonical current state. New work must use the independent dimensions above.

## Percentage rule
A decimal/percentage without an explicit denominator, formula, generated_at and included scope is `EXPERT_PROGRESS_ESTIMATE / NOT_EMPIRICAL`. It may guide planning but must not be reported as statistical measurement precision.
