# 대한민국 방문 외국인 관광객 Knowledge Graph

기준일: 2026-08-27

## 목표
대한민국을 방문하는 모든 외국인 관광객에 대한 사실·행동·소비·니즈·불만·동선·예약·결제·공급·경쟁·규제를 연결하여, 단순한 문서 저장소가 아니라 사업설계를 위한 지식그래프를 구축한다.

## 최상위 노드
### PERSON / SEGMENT
- 국적/거주국
- 연령
- 성별
- 동반형태
- 소득/여행예산
- 첫방문/재방문
- 관심사
- 여행스타일

### TRIP
- 방문목적
- 체류기간
- 입국시기/계절
- 입출국 공항/항만
- FIT/패키지
- 사전예약기간

### REGION / PLACE
- 시도
- 시군구
- 관광권역
- 관광지
- 상권/동네
- 이동경로

### BEHAVIOR
- 검색
- 콘텐츠 소비
- 비교
- 예약
- 결제
- 현지 이동
- 번역
- 후기 작성
- 재방문

### SPEND
- 총지출
- 1인당 지출
- 숙박
- 음식
- 쇼핑
- 뷰티
- 의료/웰니스
- 교통
- 관광/체험
- 엔터테인먼트

### NEED / WANT / PAIN / DELIGHT
- 필수조건
- 선호경험
- 예약장벽
- 현지 불만
- 만족요인
- 추천/재구매 요인

### SUPPLY
- 숙박
- 한옥/전통숙박
- 문화체험
- 음식
- 웰니스
- 의료
- K-Beauty
- 교통
- 가이드
- 쇼핑
- 축제/공연

### PRODUCT / JOURNEY
- 단품
- 반일
- 1일
- 1박2일
- 다지역 일정
- 테마 Journey
- 가격
- 수용인원
- 언어
- 취소정책

### CHANNEL / PLATFORM
- 검색엔진
- SNS
- OTA
- 체험플랫폼
- 지도
- 번역
- 결제
- 여행사
- 커뮤니티

### FRICTION / VALUE_CHAIN
Discover → Trust → Compare → Bundle → Book → Pay → Navigate → Language → Experience → Support → Review → Retention

### ECONOMICS
- 공급가
- 판매가
- 수수료
- Package margin
- CAC
- PG 비용
- CS/환불비용
- Contribution Margin
- LTV

### LEGAL
- 여행업
- 통신판매
- 결제
- 개인정보/국외이전
- 의료관광
- 광고/표시
- 소비자보호

## Edge 예시
- Segment VISITS Region
- Segment SPENDS_ON Category
- Segment PREFERS Experience
- Segment COMPLAINS_ABOUT Friction
- Segment USES Platform
- Region CONTAINS Supply
- Supply SELLS Product
- Product BUNDLES Supply
- Product SOLVES Friction
- Platform DISTRIBUTES Product
- Product GENERATES Margin
- LegalRule CONSTRAINS Product

## L0–L7 연결
각 노드와 Edge는 단순 주장으로 생성하지 않는다.
- L0: 원자료
- L1: 검증 Evidence
- L2: 패턴
- L3: 사업 Insight
- L4: 검증가설
- L5: 전략결정
- L6: 실행계획
- L7: 사업계획 Claim

## 목표 질문
이 그래프가 충분히 채워지면 다음 질문에 데이터로 답해야 한다.
1. 어느 국가/세그먼트가 가장 큰 시장인가?
2. 어느 고객이 가장 높은 객단가와 마진을 주는가?
3. 어느 지역과 상품을 먼저 공급망으로 묶어야 하는가?
4. 외국인이 한국여행에서 가장 많이 겪는 병목은 무엇인가?
5. 기존 플랫폼이 해결하지 못하는 연결부는 어디인가?
6. 어떤 Journey 조합이 고객 만족과 사업 수익을 동시에 최대화하는가?
7. 어떤 국가에는 어떤 콘텐츠/채널/가격이 맞는가?
8. 어떤 규제가 확장을 제한하는가?
9. 어떤 데이터와 공급자 관계가 장기 Moat가 되는가?

## 최종 산출
`국가 × 세그먼트 × 지역 × 행동 × 소비 × 니즈 × 공급 × 상품 × 채널 × 병목 × 경제성 × 규제`를 연결한 대한민국 Inbound Tourism Digital Twin을 목표로 한다.
