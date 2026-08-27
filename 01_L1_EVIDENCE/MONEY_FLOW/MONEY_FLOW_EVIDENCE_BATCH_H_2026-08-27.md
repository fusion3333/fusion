# MONEY FLOW — Multisource Evidence Batch H (2026-08-27)

## Objective
Raise MONEY FLOW from a weak descriptive axis into a measurable tourism value-chain ledger. Source routing follows O/E/S/R/G/N. This batch starts with verifiable public enterprise/official material and explicitly marks proprietary telemetry gaps.

## Canonical money path
Traveler Gross Spend → taxes/fees → FX/card/payment costs → OTA/platform take → merchant/supplier gross receipt → operating/fulfilment cost → supplier contribution margin → local retained value / leakage.

Never equate traveler spend with supplier revenue, platform GMV with revenue, or supplier revenue with local retained value.

## E — Enterprise / platform evidence

### Airbnb — accommodation fee mechanics
Official Airbnb Help Center currently distinguishes split-fee and single-fee structures. Split fee: most hosts pay 3%, while guests may pay 14.1–16.5% of booking subtotal. Single fee: most hosts pay 15.5%, with other hosts typically 14–16%. Cross-currency bookings can increase guest fee within the stated range. These are platform rules, not an industry-wide OTA commission estimate.
Source: https://www.airbnb.com/help/article/1857

For South Korea, Airbnb announced a migration to a single 15.5% host-paid service fee effective 25 May 2026 for affected hosts. This provides a dated Korea-specific fee-regime change that must be stored as a regime event rather than applied historically.
Source: https://www.airbnb.com/resources/hosting-homes/a/simplifying-service-fees-761

### Airbnb — experiences
Airbnb states that Experience hosts are typically charged a 20% service fee, automatically deducted from host payout after a completed booking. This is directly relevant to traditional/cultural experience supplier economics.
Source: https://www.airbnb.com/help/article/1604

### Mastercard — travel-spend sensor
Mastercard Economics Institute states that its 2026 travel analysis uses aggregated/anonymized transaction data plus third-party data. This is useful as an external benchmark for destination/category spending and FX sensitivity, but public reports do not expose merchant-level raw transaction denominators.
Source: https://www.mastercard.com/content/dam/mccom/shared/news-and-trends/insights/2026/mei-travel-2026/MEI_Travel26_ebook_v6.pdf

### Visa — cross-border transaction sensor
Visa publishes event-level analyses using cross-border transactions, demonstrating that payment-network telemetry can observe foreign-card commercial activity at destination/city/event resolution. Public releases are evidence of sensor capability, not a complete Korea tourism transaction feed.
Source: https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.22596.html

## O — Official / regulatory anchor
For Korea, tax must remain a separate ledger component. Airbnb's Korea tax guide notes that many Korean goods/services are subject to 10% VAT and that accommodation suppliers may have VAT obligations. This is guidance, not a substitute for National Tax Service legal determination, so the final tax model must anchor to NTS statutes/guidance by supplier type.
Source: https://assets.airbnb.com/help/AirbnbTaxGuide2024_SouthKorea_ENGLISH.pdf

## Required canonical measurements
- traveler_total_paid
- base_supplier_price
- platform_guest_fee
- platform_supplier_fee
- payment_processing_fee
- fx_spread_or_fee
- card_scheme_or_acquiring_cost (when observable)
- tax_collected
- refund_amount
- cancellation_fee
- supplier_gross_receipt
- supplier_net_payout
- fulfilment_cost
- supplier_contribution_margin
- platform_revenue
- local_retained_value
- external_leakage
- CAC / paid-media acquisition cost
- repeat/rebooking value

## State and denominator rules
Every fee observation must carry: platform, product_type, supplier_type, country, currency, effective_from/effective_to, booking_subtotal_definition, tax treatment, guest/host payer, direct observation vs estimate, and source confidence.

## What public evidence cannot yet answer
1. Korea-specific negotiated Booking/Agoda/Klook/KKday/Trip.com supplier commission distributions.
2. Actual Korean merchant acquiring/PG effective rates by foreign-card brand and merchant category.
3. FX markup actually paid by traveler by issuer/card/DCC path.
4. CAC by origin country × channel × product.
5. Refund/chargeback/cancellation leakage by platform/product.
6. Supplier fulfilment cost and contribution margin for traditional experiences.
7. Share of gross tourist spend retained locally versus captured by foreign platforms/payment rails.

These must remain PROPRIETARY / GROUND / N-TELEMETRY until acquired. Do not fabricate industry averages.

## Initial observation
The MONEY FLOW axis is not one percentage called 'commission'. It is a time-varying waterfall. Korea-specific Airbnb fee-regime changes alone show that fee structure can change who nominally pays the platform while leaving traveler-facing price and supplier payout as separate variables. Therefore price, fee incidence, payout, tax, and margin must be stored separately.
