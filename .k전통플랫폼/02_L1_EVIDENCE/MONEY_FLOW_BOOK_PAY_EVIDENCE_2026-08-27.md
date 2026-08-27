# L1 EVIDENCE — MONEY FLOW + BOOK/PAY

Date: 2026-08-27
Status: ACTIVE / PARTIAL
Axes: BOOK_PAY, SPEND, MONEY_FLOW, PLATFORM
Evidence policy: facts separated from inference; exact fees/rates not assumed when account/country-specific.

## E1 — Korea Tourism Data Lab: foreign credit-card tourism spend
Source class: O
Owner: Korea Tourism Organization
URL: https://datalab.visitkorea.or.kr/datalab/portal/nat/getNatFocTourAna.do
Measurement: TRANSACTION-derived tourism consumption
Facts:
- Data Lab provides foreign tourist credit-card tourism spend trends.
- It provides regional spending ratio and industry/category tourism spend for foreign visitors.
- The service warns that big-data visitor counts are for trend analysis rather than population totals.
- Tourism consumption data are available from 2020 according to the current dashboard guidance.
Limitations:
- Card-observed consumption is not equivalent to total foreign-tourist expenditure.
- Coverage, issuer/acquirer population and tourism classification methodology must be retained before aggregation with survey spend.
Confidence: HIGH for existence/schema; MEDIUM for population-generalized economic totals until methodology is fully captured.

## E2 — Korea Tourism Data Lab: foreign mobile/simple-payment spend
Source class: O
Owner: Korea Tourism Organization
URL: https://datalab.visitkorea.or.kr/datalab/portal/nat/getNatFocTourAna.do
Measurement: TRANSACTION / mobile-payment proxy
Facts:
- Data are based on ZeroPay-observed foreign mobile/simple-payment consumption.
- Industry/category consumption trend and regional consumption ratio are exposed.
- The dashboard explicitly says only part of foreign domestic mobile-payment transactions can be observed and recommends trend/reference use only.
- Current guidance says these data are available from 2024.
- Only nationalities accounting for at least 1% of global simple-payment consumption are queryable in this view.
Limitations:
- Not representative of all foreign wallets/payment rails.
- Cannot be substituted for total payment-market share without additional denominator evidence.
Confidence: HIGH.

## E3 — Foreign Tourist Survey metadata / sample design
Source class: O
Owner: Korea tourism statistical system / Korea Culture & Tourism Institute metadata exposed through Tourism Data Lab
URL: https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do
Measurement: SURVEY
Facts:
- 2024 metadata shows 16,216 respondents; the design targets foreign visitors aged 15+ with stay <=90 days subject to listed exclusions.
- Stratification/allocation incorporates nationality, port/airport, sex and age, followed by post-stratification weighting.
- The metadata defines FIT as travelers independently preparing and paying airfare, accommodation, attractions and domestic transport separately.
- Total trip expenditure and daily average expenditure are formally defined survey variables.
- The metadata explicitly warns that changes in questions/answer choices can make time-series comparison difficult; 2020-2022 used reduced/exceptional survey operation.
Limitations:
- Survey expenditure and transaction-platform expenditure are distinct measurement types and should remain parallel evidence.
Confidence: HIGH.

## E4 — Booking.com payment orchestration
Source class: E
Owner: Booking.com
URLs:
- https://partner.booking.com/en-gb/solutions/payments-by-bookingcom
- https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom
- https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/getting-paid-virtual-credit-cards-vccs-when
Measurement: PLATFORM_TRANSACTION
Facts:
- Payments by Booking.com can pay eligible properties through virtual credit card or bank transfer depending on location/property type.
- VCC is a platform payout mechanism, not merely the traveler’s original payment card.
- If the property does not use Payments by Booking.com, guest payment may be collected directly by the property via cash/debit/credit card depending on setup.
Limitations:
- Eligibility and exact commercial terms are account/location/property-specific.
- This evidence demonstrates architecture, not Korea-wide adoption or failure rates.
Confidence: HIGH for platform architecture; LOW for Korea-specific penetration without account/sample evidence.

## E5 — GetYourGuide supplier money flow
Source class: E
Owner: GetYourGuide
URLs:
- https://www.getyourguide.supply/join/getyourguide
- https://www.getyourguide.supply/fall2025
Measurement: PLATFORM_FEE / PLATFORM_TRANSACTION
Facts:
- Listing/maintenance is described as free; commission is charged on successful bookings.
- Commission rate varies by country of operation and exact rate is disclosed after supplier signup.
- Standard supplier payment can be monthly at no extra cost; bi-monthly payout is offered with a surcharge according to the supplier page.
- Fulfilled bookings are paid net of commission.
- Supplier onboarding requires business/tax/bank information for payout.
- 2025 product materials show checkout support for additional payment methods including Apple Pay/Google Pay pay-later flows and regional wallets in selected markets.
Limitations:
- No exact Korea commission rate was verified from public official material in this batch.
Confidence: HIGH.

## E6 — Viator supplier monetization/distribution architecture
Source class: E
Owner: Viator
URLs:
- https://operatorresources.viator.com/about-us/
- https://operatorresources.viator.com/top-7-questions-from-arivals-ama-interview-with-ben-drew-president-of-viator/
- https://operatorresources.viator.com/introducing-viator-accelerate/
- https://operatorresources.viator.com/updated-supplier-agreement-august-2026/
- https://operatorresources.viator.com/pricing-sync-the-new-standard-for-smarter-pricing/
Measurement: PLATFORM_FEE / DISTRIBUTION / PLATFORM_TRANSACTION
Facts:
- Viator describes a pay-for-performance commission model: supplier pays when a completed booking is delivered.
- Official operator material states minimum commission varies by geography/destination/category.
- Viator Accelerate allows eligible suppliers to raise commission above the minimum in exchange for additional exposure/ad impressions.
- 2026 supplier-agreement guidance states supplier payout remains tied to the Net Rate set by the supplier despite front-end promotions/currency shifts.
- Pricing Sync can propagate supplier net-rate/price changes through Viator and its distribution network when connected via supported booking software/API.
Implication boundary:
- These facts establish that commission, ranking/exposure and distribution are structurally linked on at least one major experience OTA.
- They do NOT establish a universal causal elasticity between extra commission and bookings for Korean suppliers.
Confidence: HIGH for architecture.

## E7 — Korea tourism tax-refund journey
Source class: O-secondary
Owner: Korea Tourism Organization VISITKOREA
URL: https://english1.visitkorea.or.kr/enu/SHP/SH_ENG_1_1.jsp
Measurement: ADMIN_POLICY / traveler money-flow friction
Facts:
- The page describes immediate and post-purchase VAT refund journeys requiring passport/receipts and, depending on route, airport/port refund counters or kiosks.
- It identifies multiple refund operators and notes refund process differences.
Critical limitation:
- The page itself states it was last updated in October 2021 and warns that information may differ from current practice.
- Therefore thresholds/eligibility from this page must NOT be used as current operational rules until verified against National Tax Service/customs/current official primary rules.
Confidence: HIGH for existence of refund journey/friction nodes; LOW for current numeric thresholds.

## Evidence synthesis boundary
Verified in this batch:
1. Korea has official transaction-derived foreign credit-card tourism consumption and partial simple-payment tourism consumption evidence.
2. Survey spend and transaction spend are methodologically different and must remain separate nodes.
3. Major OTAs interpose distinct traveler-payment, supplier-payout, commission and distribution mechanisms.
4. Exact supplier economics are often account/country/category specific and cannot be safely inferred from generic web estimates.
5. Payment-friction, refund-friction and supplier net margin remain materially under-observed and require supplier/ground evidence.

Not yet verified:
- Korea-specific Booking/Klook/KKday/Viator/GetYourGuide commission-rate matrix.
- Korea foreign-card authorization/decline rate by nationality/card network.
- DCC incidence/cost by tourist segment.
- OTA refund loss, chargeback cost, settlement delay and FX spread by supplier category.
- Supplier actual PG fee, tax burden, CAC and net margin.
