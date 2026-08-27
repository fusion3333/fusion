# SOURCE ROUTING & EVIDENCE STANDARD V1

Date: 2026-08-27
Status: **MASTER / ALWAYS-REFERENCE**
Scope: Korea Inbound Tourism Causal Digital Twin
Related decision: `DECISION_2026-08-27_FEDERATED_INTELLIGENCE_STRATEGY.md`

> 이 문서는 향후 모든 조사·수집·정규화·분석·Graph 연결·Opportunity 판단에서 항상 먼저 참고하는 Source/Evidence 표준이다.

---

## 1. 핵심 원칙

모든 항목에 동일한 소스 순위를 적용하지 않는다.

각 질문/변수마다 **그 현상을 가장 직접적이고 정확하게 측정하는 최적 Source Stack을 별도로 정의**한다.

기본 흐름:

`QUESTION → VARIABLE → MEASUREMENT → SOURCE ROUTER → NORMALIZATION → TRIANGULATION → CONFIDENCE → TEMPORAL/CAUSAL GRAPH → GAP/OPPORTUNITY`

검색량을 늘리는 것이 목표가 아니다. **이 질문에는 어디를 먼저 봐야 하고, 무엇을 측정하며, 어느 정도까지 믿을 수 있는지를 아는 시스템**을 구축한다.

---

## 2. Source Class

### O — Official Source
국가승인통계, 정부부처, 공공기관, 한국관광공사, 지자체, 지역관광공사, 공항·철도·교통 운영기관 등의 공식 원자료/API/통계/조사.

주요 용도: 모집단 규모, 입국자, 비율, 장기 시계열, 정책, 인허가, 공식 공급, 공식 조사.

### E — Enterprise Source
카드/결제, 통신, Google/검색·지도, OTA, 여행사, 항공사, 호텔, 모빌리티, 플랫폼 등의 공식·공개 데이터와 합법적으로 접근 가능한 output.

주요 용도: 실제 검색, 이동, 가격, 예약, 결제, 거래, 재고, 전환, 플랫폼 노출.

### S — Social / VOC Source
Google 리뷰, Booking/Agoda/Klook/KKday/Viator/GetYourGuide 등의 공개 리뷰, Instagram, Threads, Facebook, X, YouTube, TikTok, Reddit 및 국가별 여행 커뮤니티 등 약관상 이용 가능한 공개 VOC.

주요 용도: Pain, Want, 감정, 신뢰, 불만, 숨은 니즈, 언어 표현, 신규 트렌드, 제품 경험.

### R — Research Source
학술논문, 대학/연구기관, UN Tourism, OECD, World Bank, WTTC 및 신뢰 가능한 전문 연구기관 자료.

주요 용도: 인과 메커니즘, 국제 비교, 방법론, 선행연구, 이론적 검증.

**중요:** `O > E > S > R` 같은 단일 서열은 없다. 질문에 따라 최적 소스가 달라진다.

---

## 3. Source Priority는 변수별로 정한다

각 핵심 Variable마다 필요 시 다음 Stack을 만든다.

- `O1~O5`
- `E1~E5`
- `S1~S5`
- `R1~R5`

단, 모든 질문에서 20개 Source를 강제로 채우지 않는다. 충분한 근거가 확보되면 Stop Rule을 적용한다.

예:

### 질문 A — 외국인이 어떤 숙박형태를 이용하는가?
O1: 외래관광객조사 등 해당 현상을 직접 측정하는 공식 조사
O2+: 공식 숙박/지역 조사 등 보강자료
E: OTA/숙박기업 공개자료는 행동/시장 보강
S: 리뷰는 선택 이유와 Pain 분석

### 질문 B — 특정 날짜 객실가격은 얼마인가?
E1: 호텔 공식 예약채널 또는 해당 재고를 직접 판매하는 OTA
O: 구조적 시장 통계 보조
S: 가격 인식/VOC 보조

### 질문 C — 외국인은 왜 해당 숙박을 싫어하는가?
S1: 검증 가능한 숙박/지도 플랫폼 리뷰
E/O: 만족도/취소/운영자료가 공개될 경우 교차검증

즉 동일한 `STAY` 축에서도 질문별 Source Router가 달라진다.

---

## 4. Measurement Type — 반드시 저장

서로 다른 측정값을 같은 숫자로 취급하지 않는다.

최소 분류:
- `CENSUS/ADMIN` 행정·전수자료
- `SURVEY` 표본조사
- `TRANSACTION` 실제 결제/거래
- `BOOKING` 예약
- `MOBILITY` 통신/위치/이동
- `SEARCH` 검색 행동
- `NAVIGATION` 길찾기/목적지 검색
- `PRICE/INVENTORY` 가격·재고
- `REVIEW` 평점/후기
- `SOCIAL` SNS 신호
- `SUPPLY_REGISTRY` 공급자/시설 원장
- `MODEL_DERIVED` 기관/기업 분석엔진의 파생 output
- `RESEARCH_ESTIMATE` 연구 추정치

원칙:
`Observed Population ≠ Sample ≠ Transaction ≠ Booking ≠ Search Proxy ≠ Social Signal ≠ Model Output`

정의 확인 없이 합산/대체/보간하지 않는다.

---

## 5. Source Quality Score

각 Source/Evidence에 가능한 범위에서 다음 품질축을 기록한다.

1. `Authority` — 출처 권위/책임성
2. `Directness` — 질문을 얼마나 직접 측정하는가
3. `Representativeness` — 모집단 대표성
4. `Sample/Data Volume` — 표본/관측량
5. `Granularity` — 국가/지역/월/세그먼트 등 해상도
6. `Temporal Coverage` — 시계열 길이
7. `Freshness` — 최신성
8. `Methodology Transparency` — 방법론 공개 수준
9. `Bias Risk` — 플랫폼/표본/자기선택 등 편향 위험
10. `Reproducibility` — 동일 결과 재현 가능성
11. `Accessibility` — API/download/지속 접근 가능성
12. `Continuity` — 향후 업데이트 지속 가능성

초기에는 정성 등급도 허용하되, 충분한 데이터가 쌓이기 전 임의의 단일 종합점수를 진실처럼 사용하지 않는다. 최종 가중치는 후속 분석에서 검증한다.

---

## 6. Triangulation Standard

중요한 의사결정은 가능한 경우 서로 다른 Measurement Type으로 삼각검증한다.

예:
`공식 SURVEY에서 FIT 증가`
+ `OTA/BOOKING 행동 변화`
+ `TRANSACTION 소비 변화`
+ `MOBILITY 이동 변화`

서로 독립적인 데이터 생성과정이 같은 방향을 지지하면 Evidence Confidence가 상승한다.

동일 보고서를 재인용한 기사 10개는 독립 Evidence 10개가 아니다. **원천 데이터 생성과정의 독립성**을 기준으로 한다.

---

## 7. Confidence 상태

모든 핵심 Observation/Edge/Hypothesis에 Confidence를 붙인다.

권장 상태:
- `CONFIRMED` — 강한 직접근거 + 적절한 교차검증
- `HIGH`
- `MEDIUM`
- `LOW`
- `HYPOTHESIS`
- `UNKNOWN`
- `CONFLICTING` — 신뢰 가능한 소스 간 결과 충돌

`UNKNOWN`은 0이 아니다.

`No evidence ≠ No demand`
`No observation ≠ No phenomenon`

Missing Evidence 자체를 Graph 상태로 저장한다.

---

## 8. Provenance — 모든 Evidence의 필수 추적정보

가능한 범위에서 다음을 보존한다.

`source_id`
`source_class(O/E/S/R)`
`source_priority`
`owner/publisher`
`dataset/product/engine`
`original_url/file`
`acquired_at`
`publication_date`
`period_start/end`
`frequency`
`geography`
`population/sample`
`measurement_type`
`definition`
`unit`
`methodology`
`sample_size/data_volume`
`granularity`
`license/terms`
`cost/access restriction`
`known_bias`
`limitations`
`quality dimensions`
`confidence`
`raw_or_derived`
`parent_source_id` (파생자료일 경우)
`graph_node/edge`

---

## 9. Raw vs Derived Rule

1. Raw/Microdata가 있으면 우선 확보한다.
2. Raw가 없고 공식/기업 엔진 output만 공개되면 `MODEL_DERIVED` Evidence Node로 저장한다.
3. 파생 output을 raw처럼 취급하지 않는다.
4. 기사/블로그가 공식통계를 인용하면 가능한 경우 원출처까지 역추적한다.
5. 서로 다른 정의의 통계를 숫자가 비슷하다는 이유로 병합하지 않는다.
6. 연도별 설문문항/표본/코드 변경은 methodology regime/break로 기록한다.

---

## 10. Stop Rule — 뒤죽박죽 검색 방지

변수별로 Source Priority Stack을 먼저 만든 후 순서대로 조사한다.

다음 조건이 충족되면 무의미한 추가 검색을 중단할 수 있다.
- 해당 질문을 직접 측정하는 최고권위 Source 확보
- 필요한 기간/지역/세그먼트 coverage 충족
- 방법론/정의 확인
- 중요한 의사결정이면 최소 하나 이상의 독립 Measurement Type으로 교차검증
- 추가 Source의 Expected Information Gain이 낮음

단, Pain/Want/신규트렌드처럼 본질적으로 다원적 VOC가 필요한 항목은 S-source sampling을 계속할 수 있다.

---

## 11. Conflict Rule

신뢰 가능한 Source가 서로 다르면 평균내서 숨기지 않는다.

`CONFLICTING` 상태로 보존하고 다음을 조사한다.
- 모집단 차이
- 조사기간 차이
- 지역범위 차이
- 표본 차이
- 측정방식 차이
- 정의 차이
- 플랫폼 이용자 편향
- 통화/가격/환율 기준

충돌 자체가 중요한 정보일 수 있다.

---

## 12. Temporal Rule

기본 목표는 최소 10년이며 더 길게 제공되면 전체 가용기간을 확보한다.

가능하면:
`YEAR → QUARTER → MONTH → SEASON`

까지 유지한다.

월 데이터가 없는데 월값을 임의 생성하지 않는다. 코로나, 비자정책, 환율충격, 직항노선, K-content hit 등 구조적 사건은 별도 Event/Regime Node로 연결한다.

---

## 13. 18축 적용 원칙

WHO / WHY / WHEN / WHERE / STAY / DO / SPEND / SEARCH / BOOK-PAY / MOVE / PAIN / SATISFACTION / SUPPLY / PLATFORM / MONEY FLOW / ISLAND-BOTTLENECK-ASYMMETRY / OPPORTUNITY / L7

각 축은 다시 핵심 Variable/Question으로 분해하고 **각 Variable마다 O/E/S/R Source Priority를 별도로 정의**한다.

예시:
- `WHO/국적별 입국규모`와 `WHO/여행동반관계`는 서로 다른 Source Stack을 가질 수 있다.
- `WHERE/지역 방문비율`과 `WHERE/실제 이동경로`도 서로 다른 Source Stack을 가진다.
- `SPEND/설문 지출액`과 `SPEND/카드 실거래`는 Measurement Type이 다르므로 병렬 Evidence로 보존한다.
- `PAIN/공식 불편사항 조사`와 `PAIN/실제 리뷰 불만`은 상호 대체가 아니라 교차보완 관계다.

---

## 14. Source Router의 장기 목적

향후 시스템은 질문이 들어오면 자동으로 다음을 판단해야 한다.

1. 어떤 Variable인가?
2. 어떤 Measurement Type이 필요한가?
3. 이 Variable의 O/E/S/R 최적 Source는 무엇인가?
4. 현재 확보된 최고 Source는 무엇인가?
5. Coverage가 충분한가?
6. 독립 교차검증이 필요한가?
7. 어떤 Evidence가 누락됐는가?
8. 다음 Source를 찾는 Expected Information Gain은 얼마인가?

즉 Source Collection 자체를 Intelligence Engine으로 만든다.

---

## 15. Opportunity와 연결

Opportunity 판단에는 Evidence Confidence를 반드시 포함한다.

개념적으로:

`Opportunity = f(Demand, Growth, Pain, SupplyGap, AccessibilityGap, InformationAsymmetry, TransactionCost, WTP, Competition, Economics, EvidenceConfidence)`

단, **현재 수학식과 가중치는 provisional**이다. 충분한 Source Coverage와 실제 분석이 끝난 뒤 데이터 기반으로 설계·검증한다.

SNS buzz 하나만으로 Opportunity를 확정하지 않는다. 반대로 공식통계에 없는 새로운 Pain이 다수 VOC에서 반복되면 `HYPOTHESIS`로 등록하고 E/O/R 근거를 찾아 승격한다.

---

## 16. Research Operating Rule — 항상 적용

새로운 조사 작업은 다음 순서로 시작한다.

1. 질문을 정확히 정의
2. Variable 정의
3. 필요한 Measurement Type 정의
4. 기존 Variable-specific Source Priority 확인
5. 없으면 O/E/S/R 후보를 평가해 Priority Stack 생성
6. 1순위부터 조사
7. Raw/API/download 우선 확보
8. Provenance/Methodology 저장
9. 필요한 경우 독립 Measurement로 Triangulation
10. Confidence 부여
11. Temporal/Causal Graph 연결
12. Missing/Conflict 기록
13. Gap/Island/Bottleneck/Asymmetry 후보 탐지
14. 충분하면 Stop; 부족하면 다음 Priority Source로 이동

---

## 17. 절대 금지

- 검색 상위 결과라는 이유로 Source 우선순위를 정하지 않는다.
- 기사를 원통계보다 우선하지 않는다.
- 플랫폼 리뷰를 모집단 통계로 일반화하지 않는다.
- 검색량을 실제 방문자수로 취급하지 않는다.
- 카드 소비를 전체 외국인 소비와 동일시하지 않는다.
- 이동통신 추정 방문자를 출입국 전수통계와 동일시하지 않는다.
- 평균값만 보고 분포를 버리지 않는다.
- `UNKNOWN`을 0으로 채우지 않는다.
- 정의가 바뀐 10년 데이터를 무조건 하나의 연속 시계열로 합치지 않는다.
- 상관관계를 자동으로 인과관계로 승격하지 않는다.

---

## 18. 이 문서의 우선순위

이 표준은 Source 수집과 Evidence 판단에 관한 **Master Reference**다.

향후 Source Registry, 18-axis matrix, ingestion pipeline, Codex work order, 분석 notebook, Causal Graph, Opportunity Engine, L7 Business Plan은 이 문서를 참조해야 한다.

새로운 더 나은 원칙이 발견되면 이 문서를 버리지 말고 버전업하여 변경 이유와 날짜를 기록한다.
