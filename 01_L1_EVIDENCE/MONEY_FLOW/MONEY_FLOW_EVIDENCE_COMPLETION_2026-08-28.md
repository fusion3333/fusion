# MONEY FLOW Evidence Completion — 2026-08-28

## Scope
MONEY_FLOW traces traveler gross payment through distribution, payment, tax/risk and supplier operations to supplier retained value and local retained value. It is not identical to SPEND.

## Verified current commercial primitives
### Airbnb
Airbnb official help states that experience hosts are typically charged a 20% service fee, automatically deducted from host payout. For homes, Airbnb documents split-fee and single-fee structures; under the currently published single-fee structure most hosts pay 15.5%, with remaining hosts typically 14-16%, while split-fee hosts generally pay a host fee plus a guest service fee. Airbnb also states that host payout differs from guest total price and that fees/taxes can affect the difference. These are platform-specific, timestamped commercial primitives, not universal OTA rates.

### PayPal Korea
PayPal Korea's merchant fee schedule, updated 2026-05-28, states that receiving an international commercial transaction from outside South Korea is charged 4.40% plus a currency-specific fixed fee. It separately publishes currency-conversion fees: 1.00% for specified sending/refund conversions and 3.00% for other conversions. These are PayPal-specific terms and must not be generalized to all PG/acquirer/card flows.

## Canonical money identities
TravelerPaid != SupplierGrossPrice != SupplierPayout != SupplierRevenue != SupplierProfit != LocalRetainedValue.
BookingLocation != PaymentProcessorLocation != SupplierLocation != ExperienceLocation.
GrossBookingValue != PlatformRevenue.
CommissionRate != EffectiveDistributionCost.
RefundedGross != RefundedNet after nonrefundable fees, FX movement, chargeback or operational cost.

## Required fee stack
base_product_price
traveler_service_fee
supplier_commission
incremental_visibility_or_ad_cost
affiliate_or_referral_cost
payment_processing_fee
cross_border_fee
fx_conversion_cost
DCC_or_spread_if_observed
tax_or_VAT_if_applicable
refund_cost
chargeback_or_fraud_cost
payout_fee
supplier_variable_cost
supplier_labor_cost
local_input_cost
nonlocal_input_cost

## Public evidence gap
Public disclosures can establish selected fee rules but do not reveal the realized Korea-wide fee stack, negotiated supplier rates, promotional co-funding, channel-specific net settlement, merchant acquisition costs, refund losses, supplier margin or local retention. Those require supplier statements, partner dashboards, accounting data or owned transaction telemetry.