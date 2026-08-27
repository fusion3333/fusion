# PUBLIC DATA MAXIMUM COMPLETION — Batch B (5–8)
Date: 2026-08-28

## Scope
5) Supply / Platform / Search / VOC public observation layer
6) Public Money Flow + Failure evidence library
7) Knowledge Graph materialization contract
8) Public-data Opportunity dry-run protocol

## 5. Supply / Platform / Search / VOC
Created a canonical observation table at supplier x product x platform x market x language x observed_at. It explicitly separates listing presence, price visibility, inventory visibility, booking, foreign-payment path, rating/reviews, discovery evidence and VOC. Public listing/search/social data are sensors; they are not impressions, CTR, bookings or population prevalence unless a denominator is explicitly published.

Public ceiling remains entity-scale ingestion and platform surface observation. Supplier willingness, actual capacity, private booking share and true conversion remain Ground/Telemetry required.

## 6. Money Flow + Failure
Created a timestamped ledger separating traveler price, platform fee, payment/FX/tax/refund costs, supplier payout and failure/workaround evidence. Current official Airbnb evidence shows experiences typically carry a 20% host service fee deducted from payout; Airbnb also publishes cancellation consequences. These are platform/product/time-specific rules and must not be generalized to all OTAs.

KTO 1330 is retained as an official complaint/support evidence source. Complaint reports are not failed-journey denominators and are not automatically verified violations.

## 7. Knowledge Graph
Materialization is now constrained by canonical node/edge contracts with temporal and provenance keys. Core nodes: TravelerSegment, Supplier, Product, PlatformListing, Friction, MoneyFlow. Core edges include DISCOVERED_VIA, BOOKED_ON, FAILED_AT, PAYS_FEE_TO and LOCATED_AT. Every derived diagnostic must retain a path to source_id/observation_id/confidence.

## 8. Opportunity dry-run
Dry-run gates are fixed: Demand -> Supply -> Gap -> Denominator -> Economics -> Solvability -> Confidence. Public-only output is explainable/Pareto candidates, not an empirical KTOF score. Any claimed rate requires a denominator; otherwise the object remains COUNT_ONLY. Missing economics or causality is surfaced rather than imputed.

## Public-only ceiling
The remaining high-value blockers after Batch A+B are predominantly operational rather than search problems: supplier interviews/capacity/willingness, platform partner dashboards, first-party impression/click/book/pay denominators, negotiated commercial terms, transaction outcomes and pilot labels.

## Decision
PUBLIC_MAX_STRUCTURE_AND_INGESTION_CONTRACTS_LOCKED_BULK_ROWS_PARTIAL

This means the public research architecture, schemas, provenance rules and dry-run gates are closed. It does NOT mean every accessible external row has been downloaded into the repository. Bulk extraction requiring downloads, APIs, platform enumeration or licensing remains an ingestion task and must never be represented as already complete.