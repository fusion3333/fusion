# 카드·결제 지능층 마스터 V1

기준일: 2026-08-28

## 목적
관광객의 실제 거래를 `출발국 → 카드/결제망 → 목적지 → 지역 → 업종/상품 → 거래건수 → 거래액 → 객단가 → 결제경로 → 환율/수수료 → 공급자 정산`으로 연결한다.

이 계층은 기존 SPEND(지출), BOOK_PAY(예약·결제), MONEY_FLOW(돈의 흐름), ORIGIN_TOP15(출발국 상위15), COMPETITIVE_DESTINATION(경쟁목적지), FAILURE_JOURNEY(실패여정)를 가로지르는 거래 센서다.

## 절대 혼합 금지
- 특정 카드사 소비 ≠ 전체 카드소비
- 전체 카드소비 ≠ 전체 관광지출
- 승인 거래액 ≠ 여행예산 ≠ 최대 지불의사
- 카드 발급국 ≠ 국적 ≠ 거주국
- 카드 사용 지역 ≠ 숙박 지역 ≠ 실제 방문 전체 동선
- 카드 거래건수 ≠ 관광객 수
- 온라인 해외가맹점 결제 ≠ 목적지 현장소비
- 환불 전 승인액 ≠ 최종 순매출
- 카드망 관측점유율 ≠ 시장 전체 점유율

## 표준 관측 단위
가능한 경우 다음 필드를 보존한다.

`period, origin_country_or_issuer_market, destination_country, destination_region, merchant_category, product_or_merchant, card_network, issuer_or_acquirer, channel, card_present_flag, ecommerce_flag, transaction_count, gross_amount, refund_amount, net_amount, currency, fx_basis, average_ticket, fee_rule, source_scope, observed_at, methodology, coverage_limit, provenance_url, confidence_note`

없는 값은 추정해서 채우지 않는다.

## 데이터군
### 1. 한국 인바운드 카드소비
한국관광 데이터랩 외국인 카드 관광소비, 카드사/매입사/데이터사업자의 공개자료, 정부·지자체의 카드 기반 관광소비 자료를 우선한다. 지역×업종×출발시장×월 입도를 최대한 확보하되 특정 카드 관측치를 전체 관광소비로 오인하지 않는다.

### 2. 글로벌 카드망
Visa, Mastercard, American Express, JCB, UnionPay, Discover/Diners 등 공식 관광·경제·결제 데이터 상품과 공개 보고서의 제공 차원, 역사기간, 공개/유료/API/제휴 여부를 등록한다. 공개 원자료와 상업 데이터상품을 엄격히 구분한다.

### 3. 출발국 상위15 카드 거울
일본, 중국, 대만, 미국, 홍콩, 필리핀, 베트남, 싱가포르, 인도네시아, 태국, 말레이시아, 캐나다, 호주, 러시아, 영국에 대해 중앙은행·금융감독기관·카드협회·공동처리망·주요 발급사의 해외 카드소비 공개자료를 조사한다.

### 4. 경쟁목적지 외국카드 소비
일본·대만·태국·싱가포르·베트남·홍콩에서 외국 카드소지자의 지역·업종·거래액·건수 공개자료가 있는지 조사하여 한국과 비교한다.

## 확인된 강한 공개 사례: 대만 NCCC
대만 연합신용카드처리센터(NCCC)는 외국 카드소지자의 대만 내 신용카드 소비를 CSV로 공개한다. 2026-08 확인 기준 총 52개 항목을 월별 갱신한다고 명시하며, 전체 소비뿐 아니라 음식·의류·숙박·교통·문화/오락·백화점 등 업종, 타이베이·신베이·타오위안 등 지역, 전자상거래(EC) 금액·건수를 분리한 공개 파일이 확인된다.

또한 대만 카드소지자의 해외소비에 대해 지역별 `해외소비 상위10 유형` 금액·건수 CSV가 공개되고 월별 갱신된다. 이는 출발국 거울과 경쟁목적지 소비 비교의 강한 후보 센서다.

공식 출처:
- NCCC 외국카드 소비형태: https://www.nccc.com.tw/wps/wcm/connect/zh/home/openinformation/NCCCData/Foreigncardconsumption
- NCCC 해외소비 상위10(건수): https://www.nccc.com.tw/wps/wcm/connect/zh/home/openinformation/CreditCardData/Top10ForeignCardConsumptionCount
- NCCC 해외소비 상위10(금액): https://www.nccc.com.tw/wps/wcm/connect/zh/home/openinformation/CreditCardData/Top10ForeignCardConsumptionPrice

## 카드 데이터가 답할 질문
1. 어느 출발시장의 실제 소비가 어느 지역·업종으로 이동하는가?
2. 방문객 증가와 소비 증가가 같이 움직이는가?
3. 객단가가 높은 시장은 어디인가?
4. 특정 시장에서 숙박·교통·체험·쇼핑 구성은 어떻게 다른가?
5. 경쟁목적지 대비 한국의 카드소비 포획력이 어떻게 변하는가?
6. 결제수단·해외카드·환율·수수료·환불 마찰이 구매전환을 막는가?
7. 관광객 지불액 중 플랫폼·결제·환전 비용을 거쳐 공급자와 지역에 얼마가 남는가?

## 실행 순서
1. 한국 카드/관광소비 공개 원자료 등록 및 적재
2. 글로벌 카드망 공식 데이터제품 전수등록
3. 상위15 출발국 카드 공개자료 전수조사
4. 경쟁목적지 외국카드 소비자료 전수조사
5. 공통 스키마 정합화
6. 월×출발국×목적지×지역×업종 패널 생성
7. 관광객 수·숙박·이동·검색·환율·항공 패널과 연결
8. 돈의 흐름과 결제실패 계층에 연결

## 품질 규칙
모든 데이터행에 `관측범위`, `대표성`, `발급국/거주국/국적의 정의`, `카드망 범위`, `현금·계좌이체·간편결제 미포착`, `온라인 거래 포함여부`, `환불 반영여부`, `명목/실질 금액`, `갱신일`을 가능한 한 기록한다.

## 현재 상태
설계: 완료.
대만 NCCC 공개원천: 공식 공개경로 확인 완료.
한국/글로벌망/상위15/경쟁목적지: 전수조사 및 실제 원자료 적재 진행 대상.
