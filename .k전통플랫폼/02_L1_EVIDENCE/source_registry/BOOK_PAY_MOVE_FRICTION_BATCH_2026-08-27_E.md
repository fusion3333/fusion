# BOOK/PAY + MOVE + PAIN Evidence Batch E

Date: 2026-08-27
Status: L1 EVIDENCE / OFFICIAL TIER-A PRIORITY
Scope: 외국인 관광객의 교통 예약·결제·이동 마찰, 카드 수용성, 서비스 불편

## 1. 한국관광공사 2026 외래객 교통서비스 이용현황판
Source: https://english.visitkorea.or.kr/public/contents/travel/KoreaTransportationGuide_enu.pdf
Owner: 한국관광공사(KTO)
Format: PDF
Geography: 대한민국
Period: 2026 current-state guide
Confidence: A

### Evidence
KTO는 철도·지하철·버스·택시·렌터카의 온라인 예약/현장 구매/탑승 결제와 해외발행카드 수용 여부를 하나의 matrix로 정리한다.

관찰 가능한 핵심 상태:
- AREX/KTX/SRT 현장·온라인 구매: 해외발행 카드 수용 경로 존재.
- Express/Intercity bus: Klook/Hanpass 등 일부 온라인 경로에서 해외발행 카드 사용 가능.
- 서울 지하철 1~8호선 신규 발매기: 단일권/Climate Card 구매에 해외발행 카드 사용 가능.
- 택시: 카드리더 및 k.ride/Uber 등 일부 경로에서 해외발행 카드 사용 가능.
- 일반 Tmoney 교통카드: 전국 편의점/역 판매 및 충전에서 해외발행 카드 미지원, 현금 중심.
- 버스·AREX 등의 단말 직접 태깅: 해외발행 카드 직접 tap payment는 일반적으로 미지원, 교통카드 필요.

### Measurement interpretation
이 자료는 `foreign_card_acceptance`를 단일 boolean으로 저장하면 안 된다는 근거다. 최소한 아래 단계로 분리한다.

1. purchase_acceptance
2. topup_acceptance
3. online_booking_acceptance
4. onboard_or_gate_tap_acceptance
5. route_or_operator_coverage
6. foreign_phone_or_account_requirement
7. fee_or_fx_cost

따라서 canonical variable은 `payment_acceptance_stage`를 포함해야 한다.

### Limitation
이 자료는 공식 이용안내이므로 실제 승인률/실패율/카드브랜드별 거절률은 제공하지 않는다. `accepted`는 기술적/정책적 허용을 의미하며 실사용 성공률과 동일하지 않다.

---

## 2. 서울시 EMV Open-loop 전환 계획
Source: https://english.seoul.go.kr/seoul-implements-open-loop-payments-for-international-tourists/
Owner: 서울특별시
Format: WEB
Geography: 서울·수도권
Period: 2025-2030 roadmap
Confidence: A

### Evidence
서울시는 2025-10-24 외국인 관광객 대중교통 접근성을 높이기 위해 해외발행 신용카드를 직접 태그하는 EMV open-loop 체계를 단계적으로 도입한다고 발표했다.
- 기존에는 관광객이 교통카드를 별도로 구매·충전해야 했고 해외카드 충전 제약이 있었다.
- 2025~2026: EMV 모듈·결제서버 구축
- 2027: 서울 지하철 1~8호선 단말 교체
- 2028~2030: 마을버스·민자철도·수도권 통합환승 확대
- 수도권 전환비용은 최소 500억원 규모로 언급됨.

### Interpretation
이는 `payment friction`이 단순 UX 문제가 아니라 결제망·단말·정산·환승제도까지 연결된 시스템 병목임을 보여준다.

### Regime flag
`SEOUL_TRANSIT_PAYMENT_REGIME`
- pre_2025_closed_loop
- 2025_2026_partial_foreign_card_purchase
- 2027_plus_open_loop_rail_transition
- 2028_2030_network_expansion

시계열 분석 시 정책 전후를 같은 환경으로 취급하지 않는다.

---

## 3. 2026 국제카드 발매기 확대
Source: https://english.seoul.go.kr/climate-cards-and-single-journey-transit-tickets-now-accepting-international-credit-cards-no-cash-needed/
Owner: 서울특별시
Format: WEB
Date: 2026-03-17
Confidence: A

### Evidence
- 서울 지하철 1~8호선 273개 역, 440대 신규 발매기
- Visa/Mastercard 등 해외발행 신용·직불카드 사용 가능
- Climate Card 단기권(1/2/3/5/7일) 및 1회권
- 해외발행 카드 사용 시 평균 약 3.7% 서비스 수수료

### Interpretation
결제 접근성 개선과 동시에 별도의 `payment_cost_friction`이 존재한다. 따라서 accessibility와 cost를 따로 측정한다.

---

## 4. 외국인 MaaS 접근 제약의 역사적 baseline
Source: https://english.seoul.go.kr/support-for-the-development-of-maas-platforms-for-international-tourists-in-seoul/
Owner: 서울특별시/서울관광 관련 PPP
Format: WEB
Date: 2022-12-05
Confidence: A

### Evidence
서울시는 당시 MaaS 앱들이 국내 이동통신사 본인인증 및 국내 은행계좌/카드 등록을 요구하여 단기 외국인 관광객의 사용이 어렵다고 공식적으로 설명했다.

### Interpretation
`foreign_user_onboarding_friction`은 다음의 별도 component로 보존한다.
- domestic_phone_required
- resident_id_required
- domestic_bank_required
- domestic_card_required
- local_app_account_required

이 제약은 예약/결제 실패와 직접 연결될 가능성이 있지만 실제 실패율은 별도 데이터가 필요하다.

---

## 5. 외국인 택시 불편 신고
Source: https://english.seoul.go.kr/seoul-cracks-down-on-taxi-overcharging-of-foreigners-with-english-receipts-and-other-service-improvements/
Owner: 서울특별시
Format: WEB
Date: 2026-01-28
Confidence: A

### Evidence
- 2025년 6~12월 외국인 QR 택시 불편신고 487건
- 가장 빈번한 신고 유형은 부당요금
- 확인된 위반 8건에 행정처분
- 영문 영수증, 할증정보 표시, 앱 내 미터요금/통행료 구분 등 개선책 시행

### Measurement rule
`complaint_count`와 `confirmed_violation_count`를 반드시 분리한다.
487건은 불만/신고 intensity이며 8건은 확인된 행정 위반이다.

### Limitations
- 신고하지 않은 피해가 존재할 수 있음.
- QR 신고 시스템 인지도와 사용률에 따라 신고량이 변할 수 있음.
- 신고 건수의 증가는 실제 문제 증가뿐 아니라 신고 접근성 개선을 반영할 수 있음.

---

## 6. Newly identified bottleneck structure

### PAYMENT ACCESS FUNNEL
`ForeignCardOwned`
→ `Merchant/PlatformAccepts`
→ `AccountOnboardingPossible`
→ `CardCanPurchaseTicket/Product`
→ `CardCanTopUp/Prepay`
→ `CardCanTap/Consume`
→ `Settlement/FX/FeeAcceptable`
→ `SuccessfulTransaction`

현재 공식 자료는 이 funnel의 여러 단계가 서로 다른 상태임을 명확히 보여준다.

### Key asymmetry
철도·택시·일부 온라인 버스예약·서울 신규 발매기는 해외카드 사용이 가능해지는 반면, 일반 Tmoney 구매/충전 및 직접 tap 기반 이동은 여전히 별도 제약이 남아 있다.

따라서 `Korea accepts foreign cards`라는 국가단위 명제는 금지한다. 반드시 `mode × channel × stage × operator × date` 단위로 저장한다.

---

## 7. Impact on 18 axes
- BOOK/PAY: 큰 폭 보강
- MOVE: 교통수단별 payment-access edge 보강
- PAIN: 택시 부당요금, MaaS onboarding friction 추가
- PLATFORM: MaaS/taxi/booking platform 접근조건 추가
- MONEY FLOW: 해외카드 수수료·정산 비용 신호 추가
- ISLAND/BOTTLENECK/ASYMMETRY: 동일 관광객이 수단별로 다른 결제 가능성을 갖는 payment-island 확인
- OPPORTUNITY: 외국인용 통합 교통/결제 abstraction 또는 friction-aware itinerary/service 후보

## 8. What remains unknown
- 카드브랜드/발행국별 승인 실패율
- Tmoney 구매·충전 실패 실제 빈도
- 외국인 앱 회원가입 실패율
- 예약 단계 abandoned cart 원인
- 교통수단별 결제 friction이 관광지역 분산/소비에 미치는 인과효과

이 항목들은 enterprise/VOC/실험 또는 현장 Ground Intelligence가 필요하다.
