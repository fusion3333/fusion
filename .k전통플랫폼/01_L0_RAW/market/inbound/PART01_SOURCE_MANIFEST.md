# PART 01 — Inbound Arrivals Source Manifest

기준일: 2026-08-27

## Primary source 1 — 관광지식정보시스템 입국관광통계
- 기관: 한국문화관광연구원 / 한국관광공사
- 성격: 승인통계 한국관광통계(승인번호 314004)
- 자료범위: 2005-01 ~ 2026-07 웹 조회 가능
- 주기: 월
- 다운로드: 엑셀 내려받기 지원
- 세부축: 년/월, 성별, 목적별, 나이별, 입국항, 출국항, 대륙/국가, 직업 등
- 중요 정의: 법무부 출입국통계를 그대로 쓰는 것이 아니라 UNWTO 권고와 한국관광통계 정의에 따라 비여행자 등을 제외/가공. 해외거주 교포·승무원 처리도 법무부 외국인 입국자와 다름.
- 확보 목표: 최소 2015-01~2025-12 월별 전체+국가별, 가능하면 2005~현재 전체 기간
- 상태: SOURCE_VERIFIED / BULK_DOWNLOAD_PENDING

## Primary source 2 — 한국관광통계 연보/보고서
- 2019 Korea Tourism Statistics PDF에서 2015~2019 총계 및 주요국별 연도 시계열 확인
- 2021 Korea Tourism Statistics PDF에서 팬데믹 전후 series 확인
- 활용: Excel/Web 값 교차검증 및 정의/주석 보존
- 상태: VERIFIED_SOURCE

## Primary source 3 — 법무부 출입국·외국인정책 통계월보/통계연보
- 기관: 법무부 출입국·외국인정책본부
- 월보: HWP + 외국인입국자 XLSX + 체류외국인 XLSX + 용어 PDF
- 연보: PDF 전체/개요 + 통계표 Excel ZIP + 용어 PDF
- 2025 연보는 통계표 Excel ZIP 공식 제공
- 역할: 한국관광통계의 upstream source 및 외국인 전체 입국자와 관광통계 간 정의 차이 검증
- 상태: VERIFIED_SOURCE / FILE_ACQUISITION_PENDING

## Primary source 4 — 외래관광객조사 microdata
- 관광지식정보시스템 데이터 다운로드에 연도별 원자료 존재
- 2025 원자료 ZIP, 2024 원자료 ZIP 등 확인
- 보고서/코드북/설문지 병행 확보
- 역할: 입국자 숫자 이후 체류기간·지출·행동·만족·재방문 분석
- 상태: VERIFIED_SOURCE / REGISTRATION_DOWNLOAD_REQUIRED_FOR_SOME_FILES

## Source-definition warning
`방한외래관광객(한국관광통계)`과 `외국인 입국자(법무부)`는 같은 지표가 아니다. 두 series를 합치거나 대체하지 않는다. 각 데이터셋에 metric_definition_id를 별도로 부여한다.
