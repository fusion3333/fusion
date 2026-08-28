# Workstream 08 — Money Flow Completion Report — 2026-08-28

## Final decision
PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_REALIZED_UNIT_ECONOMICS_LIMITS

## What is complete
1. MONEY_FLOW is separated from SPEND and CARD_PAYMENT.
2. The full transaction/value waterfall is defined from traveler gross payment to supplier payout, operating economics and local retained value.
3. Actor, geography, currency, date and money-edge schemas are defined.
4. Official Korean foreign-tourist expenditure/card-spend evidence is linked to the payment layer.
5. Platform/payment fee disclosures are treated as source-specific commercial primitives, not universal rates.
6. Korean foreign-tourist VAT/internal-tax refund primary legal and Customs rules are verified, including the 2024 threshold regime break and 2026 cruise-tourist operational expansion.
7. Refund/chargeback are modeled as reverse flows.
8. Local-retention and supplier-margin diagnostics require observed denominators; no placeholder national values are allowed.
9. Coverage/gap matrix explicitly routes unavailable realized economics to commercial access, Ground accounting or Native telemetry.

## Existing evidence retained
- MONEY_FLOW_EVIDENCE_BATCH_H_2026-08-27.md
- MONEY_FLOW_EVIDENCE_COMPLETION_2026-08-28.md
- MONEY_FLOW_OFFICIAL_CARD_SPEND_EVIDENCE_2026-08-28.md
- MONEY_FLOW_OFFICIAL_CARD_SPEND_SOURCE_MANIFEST_2026-08-28.csv
- MONEY_FLOW_TAX_REFUND_PRIMARY_RULES_EVIDENCE_2026-08-28.md
- MONEY_FLOW_TAX_REFUND_PRIMARY_RULES_SOURCE_MANIFEST_2026-08-28.csv
- MONEY_FLOW_OBSERVATIONS_V1.md
- MONEY_FLOW_TAX_REFUND_REGIME_BREAK_OBSERVATION_2026-08-28.md
- MONEY_FLOW_GRAPH_V1.md
- PUBLIC_MONEY_FLOW_FAILURE_LEDGER_V1.csv

## Final measurement discipline
TravelerPaid != SupplierPayout != SupplierProfit != LocalRetainedValue.
CardObservedSpend != TotalTourismSpend.
GrossBookingValue != PlatformRevenue.
PublishedFee != RealizedFee unless contract/transaction evidence confirms it.
TaxRefundEligibility != TaxRefundUtilization.
SupplierLocation != LocalInputShare.

## Remaining non-public evidence
Negotiated OTA rates, realized payment/FX stack, refund-operator deductions, supplier accounting, local procurement, operating profit and CAC/repeat economics are not publicly observable at required granularity. They are not treated as unfinished public research. They are downstream Ground/N/commercial-access tasks.

## Project implication
The eight public-data workstreams are now closed at their defensible public-source maximums. The project can move to integrated gap/bottleneck computation without pretending that non-public unit economics are known. Any empirical opportunity score using margin/local-retention features must remain gated until observed Ground or Native denominators exist.
