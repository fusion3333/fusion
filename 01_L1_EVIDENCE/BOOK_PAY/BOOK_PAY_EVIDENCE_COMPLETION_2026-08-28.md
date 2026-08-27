# BOOK/PAY Evidence Completion — 2026-08-28

## Scope
BOOK/PAY is modeled as a state transition, not a binary `foreign card accepted` flag.

`DISCOVER → INVENTORY_VISIBLE → BOOK_STARTED → IDENTITY/ACCOUNT → PRICE_FINAL → TERMS_ACCEPTED → PAY_STARTED → AUTHENTICATED → AUTHORIZED → CONFIRMED → CONSUMED → REFUND/CHARGEBACK`

## Official evidence backbone
1. KTO/MCST 2026 International Visitors’ Use of Public Transportation and Booking/Payment Services distinguishes online booking, on-site purchase, purchase/top-up, and tap/consume by mode. It explicitly shows foreign-issued cards accepted in some KTX/SRT/AREX, express/intercity bus, taxi and new Seoul subway machine paths while ordinary prepaid Tmoney purchase/top-up and direct transit tap have different constraints.
2. MOLIT announced overseas-card acceptance for on-site intercity bus ticketing at all 243 terminals from 2024-07-31 and mobile reservation/payment for all intercity routes from 2024-08-16. This is a dated regime change and must not be back-projected.
3. Seoul introduced foreign-issued credit/debit card and mobile-payment support on 440 new vending machines at 273 Line 1–8 stations in March 2026 for short-term Climate Cards and single-journey tickets. Seoul reports an average service fee of about 3.7% for international-card payment. This proves accessibility and fee friction must be separate variables.
4. KORAIL official ticketing supports card payment and defines confirmation, cancellation and refund/penalty states. Payment availability does not reveal card-country authorization success.
5. KTO reports KORAIL multilingual reservation improvements and additional purchase paths such as WeChat, Alipay and Konest; this is channel expansion evidence, not conversion evidence.

## Measurement rules
- `CARD_ACCEPTED != PAYMENT_SUCCESS`
- `BOOKING_PATH_EXISTS != BOOKING_COMPLETED`
- `PRICE_SHOWN != FINAL_CHARGED_PRICE`
- `REFUND_POLICY_EXISTS != REFUND_COMPLETED`
- `OVERSEAS_CARD_SUPPORTED != ALL_ISSUERS_SUPPORTED`
- `ONLINE_BOOKING != FOREIGNER_USABLE_BOOKING`
- `PURCHASE != TOP_UP != TAP/CONSUME`
- every observation must carry `operator × product × channel × stage × date/regime × card/payment method × origin/issuer if known`.

## Required canonical fields
operator, product_type, channel, booking_stage, payment_stage, identity_requirement, phone_requirement, account_requirement, inventory_status, currency, displayed_price, final_price, fee_type, fee_amount_or_rate, payment_method, card_brand, issuer_country, authentication_result, authorization_result, decline_reason, confirmation_result, cancellation_rule, refund_result, chargeback_result, timestamp, evidence_type, observation_class.

## O/E/S/R/G/N assessment
- O: strong for policy, availability, formal booking/payment paths and selected fees.
- E: strong conceptually but effective merchant/issuer/payment performance is mostly first-party.
- S: useful for failure-code discovery only.
- R: useful for mechanism and benchmarking, not denominator.
- G: required to verify supplier-side real workflows.
- N: required for attempted-but-failed denominator and causal funnel.

## Public-layer boundary
Public evidence can establish what should be possible and when. It cannot reliably establish the probability that a foreign traveler successfully completes each stage. Authorization rate, abandonment, issuer-specific decline, authentication failure, refund latency and chargeback loss require first-party or partner telemetry.
