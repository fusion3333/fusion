# PROJECT MAP V2 UPDATE — 2026-08-28

## 목적
전체 프로젝트 지도는 요약문이 아니라, 방대해진 저장소를 사람이 이해하기 위한 최상위 안내계층이다. 사용자가 어떤 데이터가 어디에 있고, 왜 수집했고, 어떤 개념으로 구분하며, 어떤 축과 연결되고, 현재 무엇이 완료/제약 상태인지 한 화면에서 이해할 수 있어야 한다.

## V2 핵심 변경
기존 25개 기본축 + 8개 교차계층 구조를 유지하면서, 공개데이터를 실제로 채우기 위해 수행한 8개 횡단 Workstream을 독립 섹션으로 추가한다.

1. 한국 공식 원자료 뼈대
2. 상위15 출발국 거울
3. 경쟁목적지 비교패널
4. 10년×12개월 사건·체제 장부
5. 전국 관광공급 통합
6. 카드·결제 지능
7. 다국어 불편·실패 지능
8. 돈의 흐름

각 Workstream은 `목적 → 연결 축 → 핵심 개념/금지규칙 → 저장 위치 → 완료 판정 → 남은 비공개/접근제약` 순서로 설명한다.

## 중요한 해석
8개 Workstream은 25축에 추가되는 새 축이 아니다. 25축이 '무엇을 알아야 하는가'를 정의한다면, 8개 Workstream은 여러 축을 동시에 관통해 '그 질문들을 실제 공개자료로 어떻게 채우고 연결했는가'를 나타낸다.

## 이후 단계
공개자료 소스발굴은 1~8번 완료게이트까지 도달했으므로 다음 순서는 raw bulk materialization → survey harmonization → supplier entity master → sellable-supply observation → cross-workstream join → Gap/Island/Bottleneck 계산 → Ground Intelligence → Native Telemetry → 단위경제 → 시범개입 → 경험적 KTOF 학습이다.

## Repository 상태 반영
- `korea-tour` 루트 README의 타 프로젝트 혼입은 수정 완료.
- 안전알림 프로젝트는 `fusion3333/safe-alam`으로 분리.
- `.k전통플랫폼`은 선행연구/원형으로 취급하고 최신 root 운영구조와 권위를 구분해야 한다.
- `02_L2_OBSERVATION` / `02_L2_OBSERVATIONS` 중복은 향후 구조정리 대상.
