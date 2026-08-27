# Tourism Core Official Sources — Batch B

기준일: 2026-08-27
목적: KTOF 공식 확정 이전 18축 Evidence Coverage 확대. 현 단계에서는 공식/원본 Source를 먼저 채우며 수학적 가중치는 확정하지 않는다.

## 1. 외래관광객조사 원자료
- 기관: 한국문화관광연구원 관광지식정보시스템
- Source: 외래관광객조사 데이터다운로드
- 확인: 2025 원자료 ZIP, 2024 원자료 ZIP 등 연도별 microdata 다운로드 목록 제공.
- 연결축: WHO / WHY / WHERE / STAY / DO / SPEND / SEARCH / BOOK_PAY / PAIN / SATISFACTION
- Evidence class: Tier A / official survey microdata
- 핵심 가치: 하나의 조사체계 안에서 여행 전·중·후 행동을 연결할 수 있는 Backbone.
- 주의: 연도별 조사설계·문항 변경을 methodology regime으로 관리해야 함.

## 2. 한국관광 데이터랩 지역 데이터
- 기관: 한국관광공사
- 확인된 데이터군: 지역별 관광소비, 업종별 관광소비, 전국 대비 관광소비 추이, 성/연령 분포(내국인 항목), 지역화폐 관광소비, 소셜 언급량 등.
- 데이터 기반: 신용카드 등 각 화면에 명시된 원천 기준.
- 연결축: WHERE / SPEND / DO / MONEY_FLOW / PAIN proxy
- Evidence class: Tier A-derived big data
- 주의: 대시보드의 AI 해설이 아니라 원본 데이터와 통계를 Evidence로 사용. SNS 언급량 등은 전체 모집단이 아니므로 추세 proxy로만 사용.

## 3. TourAPI 국문 관광정보 서비스
- 기관: 한국관광공사 / 공공데이터포털
- 형식: REST, JSON+XML
- 확인된 범위: 지역코드, 법정동, 분류체계, 지역/위치 기반 관광정보, 검색, 행사, 숙박, 공통/소개/반복/이미지, 동기화, 반려동물 동반여행 등 15종 약 26만 건.
- 연결축: SUPPLY / WHERE / STAY / DO / SEARCH / PLATFORM
- Evidence class: Tier A official supply backbone
- 활용: 전국 관광 entity master 및 공급 Graph의 기준 entity source 후보.

## 4. TourAPI 다국어 관광정보
- 한국관광콘텐츠랩에서 한국어, 영어, 일본어, 중국어 간체/번체, 독일어, 프랑스어, 스페인어, 러시아어 콘텐츠/OpenAPI 체계 확인.
- 독어 서비스 예: 14종 약 3만 건, JSON+XML, 실시간 업데이트.
- 연결축: SUPPLY / SEARCH / INFORMATION_ASYMMETRY / PLATFORM
- 핵심 파생값 후보: `Korean entity exists` 대비 `foreign-language representation exists` coverage. 동일 entity 매칭이 가능하면 언어별 공급 노출 격차를 직접 측정.

## 5. 추가 공식 TourAPI 데이터군
공공데이터포털의 한국관광공사 API 서비스 목록에서 다음 데이터군 존재를 확인:
- 빅데이터 지역별 방문자수
- 관광지 집중률 방문자 추이 예측
- 기초지자체 중심 관광지
- 관광지별 연관 관광지
- 의료관광정보
- 웰니스관광정보
- 관광지 오디오 가이드
- 두루누비
- 반려동물 동반여행
- 관광사진 공모전 수상작

연결축: WHERE / MOVE / DO / SUPPLY / WELLNESS / MEDICAL / PLATFORM / REVALUE 후보 탐색.

## 현재 분석상 의미
1. 외래관광객조사 microdata = Demand/behavior backbone.
2. 관광데이터랩 = 실제 지역 이동·소비 관찰계층.
3. TourAPI = 공식 Supply/entity backbone.
4. 다국어 TourAPI = 한국어 공급과 외국인 접근 가능 공급 사이의 Information Gap 측정 후보.

따라서 향후 핵심 Join 구조는:
`Tourist segment → motivation/behavior → visited region → spend/activity → official supply entities → foreign-language representation → booking/payment/platform accessibility`

## 아직 비어 있는 중요 영역
- 실제 OTA별 entity coverage와 실시간 bookability
- 해외카드/결제 가능 여부 entity-level coverage
- 공급자별 capacity/margin
- Google/OTA별 rating/review cross-platform entity resolution
- 외국인용 교통 journey friction
- 플랫폼별 commission/CAC/value capture

이 항목들은 공식 원천을 먼저 최대한 채운 후 기업/플랫폼 공개자료와 VOC를 교차검증한다.
