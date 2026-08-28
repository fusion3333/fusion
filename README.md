# 한국 인바운드 관광 기회지능 엔진

이 저장소는 한국 인바운드 관광시장의 수요·공급·검색·예약·결제·이동·숙박·체험·소비·실패·만족·재방문과 돈의 흐름을 통합하여, 끊긴 연결과 미실현 수요를 찾아 실제 사업·정책 기회로 검증하기 위한 연구·데이터·기회지능 엔진의 단일 작업공간이다.

## RAG / 현재 권위 진입점

모든 현재상태 질의와 후속 작업은 먼저 `00_SYSTEM/CANONICAL_CURRENT_STATE_INDEX_V1.md`를 확인한다. 문서가 충돌하면 그 인덱스의 authority precedence를 따른다. 과거 문서와 최신 문서를 평균내거나 임의로 합치지 않는다.

현재 Source/Evidence MASTER는 `00_SYSTEM/SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V2.md`이며 O=Official, E=Enterprise, S=Social, R=Research, G=Ground, N=Native의 고정 의미를 사용한다. E를 일반적인 '시장데이터'라는 뜻으로 확장하지 않는다.

## 핵심 질문

> 누가 무엇을 원하는데 왜 거래가 발생하지 않는가 → 어느 연결이 끊어져 있는가 → 그것을 고치면 실제 얼마의 새로운 경제가치가 발생하는가?

## 프로젝트 구조

- `00_SYSTEM` — 마스터 아키텍처, 측정·비교·완료·권위 규칙
- `01_L1_EVIDENCE` — 원출처와 검증 근거
- `02_L2_OBSERVATION` — canonical 정규화 관측·해석 계층
- `02_L2_OBSERVATIONS` — legacy split namespace; 기존 파일은 검색하되 신규 적재 권위경로로 사용하지 않음
- `03_L3_GRAPH` — 엔터티·관계·시간·인과 그래프
- `04_DATA` — 공개자료, 정규화 데이터, 레지스트리와 패널
- `.k전통플랫폼` — 선행연구/프로토타입 역사자료. `CANONICAL_CURRENT_STATE_INDEX`에서 명시적으로 승격된 경우가 아니면 현재 권위문서가 아님

## 기본 모델

25개 기본축과 8개 교차계층을 사용해 여행 전·중·후의 수요와 공급, 실제 판매가능성, 플랫폼, 결제, 실패여정, 현장지능, 자체 행동계측, 병목, 사업기회와 불확실성을 분리해 모델링한다.

## 증거 원칙

O / E / S / R / G / N은 단일 신뢰도 서열이 아니라 서로 다른 현실을 측정하는 센서다. Official은 공식·제도 현실, Enterprise는 기업 운영에서 직접 생성·보유되는 거래·예약·재고 등, Social은 이용자 생성 사회적 표현, Research는 연구 데이터·실증결과, Ground는 우리가 현장을 직접 측정해 만드는 1차 자료, Native는 우리 서비스 운영에서 자체 생성되는 행동·거래 자료다.

서로 다른 센서를 같은 값으로 취급하지 않는다. 예를 들어 방문자와 입국자, 설문지출과 카드지출, 등록공급과 실제 판매가능 공급, 불평건수와 실제 실패율, 여행자 결제액과 공급자 이익은 서로 다른 측정값이다.

## 상태 의미

`PUBLIC_SOURCE_MAXIMUM_COMPLETE...`는 공개소스 발견·정의·접근경계의 완료를 뜻하며 실제 bulk row 적재, harmonization, graph population, Ground, Native, 인과검증 또는 경험적 KTOF 완료를 뜻하지 않는다. 상태는 `00_SYSTEM/PIPELINE_STATUS_MODEL_V1.md`의 독립 차원으로 관리한다.

Graph 문서가 존재한다는 사실은 실제 graph row가 채워졌다는 뜻이 아니다. `00_SYSTEM/GRAPH_MATERIALIZATION_SEMANTICS_V1.md`에 따라 schema, populated rows, validated joins를 분리한다.

## 현재 단계

공개자료 8대 작업선의 소스·정의·비교가능성·접근제약 분류를 최대치까지 구축했으며, 다음 단계는 실제 원자료 대량 적재·정합화, 공급 엔터티 통합, 실제 판매가능성 관측, 현장조사, 자체 행동·거래 계측과 병목/기회 계산이다.

KTOF는 전체 시스템의 이름이 아니라 최종 opportunity inference/ranking layer다. 현재 `KTOF^(0)`은 가설·측정모형이며 `KTOF^(*)`는 실제 행동·거래·개입 결과로 경험적으로 추정된 이후에만 성립한다.

안전알림 모바일 앱은 이 저장소의 프로젝트가 아니며 별도 `safe-alam` 저장소에서 관리한다. korea-tour의 과거 안전알림 PR은 관광엔진 근거로 사용하지 않는다.
