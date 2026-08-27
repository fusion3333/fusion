# L2 OBSERVATIONS — MONEY FLOW + BOOK/PAY V1

Date: 2026-08-27
Status: ACTIVE / EVIDENCE-BOUND
Parents: `02_L1_EVIDENCE/MONEY_FLOW_BOOK_PAY_EVIDENCE_2026-08-27.md`

## OBS-001 — MONEY_FLOW must be modeled as a multi-sided chain
Evidence supports separating at least:
`Traveler payment → platform/acquirer processing → platform booking state → supplier payout → commission/fees → FX/refund/chargeback/tax → supplier net margin`.

Reason: Booking.com can intermediate guest collection and supplier payout by bank transfer/VCC; GetYourGuide pays fulfilled bookings net of commission; Viator works on a completed-booking commission/net-rate architecture.
Confidence: HIGH.

## OBS-002 — Official tourism spend is not one measurement
Korea Tourism Data Lab exposes transaction-derived foreign credit-card tourism consumption and partial simple-payment consumption, while the Foreign Tourist Survey captures self-reported trip expenditure.

Therefore:
`SurveySpend ≠ CardObservedSpend ≠ MobilePaymentObservedSpend`.
They should be graph-linked but not merged into one raw series without measurement reconciliation.
Confidence: HIGH.

## OBS-003 — simple-payment evidence currently has a known observability hole
The current Data Lab guidance states foreign simple-payment tourism consumption is based on only part of domestic foreigner mobile-payment transactions, is for trend/reference use, begins in 2024, and is queryable only for nationalities meeting the platform's threshold.

This is an explicit Information Gap, not zero demand/payment.
Status: VERIFIED OBSERVATION.
Confidence: HIGH.

## OBS-004 — OTA distribution cost may interact with discoverability
Viator officially documents Accelerate, where eligible operators can raise commission above a minimum in return for greater exposure/ad impressions.

Thus `DistributionCost` and `Discoverability` cannot always be modeled as independent variables.
Status: VERIFIED STRUCTURAL OBSERVATION.
Confidence: HIGH for existence; effect size UNKNOWN.

## OBS-005 — public web is insufficient for supplier unit economics
Exact commission, PG cost, settlement lag, refund/chargeback burden, tax burden, CAC, labor/translation cost and supplier net margin are frequently contract/account/category specific.

Therefore supplier economics is a high-value Ground Intelligence domain.
Confidence: HIGH.

## OBS-006 — payment accessibility is not equivalent to traveler card acceptance
Platform architectures can convert a traveler's payment into supplier payout by a different mechanism (e.g. Booking.com VCC/bank transfer). Therefore a supplier may be globally bookable even when its own direct foreign-card acceptance is weak, while a direct-only supplier may have the reverse architecture.

Graph consequence:
Separate nodes/edges for:
- `traveler_payment_methods`
- `platform_acceptance`
- `supplier_direct_acceptance`
- `supplier_payout_method`
- `settlement_currency`
- `refund_path`
Confidence: HIGH.

## OBS-007 — tax refund is a Journey node with operational friction
Tourist VAT/tax refund requires distinct eligibility, documentation, participating-store and refund-channel steps. Current VISITKOREA guidance found in this batch is stale for numeric operational rules (page states Oct 2021 update), so the journey node is confirmed but current thresholds remain UNKNOWN pending primary-tax verification.
Confidence: HIGH for node existence; LOW for current numeric parameters.

## Newly exposed missing variables
Priority A:
- foreign-card payment decline/authorization failures by nationality/network
- direct overseas-card acceptance rate among tourism suppliers
- OTA/platform coverage of traditional-tourism suppliers
- supplier settlement currency and FX conversion cost
- exact supplier commission rate by Korea/category/platform
- refund/chargeback/no-show incidence and cost
- supplier PG fee and net margin

Priority B:
- traveler use of DCC / perceived FX friction
- wallet coverage by nationality
- settlement delay / working-capital impact
- payout minimums and bank fees

## Graph nodes/edges to add
Nodes:
`Traveler`, `OTA`, `PaymentRail`, `Acquirer/PG`, `Supplier`, `TaxRefundOperator`, `Bank`, `FX`, `Booking`, `Refund`, `Chargeback`.

Edges:
`PAYS_WITH`, `COLLECTS_FOR`, `PAYS_OUT_TO`, `CHARGES_COMMISSION`, `CONVERTS_FX`, `REFUNDS_TO`, `SETTLES_IN`, `ACCEPTS_METHOD`, `DISTRIBUTES_PRODUCT`, `BOOSTS_EXPOSURE_BY_FEE`.

No L5 decision is justified yet. Upstream Korea-specific supplier economics remains incomplete.
