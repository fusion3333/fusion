# 2번 작업 완료보고 — 상위 15개 출발국 정합화

기준일: 2026-08-28
최종상태: PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_COUNTRY_LIMITS

## 결론
상위15 출발국을 동일한 데이터가 있다고 가정하지 않고 각국 공식 공개자료의 최고 입도까지 재분류했다. 목적국 선택 분석에 직접 강한 국가는 캐나다·호주·영국이며, 대만·인도네시아도 강한 축을 가진다. 나머지는 총출국, 일부 목적국, 지출, 카드, 관광위성계정 등 특정 센서가 강하고 일부 차원이 비어 있다.

## 이번 완료에서 추가한 핵심
- 15개국 공통 변수/정의 계약.
- 국가별 공개최대치와 엔진 등급.
- trips / departures / visits / unique persons / nights / spend / card spend를 분리하는 crosswalk.
- 월·분기·연 자료를 원주기 그대로 보존.
- 목적국이 없는 총출국 자료는 목적지 선택의 분모 후보일 뿐 한국 선택을 직접 설명하지 않는다는 규칙.
- 출발국 mirror와 한국 inbound truth를 서로 다른 센서로 보존.

## 고신뢰 공식 근거 재검증
### 캐나다
Statistics Canada Table 24-10-0081-01은 분기별로 Canadian residents의 country of visit별 visits, nights, expenditures와 province of trip origin을 제공한다. 24-10-0080 계열은 main trip purpose까지 제공한다. 목적국 선택/체류/지출을 동시에 보는 최상급 mirror다.

### 호주
ABS Overseas Arrivals and Departures는 월별 short-term resident returns를 destination country별로 제공한다. 공식 설명상 이는 사람 수가 아니라 international border crossings이며, 이 정의를 그대로 보존한다. 2025-26 연간 분석은 목적국·주거지역·연령·성별·주요 여행목적·중앙 체류기간까지 제공한다.

### 영국
ONS Travel Trends는 UK residents의 해외 visits, spending, nights, purpose를 제공한다. 다국가 방문 시 지출과 체류는 가장 오래 머문 국가에 배정하는 규칙이 있다. 2019 방법론 변경과 2026-05-28 공지된 destination airport assignment 오류를 품질플래그로 유지한다.

### 러시아
Rosstat 관광 페이지에서 2014년 이후 inbound/outbound tourist trips XLSX와 정의 PDF가 2026-08-10 갱신 상태로 공식 제공됨을 확인했다. 지정학·결제체계·국경정책 변화 때문에 체제변화 플래그가 필수다.

### 필리핀
PSA Tourism Satellite Account는 2000~2025 outbound tourism expenditure by product를 공식 Excel로 제공한다. 이는 강한 해외관광 지출 센서이나 목적국별 방문선택 자료로 대체해서는 안 된다.

## 정합화 핵심식
목적국 점유율은 다음 조건이 모두 충족될 때만 계산한다.

`목적국 점유율 = 동일 출발국·동일 기간·동일 여행정의의 목적국 방문건수 / 전체 해외여행건수`

조건 불충족 시 계산하지 않고 `NOT_COMPARABLE`로 둔다.

## 결측 정책
- 공개되지 않음: NOT_PUBLIC
- 이번 조사에서 직접 검증하지 못함: NOT_VERIFIED
- 정의가 달라 비교 불가: NOT_COMPARABLE
- 코로나/정책/방법론 단절: REGIME_BREAK
- 월 자료 없음, 분기/연 자료만 있음: 원주기 유지. 월 보간 금지.

## 남은 것은 2번의 미완료가 아니라 증분 적재
각국이 새 자료를 발표하면 해당 국가 행을 갱신한다. 또한 인증/대용량 파일 접근이 가능한 환경에서는 원파일을 더 적재할 수 있다. 그러나 공개되지 않은 차원을 채우기 위해 추정치를 만드는 작업은 하지 않는다.

## 다음 연결
이 정합화표는 3번 경쟁목적지 비교패널의 출발시장 분모로 사용한다. 특히 한국·일본·대만·태국·싱가포르·베트남·홍콩을 비교할 때, 각 출발국에서 동일 정의의 목적국 방문이 존재하는 경우에만 직접 시장점유율을 계산한다.
