# 2026-08-27 — Scope Architecture Pivot

## Trigger
최근 작업이 서울/한옥 모집단에 과도하게 집중되어, 본래 사업 목표인 `한국 방문 외국인 전체와 한국문화 관광 Value Chain 전체`보다 연구 Scope가 좁아지는 문제가 확인됨.

## Previous framing
- 서울/종로 한옥 공급 데이터가 연구의 중심처럼 확대됨.
- 지역 공급 DB 구축이 전체 시장조사보다 앞서 진행되는 경향 발생.

## Correction
최상위 Scope를 다음으로 재정의한다.

> 한국을 방문하는 외국인의 유입 → 지역 이동 → 소비 → 검색 → 비교 → 예약 → 결제 → 이동 → 문화경험 → 웰니스 → 리뷰 → 재방문 전체 Journey와 이를 제공하는 공급망.

## Architecture change
기존 주제별 폴더 중심 구조에서 `DOMAIN × L0–L7 MATURITY × TIME` 3축 구조로 발전시킨다.

- Domain은 시장/공급/경쟁/Value Chain/법률/경제성/PMF를 표현한다.
- L0–L7은 자료가 사실에서 사업계획으로 성숙하는 단계를 표현한다.
- Timeline은 아이디어와 결정의 변화 이유를 보존한다.

## Hanok reclassification
종로/서울 한옥은 폐기하지 않고 `SUPPLY > STAY > HANOK > SEOUL > JONGNO` 하위 Evidence로 재배치한다.

## Business-plan impact
향후 L7의 Problem Statement는 `한옥 공급 부족`이 아니라 `한국 관광·문화 공급의 분절과 외국인 Journey의 거래비용`을 중심으로 검증한다.

## Next Gate
1. 전국 Inbound Market Source Map
2. 주요 국가 동일 스키마
3. 전국 지역 방문·소비 Matrix
4. 국가별 Needs/Wants/VOC
5. 전국 Supply Taxonomy 및 Inventory
6. Competition/Value Chain/Legal/Economics/PMF 연결
