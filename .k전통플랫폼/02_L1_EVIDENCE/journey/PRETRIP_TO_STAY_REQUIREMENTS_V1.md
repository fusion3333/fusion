# PRETRIP → ARRIVAL → STAY Requirements V1

기준일: 2026-08-27
상태: ACTIVE

## 목적
기존 18축에 흩어진 변수를 실제 관광객 Journey 순서로 연결한다. 특히 해외에서 한국을 처음 인지하는 순간부터 여행형태 선택, 예약, 입국, 체류기간, 숙박시설까지 하나의 연속 Edge로 만든다.

`AWARENESS → INTEREST → INFORMATION → CONSIDERATION → BOOKING → TRAVEL_FORM → ARRIVAL → LENGTH_OF_STAY → ACCOMMODATION → ACTIVITY/SPEND`

## 반드시 확보할 변수
### AWARENESS / DISCOVERY
- 한국을 처음/주요하게 알게 된 계기
- K-content 접촉 여부 및 콘텐츠 종류
- 친구·친지/구전
- SNS/동영상/블로그
- 검색엔진
- 여행사/OTA
- 관광청·공식 관광사이트
- 방송·기사·광고·박람회
- 과거 방문경험
- 국가별/연령별/성별 차이

### INFORMATION / CONSIDERATION
- 여행 전 한국 관련 정보 접촉 경로
- 정보검색 채널
- 부족했던 한국 관련 정보
- 한국 선택 이유
- 경쟁 목적지와 비교
- 방한 고려 활동/관광 인프라
- 국제항공권/패키지 예약 시기

### BOOKING / TRAVEL FORM
- 개별여행(FIT)
- 단체 패키지
- 에어텔/부분 패키지/하이브리드
- 개별 예약 항목: 숙박, 철도, 관광지, 공연/티켓 등
- 예약 플랫폼/여행사/공식사이트
- 국가별 여행형태 비율과 선호 차이
- 여행형태별 소비·체류·만족 차이

### ARRIVAL
- 출발 국가/거주국
- 입국항/공항
- 항공/선박
- 직항/환승 가능 시 확보
- 항공 노선/좌석공급과 방한수요 관계

### LENGTH OF STAY
- 총 체류일수 원자료
- 체류기간 구간별 분포
- 평균/중앙값
- 국가별/여행형태별/방문목적별/재방문별 차이
- 시도별 체류일수

### ACCOMMODATION
- 호텔
- 모텔/여관
- 펜션
- 콘도/리조트
- 유스호스텔
- 캠핑
- 연수원/수련원
- 전통 한옥 숙박시설
- 게스트하우스/도시형 민박
- 농촌민박
- 자연휴양림
- 가족/친지집
- 무박/기타
- 숙박시설별 숙박기간
- 시도별 주요 숙박시설
- 가격/예약채널/평점은 공급·OTA Graph와 별도 연결

## 공식 핵심 Source
1. 외래관광객조사 — 국가승인통계 제314002호. 여행 전/여행 중/여행 후 문항으로 한국 선택 이유, 관심 계기, 정보 접촉, 부족정보, 예약시기, 개별예약, 여행형태, 체류일수, 시도별 체류, 숙박시설, 지출, 만족/재방문을 연결 가능.
2. 외래관광객조사 원자료/코드북 — 2025 원자료 ZIP + 코드북 XLSX 공식 제공. 장기 harmonization 필요.
3. 한국관광통계 입국통계 — 국적/입국항/목적 등 ARRIVAL backbone.
4. 항공·공항 공식 통계 — 노선/공급/입국 경로 보강 대상.
5. 서울 및 지역 외래관광객 조사 — 국가 전체 통계와 지역 행동을 교차검증하는 보조 Source.

## 확인된 변수 존재 Evidence
- 2022 코드북에 총 숙박기간, 총 체재기간, 체재기간 category, 주요 이용 숙박시설, 숙박시설별 숙박기간, 17개 시도별 숙박시설 변수가 존재.
- 체재기간 category 예: 1~3일 / 4~7일 / 8~10일 / 11~30일 / 31~60일 / 61~90일 / 91일 이상(연도별 조사대상 정의 변화 확인 필수).
- 숙박유형에는 전통 한옥 숙박시설이 별도 category로 존재.
- 2023년 이후 공식 조사개요에 여행 전 정보접촉경로·부족정보·예약시기·개별예약, 여행 중 여행형태·총/시도별 체류일수·시도별 주요 숙박시설이 명시됨.

## Methodology 주의
2020~2022는 COVID-19로 표본설계 없이 문항 축소/변경된 예외 regime. 2022 여행형태·시도별 체재기간·숙박시설 문항 추가, 2023 문항 확대. 장기 시계열은 methodology_regime flag 없이 직접 연결 금지.

## 분석 후 만들어야 할 Matrix
- nationality × awareness_channel
- nationality × information_channel
- nationality × travel_form
- nationality × booking_lead_time
- nationality × stay_length_bucket
- nationality × accommodation_type
- travel_form × stay_length × spend
- travel_form × satisfaction × revisit
- awareness_channel × activity × spend
- kcontent_trigger × travel_form × region × spend
- accommodation_type × region × stay_length

## 현재 판단
이 영역은 기존 18축에 존재하지만 `해외에서 어떻게 한국을 알게 됐는가 → 어떻게 계획/예약했는가 → 어떤 형태로 왔는가 → 며칠 머물고 어디서 잤는가`라는 연속 Journey 관점이 약했다. 따라서 독립적인 PRETRIP→STAY Journey layer로 승격한다.

## 다음 수집 Gate
1. 2015~2025 여행형태(FIT/단체/에어텔) 연도×국가 Matrix
2. 2015~2025 체류기간 평균 + bucket 분포
3. 숙박시설 유형별 비율 + 국가별 분포
4. 여행 전 정보접촉/검색 채널 장기 공통문항 harmonization
5. K-content/구전/SNS/검색/여행사/OTA별 Awareness→Booking 경로
6. 여행형태별 소비·체류·만족·재방문 차이
