# ORIGIN MARKET GLOBAL MIRROR FRAMEWORK V1

Date: 2026-08-27
Status: MASTER / EXECUTION STANDARD

## 1. Decision
Korea-tour의 모든 18축 및 Traveler Lifecycle 기준을 한국 인바운드에만 적용하지 않는다. 핵심 방한 Origin Market에도 동일한 좌표계를 가능한 범위에서 Mirror 적용한다.

기존:
Korea Inbound → Korea Journey

확장:
Origin Market → Destination Choice → Korea Awareness/Consideration → Korea Booking → Korea Journey → Return → Review/Rebuy/Revisit

## 2. 목적
한국 방문자만 보는 Selection Bias를 줄이고 다음을 측정한다.
- 해당 국가 전체 Outbound 시장 크기
- 해외여행 성향과 빈도
- 목적지별 점유율
- Korea Capture Rate
- 경쟁 목적지와의 상대성과 Switching
- 한국 관심은 높지만 실제 방문으로 전환되지 않는 Latent Demand
- 한국 선택 전/후의 Friction
- 한국의 Underpenetration

## 3. Global Mirror Axes
기존 18축을 Origin-country 관점으로 재정의한다.
1 WHO: 해외여행자 국적/거주지/연령/성별/소득/가구/직업/교육/출발지역
2 WHY: 해외여행 목적/목적지 선택이유/K-content 및 국가이미지/친지 영향
3 WHEN: 월/계절/휴일/예약시점/10년+ 변화
4 WHERE: 전체 해외 목적지와 한국 내 목적지 선택
5 STAY: 목적지별 체류일수/숙박형태/가격
6 DO: 목적지별 활동/체험
7 SPEND: 해외여행 총지출/목적지·업종별 지출/WTP
8 SEARCH: 검색엔진/SNS/공식사이트/콘텐츠/여행사/OTA
9 BOOK-PAY: FIT/Package/Hybrid/예약채널/리드타임/결제/환전
10 MOVE: 출발공항/직항/환승/항공사/현지 교통
11 PAIN: 출국 전/예약/비자/언어/가격/결제/현지 Pain
12 SATISFACTION: 목적지 만족/추천/재방문
13 SUPPLY: Origin market에서 판매되는 한국상품 및 경쟁목적지 상품
14 PLATFORM: OTA/여행사/검색/지도/SNS의 목적지 유통 지배력
15 MONEY FLOW: 항공/OTA/여행사/PG/환전/수수료/CAC/패키지 마진
16 ISLAND-BOTTLENECK-ASYMMETRY: 한국 관련 정보·상품·항공·예약·결제 단절
17 OPPORTUNITY: Korea underpenetration / unmet demand / segment opportunity
18 L7: 실제 acquisition/product/distribution/business experiment

## 4. New Origin-market variables
- TotalOutboundTrips
- OutboundTravelers
- OutboundRatePerCapita
- TripsPerTraveler
- DestinationShare
- KoreaCaptureRate
- KoreaShareChange
- CompetitorDestinationShare
- DestinationSwitching
- AverageOutboundSpend
- AverageOutboundNights
- FITShare / PackageShare / HybridShare
- TravelParty
- OriginRegion
- BookingLeadTime
- OutboundSeasonality
- AirSeatSupply
- DirectFlightConnectivity
- AirfareIndex
- FX
- VisaFriction
- KoreaAwareness
- KoreaConsideration
- KoreaSearchShare
- KoreaBookingIntent
- KoreaVisitIntent
- KoreaActualVisit
- KoreaUnderpenetrationGap

## 5. Two-sided observation rule
모든 핵심 Origin은 가능하면 양방향으로 본다.
A. Korea-side: 법무부/한국관광통계/외래관광객조사/잠재방한여행객조사/관광데이터랩 등
B. Origin-side: 해당국 통계청/관광청/출입국/교통·항공/중앙은행/공식 resident travel survey 등

서로 같은 개념으로 보이더라도 Measurement Type과 정의가 다르면 합치지 않는다. Crosswalk 후 병렬 Evidence로 유지한다.

## 6. International comparability layer
각국 원자료 위에 OECD Tourism Statistics, UN Tourism/IRTS/TSA 등 국제 표준 계층을 둔다. OECD는 outbound tourism을 resident visitor가 reference country 밖에서 수행하는 활동으로 정의하고, resident/household travel survey 등 demand-side source를 주요 원천으로 설명한다.

국가별 정의 차이, visitor/tourist/trip/departure 차이, same-day 포함 여부, residence vs nationality, border vs survey, calendar/fiscal year 차이를 methodology metadata로 기록한다.

## 7. Source priority by country-variable
국가별로 하나의 고정 Source ranking을 쓰지 않는다.
각 Variable마다:
O1~O5 = Origin official
E1~E5 = Enterprise
S1~S5 = Social/VOC
R1~R5 = Research/international harmonization
을 별도 지정한다.

## 8. Initial market scope
1차는 최신 확정 한국 인바운드 상위 15개 Origin Market을 대상으로 한다. 순위는 한국 공식통계로 매년 재산정한다. 시장 중요도가 높은 국가가 TOP15 밖이어도 strategic watchlist로 추가할 수 있다.

KTO의 2025 국가별 방한관광시장 분석은 중국, 일본, 대만, 미국, 홍콩, 필리핀, 베트남, 싱가포르, 인도네시아, 태국, 말레이시아, 캐나다, 호주, 러시아, 인도 등 핵심시장을 포함해 26개국을 이미 분석하므로 Korea-side starting backbone으로 사용한다.

## 9. Research execution sequence
1) 2025 TOP15 확정
2) 국가별 official source inventory
3) 각국 18축/Traveler lifecycle mirror matrix 생성
4) 최소 10년+ outbound 원자료 확보
5) destination-level matrix 구축
6) Korea vs competitor destinations crosswalk
7) Korea-side inbound evidence와 reconciliation
8) missingness/definition break 기록
9) enterprise/SNS로 official blind spot 보강
10) origin-country opportunity hypotheses 생성

## 10. Derived hypotheses — NOT final formulas
아래는 최종 수학식이 아니라 검증할 개념이다.
- KoreaCaptureRate ≈ Korea-bound resident trips / total outbound resident trips
- KoreaUnderpenetrationGap ≈ expected Korea demand - observed Korea demand
- DestinationSwitching: 경쟁 목적지 share 변화와 Korea share 변화의 관계
- LatentKoreaDemand: awareness/interest/search/intent는 높지만 actual visit가 낮은 상태

분모·분자 정의가 동일하지 않으면 계산하지 않는다.

## 11. Strategic effect
이 확장으로 시스템은 '한국에 온 사람 분석'에서 '세계의 여행자가 여러 목적지 중 왜 한국을 선택하거나 선택하지 않는가'를 분석하는 Meta-Intelligence로 확장된다.

Global Origin → Destination Choice → Korea Journey → Ground Supply → Opportunity → Experiment → Outcome
