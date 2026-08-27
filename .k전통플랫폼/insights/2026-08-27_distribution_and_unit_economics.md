# L2-L4 — Distribution / Unit Economics Insights

## OB-0101 공식 microdata가 존재한다
2025 외래관광객조사는 원자료와 코드북이 공개되어 있다. 따라서 국가별 고객특성을 기사/요약문으로 추정할 필요가 없고 직접 교차분석할 수 있다.

## IN-0101 Persona 연구방법 변경
기존: 국가별 웹 검색을 모아 Persona 가설 작성.
변경: 외래관광객조사 microdata + 잠재방한 집계표를 Backbone으로 사용하고 OTA/커뮤니티는 행동·불만 보강자료로 사용.

## DE-0101 향후 국가별 Persona의 Evidence hierarchy
1. 외래관광객조사 microdata
2. 잠재 방한여행객 국가별 집계
3. 국가별 방한관광시장 분석
4. 지역 관광공사 조사
5. OTA transaction proxy/reviews
6. Google/Reddit 등 VOC

## OB-0102 글로벌 OTA는 공급자 commission을 핵심 수익원으로 사용
GetYourGuide와 Booking.com 공식 약관에서 거래 완료/예약에 연동된 commission 구조 확인. 실제 percentage는 공급자 계약/계정별로 정해져 공개 자료만으로 일률 숫자 확정 불가.

## IN-0102 K전통플랫폼 BM은 commission 하나로 설계하면 안 된다
경쟁 OTA와 동일한 단품 commission 경쟁을 하면 규모/마케팅에서 불리하다. 차별화 가치는 여러 Island를 하나의 Journey로 연결하는 데 있으므로 경제성은 다음을 분리 측정해야 한다.
- accommodation referral/commission
- experience commission
- journey curation/service fee
- transfer/guide margin
- commerce margin
- repeat/CRM value

## HY-0101 Journey premium hypothesis
고객이 개별 예약 총액보다 일정 premium을 지불할 가능성은 `검증 전`이다. 편의성, 검증, 다국어 CS, 이동 연결, 실패위험 감소가 premium의 근거가 될 수 있으나 실제 willingness-to-pay 실험이 필요.
Status: VALIDATING

## OB-0103 중국 FIT 유통은 서구권과 다르다
공식 중국지역센터 조사에서 방한 예정 중국인 숙박구매가 Agoda/Qunar/Ctrip/Airbnb에 80% 이상 집중.

## IN-0103 하나의 글로벌 GTM으로는 부족
- 영어권/유럽: Google + Booking/Viator/GetYourGuide 계열 행동 검증 필요
- 중국: Ctrip/Trip.com, Qunar, Agoda 및 중국 SNS/결제환경 별도 설계
- 일본: 일본어 검색/OTA/전통매체 영향 별도 검증
- 대만: 번체 중국어 및 근거리 재방문 시장 별도 검증

## OB-0104 공급자 검증은 상품정보만으로 부족
Viator는 PLI를 글로벌 baseline으로 요구. 체험상품의 안전/보험/사업자 신뢰가 OTA 공급망 운영의 핵심 필드임.

## IN-0104 Supplier Master 필드 확장
기존 `이름/주소/가격/리뷰` 외에 다음 필드 필요:
- 사업자/인허가 상태
- 책임보험/안전증빙
- 언어
- cancellation/refund
- capacity
- availability integration
- payout method
- commission willingness
- emergency contact
- accessibility

## 사업계획서 연결
Problem: 한국 문화관광 공급은 분절되어 있고 고객은 다수 채널을 넘나들며 거래비용을 부담한다.
Solution: 검증된 공급자를 연결해 Journey 단위로 discovery-trust-book-pay-navigate-experience를 orchestration.
BM: 단품 OTA 복제가 아니라 orchestration value를 monetization하는 다층 수익모델.
Moat 후보: supplier graph + customer preference graph + journey conversion/outcome data.
