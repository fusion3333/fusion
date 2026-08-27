# PSYCHOLOGY MEASUREMENT & PROXY MATRIX V1

Date: 2026-08-27
Status: MASTER RESEARCH ROUTER
Depends on: HUMAN_MOTIVE_PSYCHOLOGY_LAYER_V1.md

## 1. 목적

심리는 직접 관측되지 않는 latent variable이 많다. 따라서 하나의 proxy를 심리 그 자체로 취급하지 않고 여러 Measurement Type을 삼각검증한다.

`Latent Construct → Survey/Stated → Search → Content/Social → Booking → Mobility → Spend → Experience/Review → Repeat`

## 2. Evidence ladder

### A. DIRECT STATED
- 정부/관광청 여행동기 조사
- 잠재여행객 조사
- 방한 선택이유
- 방문활동 선호
- 만족/재방문/추천

장점: 질문을 직접 측정
한계: stated preference, recall/social-desirability bias

### B. INTENT / SEARCH
- destination search
- flight search
- keyword/category search
- Google Trends 등 집계형 관심신호

장점: 행동 이전 선행신호 가능
한계: 검색≠여행의도≠구매

### C. SOCIAL / CULTURAL SIGNAL
- 공개 SNS/영상/커뮤니티의 집계 추세
- fandom/content exposure
- topic/sentiment/engagement

장점: 집단심리·신규트렌드 포착
한계: 플랫폼 사용자 편향, 알고리즘 영향

### D. REVEALED CHOICE
- 실제 목적지 예약
- 항공발권
- 숙박예약
- 체험예약

장점: stated보다 실제 선택에 가까움
한계: 선택 이유 자체는 직접 관측되지 않음

### E. IN-DESTINATION BEHAVIOUR
- 지역이동
- 체류시간
- 방문 POI
- 활동
- 소비

장점: 실제 행동
한계: motive는 추론값

### F. POST-TRIP
- 리뷰 topic/emotion
- 만족
- 추천
- 재구매
- 재방문

## 3. Construct → Measurement map

| Construct | Direct | Intent Proxy | Social Proxy | Revealed Proxy | Outcome | Ground |
|---|---|---|---|---|---|---|
| Escape/Rest | motive survey | resort/wellness search | healing/escape topics | wellness/stay booking | dwell/satisfaction | interview |
| Novelty | psychographic survey | new/hidden/local search | discovery topics | unusual experience booking | activity diversity | interview |
| Learning/Culture | motive survey | heritage/culture search | history/culture content | museum/craft/heritage booking | visits/spend | supplier interview |
| Authenticity | motive/value survey | local/authentic/traditional search | authenticity discourse | local/traditional booking | review topics | interview |
| Fandom/Belonging | fandom/involvement survey | artist/content/Korea search | fandom engagement | concert/location booking | merch/visit/revisit | fan interview |
| Status/Prestige | motive/value survey | luxury/premium search | status signalling | luxury booking | premium spend | interview |
| Healing/Wellness | motive survey | wellness/medical search | wellness discourse | wellness/medical booking | spend/satisfaction | provider interview |
| Safety/Risk | perceived risk survey | safety/visa query | risk discourse | cancellation/choice | route/booking shifts | interview |
| Social Norm | subjective norm survey | group planning search | peer/influencer signals | group booking | party composition | interview |
| Korea Image | cognitive/affective image survey | Korea category search | content/sentiment | Korea choice | actual activities | interview |

위 표의 proxy는 연구가설이다. 실제 correlation/lead-lag/outcome validation 전에는 construct 값으로 확정하지 않는다.

## 4. Origin-country Mirror Source Router

각 Origin 국가마다 다음 순서로 찾는다.

### O — Official
O1 국가 통계청/정부 outbound travel survey
O2 관광청/관광부 outbound consumer research
O3 출입국/국경/교통 통계
O4 중앙은행/카드/가계여행지출 통계
O5 공공 문화/미디어/국가이미지 조사

### E — Enterprise
E1 항공검색/발권/좌석
E2 Google/search/map
E3 OTA booking/accommodation/activity
E4 card/payment
E5 telecom/mobility where legally/aggregately available

### S — Social/VOC
S1 해당국 주요 social platform
S2 YouTube/TikTok/Instagram etc.
S3 여행 커뮤니티/Reddit equivalent
S4 Google/OTA review
S5 fandom/community signals

### R — Research
R1 peer-reviewed destination-choice/motivation
R2 national university/research institute
R3 OECD/UN Tourism
R4 market/culture research with methodology
R5 cross-cultural measurement studies

## 5. Korea-side Router

핵심 후보:
- 외래관광객조사: actual visitors' stated reasons, behaviour, satisfaction
- 잠재 방한여행객 조사: non-visitors/potential visitors, country-level intention/image
- 관광데이터랩: mobility/spend/navigation and market analyses
- 해외한류실태조사 등 문화노출/한류 관련 공식 조사
- 국가이미지 관련 공식 조사
- immigration/arrival administrative data
- enterprise search/booking/payment data where accessible
- public social/VOC signals

## 6. Temporal specification

각 series에:
`period_start`, `period_end`, `frequency`, `month`, `season`, `origin_country`, `destination`, `segment`, `measurement_type`, `methodology_regime`
를 저장한다.

목표는 10년+이지만 심리설문이 매년 동일 문항으로 존재하지 않을 수 있다. 없는 월/연도를 보간해 사실처럼 만들지 않는다.

## 7. Lead-Lag hypotheses

검증 후보:
- content exposure → Korea image
- Korea image → search
- search → flight search
- flight search → booking/ticket
- booking → arrival
- arrival → spend/activity
- experience → review
- satisfaction → revisit/recommendation

각 edge는 `lag distribution`, `country`, `segment`, `season`, `regime`별로 달라질 수 있다.

## 8. Measurement Equivalence

국가별 설문문항 번역과 scale이 다르면 직접 비교하지 않는다.

필수 점검:
- wording
- response scale
- sampling frame
- age eligibility
- resident/nationality definition
- trip definition
- business/leisure inclusion
- recall period
- online/offline mode
- weighting

비교불가 시 `NON_EQUIVALENT` 표시.

## 9. Psychology Confidence

심리 construct confidence는 최소 다음을 분리한다.
- `DIRECT_STATED`
- `MULTI_PROXY_SUPPORTED`
- `BEHAVIOUR_INFERRED`
- `SOCIAL_SIGNAL_ONLY`
- `HYPOTHESIS`

## 10. 연구 우선순위

`ResearchPriority` 최종공식은 아직 만들지 않는다. 운영상 다음 요소를 기록한다.
- Missingness
- Decision importance
- Expected information gain
- Source availability
- Measurement quality
- Cost
- Ground validation need

실제 데이터가 쌓인 후 우선순위 함수와 가중치를 검증한다.
