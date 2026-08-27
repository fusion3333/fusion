# K전통플랫폼 Knowledge Evolution System

## 목적
대화·리서치·데이터·아이디어가 시간에 따라 발전하는 과정을 잃지 않고, 최종적으로 검증 가능한 사업계획서와 실행계획으로 수렴시키기 위한 지식 적층 구조.

## 핵심 원칙
1. 원자료를 보존한다.
2. 사실(Evidence), 해석(Insight), 가설(Hypothesis), 결정(Decision)을 분리한다.
3. 새로운 정보가 기존 생각을 바꾸면 과거 문장을 삭제하지 않고 변화 이력을 남긴다.
4. 모든 중요한 전략은 근거까지 역추적 가능해야 한다.
5. 사업계획서는 별도 창작물이 아니라 누적된 레이어의 최신 검증 상태를 컴파일한 결과물이어야 한다.

## 7개 레이어
### L0 RAW — 원자료
API JSON/CSV, 공식통계, OTA 자료, 리뷰 등. 가능한 원형 보존.

### L1 EVIDENCE — 검증된 사실
출처, 기준일, 조사연도, 표본, 단위와 함께 정규화된 사실.

### L2 OBSERVATION — 관찰
데이터에서 직접 발견한 패턴. 예: 종로 한옥 공급이 북촌·서촌에 집중.

### L3 INSIGHT — 사업적 해석
관찰이 사업에 의미하는 바. 예: 서울 MVP의 공간적 집중전략.

### L4 HYPOTHESIS — 검증할 가설
예: 서구권 고객은 단순 한옥보다 Authentic Korean Experience에 더 높은 지불의사가 있을 것이다.

### L5 DECISION — 전략 결정
검증 수준과 근거를 바탕으로 현재 채택한 방향. 결정일, 이유, 대안, 변경조건 기록.

### L6 PLAN — 실행계획
MVP, 공급자 확보, 상품화, 개발, 마케팅, 규제검토, KPI.

### L7 BUSINESS PLAN — 사업계획서
Problem, Market, Customer, Solution, Value Proposition, Value Chain, BM, GTM, Competition, Moat, Operations, Financials, Roadmap, Risk 등으로 컴파일.

## 시간축 관리
중요한 대화/발견마다 `timeline/YYYY-MM-DD_NNN_topic.md`를 생성한다.
각 기록은 다음 필드를 가진다.
- date
- topic
- trigger/question
- new evidence
- new idea
- changed assumption
- decision impact
- next validation
- linked files

과거 아이디어를 덮어쓰지 않는다. 최신 Master 문서는 현재 상태를 보여주고 Timeline은 왜 그렇게 변했는지 보여준다.

## 상태값
- RAW
- VERIFIED
- OBSERVED
- HYPOTHESIS
- VALIDATING
- ACCEPTED
- REJECTED
- SUPERSEDED
- DECIDED

## Traceability
각 핵심 항목에 ID를 부여한다.
- EV-xxxx Evidence
- OB-xxxx Observation
- IN-xxxx Insight
- HY-xxxx Hypothesis
- DE-xxxx Decision
- PL-xxxx Plan

예시:
EV-0001 → OB-0001 → IN-0001 → HY-0001 → DE-0001 → PL-0001

이 연결을 통해 사업계획서의 한 문장이 어떤 데이터와 대화에서 발전했는지 역추적한다.

## 사업계획서 컴파일 규칙
- VERIFIED/ACCEPTED/DECIDED 항목을 우선 사용.
- HYPOTHESIS는 가설임을 표시하거나 검증 후 반영.
- SUPERSEDED 항목은 역사에는 보존하되 최신 사업계획에는 사용하지 않음.
- 숫자는 source/date/unit을 확인한 뒤 사용.
- 상충하는 자료는 임의 병합하지 않고 conflict로 기록.

## 권장 디렉터리
```
.k전통플랫폼/
  raw/
  evidence/
  research/
  data/
  timeline/
  insights/
  hypotheses/
  decisions/
  strategy/
  execution/
  business-plan/
  reports/
  architecture/
```

## 목표
GitHub 자체가 K전통플랫폼의 장기 기억이자 사업설계 지식그래프 역할을 하도록 한다. 대화가 길어질수록 자료가 흩어지는 것이 아니라 Evidence → Insight → Hypothesis → Decision → Plan → Business Plan 방향으로 축적되고 정제되어야 한다.
