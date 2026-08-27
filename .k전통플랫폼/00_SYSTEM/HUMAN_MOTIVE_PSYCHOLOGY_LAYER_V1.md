# HUMAN MOTIVE & PSYCHOLOGY LAYER V1

Date: 2026-08-27
Status: MASTER / PROVISIONAL ONTOLOGY
Scope: Global Origin → Korea Destination Choice → In-Korea Journey → Return/Revisit

## 0. 목적

기존 관광 데이터는 주로 `누가/언제/어디서/무엇을 했는가`를 관측한다. 본 Layer는 그 행동의 상위 원인인 `왜 여행하는가`, `왜 특정 목적지를 선택하는가`, `왜 한국에서 특정 경험을 선택하는가`를 개인심리와 집단심리 수준에서 구조화한다.

최종 수학공식을 지금 확정하지 않는다. 본 문서는 **측정해야 할 잠재변수(latent constructs), 관측 proxy, 시간축, 연결관계에 대한 연구가설**이다.

## 1. 최상위 causal hypothesis

`Human Need/State → Travel Motive → Social/Collective Influence → Destination Image → Expected Benefit → Choice Set → Korea Consideration → Search/Plan → Attempt → Actual Behaviour → Emotion/Satisfaction → Memory/Sharing → Loyalty/Revisit`

핵심 분리:
- `Why Travel?` = 여행 자체를 발생시키는 Push/Internal motive
- `Why This Destination?` = 목적지 선택을 만드는 Pull/Expected utility/image
- `Why This Experience?` = 목적지 내부의 활동/상품 선택
- `Why Now?` = 계절, 생애주기, 휴일, 경제상태, 이벤트, 사회적 유행 등 timing trigger

`Underlying Need ≠ Stated Reason ≠ Observed Behaviour`

## 2. 개인심리 Personal Psychology

### P1 Basic / Restoration
- Escape / 일상탈출
- Rest / 휴식
- Recovery / 회복
- Healing / 치유
- Stress reduction
- Freedom / autonomy

### P2 Stimulation / Exploration
- Novelty seeking
- Curiosity
- Adventure
- Sensation seeking
- Uncertainty tolerance
- Discovery

### P3 Growth / Learning
- Learning
- Cultural understanding
- Self-development
- Competence/mastery
- Intellectual stimulation
- Perspective change

### P4 Identity / Self
- Self-expression
- Identity confirmation
- Identity exploration
- Self-expansion
- Authenticity seeking
- Nostalgia
- Spiritual meaning

### P5 Social / Relationship
- Belonging
- Family bonding
- Couple intimacy
- Friendship bonding
- Meeting people
- Social recognition
- Status/prestige
- Shareability / social display

### P6 Hedonic / Consumption
- Pleasure
- Food desire
- Shopping desire
- Beauty/fashion
- Luxury
- Entertainment
- Nightlife

### P7 Risk / Control
- Risk aversion
- Safety need
- Familiarity preference
- Planning/control need
- Language anxiety
- Payment anxiety
- Uncertainty avoidance

## 3. 집단심리 Collective Psychology

- Family norms
- Peer norms
- Friend recommendation
- Fandom identity
- Community narratives
- Social proof
- Influencer/celebrity effect
- Viral trend
- Generational identity
- National/cultural proximity
- Country image
- Historical memory
- Media framing
- Platform algorithm exposure
- Reference-group aspiration
- Herd/cascade behaviour
- Crisis/fear contagion
- Prestige/status signalling

집단심리는 개인심리를 대체하지 않는다. 동일 개인에게 여러 집단영향이 동시에 작동할 수 있다.

## 4. Korea Destination Image ontology

한국이라는 단일 이미지를 저장하지 않는다. 최소 다음 이미지/benefit bundle을 병렬로 관측한다.

- `KOREA_KPOP_FANDOM`
- `KOREA_KDRAMA_FILM`
- `KOREA_FOOD`
- `KOREA_BEAUTY_FASHION`
- `KOREA_TRADITION_HERITAGE`
- `KOREA_TECH_FUTURE`
- `KOREA_CITY_MODERNITY`
- `KOREA_WELLNESS_MEDICAL`
- `KOREA_NATURE_SEASON`
- `KOREA_SHOPPING_VALUE`
- `KOREA_NIGHTLIFE_ENTERTAINMENT`
- `KOREA_SAFETY_CONVENIENCE`
- `KOREA_EDUCATION_LANGUAGE`
- `KOREA_BUSINESS_MICE`
- `KOREA_FRIENDS_FAMILY`

각 image는 `Cognitive Image`와 `Affective Image`를 분리한다.

## 5. Destination Choice State Machine

`NO_TRAVEL_INTENT`
→ `TRAVEL_DESIRE`
→ `DESTINATION_SET_FORMED`
→ `KOREA_AWARE`
→ `KOREA_CONSIDERED`
→ `KOREA_SHORTLISTED`
→ `KOREA_SELECTED`
→ `SEARCHING`
→ `PLANNING`
→ `ATTEMPTING`
→ `BOOKED`
→ `PAID`
→ `ARRIVED`
→ `EXPERIENCED`
→ `RETURNED`
→ `REMEMBERED/SHARED`
→ `REVISIT/REBUY`

탈락도 Edge로 저장:
- Korea aware but not considered
- considered but rejected
- shortlisted but competitor chosen
- planned but failed
- attempted but booking/payment failed
- desired experience but failed

## 6. 경쟁 목적지

한국 선택은 한국만으로 설명하지 않는다.

`Choice(Korea)`는 각 Origin Market에서 경쟁목적지의 상대적 매력과 함께 관측한다.

비교 변수:
- relative price
- airfare
- direct connectivity
- visa friction
- safety
- destination image
- content exposure
- social proof
- expected experience
- language/accessibility
- booking/payment convenience
- novelty/familiarity
- season/weather

## 7. Experience Choice

한국에 온 뒤 활동선택도 motive와 연결한다.

예:
- fandom/belonging → concert, filming location, merchandise
- authenticity/learning → hanok, craft, heritage, temple, traditional food
- status/luxury → premium beauty, luxury retail, fine dining
- recovery/healing → wellness, spa, temple stay, medical/wellness
- novelty → hidden/local experiences
- tech/future → digital/technology/modern-city experiences

이는 확정 causal rule이 아니라 검증할 hypothesis edge이다.

## 8. 시간 구조

모든 가능한 관측을 다음 key로 저장한다.

`OriginCountry × Year × Month × Season × Segment × Motive × DestinationImage × JourneyState × Destination/Region × Measurement`

기본 목표:
- 최소 10년
- 월 12개
- 계절 4개 파생
- 연간값은 월별 원자료가 존재하면 월자료에서 재구성 가능하게 유지
- 코로나, 환율충격, 비자변화, 항공노선, 대형 K-content hit, 국제행사 등은 Event/Regime Node로 별도 연결

## 9. 개인 vs 집단 vs 외부조건

최소 세 층을 혼합하지 않는다.

1. `PERSONAL_LATENT`: 욕구, 가치, 성향, 감정
2. `COLLECTIVE_SOCIAL`: 규범, 팬덤, 추천, 유행, 집단서사
3. `EXTERNAL_CONSTRAINT`: 돈, 시간, 비자, 항공, 환율, 휴가, 안전, 언어

관광행동은 세 층의 상호작용 결과라는 가설로 시작한다.

## 10. 이론 Library — 복제 아닌 검증 프레임

후속 Method Library에서 다음을 비교/검증한다.
- Push–Pull
- Theory of Planned Behavior
- Expectancy–Value
- Escape–Seeking
- Travel Career Pattern
- Self-Expansion / fandom tourism
- Destination Image (cognitive/affective)
- Social identity / subjective norm
- Complex Adaptive Systems approach to motivation

단일 이론을 진실로 채택하지 않는다. 기존 연구에서도 단일 모델의 설명력 한계와 통합/확장 필요성이 반복 지적된다.

## 11. 기존 18축과의 연결

- WHO ← psychographic/personality/life-stage 추가
- WHY ← travel motive + destination motive + experience motive로 3분할
- WHEN ← Why Now / trigger / seasonal psychology
- WHERE ← destination choice / competitor choice
- STAY ← motive별 체류패턴
- DO ← motive→activity hypothesis
- SPEND ← motive/value/status/hedonic별 소비
- SEARCH ← image formation / information need
- BOOK/PAY ← perceived control/risk/friction
- MOVE ← control/familiarity/risk
- PAIN ← expectation violation + friction
- SATISFACTION ← expectation vs experience + emotion
- SUPPLY ← motive-benefit fit
- PLATFORM ← exposure/social proof/algorithmic mediation
- MONEY FLOW ← willingness-to-pay/value perception
- GAP/ISLAND ← latent demand vs accessible supply
- OPPORTUNITY ← unmet motive × solvable friction
- L7 ← validated opportunity → business experiment

## 12. 절대 규칙

- 행동에서 심리를 역추정할 때 `INFERRED` 표시
- SNS 언급을 모집단 심리로 일반화 금지
- 설문 stated preference와 실제 revealed behaviour 분리
- 국적을 심리유형으로 취급 금지
- 문화적 고정관념을 변수값으로 넣지 않음
- 개인심리 민감추론을 개인 식별 수준으로 수행하지 않음; 집계/연구 목적 세그먼트 중심
- 상관을 인과로 자동 승격하지 않음

## 13. 다음 Gate

이 Layer는 다음이 완료되기 전 최종 scoring formula로 변환하지 않는다.
1. construct definition
2. observable proxy mapping
3. source mapping
4. 10y/month availability audit
5. cross-country measurement equivalence audit
6. temporal lag analysis
7. stated vs revealed validation
8. outcome validation
