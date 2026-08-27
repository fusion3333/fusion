# MONEY FLOW Graph V1

## Canonical transaction waterfall
Traveler -> GrossPayment -> TaxAndTravelerFees -> DistributionLayer -> PaymentAndFXLayer -> RefundRiskLayer -> SupplierPayout -> SupplierOperatingCost -> SupplierOperatingProfit -> LocalRetainedValue

## Parallel actors
Traveler
Platform
AffiliateOrCreator
PaymentGateway
Acquirer
CardNetworkOrWallet
FXProvider
TaxAuthority
Supplier
EmployeeOrGuide
LocalInputSupplier
NonlocalInputSupplier
RefundRecipient
ChargebackActor

## Required dimensions
transaction_id
booking_id
product_id
supplier_id
platform
integration_model
merchant_of_record
traveler_origin
payment_currency
settlement_currency
experience_region
supplier_region
processor_region
booking_date
service_date
settlement_date
refund_date

## Money edge types
PAYS_GROSS
COLLECTS_TAX
CHARGES_TRAVELER_FEE
WITHHOLDS_COMMISSION
PAYS_AFFILIATE
PAYS_AD_OR_VISIBILITY
CHARGES_PROCESSING
CHARGES_CROSS_BORDER
CONVERTS_CURRENCY
WITHHOLDS_REFUND_COST
CHARGES_CHARGEBACK
PAYS_OUT
PAYS_LABOR
BUYS_LOCAL_INPUT
BUYS_NONLOCAL_INPUT
RETAINS_OPERATING_PROFIT
REFUNDS

## Diagnostic measurements
SupplierPayoutRatio = SupplierPayout / TravelerPaid
EffectiveDistributionCostRatio = VerifiedDistributionCosts / TravelerPaid
PaymentFrictionCostRatio = VerifiedPaymentAndFXCosts / TravelerPaid
LocalRetentionRatio = LocalRetainedValue / TravelerPaid
RefundLossRatio = NetEconomicLossFromRefunds / RefundedGross

All ratios require observed denominators. No placeholder nationwide values.

## Opportunity diagnostics
HighSpendLowRetention: strong traveler expenditure but weak verified local retention.
DistributionCostIsland: high demand and conversion but unusually high effective distribution cost relative to comparable channels.
FXPaymentLeakage: meaningful payment/FX cost that can be reduced without lowering conversion or increasing fraud.
SupplierMarginCompression: high bookings and traveler price with weak supplier operating margin.
DirectHybridOpportunity: direct/hybrid acquisition plus support/payment cost is demonstrably below incumbent effective distribution cost while preserving conversion and trust.

## Joins
SPEND supplies traveler expenditure observations.
PLATFORM supplies channel, merchant-of-record, commission and customer-ownership edges.
BOOK_PAY supplies authorization, payment, refund and chargeback states.
SUPPLY and REAL_SELLABLE_SUPPLY supply supplier/product/capacity entities.
GROUND supplies realized commercial terms and costs.
N_TELEMETRY supplies transaction-level denominators.
OPPORTUNITY may consume validated retention and margin features later; KTOF weights remain unset.