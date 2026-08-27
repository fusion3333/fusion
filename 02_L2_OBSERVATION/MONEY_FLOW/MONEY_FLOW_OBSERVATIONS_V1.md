# MONEY FLOW Observations V1

## O1 SPEND and retained value are different objects
A traveler can spend heavily in a destination while a materially smaller amount reaches the local supplier or remains in the local economy. SPEND measures demand-side expenditure; MONEY_FLOW measures incidence and retention.

## O2 The correct unit is a transaction waterfall
For each transaction store traveler paid -> taxes/guest fees -> platform/distribution -> payment/FX -> refund/risk -> supplier payout -> supplier operating costs -> local retained value. Never estimate retained value directly from traveler spend without the intermediate edges.

## O3 Effective distribution cost exceeds headline commission
EffectiveDistributionCost can include base commission, visibility/advertising increments, affiliate/referral payments, platform-funded or supplier-funded promotion, payment costs, FX, cancellation/refund effects and operational integration costs. Only include components supported for the transaction/channel.

## O4 Cross-border payment creates a second leakage layer
Even without an OTA, cross-border receipt and currency conversion can create material friction. PayPal Korea currently provides a concrete example: 4.40% plus fixed fee for international commercial receipts, with separate currency conversion fees under stated cases. This is a channel example, not a market average.

## O5 Price incidence and supplier incidence differ
A fee can be paid by the traveler, withheld from supplier payout, embedded in price, or indirectly recovered through higher supplier pricing. Store statutory/contractual payer separately from economic incidence; do not assume they are equal.

## O6 Refunds are reverse money flows
Cancellation/refund must create reversal edges rather than deleting the original transaction. Store gross refund, retained platform/payment fees, FX difference, supplier penalty, traveler loss and timing.

## O7 Geography has multiple meanings
Payment geography, merchant-of-record geography, supplier geography, experience geography and input-sourcing geography must remain separate. Regional tourism value should be attributed to the experience/supplier and local input chain, not blindly to processor location.

## O8 Local Retention candidate
LocalRetentionRatio = LocalRetainedValue / TravelerPaid, only when both numerator and denominator are empirically observed or auditable. It is not ready for national scoring.

## O9 Leakage candidate
Leakage is not synonymous with foreign-company revenue. Classify distribution, payment/FX, nonlocal inputs, imported goods, centralized headquarters capture and taxes separately. Some outflows purchase valuable services that increase conversion; the engine should evaluate net value, not label every outflow as waste.

## O10 Reintermediation opportunity
If a high-quality supplier has high foreign demand but excessive effective distribution cost and weak customer ownership, a direct or hybrid distribution layer may create value only if its acquisition/support/payment costs are lower after risk adjustment.