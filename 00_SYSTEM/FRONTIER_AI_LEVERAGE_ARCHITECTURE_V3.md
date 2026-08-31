# Frontier AI Leverage Architecture V3

Status: CANONICAL STRATEGIC ARCHITECTURE
Date: 2026-08-31
Project: Korea Inbound Tourism Opportunity Intelligence Engine

## 0. Core strategic thesis

This project must not compete with frontier AI on capabilities that are rapidly commoditizing.

The strategic rule is:

> 가장 좋은 AI가 우리만의 데이터와 기억, 패턴, 검증결과를 사용할 수 있도록 만들고, AI가 발전할수록 우리 엔진의 예측력과 생산성이 함께 상승하게 한다.

Short form:

> AI는 세상을 읽는다. 우리는 기억한다. 복합 패턴 엔진은 관계를 발견한다. 현실이 검증한다. KTOF는 미래 기회를 계산한다.

The project therefore treats frontier models as replaceable intelligence suppliers and treats proprietary longitudinal evidence, definitions, Ground/Native data, validated success/failure patterns, and empirical KTOF models as compounding assets.

---

## 1. What should commoditize vs what must compound

### 1.1 Delegate to frontier AI

Capabilities expected to commoditize or improve rapidly should not become the core moat:

- general web search
- public-source discovery
- generic summarization
- translation
- broad market scanning
- document extraction
- generic coding
- competitor enumeration
- trend summarization
- hypothesis generation
- candidate feature generation
- preliminary pattern search

The system should use the best available model/provider for these functions and remain model-agnostic.

### 1.2 Assets that must compound

The engine must concentrate investment on assets whose value survives or rises as AI improves:

1. Research Protocol
2. Prompt Library
3. evidence schemas and variable definitions
4. comparability and regime rules
5. longitudinal harmonized time-series memory
6. Ground Data (G)
7. Native Data (N)
8. observed success/failure outcomes
9. intervention and counterfactual evidence
10. multivariate pattern registry
11. validated leading/lag/interaction/regime patterns
12. empirical KTOF(*) models
13. prediction track record and calibration history

Strategic hierarchy of defensibility:

```text
Public Data + AI Research
  < Longitudinal Harmonized Data + Temporal RAG
  < Ground Economics / Capacity / Real Sellability
  < Native Search→Click→Book→Pay→Repeat Telemetry
  < Real Intervention and Business Outcome Data
  < Repeatedly Validated Multivariate Patterns + KTOF(*)
  < Proven Out-of-Time Economic Prediction Track Record
```

Time is therefore a moat only if evidence is preserved longitudinally and tied to observed outcomes.

---

## 2. V3 end-to-end architecture

```text
                    현실 세계
                        │
        ┌───────────────┼────────────────┐
        │               │                │
    공식 데이터      기업 데이터       사회 데이터
       O                E                S
        │               │                │
        └───────────────┼────────────────┘
                        │
                    연구 데이터 R
                        │
                        ▼
              프론티어 AI 계층
         GPT / Claude / Gemini / etc.
                        │
                        ▼
              연구 프로토콜 계층
        ────────────────────────────
        질문체계 / 검색전략 / 검증규칙
        출처규칙 / 반증규칙 / 결측규칙
        비교가능성 / 체제변화 / 출력스키마
                        │
                        ▼
              증거·시간형 RAG 계층
        ────────────────────────────
        출처 + 값 + 시점 + 정의 + 분모
        provenance + confidence + regime
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
        역사 기억                  최신 상태
          │                           │
          └─────────────┬─────────────┘
                        ▼
                  정합화 계층
                        │
                        ▼
               다변량 상태 그래프
                        │
                        ▼
                 복합 패턴 발견
        ────────────────────────────
        상관 / 상호작용 / 비선형
        시차 / 선행지표 / 체제 / 이상
        과거 유사상태 / 대체관계
                        │
                        ▼
                  패턴 등록소
                        │
                        ▼
                  검증·반증 계층
        ────────────────────────────
        Backtest / Out-of-time
        Out-of-segment / Ground / Native
        Transaction / Intervention
        Counterfactual / Calibration
                        │
                        ▼
                  검증된 패턴
                        │
                        ▼
                     KTOF(*)
                        │
                        ▼
             현재 상태 × 과거 패턴
                        │
                        ▼
                  사업기회 예측
        ────────────────────────────
        성공확률 / 예상수요 / 미실현수요
        전환율 / 매출 / 공헌이익 / 위험
        개입비용 / 경제가치 / 불확실성
                        │
                        ▼
                 실제 실행·결과
                        │
                        └──────────────→ G/N/결과 데이터로 환류
```

---

## 3. Frontier AI role

Frontier AI is not the owner of final truth and is not the durable asset.

Canonical AI roles:

- Researcher: discover candidate evidence
- Extractor: convert unstructured evidence into fields
- Structurer: map evidence to project schemas
- Cross-checker: search corroborating and contradictory evidence
- Hypothesis Generator: propose explanations, variables, interactions and lags
- Pattern Scout: propose candidate multivariate patterns for formal testing
- Research Planner: identify decision-critical missing evidence

Frontier AI must not silently:

- redefine canonical variables
- replace missing values with guesses
- merge incompatible measurement regimes
- convert correlation into causal effect
- upgrade public proxies into Ground or Native truth
- promote an in-sample pattern directly into KTOF(*)

Model providers are replaceable. Project protocols and stored evidence are not.

---

## 4. Research Protocol as a core asset

The Research Protocol is the contract controlling how frontier AI reads the world.

Every research task should specify at least:

1. research question
2. target variable(s)
3. required source classes O/E/S/R/G/N
4. geography
5. population/segment
6. time range and freshness requirement
7. measurement definition
8. denominator
9. search strategy
10. corroboration requirement
11. contradiction search requirement
12. missingness policy
13. comparability policy
14. regime-break checks
15. confidence rules
16. required output schema
17. prohibited inference
18. stop condition / evidence sufficiency

The protocol must cause frontier AI to produce structured evidence, not merely persuasive prose.

---

## 5. Prompt Library design

Do not depend on one monolithic super-prompt.

Maintain modular prompts by function, each with a version, required inputs, evidence rules and machine-readable output contract.

Core families:

```text
P01 공식근거 탐색
P02 기업·시장근거 탐색
P03 소셜·검색 수요 탐색
P04 연구·학술 검증
P05 경쟁목적지 조사
P06 실제 공급 탐색
P07 판매가능성 감사
P08 가격·WTP 조사
P09 예약·결제 마찰 조사
P10 고객 고통·실패여정 조사
P11 반대증거·반증 탐색
P12 결측증거 탐색
P13 과거상태 복원
P14 체제변화 탐지
P15 사업기회 가설 생성
P16 대안설명 생성
P17 인과가설 생성
P18 복합패턴 설명
P19 패턴 반증계획 생성
P20 다음 Ground/Native 측정 우선순위
```

A prompt is valuable only when its outputs are reproducible, auditable and joinable into the evidence layer.

---

## 6. Temporal Evidence RAG

Project RAG is not merely document retrieval for question answering.

It is a temporal evidence memory preserving what was known, measured, defined and observed at each point in time.

Minimum observation object:

```text
variable_id
value
unit
observed_period
observed_at
geography
segment
source_class
source_artifact
measurement_type
definition
denominator
methodology_regime
confidence
missingness_status
comparability_status
contradiction_status
```

New observations must not overwrite old states. Historical state is required for lag discovery, regime analysis, similarity search and out-of-time validation.

---

## 7. Multivariate State Graph

The state graph represents simultaneous market conditions rather than isolated indicators.

A market state may include:

- demand level and acceleration
- search and social acceleration
- airline capacity
- FX and price conditions
- competitor destination conditions
- supply quantity
- actual sellable supply
- language/discoverability
- booking/payment access
- WTP
- capacity/utilization
- supplier margin
- regulatory state
- transaction friction
- failure rates
- intervention cost
- observed outcomes

The objective is to represent configurations and interactions, not merely pairwise correlation.

---

## 8. Pattern Discovery Engine

The Pattern Discovery Engine is the core learning layer below KTOF.

It searches for at least:

1. Correlation patterns
2. Interaction patterns
3. Nonlinear patterns
4. Lag / leading-indicator patterns
5. Regime-dependent patterns
6. Substitution / cross-market patterns
7. Historical state similarity
8. Failure configurations
9. Success configurations
10. Intervention-response patterns

A candidate pattern may look conceptually like:

```text
SearchAcceleration↑
AND SocialAcceleration↑
AND FlightCapacity↑
AND KRWAttractiveness↑
AND CompetitorPrice↑
AND SellableSupplyGrowth≈0
AND WTP↑
```

followed by a repeated increase in bookings, contribution profit or another defined outcome after a measured lag.

The system must search combinations, thresholds, interactions and lags rather than assume a fixed additive or multiplicative formula.

---

## 9. Pattern Registry

Every discovered candidate pattern must be versioned and auditable.

Minimum fields:

```text
pattern_id
pattern_version
target_outcome
predictor_set
interaction_structure
lag_structure
segment
geography
data_window
source_classes
sample_size
model_form
regime_scope
in_sample_metric
out_of_time_metric
out_of_segment_metric
uncertainty
alternative_explanations
causal_status
ground_validation_status
native_validation_status
intervention_validation_status
promotion_status
discovered_by_model
discovered_at
reproducibility_reference
```

Pattern lifecycle:

```text
CANDIDATE
→ REPLICATED
→ OUT_OF_TIME_VALIDATED
→ OUT_OF_SEGMENT_VALIDATED
→ GROUND/NATIVE_VALIDATED
→ INTERVENTION/CAUSAL_VALIDATED where feasible
→ KTOF_ELIGIBLE
→ KTOF_ACTIVE
→ MONITORED
→ DEGRADED / REGIME_LIMITED / RETIRED
```

No candidate pattern is proprietary predictive knowledge merely because an AI model proposed it.

---

## 10. Validation and falsification

Promotion must favor surviving falsification rather than attractive explanation.

Required validation toolkit should include as appropriate:

- rolling out-of-time validation
- holdout periods
- out-of-segment validation
- backtests with leakage control
- regime-break tests
- alternative explanation tests
- feature ablation
- uncertainty/calibration analysis
- Ground verification
- Native transaction verification
- intervention or natural-experiment evidence
- counterfactual estimation where defensible

Prediction and causality must remain distinct labels.

---

## 11. KTOF role in V3

KTOF is not the raw pattern-discovery engine.

Canonical V3 hierarchy:

```text
Evidence
→ Harmonized Temporal Memory
→ Multivariate State Graph
→ Pattern Discovery
→ Pattern Registry
→ Validation / Falsification
→ Verified Pattern Library
→ KTOF(*)
→ Opportunity Forecast / Ranking
→ Real Outcome
→ Learning Loop
```

KTOF(0) remains the hypothesis/measurement structure defined in the existing canonical KTOF document.

KTOF(*) is the empirically estimated model or ensemble that uses validated patterns and measured economics to estimate future opportunity value.

KTOF(*) may consist of multiple specialized submodels rather than one global equation, including demand, momentum, substitution, sellability gap, WTP, conversion, unit economics, capacity, intervention uplift, risk and uncertainty models.

---

## 12. Closed learning loop

The engine becomes defensible only when forecasts are tied to realized outcomes.

Required loop:

```text
Forecast
→ Business / Product / Intervention Decision
→ Exposure
→ Search
→ Click
→ Inquiry
→ Booking Attempt
→ Payment Attempt
→ Payment
→ Actual Use
→ Revenue
→ Contribution Profit
→ Refund / Failure
→ Repeat
→ Outcome Label
→ Pattern Validation
→ KTOF Update
```

Forecast history must never be overwritten after outcomes become known. This is required to build a credible prediction track record.

---

## 13. Six-stage defensibility ladder

### Stage 1 — Public data + AI research
Differentiation: weak.

### Stage 2 — Harmonized longitudinal data + Temporal RAG
Differentiation: begins.

### Stage 3 — Ground supply / price / margin / capacity data
Differentiation: substantial.

### Stage 4 — Native search→click→book→pay→repeat data
Differentiation: strong.

### Stage 5 — Real intervention and realized business outcome data
Differentiation: very strong.

### Stage 6 — Repeatedly validated multivariate patterns + KTOF(*) + prediction track record
Differentiation: difficult to replicate and compounding.

The project should allocate effort according to movement up this ladder rather than maximizing public-data volume for its own sake.

---

## 14. AI-leverage test for every future work item

Before significant work is accepted into the roadmap, ask:

1. Will frontier AI likely make this capability cheap/common soon?
2. Can the task be delegated to a replaceable frontier model under our protocol?
3. Does this work create a durable dataset, measurement rule, Ground/Native evidence, outcome label, validated pattern or prediction record?
4. Does it improve the next model's ability to exploit our proprietary assets?
5. Does it move us upward on the six-stage defensibility ladder?

If answers 3–5 are weak, the work should normally be delegated, automated, reduced or deprioritized.

---

## 15. Implications for the existing backlog

The existing public-data program remains useful where it creates longitudinal comparability, state reconstruction or pattern-ready features.

However, V3 changes the prioritization rule.

Public ingestion is not an end-state moat.

Future priority should increasingly favor:

1. longitudinal comparability and historical-state reconstruction
2. sellability measurement
3. Ground supplier economics and capacity
4. WTP and lost-demand evidence
5. Native behavioral/transaction telemetry
6. intervention outcomes
7. pattern registry and validation infrastructure
8. prediction ledger and calibration
9. empirical KTOF(*) learning

Existing workstreams should be re-ranked against this rule rather than completed mechanically because they exist in an older backlog.

---

## 16. Cross-domain expansion principle

The reusable asset is not a tourism-specific fixed formula. It is the architecture that discovers and validates domain-specific opportunity formulas.

Reusable core:

```text
Frontier AI
→ Research Protocol
→ Temporal Evidence RAG
→ Harmonized State Graph
→ Multivariate Pattern Discovery
→ Validation
→ Domain Formula
→ Outcome Learning
```

Tourism is the first domain and KTOF is its domain formula.

Future domains may include investment, real estate, energy, commerce, startup opportunity and regional economy, but each domain must build its own valid definitions, data and outcome labels. Tourism patterns must not be copied into another domain without evidence.

---

## 17. Non-negotiable strategic rule

Do not build an engine whose value comes primarily from doing what the next frontier model will do for everyone.

Build the memory, evidence, validation and outcome system that makes every next frontier model more valuable to us than it is to a new entrant.

Canonical strategic sentence:

> 범용 지능은 빌려 쓰고, 데이터·측정법·장기기억·성공실패 결과·검증된 복합패턴·예측실적은 우리가 소유한다.
