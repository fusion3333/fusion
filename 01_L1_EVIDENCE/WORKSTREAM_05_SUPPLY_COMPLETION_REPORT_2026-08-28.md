# 5번 전국 관광공급 통합 — 완료보고서

기준일: 2026-08-28
최종판정: `PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_ENTITY_INGESTION_CONSTRAINTS`

## 1. 이번 작업에서 닫은 범위
5번은 한국 관광공급을 하나의 사업체 수나 하나의 콘텐츠 API로 표현하지 않는다. 다음 서로 다른 관측 우주를 분리한 채 공급 그래프로 연결하는 공개소스 기준을 마감했다.

1. 법적/행정적 공급: 행안부·지자체 인허가/LOCALDATA
2. 관광사업체 집계: KTO 관광데이터랩
3. 관광산업 모집단/경제구조: KCTI 관광산업조사
4. 시설용량: MCST 전국 관광숙박시설 현황
5. 관광객 노출 콘텐츠: KTO TourAPI/VisitKorea 및 RTO/지자체
6. 기업 유통/발견성: 지도·OTA·액티비티 플랫폼·공급자 공식 채널
7. 잠재/비정형 공급: SNS·VOC·지역 커뮤니티
8. 방법론: OECD/UN Tourism/KCTI/학술연구

## 2. 공식 backbone에서 검증된 핵심

### TourAPI/VisitKorea
공식 공공데이터포털의 KTO 국문 관광정보 서비스는 전국 관광정보를 제공하며, 지역/법정동/분류 코드, 지역·위치·키워드 관광정보, 행사, 숙박, 공통/소개/반복/이미지, 동기화목록, 반려동물 여행 등 15종 약 26만 건을 명시한다. 이는 visitor-facing content universe이며 법적 사업체 census가 아니다.

### 관광산업조사
KCTI 관광지식정보시스템의 2024년 관광산업조사 관광진흥법 기준은 43,928개 사업체, 219,133명 종사자, 27조 6,011억원 매출을 제시한다. 관광산업특수분류 기준은 다른 statistical universe이므로 동일 모집단처럼 합치지 않는다.

### 전국 관광숙박시설
MCST의 2025년 4분기 전국 관광숙박시설 현황은 지자체 제출을 기반으로 지역·업종·등급별 업체 수와 객실 수를 제공한다. 파일은 공개 CSV이지만 집계 capacity이며 query-time room inventory가 아니다. 해당 공개파일의 이용조건도 downstream 재사용에서 보존해야 한다.

### 행정 인허가
LOCALDATA/지자체 인허가는 legal/admin identity와 상태의 핵심 backbone이다. 그러나 등록/영업 상태는 외국인 응대, 언어, 가격, 결제, 예약, 실시간 재고를 증명하지 않는다.

## 3. O/E/S/R 소스검색 규칙의 공급축 구체화
`SUPPLY_SOURCE_SEARCH_MATRIX_OESR_V1.csv`에 공급 질문별 검색처를 고정했다.

- O Official: LOCALDATA/MOIS, data.go.kr, MCST, KTO Data Lab, TourAPI/VisitKorea, KCTI, KOSIS, RTO/지자체
- E Enterprise: 공급자 공식사이트/앱/예약엔진, Google Maps/Travel, Naver/Kakao maps, Booking, Agoda, Trip, Expedia, Airbnb, Klook, KKday, Trazy, Viator, GetYourGuide 등
- S Social/VOC: Instagram, YouTube, TikTok, X, Threads, Reddit, 공개 여행포럼/국가별 커뮤니티 및 플랫폼 리뷰
- R Research: KCTI 연구, OECD Tourism, UN Tourism/IRTS/TSA 방법론, 학술논문 및 검증 가능한 전문연구
- G/N: 전화·이메일·방문·미스터리부킹 및 자체 onboarding/quote/booking/payment telemetry

중요: O/E/S/R은 전역 신뢰도 순위가 아니다. `법적 존재`는 O가 canonical이고, `실제 가격/예약경로`는 E가 더 직접적이며, `숨은 불편/잠재공급`은 S가 발견 센서이고, `분류/인과/국제비교`는 R이 방법론 역할을 한다.

## 4. 공급 상태 사슬
`SUPPLY_ENTITY → LEGAL_REGISTRY → OPERATION_STATUS → VISITOR_CONTENT → PRODUCT → DISTRIBUTION_CHANNEL → FOREIGN_LANGUAGE_DISCOVERABILITY → BOOKABILITY → QUERY_TIME_INVENTORY → OVERSEAS_PAYMENT → TRANSACTION`

5번은 공급 존재·구조와 공개 discoverability를 다루며, 뒤쪽 live sellability 상태를 자동 추론하지 않는다.

## 5. 절대 금지한 등치
- TourAPI 콘텐츠 = 인허가 사업체
- 등록 = 실제 영업
- 영업 = 상품 존재
- 상품 존재 = 외국인 발견 가능
- 발견 가능 = 예약 가능
- 예약 가능 = 특정 날짜 재고 존재
- 객실수 = 판매가능 객실박
- OTA 미노출 = 공급 부재
- SNS 노출 = 합법/상업 공급
- 리뷰수 = 방문객수

## 6. 이번 실행에서 물리적으로 완성하지 않은 것
전국 LOCALDATA + TourAPI + 모든 지역자료를 행단위로 내려받아 하나의 deduplicated supplier master로 materialize하는 작업은 완료했다고 주장하지 않는다. 일부 API는 인증키가 필요하고, 지자체 파일은 스키마/갱신주기/라이선스가 이질적이며, 지도·OTA·SNS는 동적이고 접근약관/비용/쿼리 조건을 가진다. 따라서 다음을 명시적으로 남겼다.

- `SOURCE_VERIFIED_BULK_MASTER_PENDING`
- `SOURCE_VERIFIED_API_KEY_REQUIRED`
- `ROUTE_LOCKED_DYNAMIC_INGESTION_PENDING`
- `CONTRACT_COMPLETE_MATERIALIZATION_PARTIAL`
- `DEFERRED_BY_DESIGN`

이들은 공급 0이 아니며 `MISSING/ACCESS_CONSTRAINED/INGESTION_BACKLOG` 계열이다.

## 7. 왜 이 상태에서 5번 공개소스 탐색을 닫는가
중앙 공식 원장, 산업 모집단, 숙박용량, 관광콘텐츠, 지역공급, 기업 유통, SNS 잠재공급, 연구방법론의 source universe가 모두 정의되었고, 어떤 변수에 어떤 소스를 써야 하는지와 서로 합쳐서는 안 되는 measurement universe가 고정됐다. 추가 무차별 검색보다 이후 가치는 bulk ingestion, entity resolution, time-versioned matching, 그리고 별도 `REAL_SELLABLE_SUPPLY` 검증에서 발생한다.

## 8. 엔진 연결
공급 그래프는 Supplier/LegalEntity/Asset/Product/Experience/Location/OfficialListing/PlatformListing/SocialProfile/OperatingState/CapacityState를 독립 노드/상태로 유지한다. 이후 WHO/WHY/WHEN의 수요와 SEARCH/BOOK_PAY/MOVE/STAY/DO/SPEND/PAIN/SATISFACTION를 붙여 다음 진단을 만들 수 있다.

- `DISTRIBUTION_ISLAND`
- `INFORMAL_OR_MISCLASSIFIED_SUPPLY`
- `COMMERCIALIZATION_GAP`
- `UNDER_DISTRIBUTED_ASSET`

이 진단들은 아직 기회점수나 인과효과가 아니다.

## 9. 최종 결론
5번은 **전국 관광공급의 공개소스 존재·구조·분류·라우팅·그래프 계약을 공개자료 최대치 기준으로 완료**했다. 다만 전국 row-level supplier master와 실제 판매가능공급은 완료했다고 주장하지 않는다. 이 차이를 보존하는 것이 프로젝트의 핵심 측정 규율이다.

다음 번호는 #6 카드·결제 지능이다.
