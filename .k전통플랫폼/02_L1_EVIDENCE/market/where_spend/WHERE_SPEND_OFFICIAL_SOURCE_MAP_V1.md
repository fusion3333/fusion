# WHERE + SPEND Official Source Map V1

기준일: 2026-08-27

## 목적
KTOF의 WHERE(지역이동)와 SPEND(국가×지역×업종 소비)를 관광데이터랩 공식 빅데이터로 1차 연결한다.

## 확인된 공식 기능
### 국가별 방한현황(빅데이터)
- 이동통신 기반 전체 외국인 대비 관광객 방문비율
- 기초지자체 단위 관광객 지역별 방문비율
- 신용카드 기반 전체 외국인 관광소비액 및 증감률
- 관광객 지역별 신용카드 소비비율
- 활용: nationality → region → spend edge

### 지역별 관광 현황
- 이동통신 기반 방문자수
- 평균 체류시간
- 평균 숙박일수
- 신용카드 기반 관광지출액
- 업종별 관광소비 추이
- 관광소비 유형 분포
- 내비게이션 목적지 검색/연관관광 흐름
- 활용: region → stay/time → spend/category → linked_visit edge

### 데이터 다운로드
관광데이터랩의 신용카드 지역별 관광지출액 등 빅데이터 화면은 CSV/EXCEL 다운로드 UI를 제공한다. 다운로드 전 활용목적 설문이 요구될 수 있다.

## 별도 고가치 하위영역
### 의료관광
- 외국인 의료 소비액 지역별 추이
- 진료과목별 소비액/소비건수
- 인기 소비 동네
- 활용: nationality/foreign visitor → region → medical category → spend

## Evidence 주의
- 이동통신/신용카드 데이터는 조사통계와 정의가 다르다.
- 절대 방한객 총량과 직접 동일시하지 않는다.
- 광역 합산값은 기초지자체 비율 단순 합산일 수 있어 참고값으로 표시한다.
- 동일 metric도 제공사업자/시점에 따라 coverage가 달라질 수 있으므로 metadata를 보존한다.

## KTOF 연결
WHERE variables: region_visit_share, municipality_visit_share, avg_stay_time, avg_nights, linked_visit
SPEND variables: foreign_card_spend, spend_share_by_region, spend_category, medical_spend

## 상태
SOURCE_VERIFIED / RAW_DOWNLOAD_PENDING

## 다음 수집
1. CSV/EXCEL 다운로드 가능한 전체 기간 확인
2. 최소 10년 또는 최초 제공시점부터 전량
3. 국가×기초지자체 방문비율
4. 국가×지역 신용카드 소비비율
5. 업종별 소비 및 체류특성 결합
