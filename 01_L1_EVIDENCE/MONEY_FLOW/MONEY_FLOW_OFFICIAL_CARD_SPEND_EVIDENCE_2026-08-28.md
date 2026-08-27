# MONEY FLOW — Official Foreign-Card Spend Evidence (2026-08-28)

## Scope
Evidence-acquisition only. This note does not alter the money-flow architecture or formula layer. It resolves a measurement-definition gap: what the official/public `foreign credit-card tourism spend` sensor does and does not measure.

## Verified Tier-A evidence

### 1. KTO foreign-visitor shopping/tourism survey comparison
Korea Tourism Organization's `2020년 방한외래객 쇼핑관광 실태조사 보고서` explicitly compares foreign-credit-card-derived per-visitor expenditure with the 2019 Foreign Tourist Survey. The report notes that the Foreign Tourist Survey asks expenditure by payment method, including credit card, debit/check card, cash, check and smartphone electronic money.

The indexed report also gives a concrete example for Chinese visitors: total domestic trip expenditure reported by the survey and the card-paid portion are different quantities. This is direct evidence that `card spend` must not be treated as `total visitor spend`.

Source: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=16441&cbIdx=1129&streFileNm=19673846-5a15-11eb-812f-851ab29ae305.pdf

### 2. Bank of Korea definition of the foreign-card tourism-spend sensor
A Bank of Korea Busan regional analysis defines foreign tourism expenditure as tourism-industry payment amounts made with overseas-issued credit cards. Its methodology note states that the foreign expenditure data reflect Visa, Master, American Express, JCB and China UnionPay spending.

This gives an authoritative measurement boundary:
- geography: merchant activity in the destination/region analyzed;
- instrument: overseas-issued card payments;
- category: tourism-industry transactions under the underlying tourism/card classification;
- excluded by construction: cash and non-card payment paths not represented in the source.

Source: https://file-cdn.bok.or.kr/portal/526194b6ad033d1aa623d5b9b1120967/1/202309251134297010.pdf

### 3. Recent monthly regional use remains available
The Bank of Korea Busan `2025.7` regional economic report uses Korea Tourism DataLab tourism-consumption data and separates domestic and foreign tourism spend, reporting monthly/annual changes and category cuts. Its table note identifies foreign spend as based on domestic total-card data, while the table is presented as growth rates/shares rather than raw transactions.

This verifies that a current monthly regional sensor exists, but does not by itself provide the transaction-level or merchant-level raw panel needed for MONEY_FLOW reconstruction.

Source: https://file-cdn.bok.or.kr/ucms/7e320c291a4e48ab9ac60d6600c14475/2/tempFile.pdf

## Evidence-supported measurement rule
Store these as distinct variables and never substitute one for another:

- `survey_total_trip_spend`
- `survey_card_spend`
- `observed_foreign_card_tourism_spend`
- `observed_foreign_card_spend_by_category`

`observed_foreign_card_tourism_spend` is an observed payment-rail subset, not a complete tourism-spend denominator.

## Provenance and harmonization cautions
1. KTO survey expenditure is respondent-reported and can include multiple payment instruments.
2. Card data are transaction-derived but restricted by card-network coverage, merchant acceptance and tourism-industry classification.
3. A per-arrival card-spend estimate is not automatically comparable with survey per-person or per-trip expenditure unless denominator and traveler definition are matched.
4. Regional card-spend growth rates do not reveal platform fees, acquiring/PG costs, FX/DCC costs, refunds, chargebacks or supplier net payout.
5. Do not infer `cash share = total spend - card spend` unless the source definitions, sample, period and denominator are explicitly compatible.

## Remaining high-priority UNKNOWN / MISSING
- Korea supplier-level OTA negotiated commission distributions: MISSING / proprietary.
- Merchant-level effective acquiring/PG rates for foreign cards: MISSING.
- Issuer/card-brand-level FX markup and DCC incidence paid by traveler: MISSING.
- Approval/decline and abandonment denominators for foreign-card tourism payments: MISSING.
- Refund and chargeback leakage by tourism product/platform: MISSING.
- Supplier net payout and contribution margin: MISSING.

## Coverage effect
This batch improves **measurement-definition confidence** for the official foreign-card spending sensor but does **not** close the MONEY_FLOW engine gap. No master coverage percentage is mechanically increased because the current highest-priority blockers—supplier P&L, OTA contract rates, PG/FX/DCC, refund/chargeback and payment-failure denominators—remain unresolved.
