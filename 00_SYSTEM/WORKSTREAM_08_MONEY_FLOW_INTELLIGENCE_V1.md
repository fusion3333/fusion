# WORKSTREAM 08 — MONEY FLOW INTELLIGENCE V1

Status: PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_REALIZED_UNIT_ECONOMICS_LIMITS
Closed: 2026-08-28

## Objective
Trace inbound-tourism money from traveler gross payment to the parties that retain, transfer, refund, tax, or leak value. MONEY_FLOW is an economic-flow layer, not a synonym for SPEND or CARD_PAYMENT.

## Canonical waterfall
TravelerPaid → taxes/traveler fees → distribution/platform layer → affiliate/visibility layer → payment/acquiring/network layer → cross-border/FX layer → refund/chargeback/risk layer → SupplierPayout → supplier variable/labor/input costs → SupplierOperatingProfit → LocalRetainedValue.

## Canonical identities
TravelerPaid != SupplierGrossPrice != SupplierPayout != SupplierRevenue != SupplierProfit != LocalRetainedValue.
GrossBookingValue != PlatformRevenue.
CardObservedSpend != TotalTourismSpend.
TaxRefundEligiblePurchase != TaxRefundTransaction != TravelerNetRefund.
CommissionRate != EffectiveDistributionCost.
BookingCountry != MerchantOfRecordCountry != ProcessorCountry != SupplierCountry != ExperienceCountry.

## Source routing
O — official: KTO/KCTI/MCST, Bank of Korea, National Tax Service/Ministry of Economy and Finance, Korea Customs Service, payment regulators and official tourism statistics.
E — enterprise: OTA/platform supplier terms, PG/acquirer/network/wallet pricing, partner disclosures, merchant-of-record and payout/refund mechanics.
S — social/VOC: supplier and traveler narratives only as hypothesis/friction evidence; never as fee or margin denominators.
R — research: TSA, tourism value-chain/leakage/local-retention methodology and incidence studies.
G — Ground: supplier contracts, statements, invoices, accounting, interviews and mystery transactions.
N — Native telemetry: owned booking/payment/refund/settlement ledger.

## Required dimensions
transaction_id, booking_id, product_id, supplier_id, origin_market, experience_region, supplier_region, platform, merchant_of_record, processor, acquirer, network_or_wallet, payment_currency, settlement_currency, booking_date, service_date, settlement_date, refund_date.

## Required monetary fields
traveler_paid, base_product_price, traveler_service_fee, tax_collected, supplier_commission, visibility_cost, affiliate_cost, processing_fee, cross_border_fee, fx_cost, dcc_spread, refund_amount, refund_cost, chargeback_cost, payout_fee, supplier_payout, supplier_variable_cost, labor_cost, local_input_cost, nonlocal_input_cost, operating_profit, local_retained_value.

## Publicly resolved layers
- Korea foreign-tourist expenditure/card-spend baselines and payment observation routes.
- Platform/payment fee primitives where officially disclosed, timestamped and platform-specific.
- Current Korean foreign-tourist tax-refund legal/operational rules and 2024/2026 regime breaks.
- Tax-refund eligibility/channel/cap separated from realized refund utilization.
- Card/payment workstream joins for issuer/network/channel/online-vs-face-to-face distinctions.
- Refund and chargeback modeled as reverse money flows.
- Geography attribution contract and local-retention definition locked.

## Public-source boundary
The following are not inferable nationwide from public evidence: negotiated OTA commissions, supplier-funded promotion, realized acquiring/network fees, effective FX/DCC spreads, refund-operator deductions, merchant-level taxes, refund/chargeback losses, payout timing cost, labor/variable costs, local input sourcing, supplier operating profit, CAC/repeat economics, and auditable transaction-level local retained value.

These are classified as NOT_PUBLIC / COMMERCIAL_RESTRICTED / GROUND_REQUIRED / N_TELEMETRY_REQUIRED rather than imputed.

## Completion rule
Workstream 08 is closed at the public-source maximum. Reopen only for materially new official transaction datasets, platform/payment commercial access, supplier accounting evidence, or owned telemetry. No nationwide unit-economics number may be synthesized from example fee schedules.
