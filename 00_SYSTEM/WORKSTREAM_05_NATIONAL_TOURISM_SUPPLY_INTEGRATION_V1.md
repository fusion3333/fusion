# 5번 작업 — 전국 관광공급 통합 V1

기준일: 2026-08-28

## 목적
대한민국 관광공급을 단일 숫자나 단일 API로 오인하지 않고, 법적·행정적 공급, 관광산업 통계모집단, 시설용량, 관광객 노출 콘텐츠, 기업/플랫폼 유통, 소셜 잠재공급을 서로 다른 관측 우주로 보존한 뒤 동일 Supplier/Product/Asset graph로 연결한다.

## 최종 판정
`PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_ENTITY_INGESTION_CONSTRAINTS`

이 판정은 공개소스 기반의 공급 존재·구조·분류·출처 라우팅·그래프 계약을 마감한다는 뜻이다. 전국 모든 사업체를 행단위로 이미 dedup한 master가 완성됐다는 뜻은 아니다. live inventory, foreigner usability, overseas payment, 실제 판매가능성은 `REAL_SELLABLE_SUPPLY` 축의 책임이다.

## Source Router — MASTER 규칙 적용
모든 공급 질문은 `O/E/S/R`을 단일 서열로 쓰지 않고 질문별로 최적 source stack을 선택한다.
- O Official: 법적 존재, 인허가, 공식 공급, 시설용량, 공공 관광콘텐츠, 산업통계
- E Enterprise: 지도/OTA/액티비티 플랫폼/공급자 공식채널의 검색·노출·가격·예약·재고·상업경로
- S Social/VOC: 후기, SNS, 커뮤니티의 잠재공급·불편·신뢰·현장언어
- R Research: 공급분류, 관광산업 정의, 비공식/잠재공급, 국제비교 및 방법론
- G Ground: 실제 영업·수용·외국인 대응 여부
- N Native telemetry: 자체 onboarding/quote/booking/payment/attendance

구체 검색처와 변수별 우선순위는 `04_DATA/PUBLIC_MAX/SUPPLY_SOURCE_SEARCH_MATRIX_OESR_V1.csv`에 고정한다.

## 공식 공급 Backbone
1. 행정안전부/지자체 인허가·LOCALDATA: 법적/행정적 공급 identity와 상태의 기본 원장.
2. KTO 관광데이터랩 관광사업체 현황: 행정인허가 기반의 월별/지역·업종 집계 보강.
3. KCTI 관광산업조사: 관광진흥법 기준 및 관광산업특수분류 기준의 사업체·고용·매출 모집단. 서로 다른 statistical universe이므로 합산 금지.
4. MCST 전국 관광숙박시설 현황: 지역·업종·등급별 업체수/객실수 capacity backbone.
5. KTO TourAPI/VisitKorea: 관광객 관점의 관광지·문화시설·행사·레포츠·숙박·쇼핑·음식 등 visitor-facing content와 다국어 discoverability backbone.
6. 공공데이터포털 및 광역/기초 지자체·RTO: 관광시설·축제·한옥·야영·문화·체험 등 지역별 보강.

## Canonical supply families
`ACCOMMODATION; FOOD; TRADITIONAL_CULTURE; CRAFT_ARTISAN; HANBOK; TEMPLE_RELIGIOUS; HERITAGE; PERFORMANCE; FESTIVAL_EVENT; KPOP_HALLYU; BEAUTY; MEDICAL; WELLNESS_HANBANG; SHOPPING; MARKET_LOCAL_LIFE; ALCOHOL_TRADITIONAL_BEVERAGE; NATURE_OUTDOOR; LEISURE_SPORTS; FAMILY_EDUCATION; GUIDE_INTERPRETATION; TRANSPORT_TOUR; MICE; NIGHTLIFE; PHOTO_CONTENT; OTHER_LOCAL_EXPERIENCE`

## Canonical state chain
`SUPPLY_ENTITY → LEGAL_REGISTRY → OPERATION_STATUS → VISITOR_CONTENT → PRODUCT → DISTRIBUTION_CHANNEL → FOREIGN_LANGUAGE_DISCOVERABILITY → BOOKABILITY → QUERY_TIME_INVENTORY → OVERSEAS_PAYMENT → TRANSACTION`

#5가 확정하는 범위는 원칙적으로 `SUPPLY_ENTITY`부터 `VISITOR_CONTENT` 및 공개적으로 관측 가능한 `DISTRIBUTION_CHANNEL`까지다. 이후 상태는 별도 evidence로만 관측하고 #5 공급 존재와 동일시하지 않는다.

## 필수 identity/state fields
`supplier_id, source_supplier_id, legal_name, display_name, supply_family, subtype, region, sigungu, address, coordinates, legal_status, permit_date, closure_suspension_state, observed_at, valid_from, valid_to, source_id, source_class, measurement_type, evidence_grade`

## Entity resolution key
`normalized_name + normalized_address + coordinates + phone + permit/registration id + website_domain + platform_id`

단일 키로 강제 매칭하지 않는다. 충돌은 `CONFLICTING_IDENTITY`, 미확정은 `IDENTITY_UNRESOLVED`로 보존한다.

## 절대 금지
- `TourAPI listing != licensed business census`
- `RegisteredSupply != OperatingSupply`
- `OperatingSupply != DiscoverableSupply`
- `DiscoverableSupply != BookableSupply`
- `BookableSupply != ForeignerUsableSupply`
- `ForeignerUsableSupply != CapacityAvailableSupply`
- `RoomCount != AvailableRoomNights`
- `Platform absence != supplier absence`
- `Social presence != legal/commercial supply`
- 관광진흥법 사업체 수 != 관광산업특수분류 사업체 수

## 시간/버전 규칙
인허가, 휴·폐업, 재개업, 콘텐츠 노출, 플랫폼 listing은 덮어쓰지 않고 event/state version으로 저장한다. 최소 `observed_at`; 가능하면 `valid_from/valid_to`를 보존한다.

## 공개소스 완료 범위
PASS:
- 공식 legal/admin backbone
- tourism-industry population/economic backbone
- accommodation capacity backbone
- visitor-facing content backbone
- multilingual official route
- O/E/S/R source router
- source-universe separation
- canonical ontology/state machine
- entity-resolution contract
- temporal/version contract
- graph integration contract

ACCESS/INGESTION CONSTRAINED:
- LOCALDATA/TourAPI/지역공급의 전국 행단위 완전 bulk master
- 전국 소스간 dedup/entity resolution의 물리적 materialization
- 모든 지역 잠재 artisan/workshop 공급 census
- 대규모 OTA/지도/SNS dynamic snapshot

DEFERRED BY DESIGN:
- live availability/capacity
- foreigner usability
- overseas payment
- conversion/transaction
- supplier willingness/packageability

## 완료 원칙
공개/API/파일로 존재하는 source universe와 정의·키·제약·결합계약을 최대치로 고정했으며, 대량 다운로드/API key/약관/동적플랫폼 제약으로 이번 실행에서 완전 materialize하지 못한 행은 `ACCESS_CONSTRAINED` 또는 `INGESTION_BACKLOG`로 남긴다. 이것을 0이나 공급부재로 해석하지 않는다.
