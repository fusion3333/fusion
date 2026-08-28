# Graph Materialization Semantics V1

Status: CANONICAL GOVERNANCE CONTRACT
Date: 2026-08-28

The word `materialized` must not be used alone to imply that a graph contains actual data.

## Canonical states
1. `GRAPH_SCHEMA_DEFINED` — node/edge concepts documented.
2. `GRAPH_SCHEMA_LOCKED` — required keys, evidence metadata, edge semantics and prohibitions fixed for a defined scope.
3. `GRAPH_ROWS_PARTIAL` — some actual node/edge rows exist.
4. `GRAPH_ROWS_POPULATED` — actual node/edge rows exist for the declared scope.
5. `GRAPH_JOIN_VALIDATED` — joins were tested against real data and identifier/comparability constraints passed.
6. `GRAPH_DIAGNOSTIC_VALIDATED` — intended diagnostic computed without prohibited inference.

## Current interpretation rule
Existing Markdown graph documents describing nodes, edges, funnels or state machines are graph contracts/schemas unless they explicitly point to populated row artifacts. Statements such as 'graph is materialized' in older completion reports must therefore be interpreted as `GRAPH_SCHEMA_LOCKED` unless physical row artifacts and validated joins are cited.

## Opportunity rule
An Opportunity Graph schema is not evidence that an opportunity exists. A candidate must be linked to observed evidence, denominator, sellability/economic constraints, intervention feasibility and uncertainty before business interpretation.
