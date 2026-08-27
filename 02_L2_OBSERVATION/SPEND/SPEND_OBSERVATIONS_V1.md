# SPEND — L2 Observations V1
Date: 2026-08-28
Status: EVIDENCE-SUPPORTED OBSERVATIONS ONLY

## O1. SPEND is a multi-sensor construct
Official survey, foreign-card transaction data, medical card data and enterprise card data observe different slices. Therefore SPEND must be modeled as a layered measurement object, not one total-spend field.

## O2. Geography can refer to payment location, merchant location, booking location or consumption location
Online reservation services may be excluded from some public views. A hotel booked abroad or through an OTA can create a payment geography different from the physical destination. Store both when available.

## O3. `Origin × Region × Industry × Month` is the minimum useful public transaction cube
KTO provides the components needed for this direction, while enterprise card platforms can add finer merchant/admin-dong resolution. This cube should become the bridge from WHO/WHEN/WHERE/DO to MONEY_FLOW.

## O4. Medical/wellness spending deserves a separate deep-dive edge
KTO provides foreign medical spend and transaction counts by origin, region and specialty. Medical tourism should not be hidden inside a generic shopping/service category.

## O5. Average spend can hide radically different traveler economics
Origin, purpose, income/price environment, trip length and activity bundle can alter expenditure. Use segmented distributions and quantiles where raw data permits, not only means.

## O6. Regional economic opportunity is closer to `visitor conversion into spend` than raw visit count
Candidate diagnostic:
`HighPresence + LowSpendPerNight` may indicate weak monetization, short stays, low-value activity mix, payment friction or leakage to another region/channel.
This remains a hypothesis until denominators are harmonized.

## O7. A valuable leakage pattern can exist
`HighActivityIntent + HighVisit + LowLocalSpend` may mean purchases happen online/pre-trip, in another city, or via channels that do not settle locally. This must connect later to MONEY_FLOW and Real Sellable Supply.

## O8. Cash/wallet blind spots are structural
Card data is a transaction sensor, not a census of all expenditure. Missing payment rails must remain UNKNOWN/UNCALIBRATED until survey or proprietary data supports a bridge.

## Candidate opportunity diagnostics — not final scores
- `SpendConversionGap = expected_segment_spend - observed_local_spend`
- `RegionalSpendLeakage = activity_presence_without_corresponding_local_spend`
- `NightValue = local_spend / consumed_nights`
- `ActivityYield = local_spend / completed_activity` (requires N/Ground denominator)
- `SpendDiversity = dispersion across merchant/activity categories`

No weights are assigned at this stage.