# MONEY_FLOW — Foreign-tourist internal-tax refund primary rules evidence

Date acquired: 2026-08-28
Scope: retail goods tax-refund policy/operational rules only. This file does **not** estimate actual refund volume, traveler uptake, refund-operator fees, supplier margin, or economic impact.

## Why this batch was acquired
The current source-priority registry marked `vat_tax_refund` PARTIAL because the previously located VISITKOREA guidance was last updated in October 2021 and explicitly required verification against current tax/customs primary rules. This batch resolves that narrow primary-source gap using the National Law Information Center and Korea Customs Service.

## O1 current legal primary
### MF-TAX-001 — Presidential Decree
- Publisher: National Law Information Center / Ministry of Economy and Finance
- Document: `외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정`
- URL: https://law.go.kr/LSW/lsInfoP.do?ancYnChk=0&chrClsCd=010202&efYd=20260102&lsiSeq=280877&urlMode=lsInfoP
- Current version verified: effective 2026-01-02; Presidential Decree No. 35947, promulgated 2025-12-30.
- Measurement type: ADMIN_POLICY.
- What it directly measures: legal eligibility/scope and statutory implementation procedures under Article 107 of the Restriction of Special Taxation Act.
- Population/definition: the decree defines covered foreign tourists by reference to non-residents under the Foreign Exchange Transactions Act, subject to stated exclusions.
- Limitation: legal eligibility is not observed traveler behavior or refund utilization.

### MF-TAX-002 — Implementing Rule
- Publisher: National Law Information Center / Ministry of Economy and Finance
- Document: `외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정 시행규칙`
- URL: https://www.law.go.kr/LSW/lsInfoP.do?ancYnChk=0&chrClsCd=010202&efYd=20260102&lsiSeq=282663&urlMode=lsInfoP
- Current version verified: effective 2026-01-02; Ministry of Economy and Finance Ordinance No. 1.
- Official forms are exposed in HWP/HWPX/PDF formats through the legal-information page.
- Limitation: forms/procedures do not provide transaction counts or refund values.

## O1 current operational primary
### MF-TAX-003 — Korea Customs Service, 2026-04-03
- Publisher: Korea Customs Service
- Publication: `크루즈 관광객도 이제 시내에서 바로 내국세 돌려받는다`
- URL: https://www.customs.go.kr/kcs/na/ntt/selectNttInfo.do?bbsId=1362&mi=2891&nttSn=10160123&nttSnUrl=3caff22f0a2b161d58b72c4eb75a0d23
- Operational change effective: 2026-04-06.
- Customs states that the foreign-tourist internal-tax refund regime operates under the Restriction of Special Taxation Act and the foreign-tourist special provisions, with export confirmation for eligible purchases.
- Customs states that approximately 23,000 designated tax-free sales stores existed at end-2025.
- Verified purchase-limit table in the official release:
  - immediate refund: refund at purchase; single purchase **under KRW 1,000,000**, total purchases **KRW 5,000,000 or less**;
  - downtown refund: pre-departure downtown refund with security/deposit; single purchase **KRW 6,000,000 or less**;
  - post/departure refund: airport/port refund after purchase; **no purchase-amount limit** in the Customs overview.
- From 2026-04-06, cruise tourists using a separate tourist landing-permit process became eligible for immediate and downtown refund through linkage of Customs port-call/passenger-manifest data to the refund system.
- The release provides HWPX and PDF attachments.

## Historical regime break relevant to longitudinal evidence
### MF-TAX-004 — 2024 threshold revision
National Law Information Center revision history records a 2024-01-01 policy threshold change: immediate-refund limits rose from KRW 500,000 to KRW 1,000,000 per purchase and from KRW 2.5 million to KRW 5 million in total; the downtown-refund single-purchase limit rose from KRW 5 million to KRW 6 million.

This is a legal/policy **regime break**, not evidence that refund usage or spend mechanically increased.

## Measurement discipline
Keep the following distinct:
- `refund_eligibility_rule`
- `refund_purchase_cap`
- `refund_channel` (immediate / downtown / departure)
- `refund_access_population`
- `refund_transaction_count`
- `refund_gross_purchase_value`
- `tax_amount_refunded`
- `refund_operator_fee`
- `traveler_net_refund`

The first four are now supported by current primary sources. The latter five remain UNKNOWN unless transaction/operator/official statistical evidence is acquired.

## Remaining MONEY_FLOW gaps unaffected by this batch
This batch does not resolve Korea supplier-level OTA contract rates, CAC, chargebacks, effective PG/acquiring cost, FX/DCC realization, contribution margin, refund-operator deductions, or supplier P&L. Broad MONEY_FLOW coverage should therefore not be increased solely because this primary-rule gap is closed.

## License/access
All sources are public official web sources. Specific redistribution/reuse license terms were not verified in this acquisition pass and remain `UNKNOWN_NOT_VERIFIED`; no binary attachment is copied into the repository.