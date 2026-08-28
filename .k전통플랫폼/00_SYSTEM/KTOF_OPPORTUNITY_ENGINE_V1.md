> **HISTORICAL / SUPERSEDED — DO NOT USE AS CURRENT KTOF.**
> This document preserves an early research hypothesis only. Current authority is root `00_SYSTEM/KTOF_AND_OPPORTUNITY_INTELLIGENCE_MODEL_V1.md`, where `KTOF^(0)` is the hypothesis/measurement model and `KTOF^(*)` is the future empirically estimated formula. The equal-weight/fixed multiplicative form below is not a validated production scoring formula.

# KTOF — Korea Tourism Opportunity Function V1

기준일: 2026-08-27

## 목적
관광 데이터를 많이 모으는 것이 목적이 아니다. 공식/공개 원본 데이터를 변수에 투입해 대한민국 인바운드 관광 신경망의 결측·단절·병목·정보비대칭을 자동 탐지하고, 해결할 가치가 큰 Gap을 사업기회로 랭킹한다.

## 18개 입력 도메인
WHO, WHY, WHEN, WHERE, STAY, DO, SPEND, SEARCH, BOOK_PAY, MOVE, PAIN, SATISFACTION, SUPPLY, PLATFORM, MONEY_FLOW, GAP_ENGINE, OPPORTUNITY, L7.

## 핵심 Opportunity 함수
각 후보 i에 대해 모든 원시지표를 0~1로 정규화한다.

O_i = (D_i^wD × G_i^wG × P_i^wP × IA_i^wIA × IS_i^wIS × RV_i^wRV × WTP_i^wW × SC_i^wSC × CF_i^wCF) / (CP_i^wCP × TC_i^wTC × RR_i^wRR × EX_i^wEX)

D=Demand, G=Growth, P=Pain, IA=Information Asymmetry, IS=Island/Disconnected Supply, RV=Revalue Potential, WTP=Willingness to Pay, SC=Scalability, CF=Evidence Confidence, CP=Competition, TC=Transaction Cost, RR=Regulatory/Risk, EX=Execution Difficulty.

V1에서는 가중치를 동일하게 시작하되 실제 예약·클릭·매출·리뷰·전환 데이터가 생기면 검증하여 변경한다. 가중치 변경은 Timeline에 남긴다.

## Gap
Gap = max(0, NormalizedDemand - AccessibleSupply)

AccessibleSupply = Supply × Discoverability × LanguageCoverage × Bookability × PaymentCoverage × TrustCoverage × MobilityAccessibility

좋은 공급이 존재해도 연결계수가 낮으면 AccessibleSupply가 급락한다.

## Island
IslandScore = AssetQuality × Demand × (1 - Connectivity)
Connectivity = geometric_mean(Discoverability, LanguageCoverage, Bookability, PaymentCoverage, TrustCoverage, MobilityAccessibility)

## Information Asymmetry
IA = 1 - ForeignAccessibleInformation / SourceInformation
정보항목은 가격, 세금/수수료, 영업시간, 위치, 시설, 취소조건, 가용성, 자격/인증, 안전, 교통, 언어, 리뷰 신뢰도 등으로 구성한다.

## Journey Bottleneck
JourneySuccess = Π p_stage
각 stage의 개선가치:
BottleneckValue_j = (P_after_fix - P_current) × AddressableTraffic × AverageTransactionValue

## Revalue
RVI = (V_new - V_current) / V_current
NetRVI = (NewRevenue - IncrementalCost - CurrentProfit) / max(CurrentProfit, epsilon)

OriginalAsset → CurrentValue → HiddenValue → Recombination → NewProduct → NewCustomer → NewPrice를 trace한다.

## Valuable Gap
ValuableGap = Gap × Demand × WTP × RevaluePotential × Solvability × Confidence
GapROI = (EconomicValueOfGap - ResolutionCost) / max(ResolutionCost, epsilon)

## 결측 데이터 자체의 연구 우선순위
Missingness m은 0~1.
ResearchPriority = Missingness × OpportunitySensitivity × SourceAvailability × ExpectedInformationGain

즉 공식 계산에 큰 영향을 주는데 비어 있고, 공식/공개 원천으로 확보 가능한 변수부터 다음 수집 대상으로 자동 승격한다.

## Evidence Confidence
CF = SourceAuthority × MethodQuality × RecencyFit × Coverage × CrossValidation
각 요소 0~1. 공식 승인통계라도 조사방법 변경이 있으면 methodology_break flag를 둔다.

## 출력 상태
- VERIFIED: 원본과 정의 확인
- PARTIAL: 일부 기간/국가/지역만 확보
- PROXY: 직접값 대신 대리지표
- MISSING: 필요한 원천 미확보
- INACCESSIBLE: 비공개/유료/약관/기술 제한
- SUPERSEDED: 더 나은 데이터/가설로 대체
- REJECTED: 검증 실패

## 엔진 루프
SOURCE → L0 RAW → L1 EVIDENCE → NORMALIZE → GRAPH → GAP → ISLAND/BOTTLENECK/ASYMMETRY → OPPORTUNITY → MISSING VARIABLE → NEXT SOURCE → 반복.

## 85% Gate
각 도메인의 CoverageScore = Σ(variable_importance × evidence_coverage × confidence) / Σ(variable_importance).
전체 CoreCoverage가 0.85 이상이 되기 전까지 L7을 확정하지 않는다. 단, 높은 Opportunity 후보는 L4 HYPOTHESIS로 조기 기록할 수 있다.

## 원칙
아이디어를 증명하기 위해 데이터를 선택하지 않는다. 공식이 요구하는 원본을 수집하고, 데이터가 보여주는 Gap에서 사업을 발견한다.
