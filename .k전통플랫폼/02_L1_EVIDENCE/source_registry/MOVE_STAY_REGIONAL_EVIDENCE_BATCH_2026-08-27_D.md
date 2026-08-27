# MOVE / STAY / REGIONAL Evidence Batch D

Date: 2026-08-27
Status: L1 EVIDENCE
Scope: MOVE, STAY, SPEND, SUPPLY, BOOK/PAY, ISLAND/BOTTLENECK/ASYMMETRY

## 1. Seoul foreign-tourist transit pass movement data

### Source
서울교통공사 `외국인 관광객 기간권 일별통행통계`

### Access / format
- 서울열린데이터광장
- CSV
- 연 단위 갱신
- 공개 데이터셋은 2024년 외국인 관광객 기간권 사용자료를 포함

### Variables
- 업무일자
- 시간대
- 호선
- 역명
- 교통카드구분
- 사용자구분
- 사용일수구분(1/2/3/5/7일)
- 승하차건수

### Measurement type
TRANSACTION / MOBILITY PROXY

### Geography
서울교통공사 1~8호선 역 단위

### Interpretation
외국인 관광객 전용 기간권 사용자에 한해 역·시간대 단위 이동활동을 직접 관측할 수 있는 희소한 공식 데이터다. 일반 외국인 전체를 대표하지는 않지만, 여행기간별 이동 패턴과 관광거점 연결을 분석할 수 있다.

### Limitation
- 외국인 관광객 전체가 아니라 전용 기간권 이용자 subset
- 교통카드 미사용 이동, 택시, 렌터카, 일반 T-money 등 미포함
- 2024년부터 관측 가능해 장기 10년 시계열은 불가

### Confidence
HIGH for the defined product-user subset; LOW/MEDIUM for total foreign-tourist movement extrapolation.

---

## 2. Seoul-to-metropolitan outbound rail edge data

### Source
서울교통공사 `외국인 관광객 기간권 일별 유출통계`

### Access / format
- 공공데이터포털
- CSV
- 반기 갱신
- 2025년 상반기 공개

### Variables
- 업무일자
- 시간대
- 승차호선/역
- 하차호선/역
- 교통카드구분
- 사용자구분
- 사용일수구분
- 유출건수

### Definition
서울교통공사 관할 1~8호선에서 승차한 외국인 관광객 기간권 이용자가 서울교통공사 관할 외 수도권 역사에서 하차한 건수.

### Measurement type
TRANSACTION / MOBILITY EDGE PROXY

### Opportunity relevance
기존 관광데이터랩의 지역별 방문량은 지역 단위 존재를 보여주지만, 이 데이터는 일부 사용자군에 대해 실제 출발역→외부 하차역 방향의 이동 edge를 관측할 수 있다. 향후 관광지 POI·숙박·체험 공급과 결합하면 서울 중심 관광객의 수도권 확산 경로를 검증하는 데 유용하다.

### Limitation
- 전용 기간권 이용자 subset
- 2025년 상반기부터 확인된 짧은 history
- 서울교통공사 관할 밖에서 시작한 이동은 포착 범위가 다름

### Confidence
HIGH for recorded card flows; LOW/MEDIUM for population-level inference.

---

## 3. Foreign-card transit payment friction regime change

### Source
서울특별시, `Climate Cards and Single-Journey Transit Tickets Now Accepting International Credit Cards, No Cash Needed`

### Event
2026-03-17부터 서울 지하철 1~8호선 273개 역, 440대 신규 발매기에서 해외 발급 Visa/Mastercard 등 국제 신용·직불카드로 외국인 단기 Climate Card와 1회권 구매/충전 가능.

### Additional fact
국제카드 구매/충전에는 평균 약 3.7% 서비스 수수료가 적용된다고 서울시가 밝힘.

### Measurement type
POLICY / PAYMENT ACCESSIBILITY EVENT

### Graph treatment
`transport_payment_regime` Event Node로 저장해야 하며 2026-03-17 전후의 관광교통 Pain/VOC/이용량 비교 시 regime break로 처리한다.

### Interpretation
이 변화는 그 이전에 현금교환·국내결제수단 의존이 외국인 단기방문객의 교통구매 friction으로 인식될 만큼 충분히 실재했다는 강한 정책 신호다. 다만 정책개선 자체가 과거 friction의 크기를 정량화하지는 않는다.

### Confidence
HIGH for policy/event; HYPOTHESIS for exact conversion or Pain improvement effect until before/after data are analyzed.

---

## 4. Tourism Data Lab movement/spend interpretation rule

### Source
한국관광 데이터랩 지역별 분석 metadata

### Confirmed definitions
- 방문자: 이동통신 기반 외지인 방문자, 일단위 생성. 동일인이 여러 일 방문하면 일자별 중복 집계됨.
- 숙박/체류기간: 월단위 생성. 연속체류는 중복 없이 1명으로 집계.
- 내비게이션 목적지 검색: 차량 이동 기반이므로 실제 방문자수와 다름.
- 관광소비: 신용카드 데이터 기반 업종별 소비.
- 데이터랩 자체가 빅데이터 방문자수·관광소비액은 총량보다는 추세 분석에 사용할 것을 권고.

### Required normalization
`visitor_person_day`와 `monthly_unique_stayer`를 같은 변수로 병합하지 않는다.
`navigation_search`는 `visit`로 치환하지 않는다.
`card_spend`를 total tourism spend로 치환하지 않는다.

### Confidence
HIGH for metadata and definitions.

---

## 5. Jeju regional mobility and foreign visitor platform

### Source
제주관광공사 제주관광빅데이터플랫폼

### Current coverage confirmed
- 외국인 일일 입도객
- 이동통신 빅데이터 기반 외국인 읍면동 방문자 수/증감률
- 제주 관광시장 동향 보고서
- 관광객 방문 패턴 분석
- 외국인 월별 입도 통계
- 과거 방문관광객 실태조사
- 2014년 방문관광객 실태조사까지 공개목록에서 확인 가능

### Historical significance
지역 수준에서는 전국 관광데이터랩보다 더 세밀한 장기 지역자료와 조사보고서를 제공할 가능성이 높아 제주를 `regional deep-dive benchmark`로 사용할 가치가 있다.

### Confidence
HIGH for source availability; actual variable-level history must be acquired/downloaded and normalized before quantitative conclusions.

---

## 6. Jeju 2014-2023 card-spend longitudinal report

### Source
제주관광공사 `제주관광 동향 및 이슈보고서` 공개 설명

### Period
2014-2023

### Measurement
신용카드 오프라인 결제 기반, 내국인/외국인 관광객 소비를 업종·읍면동 단위로 분석.

### Important limitation
공식 설명에서 숙박업·항공권 등 일부 OTA 및 전자상거래 결제가 집계되지 않아 실제 소비보다 과소추정될 수 있음을 명시.

### Consequence
`card_spend_offline_observed`와 `total_spend_estimated`를 분리해야 한다.
OTA 비중이 높은 숙박·항공·체험에서는 카드 빅데이터만으로 Money Flow를 확정하면 안 된다.

### Confidence
HIGH for the limitation and measurement frame.

---

## 7. Seoul supply population baselines

### 7.1 Tourism-business registrations
서울시 관광사업체 등록현황은 관광진흥법상 등록·허가·신고·지정된 관광사업체를 자치구·업종별로 매년 제공하며 2026-05 현재 갱신됨.

Use: `licensed_supply` baseline.

### 7.2 Tourist hotel registration/operation
서울시 관광호텔 등록현황/운영통계는 호텔 수, 객실 수, 등급, 객실이용률 등의 공급량 baseline을 제공하며 정기 연간 갱신됨.

Use: `hotel_registered_capacity`, `room_inventory`, `occupancy`.

### 7.3 Seoul Stay pipeline
2026 서울스테이 지원사업은 서울 소재 외국인관광도시민박업 또는 한옥체험업 중 일정 요건을 충족한 사업자를 대상으로 등록·지원 프로그램을 운영.

Use: official registration/support channel for foreigner-facing small accommodation; does NOT equal all foreigner-ready inventory.

### Required supply stack
`licensed_supply → operational_supply → discoverable_supply → multilingual_supply → bookable_supply → foreign_card_payable_supply → willing_supply → capacity_available_supply`

No single official registry can replace this stack.

---

## 8. New evidence gaps identified

1. **MOVE population gap**: foreign-tourist-specific station flow data exists, but only special-pass users. Total foreign-tourist origin-destination edges remain weak.
2. **Payment conversion gap**: policy evidence proves payment accessibility changed, but we still lack transaction failure rates and before/after conversion by foreign card.
3. **OTA spend blind spot**: official card-spend datasets can undercount OTA/e-commerce-heavy categories. MONEY FLOW needs OTA/provider/PG or survey triangulation.
4. **Supply sellability gap**: registered supplier population is observable; actual foreign-language response, live inventory, payment acceptance, willingness and packageability remain Ground Intelligence variables.
5. **Regional asymmetry in data quality**: Jeju has unusually deep public regional data. Applying Jeju-derived relationships mechanically to other regions would create measurement bias; each region needs source-coverage metadata.

---

## 9. Immediate next acquisition queue

Priority A
- Download and ingest Seoul foreign-tourist pass CSV(s); build station/time/day normalized table.
- Acquire Jeju 2014-2023 tourism card-spend report/file and extract definition/coverage tables.
- Acquire available Jeju annual visitor survey reports back to 2014 and map common variables.

Priority B
- Build Seoul tourism-business annual history and hotel inventory/occupancy history.
- Search Busan/Gyeongju/Gyeonggi for equivalent foreigner-specific mobility and regional survey sources.

Priority C
- Find payment failure, international-card acceptance, foreign mobile-pay acceptance and provider settlement evidence.

## Rule
All KTOF/Island/Bottleneck scoring remains PROVISIONAL. These sources increase measurement coverage but do not justify final weights.
