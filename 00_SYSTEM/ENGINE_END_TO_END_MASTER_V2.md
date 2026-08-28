# 한국 인바운드 관광 기회지능 엔진 — 통합 마스터 V2

## 목적
출발국에서 한국을 인지하는 순간부터 여행 후 행동과 다음 사람에게 미치는 영향까지 전체 여정을 모델링한다. 이를 한국의 공급·유통·결제·이동·지역 가치사슬과 대조하여 끊긴 연결, 비싼 연결, 접근 불가능한 공급, 실패 여정, 미실현 수요를 찾아내고 실제 사업·정책 개입으로 전환한다.

## 핵심 원칙
1. 사실 정확성이 범위보다 우선한다.
2. 비율보다 분모를 먼저 확인한다.
3. 점수보다 출처와 측정방식을 먼저 기록한다.
4. 사업기회보다 실제 격차를 먼저 검증한다.
5. 사업화보다 해결가능성과 경제성을 먼저 검증한다.
6. 가중치보다 실제 결과를 먼저 관측한다.
7. 관측값과 추정값, 상관관계와 인과관계를 분리한다.
8. 공개자료로 알 수 없는 것은 모른다고 남긴다.

## 기본 25축
누가 / 왜 / 언제 / 출발국 / 경쟁목적지 / 검색 / 예약·결제 / 이동 / 숙박 / 활동·체험 / 지출 / 불편·민원 / 만족·추천·재방문 / 공급 / 실제판매가능공급 / 플랫폼 / 돈의흐름 / 10년×12개월 / 실패여정 / 현장지능 / 자체행동·거래계측 / 고립·병목·정보비대칭 / 사업기회 / 전체통합 / 경험적최종공식.

## 8개 교차계층
1. 목적지 후보·선택
2. 동행집단 의사결정
3. 예산·지불의사·가격반응
4. 수용량·재고·시간
5. 네트워크효과·사회적확산
6. 반사실·미실현수요
7. 개입비용·인과효과
8. 불확실성 분해

## Source classes
O=Official, E=Enterprise, S=Social, R=Research, G=Ground, N=Native. 세부 정의와 provenance는 `SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V2.md`가 권위문서다.

## 반드시 구분할 것
등록공급 != 실제판매가능공급; 영업중 != 특정시점 재고; 설문지출 != 카드지출; 방문자 != 입국자; 불평건수 != 실패율; 여행자결제액 != 공급자이익 != 지역잔존가치; 조회 != 검색 != 후보편입 != 예약 != 결제 != 실제이용; 상관관계 != 인과효과; 점추정치 != 확정된 진실.

## 현재 완료된 것
- 25개 기본축과 8개 교차계층의 개념·측정 설계
- O/E/S/R/G/N Source Routing
- 공개근거·관측·Graph contract
- Ground/Native/진단/기회평가/통합학습 절차
- 공개자료 8개 workstream의 source-discovery/definition public maximum

## 아직 완료되지 않은 것
- 장기 원자료 대량 적재·정합화
- Foreign Tourist Survey respondent-level crosswalk
- 전국 공급 entity union과 query-time sellability rows
- Ground supplier economics/WTP evidence
- Native behavior/transaction telemetry
- intervention experiments/counterfactual validation
- outcome-trained empirical KTOF(*)

`설계가 거의 완성되었다 != 실전 엔진이 완성되었다`.

## 현재 실행방향
`Public Evidence → Sellability → Ground Economics → WTP → Lost Demand → Native Transaction → Intervention Outcome → Business Case → Investment Decision`

최종 기회객체는 수요, 실제 판매가능공급, 실패지점, 경쟁대체재, WTP, 단위경제, capacity, 규제, 개입비용, 인과상승, 불확실성, provenance를 함께 설명해야 한다.