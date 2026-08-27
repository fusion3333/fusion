# K전통플랫폼 L0–L7 Layered Development Architecture V2

기준일: 2026-08-27

## 0. Scope
최상위 연구대상은 `서울 한옥`이 아니라 **한국을 방문하는 외국인과 그들을 둘러싼 한국 관광·문화·웰니스 Value Chain 전체**다.

서울/경기/부산/제주/경주/전주/강원/인천 등은 Region 하위축이며, 한옥은 Supply > Stay의 한 카테고리다.

## 1. 두 개의 직교축
이 저장소는 앞으로 `DOMAIN 축 × EVIDENCE MATURITY 축`의 2차원 구조로 관리한다.

### DOMAIN
- MARKET: 방한시장, 국가, 지역, 소비, 행동, Needs/Wants
- SUPPLY: 숙박, 전통문화, 음식, 웰니스, 뷰티, 교통, 가이드, 쇼핑, 축제
- COMPETITION: OTA, 체험플랫폼, 여행사, 로컬플랫폼
- VALUE_CHAIN: Discover→Trust→Compare→Bundle→Book→Pay→Navigate→Language→Experience→Support→Review→Retention
- LEGAL: 여행업, 전자상거래, 개인정보, 결제, 의료관광 등
- ECONOMICS: 공급자 수수료, 원가, 가격, CAC, Margin, Unit Economics
- PMF: 고객 인터뷰, 설문, 랜딩페이지, 가격테스트, 예약/결제 실험

### MATURITY L0–L7
- L0 RAW: 원문/API/CSV/JSON/스크린샷/원시 리뷰
- L1 EVIDENCE: 출처·기준일·단위·표본이 검증된 사실
- L2 OBSERVATION: Evidence에서 직접 관찰된 패턴
- L3 INSIGHT: 사업적 의미
- L4 HYPOTHESIS: 검증 가능한 사업가설
- L5 DECISION: 채택된 전략 결정과 변경조건
- L6 PLAN: 실행계획, KPI, 책임, Gate
- L7 BUSINESS PLAN: 검증된 레이어를 컴파일한 사업계획

## 2. 권장 디렉터리
```text
.k전통플랫폼/
  00_SYSTEM/
    LAYERED_DEVELOPMENT_ARCHITECTURE_V2.md
    DATA_SOURCE_REGISTRY.csv
    PROGRESS_MATRIX.csv
    TRACEABILITY_INDEX.csv

  01_L0_RAW/
    market/
    supply/
    competitors/
    voc/
    legal/

  02_L1_EVIDENCE/
    market/
      inbound/
      countries/
      regions/
      spend/
      behavior/
      needs_wants/
    supply/
      stay/
      traditional_experience/
      food/
      wellness/
      beauty/
      transport/
      guide/
      shopping/
      festivals/
    competitors/
    value_chain/
    legal/
    economics/
    pmf/

  03_L2_OBSERVATIONS/
  04_L3_INSIGHTS/
  05_L4_HYPOTHESES/
  06_L5_DECISIONS/
  07_L6_PLANS/

  08_L7_BUSINESS_PLAN/
    master/
    government/
    investor/
    financial/
    pitch/

  09_TIMELINE/
    YYYY/
      YYYY-MM-DD_NNN_topic.md

  10_DATABASE/
    master_entities/
    market/
    countries/
    regions/
    supply/
    products/
    prices/
    reviews/
    journeys/
    sources/

  90_LEGACY/
```

## 3. Traceability
모든 중요한 항목은 고유 ID로 연결한다.
- SRC: Source
- EV: Evidence
- OB: Observation
- IN: Insight
- HY: Hypothesis
- DE: Decision
- PL: Plan
- BP: Business Plan claim

예: `SRC-KTO-001 → EV-MKT-001 → OB-MKT-003 → IN-MKT-002 → HY-PER-004 → DE-GTM-001 → PL-MVP-001 → BP-MKT-007`.

## 4. 시간 적층
과거 생각을 삭제하지 않는다. 새 Evidence가 기존 가설을 바꾸면:
1. 기존 HY 상태를 SUPERSEDED 또는 REJECTED로 변경
2. 새로운 HY/DE를 생성
3. Timeline에 변경 이유 기록
4. Traceability Index에 predecessor/successor 연결

## 5. 사업계획 컴파일 규칙
L7은 독립적으로 지어내지 않는다.
- 숫자: VERIFIED L1만 사용
- 시장 해석: L2/L3 연결 필수
- 전략 주장: ACCEPTED L4 또는 L5 연결 필수
- 실행계획: L6 연결 필수
- 미검증 내용은 명시적으로 Hypothesis로 표시

## 6. 전국·국가 Scope
### 국가축
최소: 중국, 일본, 대만, 미국, 홍콩, 태국, 필리핀, 베트남, 싱가포르, 말레이시아, 인도네시아, 캐나다, 호주, 영국, 프랑스, 독일 및 공식 조사 대상 주요 국가.

### 지역축
전국을 보존하되 사업 우선 분석지역은 서울, 경기, 인천, 부산, 제주, 경주/경북, 전주/전북, 강원 및 외국인 방문·소비가 의미 있는 지역으로 데이터에 따라 결정한다.

## 7. 한옥 데이터의 위치
기존 종로/서울 한옥 연구는 폐기하지 않는다.
`SUPPLY > STAY > HANOK > SEOUL > JONGNO`라는 하위 노드로 재분류한다.

즉 한옥 데이터는 중요한 공급 Evidence지만 K전통플랫폼 전체 시장을 대표하지 않는다.

## 8. Progress 원칙
완성도는 자료 개수로 올리지 않는다. 각 Domain별 Gate 충족률로 계산한다.
예: 국가별 시장 85% = 공식 모집단/주요국 커버리지 + 최신성 + 동일 스키마 정규화 + 출처 추적 + 결측/한계 기록이 기준을 통과한 상태.
PMF는 웹검색만으로 85% 처리하지 않는다. 실제 고객 검증이 필요하다.

## 9. 최종 목적
대화와 조사 결과가 시간이 흐를수록 흩어지는 것이 아니라
`RAW → EVIDENCE → OBSERVATION → INSIGHT → HYPOTHESIS → DECISION → PLAN → BUSINESS PLAN`
으로 발전하도록 만들고, 최종 사업계획서의 모든 핵심 주장과 숫자를 원천까지 역추적할 수 있게 한다.
