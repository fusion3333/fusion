# VARIABLE ACQUISITION ROUTING MATRIX V1

Date: 2026-08-27
Status: MASTER / EXECUTION ROUTER
Depends on:
- `TRAVELER_LIFECYCLE_VARIABLE_ONTOLOGY_V1.md`
- `SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V1.md`
- `SOURCE_PRIORITY_MASTER_V1.md`
- `COMPETITOR_METHOD_LIBRARY_V1.md`
- `ARCHITECTURE_V2_META_OPPORTUNITY_OS.md`

## 0. 목적
각 변수/Measurement를 `BUILD / CONNECT / BUY / GROUND / DERIVE / UNKNOWN`으로 라우팅한다. 목표는 이미 존재하는 전문 Intelligence를 재구축하지 않고, 우리만의 Cross-engine Graph·Missingness·Friction·GroundTruth·Opportunity 계층에 자원을 집중하는 것이다.

### Routing labels
- CONNECT: 공개 API/공식 원본/오픈소스/허용된 feed를 연결
- BUY: 상용 데이터/라이선스가 비용 대비 가치가 높을 때 구매 검토
- BUILD: 우리가 직접 ingestion/normalization/graph/analytics를 구현
- GROUND: 전화/방문/공급자 인터뷰 등 현장 검증
- DERIVE: 여러 Evidence를 결합해 파생하되 provenance/confidence 보존
- UNKNOWN: 현재 관측 불가/소스 미확정. 0으로 대체 금지

## 1. Lifecycle acquisition routing

| Domain | 핵심 변수 | 우선 Measurement | Primary route | Secondary | 우리 BUILD 범위 | Ground 필요 |
|---|---|---|---|---|---|---|
| WHO | 국적/거주국/연령/성별/동행 | ADMIN+SURVEY | CONNECT KTO/법무부 | BUY/CONNECT commercial air intelligence | canonical identity/time/segment normalization | 일부 |
| PRE-AWARENESS | 환율/항공좌석/비자/경기/K-content | ADMIN+MARKET+SEARCH | CONNECT official/macro | BUY air/search intelligence | event/regime graph | 아니오 |
| AWARENESS | 한국 인지 계기/미디어 노출 | SURVEY+SEARCH+SOCIAL | CONNECT KTO survey | CONNECT/BUY search/social | trigger taxonomy + cross-source normalization | 선택 |
| INTEREST | 고려도/의도/선호 | SURVEY+SEARCH | CONNECT surveys | BUY search/market intelligence | latent-state representation | 선택 |
| SEARCH | 검색어/채널/언어/정보결측 | SEARCH+SOCIAL | CONNECT available public/official | BUY commercial search intelligence | query taxonomy, missing-info detector | 아니오 |
| PLAN | FIT/package/hybrid, 일정/기간/지역 | SURVEY+BOOKING | CONNECT KTO survey | BUY OTA/air intelligence | itinerary state/sequence graph | 아니오 |
| BOOK | 채널/lead time/가격/실패 | BOOKING | BUY/CONNECT OTA/air where lawful | supplier direct | booking friction model | 예 |
| PAY | 해외카드/FX/실패/환불 | TRANSACTION | CONNECT KTO card aggregates | BUY card/PG if justified | transaction-friction ontology | 예 |
| AIR | 좌석/검색/발권/arrival | AIR SEARCH+BOOKING | BUY ForwardKeys/Amadeus candidate | CONNECT airport/official | adapter only; do not rebuild global air engine | 아니오 |
| ARRIVAL | 입국/공항/첫시간 | ADMIN+SURVEY+VOC | CONNECT immigration/airport | SOCIAL/VOC | first-hour friction graph | 선택 |
| MOVE | 통신 이동/내비/철도/버스/택시 | MOBILITY+NAVIGATION | CONNECT KTO DataLab/public transport | BUY mobility if needed | multimodal movement graph | 선택 |
| WHERE | 지역방문/sequence/체류 | MOBILITY+SURVEY | CONNECT KTO DataLab | BUY mobility | itinerary transition graph | 아니오 |
| STAY | 숙박유형/가격/ADR/occupancy/LOS | SURVEY+BOOKING+PRICE | CONNECT KTO/official | BUY AirDNA/Lighthouse/OTA | lodging canonical model | 선택 |
| DO | 활동/체험/음식/쇼핑/웰니스 | SURVEY+POI+BOOKING | CONNECT KTO/TourAPI | BUY DataAppeal/OTA candidate | activity taxonomy + actual/planned/failed distinction | 예 |
| SPEND | 국가×지역×업종×객단가 | TRANSACTION+SURVEY | CONNECT KTO card/survey | BUY Visa/card data candidate | spend normalization, leakage model | 아니오 |
| PAIN | 언어/예약/결제/이동/환불/CS | SURVEY+REVIEW+SOCIAL | CONNECT official surveys | CONNECT lawful VOC / BUY sentiment engine | friction taxonomy + evidence aggregation | 예 |
| SATISFACTION | 만족/추천/재방문 | SURVEY+REVIEW | CONNECT KTO | CONNECT lawful reviews | outcome graph | 선택 |
| SUPPLY | 등록/실영업/품질/수용량 | REGISTRY+POI | CONNECT TourAPI/지자체/인허가 | BUY POI intelligence | supplier entity resolution | 강함 |
| DISCOVERABILITY | Google/OTA/공식사이트/다국어 노출 | SEARCH/POI/PLATFORM | CONNECT lawful public metadata | BUY DataAppeal candidate | coverage/visibility features | 일부 |
| BOOKABLE SUPPLY | 즉시예약/예약경로/availability | BOOKING | OTA/direct supplier | BUY feed if available | bookability state | 강함 |
| PAYABLE SUPPLY | 해외카드/PG/결제 가능 | TRANSACTION/SUPPLIER | supplier/direct evidence | PG data candidate | payable state | 강함 |
| WILLING SUPPLY | 외국인 확대/협업/패키지 의향 | GROUND | GROUND | - | proprietary supplier graph | 필수 |
| CAPACITY | 실제 일/주/월 수용량 | GROUND/OPERATIONS | GROUND | supplier system | capacity model | 필수 |
| REVALUE INPUT | 묶음상품/가격변경/배송/원가 | GROUND+PRICE | GROUND | platform price comps | recombination candidate generator | 필수 |
| PLATFORM | OTA/지도/SNS 지배영역 | PLATFORM+SEARCH+BOOKING | CONNECT/BUY | official company data | cross-platform coverage graph | 아니오 |
| MONEY FLOW | commission/CAC/PG/FX/tax/margin | TRANSACTION+CONTRACT | CONNECT public terms | GROUND/commercial agreements | unit-economics schema | 강함 |
| POST-TRIP | review/share/WOM/rebuy/revisit | REVIEW+SURVEY+TRANSACTION | CONNECT surveys/VOC | future first-party data | post-trip loop | 선택 |
| LOST DEMAND | desired-but-failed | DERIVED+GROUND | DERIVE | GROUND/VOC | BUILD: core proprietary construct | 강함 |
| REAL SELLABLE SUPPLY | discoverable×language×bookable×payable×willing×capacity | DERIVED | DERIVE | GROUND | BUILD: core proprietary construct | 필수 |
| GAP/ISLAND/BOTTLENECK | 연결 단절/손실 | DERIVED | BUILD | - | 핵심 IP | 검증 |
| OPPORTUNITY | 경제적으로 해결할 가치 | DERIVED+OUTCOME | BUILD | - | 핵심 IP; 공식은 아직 provisional | 검증 |

## 2. Existing engine policy
### CONNECT/BUY 우선 후보
- Korea Tourism Data Lab: Korea mobility/card/navigation/official tourism analytics
- KTO surveys/TourAPI: traveler survey + content/supply backbone
- Immigration/airports/public transport: administrative truth
- ForwardKeys / Amadeus: air search/booking/capacity/forecast domain
- Data Appeal / Mabrian: destination/POI/sentiment/digital traces domain
- AirDNA / Lighthouse: lodging/short-term rental/pricing domain
- Visa/card/PG class: spend/payment domain
- TAO/TKG open research: ontology/KG engineering reference

정확한 라이선스/가격/API 가능성은 별도 procurement due diligence 전에는 확정하지 않는다.

## 3. 무엇을 직접 만들지 않는다
글로벌 항공 발권엔진, 범용 POI DB, 범용 리뷰 sentiment engine, 단순 관광 dashboard, 범용 숙박 market intelligence, 단순 지역 benchmark를 우리의 핵심 IP로 재구축하지 않는다.

## 4. 반드시 직접 만드는 계층
1. Evidence Adapter + provenance/confidence
2. Canonical Measurement Registry
3. Traveler Journey state/event/decision/transaction graph
4. Planned vs Actual vs Desired-but-Failed
5. Supplier Sellability State Machine
6. Cross-engine temporal graph
7. Missingness/Conflict detector
8. Friction/Value-leakage detector
9. Ground Research Queue
10. Real Sellable Supply
11. Lost Demand
12. Gap/Island/Bottleneck/Asymmetry detection
13. Opportunity Hypothesis ranking
14. Experiment→Transaction→Outcome learning loop

## 5. Supplier Sellability State Machine
`REGISTERED → OPERATING → DISCOVERABLE → LANGUAGE_ACCESSIBLE → BOOKABLE → PAYABLE → WILLING → CAPACITY_AVAILABLE → RECOMBINABLE → REAL_SELLABLE`

각 transition에는 evidence, timestamp, source, confidence, failure_reason을 저장한다.

## 6. Traveler Intent State Machine
`AWARE → INTERESTED → SEARCHING → CONSIDERING → PLANNED → ATTEMPTED → BOOKED → PAID → ARRIVED → EXPERIENCED → SATISFIED/FAILED → SHARED → REVISIT/REBUY`

특히 `PLANNED/ATTEMPTED → FAILED` edge를 보존한다. 이것이 latent/lost demand 탐지의 핵심이다.

## 7. Knowledge Graph 방향
기존 관광 KG 연구의 entity 중심 모델을 참조하되 itinerary/sequence/transition을 1급 객체로 만든다. 2026 systematic review에서도 기존 연구가 entity 중심이고 itinerary-level constructs와 inter-destination dependencies가 상대적으로 약하다고 지적되므로, 우리 Graph는 `Trip`, `Itinerary`, `Segment`, `Transition`, `Attempt`, `Failure`, `Recovery`, `Transaction`, `SupplierState`를 명시적으로 모델링한다.

## 8. Research priority
다음 조사대상은 단순 Missingness가 아니라:
`DecisionImpact × Missingness × UncertaintyReduction × SourceFeasibility × ExclusivityPotential`
의 개념으로 우선순위를 잡는다. 현재는 최종 수식/가중치를 확정하지 않는다.

## 9. 실행 Gate
### Gate A — Architecture readiness
- ontology/source/evidence/routing 확정
- 상태: 거의 완료

### Gate B — Measurement readiness
- 핵심 변수 dictionary + measurement definitions + methodology breaks
- 상태: 진행 중

### Gate C — Data coverage
- 10년+ official backbone ingest
- 상태: 초기/부분

### Gate D — Graph readiness
- entity resolution + temporal/event graph + journey/supplier state
- 상태: 설계됨, 본격 구현 전

### Gate E — Opportunity model readiness
- 실제 relationship + ground validation + outcome labels
- 상태: 아직 이르며 provisional hypothesis만 유지

## 10. 다음 실행
1. Canonical Measurement Registry V1 작성
2. O1 official backbone의 실제 10년+ raw acquisition/manifest 확장
3. TAO/TKG ontology를 우리 Journey/Transition 요구와 비교하여 reuse/extend 결정
4. Supplier Ground Intelligence schema/100→20 검증 queue 확정
5. 이후 첫 vertical pilot(전통관광)을 선택해 end-to-end graph를 작동시킨다.
