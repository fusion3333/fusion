# 2026-08-27 — Timeline 004: Inbound Pulse & Graph Expansion

## Event
2026년 최신 공식 방한시장 pulse와 한국관광 데이터 인프라를 기존 대한민국 Inbound Tourism Knowledge Graph에 연결했다.

## Added Evidence
- EV-0032: 2026 Q1 방한 외래객 약 476만명, YoY +23%
- EV-0033: 2026 Q1 외국인 신용카드 관광지출 3조 2,128억원, YoY +23.0%
- EV-0034: 2026 Q1 방한 만족도 90.8점, 지역 방문율 34.5% (잠정)
- EV-0035: 2026 1~5월 872만명, 6월 20일경 누적 1,000만명 돌파(잠정)
- EV-0036: 2026년 5월 카드 관광지출 약 2.1조원
- EV-0037: 데이터랩의 이동통신·신용카드·간편결제·OTA 리뷰 데이터 계층
- EV-0038: 데이터랩 월간 갱신 cadence
- EV-0039: 관광 콘텐츠랩 9개 언어/OpenAPI

## New Graph Edges
- Market2026Q1 GROWS_VS Market2025Q1
- ForeignTourist SPENDS_VIA CreditCard -> Region/Category
- ForeignTourist VISITS_NON_METRO Region [34.5% survey metric; definition pending codebook confirmation]
- CountrySegment OBSERVED_BY TelecomData
- CountrySegment SPENDS_IN Region OBSERVED_BY CardData
- CountrySegment USES PartialQuickPayment OBSERVED_BY ZeroPayData
- Accommodation GENERATES Review -> Sentiment -> Pain/Delight
- TourismContent AVAILABLE_IN 9Languages

## New Observations / Insights / Hypotheses
- OB-0015~OB-0019
- IN-0012~IN-0014
- HY-0014~HY-0015
- DE-0008~DE-0009

## Coverage Change
- 국가별 시장규모: 75% → 80%
- 지역별 외국인 소비: 65% → 72%
- 외국인 관광행동: 70% → 75%
- 교통/결제/언어 병목: 40% → 45%

## Guardrail
85% 완료기준은 달성하지 않았다. 특히 국가별 Needs/Wants, VOC/Reddit, 공급자 전수 inventory, 실제 OTA 가격·리뷰, 규제 세부 matrix, 공급자 경제성, 실제 고객 지불의사가 미완료다. 기존 가설은 삭제하지 않았고 상태를 유지한다.
