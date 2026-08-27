# DECISION — Tourism Meta-Intelligence Direction V1

Date: 2026-08-27
Status: ADOPTED / RESEARCH REQUIRED

## Strategic redefinition
korea-tour의 목표는 개별 관광 데이터/예측 엔진을 복제하는 것이 아니다.

새 정의:

`Existing Specialized Engines + Korea Official Intelligence + Enterprise Signals + Social/VOC + Ground Truth → Evidence-Normalized Tourism Knowledge Graph → Cross-domain Gap/Island/Bottleneck/Asymmetry Detection → Opportunity Discovery → Recombination/Revalue → Experiment → Transaction/Revenue Feedback`

즉 **Tourism Meta-Intelligence & Opportunity Operating System**을 지향한다.

## Competitive-method mining rule
한국관광 데이터랩 및 국내외 전문엔진의 공개된 방법론·지표정의·가이드라인·ontology·API schema·공개 scoring logic을 파트별로 연구한다.

단:
1. 공개되지 않은 proprietary 공식/가중치/알고리즘은 추측해서 복제하지 않는다.
2. 공개 공식은 원출처, 버전, 정의, 적용범위, 한계를 기록한다.
3. 공개되지 않은 부분은 `UNKNOWN/PROPRIETARY`로 기록한다.
4. 동일 현상을 측정하는 여러 엔진의 방법을 비교해 reusable primitive와 provider-specific assumption을 분리한다.
5. 라이선스/약관/상업적 이용 제한을 provenance에 기록한다.
6. 경쟁사 점수를 그대로 우리 KTOF로 사용하지 않는다. 측정 primitive와 검증방법만 학습하고 최종 Opportunity Model은 우리 데이터로 추정한다.

## Method Library targets
- Korea Tourism Data Lab: telecom visitor estimation, card tourism spend, navigation destination search, social big-data, tourism-demand index, regional diagnostics, event/effect analysis.
- Data Appeal / Mabrian: sentiment/reputation, POI/supply, demand, air connectivity, spend/mobility where publicly documented.
- Amadeus: destination demand/search/booking/traveler journey metrics where publicly documented.
- ForwardKeys: air search, capacity, bookings/ticketing, origin-destination and traveler segmentation methodology where public.
- AirDNA: active listing, occupancy, ADR, RevPAR, demand/seasonality/revenue/regulation/market scoring definitions where public.
- GOAGENTIC: destination knowledge graph, supplier-field completion, provenance/ground-truth workflow where public.
- Tourism Analytics Ontology (TAO) / Tourism Knowledge Graph (TKG): ontology and KG generation pipeline; evaluate Apache-2.0 reusable components.

## New architecture layers
L0 Source/Raw
L1 Evidence + provenance
L2 Measurement normalization
L3 Traveler/Supply/Platform/Money/Information/Trust temporal graph
L4 Existing-engine method library + cross-engine feature layer
L5 Gap/Island/Bottleneck/Asymmetry + missing-evidence engine
L6 Opportunity hypotheses + ground validation + experiments
L7 Product/Business/Revenue feedback

## Key moat
The moat is not owning every sensor. It is:
- cross-engine entity/definition normalization
- 10y+ temporal integration
- measurement-aware confidence
- missingness as information
- ground-truth supply sellability
- cross-domain propagation
- explainable opportunity ranking
- product/revenue feedback that recalibrates the model

## Immediate next work
Create `COMPETITOR_METHOD_LIBRARY` with one record per engine/method containing:
`provider, domain, metric/model, public_formula, public_inputs, output, unit, temporal_granularity, spatial_granularity, methodology_source, validation_method, assumptions, known_bias, proprietary_unknowns, license/terms, reusable_component, graph_mapping, KTOF_relevance`.

Do not finalize KTOF weights until this method mining and core source coverage are sufficiently complete.
