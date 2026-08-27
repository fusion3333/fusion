# Full 18-Axis Fill Strategy V1

기준일: 2026-08-27
상태: ACTIVE

## 목적
한 축을 85%까지 파고 다음 축으로 넘어가는 대신, 먼저 18축 전체를 최소 작동 수준(MVP Coverage)까지 채운다. 이후 KTOF ResearchPriority에 따라 가장 중요한 결측을 다시 깊게 파서 각 핵심축을 85% 이상으로 올린다.

## 18축
1 WHO
2 WHY
3 WHEN
4 WHERE
5 STAY
6 DO
7 SPEND
8 SEARCH
9 BOOK_PAY
10 MOVE
11 PAIN
12 SATISFACTION
13 SUPPLY
14 PLATFORM
15 MONEY_FLOW
16 ISLAND_BOTTLENECK_ASYMMETRY
17 OPPORTUNITY
18 L7

## 1차 완료 기준(MVP Coverage)
각 축마다 최소:
- 1개 이상 Tier-A 공식 Source
- 핵심변수 정의
- 최소 10년 시계열 가능 여부
- 최신값 또는 대표 시계열 1개
- geography / nationality / category 중 최소 1개 분해축
- methodology/limitations
- L1 Evidence 1개 이상
- L2 Observation 1개 이상
- 결측/접근불가 항목 명시

## 2차 완료 기준
KTOF CoverageScore 0.85 이상.

## 진행 원칙
- 원본 가능한 형식: CSV/XLS/XLSX/PDF/HWP/HWPX/DOC/DOCX/JSON/XML/WEB/ZIP
- 시계열 최소 10년, 더 긴 가용기간은 전체 확보 우선
- FACT / INFERENCE / PROXY 분리
- 비공개 데이터는 억지로 우회하지 않고 INACCESSIBLE
- 연구순서는 고정 1→18이 아니라 ResearchPriority가 높은 결측을 우선할 수 있음

## 첫 전체 패스
- WHO: 외래관광객조사 + 한국관광통계
- WHY: 외래관광객조사 + 잠재방한객조사
- WHEN: 한국관광통계 월별
- WHERE: 관광데이터랩 국가별/지역별 이동통신·내비게이션
- STAY: 외래관광객조사 + 관광숙박/인허가 + OTA
- DO: 외래관광객조사 + TourAPI + 체험플랫폼
- SPEND: 외래관광객조사 + 외국인 신용카드 관광소비
- SEARCH: 외래관광객조사 + Google/SNS/OTA 공개데이터
- BOOK_PAY: 외래관광객조사 + OTA/PG/FX
- MOVE: 관광데이터랩 내비게이션 + 철도/버스/택시/교통카드
- PAIN: 관광불편신고 + 외래관광객조사 + 리뷰/VOC
- SATISFACTION: 외래관광객조사 + 리뷰
- SUPPLY: TourAPI + 지자체/인허가 + 플랫폼
- PLATFORM: Booking/Agoda/Trip/Klook/KKday/Viator/GetYourGuide/Google
- MONEY_FLOW: OTA terms/수수료 + PG/FX/세금 + 공급자 economics
- GAP: 파생계산
- OPPORTUNITY: KTOF ranking
- L7: L1-L6 trace 기반 컴파일

## 최종 루프
FULL BASELINE → COVERAGE MAP → HIGH-SENSITIVITY MISSING VARIABLE → SOURCE ACQUISITION → RECALCULATE → 85%+ → L7.
