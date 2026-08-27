# L2 Observation — Payment-access island + taxi pain

Date: 2026-08-27
Status: OBSERVATION, not causal conclusion
Evidence: SRC-0046~0049

## Observation 1 — 해외카드 수용성은 '한국 전체'가 아니라 단계·교통수단별 island다
공식 자료를 교차하면 외국인 관광객은 철도·택시·일부 버스 온라인 예약·서울 신규 지하철 발매기에서는 해외발행 카드 사용 경로가 존재하지만, 일반 Tmoney 구매/충전과 버스·철도 단말의 직접 tap payment는 여전히 별도 교통카드/현금 또는 로컬 결제환경에 의존한다.

따라서 다음 두 문장은 동시에 참일 수 있다.
- 한국 교통은 해외발행 카드를 상당 부분 수용한다.
- 관광객의 end-to-end 교통결제 journey에는 여전히 해외카드로 통과하지 못하는 단계가 존재한다.

이 구조를 `PAYMENT_ACCESS_ISLAND`로 명명한다.

## Observation 2 — payment bottleneck은 technology만이 아니라 identity/onboarding 문제다
2022 서울시 자료는 MaaS 사용에 국내 이동통신 인증과 국내 은행계좌/카드가 요구되어 단기 외국인의 접근이 어렵다고 명시했다. 2025~2030 open-loop 전환 계획은 이를 단말·정산·환승 시스템까지 포함하는 구조 문제로 확장해서 보여준다.

따라서 BOOK/PAY friction model은 적어도 다음을 분리해야 한다.
- identity friction
- account friction
- card acceptance friction
- top-up friction
- tap/consumption friction
- fee/FX friction

## Observation 3 — 교통결제 개선 자체가 새로운 비용을 동반할 수 있다
2026년 서울 신규 발매기의 해외카드 결제는 접근성을 높였지만 평균 약 3.7% 서비스 수수료가 발생한다. 따라서 `friction_reduction`은 0/1이 아니라 convenience gain과 monetary cost의 trade-off다.

## Observation 4 — 택시 Pain은 공식 신고체계에서도 관측된다
2025년 6~12월 서울 외국인 QR 택시 신고 487건 중 가장 빈번한 이슈는 부당요금이었다. 확인 위반은 8건이다.

이는 `reported_pain != verified_violation`을 명확히 보여준다. 두 값은 별도 measurement로 보존한다.

## Potential bottleneck / opportunity hypothesis candidates
아래는 L2 관측으로부터 생성된 후보이며 아직 L4 검증 전이다.

1. 외국인 관광객이 결제 가능한 교통수단/채널만 선택하면서 지역 이동 선택지가 왜곡될 가능성.
2. 결제·인증 friction이 잘 알려진 핵심지 외의 지역 방문을 상대적으로 억제할 가능성.
3. '외국인 친화적 교통/예약/결제 가능성'을 itinerary 단계에서 사전 검증해주는 abstraction layer의 가치 가능성.
4. 택시 예상요금·통행료·할증의 다국어 사전표시가 perceived trust와 실제 이용의향에 영향을 줄 가능성.

## Falsification requirements
- 국가/카드브랜드별 실제 승인·거절률
- Tmoney 구매/충전·앱 onboarding 실패 VOC
- 해외카드 지원 전후의 외국인 교통카드/기간권 사용 변화
- 결제 friction과 지역 방문 분산 간 시차/대조군 비교
- 택시 신고율 분모(외국인 택시 이용건수) 확보

## Formula policy
현 단계에서 OpportunityScore 가중치는 변경하지 않는다. 이 관측은 feature 후보와 regime variable을 추가하는 데만 사용한다.
