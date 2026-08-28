# 4번 작업 — 10년×12개월 사건·체제 장부 V1

기준일: 2026-08-28
대상기간: 2015-01 ~ 2026-08 (140개월; 2026년 종료 후 144개월)
최종 판정: `PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_ACCESS_CONSTRAINTS`

## 목적
관광수요 시계열 옆에 외생변수·정책·충격·통계체제 변화를 같은 월축으로 붙여 향후 인과추론·반사실 분석이 가능한 시간 기반을 만든다.

## 고정 구조
1. 연속형 공변량: 환율, NEER/REER, 물가, 유가, 항공운항/공급, 가격.
2. 이산 사건: 비자/K-ETA, 중국 단체관광, 감염병, 외교, 대형행사, 재난, 콘텐츠 사건.
3. 달력 노출: 출발국 법정공휴일·연휴·방학.
4. 체제변화: 입국·검역·통계·센서·정의 변경.

연속형 공변량을 사건 CSV에 억지로 넣지 않는다. 사건이 없는 월과 자료가 없는 월을 구별한다.

## 사건 원자 스키마
`event_id,event_type,event_subtype,start_date,end_date,effective_from,effective_to,affected_origin,affected_destination,affected_region,affected_journey_stage,expected_direction,mechanism,source,source_type,confidence,causal_status,regime_break,notes`

## causal_status
- `event_only`: 사건 존재만 확인. 영향 추정 금지.
- `temporal_cooccurrence`: 관광변화와 시간적으로 겹침.
- `association_evidence`: 연관성 근거는 있으나 식별된 인과효과는 아님.
- `quasi_experiment_possible`: 정책 시행일·대조군 등을 이용한 준실험 후보.
- `causal_evidence`: 별도 인과식별 근거가 확보된 경우만.

## 0 / missing 규칙
- `0`: 해당 사건군을 그 월에 관측·검증했고 사건이 없음을 뜻할 때만.
- blank/`MISSING`: 미관측·미검증·공개자료 없음.
- `NOT_PUBLIC`: 존재 가능성은 있으나 공개자료 없음.
- `NOT_VERIFIED`: 후보는 있으나 원출처 검증 전.
- `NOT_COMPARABLE`: 정의·빈도가 달라 직접 결합 금지.
- `REGIME_BREAK`: 생성과정/정의가 바뀌어 전후 직접 연결 금지.

## 절대 금지
사건 존재 ≠ 관광 영향. 검색급증 ≠ 관광객 증가. 콘텐츠 흥행 ≠ 방한 증가의 원인. 항공좌석 증가 ≠ 실제 수요 증가. 환율 변화 ≠ 여행선택의 단독원인. 코로나 기간 ≠ 정상시장. 월자료가 없는 분기/연자료를 임의 월분해하지 않는다.

## 월 패널 연결
- `MONTH_SPINE_2015_2026M08_V1.csv`가 유일한 월 키.
- 사건은 유효기간과 월의 교집합으로 bridge 가능하되 원자 사건행 보존.
- 정책 발표일과 시행일 분리.
- 종료일 불명확 시 추정 금지.
- 특정국가 treatment를 ALL로 확장 금지.

## 공식소스 우선순위
BOK ECOS/BIS → 법무부/K-ETA → MOLIT/KAC/공항 → KDCA/MOFA → MCST/KTO → 출발국 정부 휴일 캘린더 → 국가통계기관 → 국제기구. 언론·검색·SNS는 후보발견용이며 원칙적으로 사건 원출처가 아니다.

## 현재 적재 산출물
- `04_DATA/PUBLIC_MAX/MONTH_SPINE_2015_2026M08_V1.csv`: 140개월 월 spine.
- `04_DATA/PUBLIC_MAX/TOURISM_EVENT_LEDGER_VERIFIED_V1.csv`: 공식 검증 사건 원자 장부.
- `04_DATA/PUBLIC_MAX/STATISTICAL_REGIME_LEDGER_V1.csv`: 시장/정책/통계 체제단절 장부.
- `04_DATA/PUBLIC_MAX/EVENT_COVARIATE_SOURCE_REGISTRY_V1.csv`: 연속형·사건형 공식 원출처/접근경로.
- `04_DATA/PUBLIC_MAX/WORKSTREAM_04_COVERAGE_AND_GAPS_V1.csv`: 공개가능/접근제약/비공개/미검증을 구분한 결측지도.
- `01_L1_EVIDENCE/WORKSTREAM_04_PROGRESS_REPORT_2026-08-28.md`: 최종 완료판정 및 한계 보고.

## 완료판정의 의미
이 판정은 '모든 숫자를 확보했다'가 아니다. 공개 웹에서 검증 가능한 사건·체제 구조와 공식 원자료 경로를 최대치로 고정했고, 현재 실행환경에서 직접 적재할 수 없는 ZIP/대화형 Excel/API bulk 값은 `ACCESS_CONSTRAINED`로 명시적으로 남겼다는 뜻이다. BIS는 bilateral FX 및 EER 공식 bulk CSV/SDMX를 제공하고 KAC는 월별 시계열 Excel 조회를 제공하지만, 현재 커넥터는 application/zip 직접 수집과 대화형 Excel bulk 실행을 수행하지 못한다. 이 값을 손으로 베끼거나 임의 생성하지 않는다.

상위15 휴일도 일본/대만/미국처럼 공식 장기경로가 확인된 시장과 전기간 공식 아카이브가 아직 정합화되지 않은 시장을 분리한다. 미검증 휴일을 일반 캘린더로 채우지 않는다. 콘텐츠 충격은 공개 인기신호만으로 관광 인과사건으로 승격하지 않는다.

따라서 4번은 공개자료 기반공사 단계에서는 닫되, 이후 모델링/실행 파이프라인에서 `WORKSTREAM_04_COVERAGE_AND_GAPS_V1.csv`의 접근제약 항목을 기계 적재하는 후속 데이터 엔지니어링을 허용한다. 이는 5번 이후 작업을 막는 미완료가 아니라 명시적 데이터 획득 backlog다.