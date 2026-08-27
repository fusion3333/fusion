# 3번 작업 — 경쟁목적지 비교패널 정합화 V1

기준일: 2026-08-28

## 목표
한국을 기준으로 일본·대만·태국·싱가포르·베트남·홍콩을 같은 질문으로 비교할 수 있는 공개자료 최대치 비교구조를 만든다. 단순 입국자 수 비교가 아니라 `출발시장 → 목적지 도착 → 체류 → 지출 → 방문지역 → 목적/활동 → 정보·예약·결제 → 만족/재방문 → 공급/숙박`까지 가능한 범위에서 정합화한다.

## 핵심 원칙
1. 동일한 이름의 지표라도 국가별 정의가 다르면 직접 비교하지 않는다.
2. nationality와 place of residence를 같은 값으로 취급하지 않는다.
3. arrival/visitor/trip/entry/person-night는 별도 측정값으로 보존한다.
4. 월자료를 연자료로 합칠 수는 있어도 분기·연자료를 임의 월분해하지 않는다.
5. 목적지의 공식 방문자 수와 외국카드 소비를 직접 나눌 때는 센서범위와 발급국/거주국 정의가 맞는지 검증한다.
6. 설문 기반 지출과 카드 기반 지출은 별도 계층으로 유지한다.
7. 코로나·국경정책·통계방법 변경 등 체제변화를 regime_flag로 보존한다.
8. 경쟁목적지 비교는 한국의 우열을 미리 가정하지 않고 동일 질문에 대한 공개증거 수준을 비교한다.

## 공통 비교 필드
`destination, period, origin_market, origin_definition, arrivals_or_visits, visit_unit, tourism_purpose, business_purpose, other_purpose, average_stay, nights, expenditure_total, expenditure_per_trip, expenditure_per_day, accommodation_type, regional_visit, regional_nights, activities, information_source, booking_channel, payment_method, satisfaction, revisit_intention, hotel_supply, hotel_occupancy, source_url, methodology, regime_flag, coverage_note, confidence`

## 목적지별 공식 공개최대치
### 한국
한국관광 데이터랩/한국문화관광연구원 기준축. 월×국가 방한객과 외래관광객조사, 이동통신·카드·내비, 지역·숙박·사업체를 병렬 센서로 사용한다.

### 일본
JNTO 월별·연별 방문통계가 강하다. 국적×월 시계열은 2003년부터 현재까지 공식 제공되고, 목적별 방문통계도 장기계열이 있다. 방문자 소비조사·도도부현 방문/숙박·정보원·예약·결제·만족·재방문 차원은 일본의 행동비교 핵심층으로 사용한다.

### 대만
Taiwan Tourism Administration의 국제관광 공식 통계·조사와 출입국 통계를 기준으로 한다. 월/연 방문자 흐름, 거주지/국적, 입국수단, 체류기간, 목적, 지출, 방문특성은 확인 가능한 공식 테이블만 사용한다. 외국카드 소비는 NCCC와 별도 센서로 연결한다.

### 태국
관광체육부 CKAN 공식 공개자료는 2015-01~2023-12 `연×월×대륙×국적×국가×방문자수` CSV/JSON을 제공한다. 이후 최신통계는 별도 공식 공표물과 연결하되 동일 스키마 여부를 검증한다. 행동·지출 깊이는 월 국적입국보다 약하므로 별도 설문/공식 보고서를 통해 보강한다.

### 싱가포르
SingStat/STB 공식자료에서 국제방문객, 체류기간, 호텔 및 관광수입을 사용한다. 방문자 정의, 환승/국경 통과 제외조건, residence/nationality 필드를 자료별로 보존한다. 분기 관광수입을 월자료로 임의 분해하지 않는다.

### 베트남
베트남 관광당국/통계청의 월별 국제방문객과 주요시장·교통수단 자료를 기준으로 사용한다. 행동·지출 세부 차원은 공식 공개수준이 국가별로 다르므로 공백을 유지한다.

### 홍콩
HKTB 월별 Visitor Arrival Statistics, 분기 Purpose of Visit, 분기 Tourism Expenditure Associated to Inbound Tourism, 반기 Visitor Profile, 월 Hotel Room Occupancy, 분기 Hotel Supply를 별도 센서로 연결한다. 2024-10-16부터 입출국카드 제출요건 폐지로 인해 place of residence가 arrival card에서 더 이상 제공되지 않고, 이후 보고서가 nationality 기반으로 전환됐다는 체제변화를 반드시 표시한다.

## 비교가능성 등급
- A: 동일 의미·공식·장기·목적지/출발시장 세분 비교 가능
- B: 공식자료는 강하나 빈도 또는 차원이 일부 다름
- C: 핵심 입국 흐름만 직접 비교 가능, 행동/지출은 별도자료 필요
- X: 정의 불일치 또는 공개근거 부족으로 직접 비교 금지

## 완료조건
1. 7개 목적지의 공식소스·빈도·정의·행동·지출·지역·숙박 차원을 분류한다.
2. 공통 비교필드와 금지규칙을 고정한다.
3. 국가별 통계방법 변경/체제단절을 기록한다.
4. 공개자료 최대치에서 직접 비교 가능한 축과 비교금지 축을 분리한다.
5. 향후 원자료 대량적재가 가능한 공식 다운로드/API 경로를 기록한다.
6. 경쟁목적지 패널의 사용범위를 `시장흐름 / 행동 / 지출 / 지역 / 숙박 / 공급`으로 구분한다.

## 현재 판정
`PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_DESTINATION_LIMITS`

이 상태는 공개자료 기준 비교설계 완료를 뜻한다. 실제 모든 원파일의 대량 복제 완료를 뜻하지 않으며, 국가별 공개한계는 결측으로 유지한다.
