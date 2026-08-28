# 4번 10년×12개월 사건기록 — 최종 완료보고서

기준일: 2026-08-28
최종 판정: `PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_ACCESS_CONSTRAINTS`

## 결론
4번은 공개자료 기반공사 범위에서 닫는다. 2015-01~2026-08 140개월 월축, 사건 원자 스키마, 인과상태 계약, 0/missing 계약, 공식 검증 사건 장부, 통계·정책 체제단절 장부, 연속형 공변량 공식 원출처 레지스트리, 접근제약/비공개/미검증 결측지도를 GitHub에 고정했다.

완료는 '빈칸을 추정값으로 채움'을 뜻하지 않는다. 공식 bulk가 존재하지만 현재 커넥터가 ZIP/대화형 Excel/API 실행을 직접 수집하지 못하는 값은 `ACCESS_CONSTRAINED`; 공개 비교자료가 약한 좌석·항공운임·호텔가격은 `NOT_PUBLIC_OR_FRAGMENTED`; 전기간 정부 캘린더가 아직 확보되지 않은 출발국 휴일은 `NOT_VERIFIED_FULL`로 보존했다. 이 구분 자체가 4번의 품질 산출물이다.

## 실제 구축된 핵심
1. `MONTH_SPINE_2015_2026M08_V1.csv` — 140개월 유일 월키.
2. `TOURISM_EVENT_LEDGER_VERIFIED_V1.csv` — MERS, 중국 단체관광 제한/재개, 평창, COVID 체제, K-ETA 도입/면제/연령변경, 2023-2024 Visit Korea Year, Korea Grand Sale 등 공식 검증 사건.
3. `STATISTICAL_REGIME_LEDGER_V1.csv` — 정상시장과 분리해야 하는 MERS/COVID, 중국 단체관광 채널, K-ETA treatment, FX/항공 정의를 별도 체제 장부로 고정.
4. `EVENT_COVARIATE_SOURCE_REGISTRY_V1.csv` — BOK ECOS, BIS bilateral FX, BIS NEER/REER, MOLIT, KAC, 출발국 휴일, K-ETA, MCST/KTO/MOFA 등 공식 원자료 경로와 정의.
5. `WORKSTREAM_04_COVERAGE_AND_GAPS_V1.csv` — 무엇이 적재됐고 무엇이 공개지만 접근제약이며 무엇이 비공개/미검증인지 machine-readable하게 분리.

## 이번 마감에서 보강한 중요 사실
- 2015 MERS를 핵심 shock/regime으로 추가했다. KTO 2015 관광통계는 1~5월 방한객이 전년동기 대비 +10.7%였으나 MERS 확산기 6~8월은 -40.0%였다고 명시하고, 7월 28일 정부 종식 발표 이후 회복구간을 별도로 설명한다. 따라서 MERS 월은 정상 계절관측으로 취급하지 않는다.
- 2023-04-01 K-ETA 한시면제는 단순 `selected markets`가 아니라 공식 22개 국가/지역 roster를 사건행에 보존했다. 프로젝트 상위15 중 일본·대만·홍콩·싱가포르·미국·캐나다·호주·영국은 직접 treatment이며, 태국·말레이시아는 지속 K-ETA 적용, 중국·베트남·필리핀·인도네시아 등은 K-ETA 비대상 비자시장으로 treatment 구조가 다르다.
- BIS 공식 포털에서 한국 broad REER `M.R.B.KR`, broad NEER `M.N.B.KR`를 확인했다. 월별, 비계절조정, 2020=100이며 지수 상승은 원화 절상을 뜻한다. BIS는 bilateral FX와 EER 전체 topic을 CSV/SDMX ZIP으로 bulk 제공한다.
- KAC 공식 항공통계는 월별 시계열 조회와 Excel 다운로드를 제공한다. 그러나 운항편·여객은 좌석공급과 동일하지 않으므로 seat capacity로 재명명하지 않는다.

## 접근제약을 미완료로 숨기지 않는 이유
BIS bulk CSV/SDMX는 공식 공개지만 현재 웹 커넥터가 `application/zip`을 직접 가져오지 못한다. KAC/MOLIT의 일부 대량값은 대화형 조회/Excel export를 요구한다. 이런 경우 숫자를 수작업 전사하거나 비공식 미러로 대체하면 재현성과 오류통제가 무너진다. 따라서 공식 경로와 series identity를 고정하고 실행 가능한 데이터 파이프라인에서 기계 적재하도록 backlog로 넘긴다.

## 인과 사용 규칙
- 사건 존재 ≠ 관광 영향.
- 검색/조회/콘텐츠 흥행 ≠ 방한객 증가의 원인.
- 운항/좌석 증가 ≠ 수요 증가.
- 환율 변화 ≠ 목적지 선택의 단독 원인.
- COVID/MERS는 정상시장과 분리.
- 중국 단체관광 제한은 중국인 전체 여행금지가 아님.
- K-ETA는 시장별 treatment가 다르므로 ALL dummy 금지.
- 공휴일은 법정휴일과 실제 여행가능 연휴를 별도 파생.
- 없는 데이터와 검증된 0을 절대 혼동하지 않음.

## 4번이 이후 엔진에 주는 것
향후 `국가×월 방한객` 또는 경쟁목적지 결과변수 옆에 환율/REER, 항공, 휴일, 입국정책, 외교·감염병 shock, 대형행사, 관광정책을 시간정렬할 수 있다. 특정 월의 증감을 단일 원인으로 설명하는 대신 여러 외생변수와 regime을 동시에 통제하고, 정책 시행일과 대조시장을 이용한 준실험 후보를 만들 수 있다.

## 남은 항목의 성격
`WORKSTREAM_04_COVERAGE_AND_GAPS_V1.csv`에 남긴 FX 실제 bulk 값, 전기간 휴일 원자일자, 항공 Excel bulk, CPI/유가 등은 4번의 설계 미완성이 아니라 **기계 수집 backlog**다. 좌석·항공운임·호텔가격처럼 공개 비교자료가 약한 항목은 향후 상업데이터/제휴/자체관측 후보로 넘긴다. 콘텐츠 shock은 관광 연결근거가 생기기 전에는 causal event로 승격하지 않는다.

## 최종 판정
`PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_ACCESS_CONSTRAINTS`

4번의 공개자료 구조·정의·검증·결측통제 기반공사는 완료로 판정한다. 다음 본 작업은 **5번 전국 관광공급 통합**이다.