# CROSS LAYER 5 — NETWORK / SOCIAL DIFFUSION V1

Status: DESIGN LOCKED / PUBLIC EVIDENCE PARTIAL / BEHAVIORAL PROPAGATION TELEMETRY PENDING
Updated: 2026-08-28

## 0. Korean-first documentation rule
All human-facing explanations in this repository should use Korean first. English technical labels may be retained in parentheses only where useful for implementation or source matching. Equations must be immediately followed by a plain-Korean interpretation.

## 1. Why this layer exists
The previous journey can end too neatly at SATISFACTION or REVIEW. In reality, one traveler's experience can become another person's awareness, motivation, search input, consideration-set entry, destination image, choice, booking, and later another piece of content. Therefore POST-TRIP is not an endpoint; it is a feedback edge into the next cohort's pre-trip journey.

Core loop:
경험 → 기억/평가 → 콘텐츠·리뷰·추천 생성 → 타인에게 노출 → 관심/신뢰 형성 → 검색 → 후보 목적지 편입 → 선택/예약 → 방문/경험 → 새로운 콘텐츠 생성

## 2. Distinctions that must never be collapsed
- 콘텐츠 생성 ≠ 타인에게 노출됨
- 노출됨 ≠ 실제로 주의를 기울임
- 주의를 기울임 ≠ 내용을 신뢰함
- 신뢰함 ≠ 한국을 여행 후보에 넣음
- 후보에 넣음 ≠ 한국을 선택함
- 한국을 선택함 ≠ 예약함
- 예약함 ≠ 실제 방한함
- 언급량 증가 ≠ 관광수요 증가
- 조회수 증가 ≠ 추가 방문객 수
- 상관관계 ≠ 소셜미디어가 방문을 일으킨 인과효과

## 3. Actors
### Sender / Creator
여행자, 현지인, 친구·가족, 인플루언서, 유명인, 공급자, 관광기관, 언론, 커뮤니티 구성원.

### Receiver
콘텐츠를 실제로 접한 잠재여행자 또는 여행 의사결정 단위(Decision Unit). Receiver는 CROSS_LAYER_TRAVEL_PARTY_DECISION_UNIT의 Planner/Payer/Influencer/Decider 등 역할과 연결한다.

### Amplifier / Gatekeeper
플랫폼 추천 알고리즘, 검색엔진, 커뮤니티 관리자, 언론, 리포스트 계정, 팬덤, 여행사/OTA 등 노출을 확대하거나 제한하는 중개자.

## 4. Content object
각 SocialContent observation은 최소 다음을 분리한다.
- content_id
- creator_actor_id / creator_type
- platform
- market / language
- destination / product / supplier entity
- content_type: review, short-video, long-video, photo, post, comment, forum thread, direct recommendation, news
- valence: positive / neutral / negative / mixed
- topic / motivation / pain / satisfaction tags
- created_at / observed_at
- organic / paid / owned / earned / unknown
- source provenance and confidence

## 5. Propagation stages
각 콘텐츠의 확산을 다음 단계로 본다.

1. 생성(Generation)
2. 잠재노출(Potential Reach)
3. 실제노출/조회(Observed Exposure/View) — 가능한 경우만
4. 반응(Engagement: like/comment/share/save 등)
5. 정보수용(Adoption/Trust) — 설문/실험/행동근거가 있을 때만
6. 검색유발(Search Lift)
7. 후보편입(Consideration Lift)
8. 선택영향(Choice Lift)
9. 예약/구매영향(Booking/Purchase Lift)
10. 실제방문영향(Arrival/Visit Lift)
11. 재생산(Reproduction: 새 리뷰/UGC/추천)

단계가 뒤로 갈수록 공개데이터만으로 인과적으로 확인하기 어렵다. 앞 단계의 큰 숫자를 뒤 단계의 성과로 대체하지 않는다.

## 6. Network graph additions
Nodes:
- Actor
- SocialContent
- Platform
- Topic/Meme/Trend
- Destination
- Product/Supplier
- TravelerSegment / DecisionUnit

Edges:
- CREATED
- VIEWED/EXPOSED_TO (관측 근거가 있을 때만)
- ENGAGED_WITH
- SHARED
- RECOMMENDED_TO
- INFLUENCED_SEARCH (인과 또는 강한 식별근거 필요)
- ENTERED_CONSIDERATION_AFTER (longitudinal evidence 필요)
- ATTRIBUTED_CHOICE_TO (self-report/experiment/telemetry evidence)
- REVIEWED_AFTER_VISIT
- AMPLIFIED_BY

모든 edge는 time, market, language, platform, source, confidence, evidence_type을 보존한다.

## 7. Measurement families
### A. Public trend sensors
언급량, 인게이지먼트, 잠재노출량, 검색량, 리뷰량, 영상/게시물량, 감성/주제 분포. 이는 추세와 관심의 센서이지 방문객 수의 직접 대체값이 아니다.

### B. Survey attribution
'어디서 한국을 알았는가', '어떤 정보원이 목적지 선택에 영향을 주었는가', '친구/가족/인플루언서/리뷰의 영향' 등을 자기보고로 측정. 회상편향과 사회적 바람직성 편향을 기록한다.

### C. Behavioral telemetry
노출 → 검색 → 상세보기 → 저장 → 비교 → 예약 → 결제 → 방문을 user/session/cohort 수준에서 연결. 개인정보·동의·식별 제한을 준수한다.

### D. Experiments / quasi-experiments
캠페인 홀드아웃, 지역/시장별 staggered rollout, 자연실험, 차분의 차분(DiD), synthetic control 등으로 증분효과를 추정. 단순 전후 비교를 인과효과라고 부르지 않는다.

## 8. Diffusion quantities — conceptual only until identified
### 재생산율
한 명의 경험자 또는 하나의 콘텐츠가 후속 기간에 만들어내는 '추가적인 유효 영향 사건'의 기대값을 나타내는 개념 변수 DiffusionReproduction을 둔다. 조회수 자체를 재생산율로 사용하지 않는다.

### 단계별 전환
예: 노출된 사람 중 실제 검색으로 이어진 비율, 검색한 사람 중 한국을 후보군에 넣은 비율. 분모가 관측되지 않으면 비율을 만들지 않는다.

### 증분효과
소셜 노출이 없었을 때와 있었을 때의 검색/후보편입/선택/예약 차이를 causal uplift로 정의한다. 이 값은 CROSS_LAYER_INTERVENTION_CAUSAL_UPLIFT와 공유한다.

## 9. Korea-specific public sensors
Korea Tourism Data Lab 글로벌 소셜미디어는 국가별 한국관광 관련 언급량, 인게이지먼트, 잠재적 노출량과 추이를 제공한다. 이는 국가×시간 단위 관심/확산 sensor로 적재하되, 방문 또는 예약의 직접 인과지표로 사용하지 않는다.

지역별 Data Lab SNS 자료도 주요 소셜미디어/커뮤니티의 관광 관련 언급량, 동반유형, 여행유형/트렌드 등을 제공하지만 '모든 언급량을 파악하는 것이 아니므로 추세 파악용'이라는 공식 제한을 provenance에 보존한다.

## 10. Research evidence incorporated
Tourism/social-media research consistently treats social media and electronic word of mouth (eWOM) as relevant to information search, destination image, attitudes, behavioral intentions, and destination choice. Evidence also shows heterogeneous reception: the same eWOM does not affect every receiver equally, so receiver psychology and segment must remain in the model.

Industry path-to-purchase research also observes social media being used for destination inspiration, visual content, and feedback from friends/family. These are behavioral/industry evidence for pathway existence, not universal causal coefficients.

## 11. Links to existing engine axes
- WHY: social content can activate or reshape motives.
- SEARCH: exposure may trigger branded/unbranded search.
- CHOICE: content can change consideration set or destination image.
- HUMAN_PSYCHOLOGY: susceptibility, trust, novelty-seeking, social proof, identity signaling moderate effect.
- TRAVEL_PARTY: receiver may be Planner/Influencer rather than traveler or payer.
- PAIN/SATISFACTION: negative and positive experience become outgoing content.
- COMPETITIVE_DESTINATION: Japan/Taiwan/Thailand content can pull Korea out of consideration, and vice versa.
- TEMPORAL: diffusion has lags, bursts, decay, seasonality, shocks.
- OPPORTUNITY: amplification opportunity is valid only if incremental downstream value exceeds content/acquisition/intervention cost.

## 12. Opportunity patterns enabled
- High satisfaction + low content generation = advocacy activation gap
- High content generation + low foreign-language reach = language diffusion island
- High reach + low search lift = attention without intent
- High search lift + low consideration = image/fit problem
- High consideration + low booking = downstream booking/payment/supply friction, not a social problem
- Strong organic diffusion in a niche segment + weak sellable supply = emerging demand/supply gap
- Negative eWOM cluster + verified recurring failure = reputation-driven failure loop
- Competitive destination viral growth + Korea consideration loss = substitution-risk signal, not proof until switching evidence exists

## 13. Anti-distortion rules
1. Never convert potential reach to unique people without a validated method.
2. Never equate engagement with intent.
3. Never equate sentiment with satisfaction unless measurement definitions align.
4. Never infer causal travel lift from temporal correlation alone.
5. Bot/spam/paid amplification and duplicate content must be flagged where detectable.
6. Platform algorithm changes are regime changes and must be time-tagged.
7. Country/language/platform coverage bias must remain explicit.
8. Creator influence and receiver susceptibility are separate variables.
9. Organic, paid, owned, and earned media must not be merged without labels.
10. Post-trip advocacy can be negative as well as positive.

## 14. Source hierarchy for this layer
Tier A: KTO/Data Lab official global/region SNS metrics; official visitor surveys with information-source questions; platform first-party measurement documentation where available.
Tier B: peer-reviewed tourism/eWOM/social-network research and systematic reviews.
Tier C: first-party travel-platform/industry path-to-purchase studies with disclosed methodology.
Tier D: public platform observations, reviews, Reddit/community/SNS corpora used as VOC/trend evidence with coverage limitations.

## 15. Current readiness
Public evidence readiness: 0.92
Engine-ready: 0.65

Primary blockers:
- person/cohort-level exposure → search → consideration → booking → arrival linkage
- true unique exposure denominators
- organic vs paid attribution
- algorithmic amplification observability
- Korea-inbound causal lift by market/platform/content
- peer-to-peer offline recommendation telemetry

Status: DESIGN_LOCKED_PUBLIC_EVIDENCE_PARTIAL_PROPAGATION_CAUSAL_TELEMETRY_PENDING
