# SPEND Completion Gate V1
Date: 2026-08-28
Decision: PUBLIC_SOURCE_DISCOVERY_LOCKED_TRANSACTION_CUBE_HARMONIZATION_PARTIAL

## Gate assessment
Public Evidence Readiness: 0.88
Engine-ready: 0.66

## Why source discovery can lock
We have verified public/enterprise source families for: total/self-reported expenditure, foreign-card spend, region, industry, origin-country distributions, medical sector spend/counts, and finer enterprise merchant/admin-dong resolution. Additional generic web searching has diminishing returns.

## What remains before engine-ready improves materially
1. Ingest/harmonize 10+ years of Foreign Tourist Survey expenditure variables and codebooks.
2. Bulk ingest monthly foreigner card `origin × region × industry` data with exact metadata and exclusions.
3. Calibrate card observations against survey total expenditure; preserve cash/wallet/uncovered-network residual as UNKNOWN until validated.
4. Separate online prepayment geography from actual service-consumption geography.
5. Obtain unique traveler/card denominators where legally and methodologically available.
6. Link spend to actual activity completion, nights and supplier/product IDs.
7. Add refund, cancellation, chargeback and net settlement from N telemetry.
8. Connect supplier payout/cost/margin/local retention in MONEY_FLOW.

## Reopen triggers
- material new official/enterprise dataset with new denominator or finer national coverage;
- raw survey/card ingestion exposes definition conflict;
- Ground/N telemetry provides actual product-level spend or leakage;
- MONEY_FLOW requires a SPEND definition change.

## Next sequential axis
PAIN_VOC