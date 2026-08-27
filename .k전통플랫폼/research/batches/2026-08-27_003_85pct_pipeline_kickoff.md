# 2026-08-27 Batch 003 — 85% Research Pipeline Kickoff

## L1 EVIDENCE
### EV-0021 — 2025 잠재 방한여행객 조사
한국관광공사는 2026-05-19 `2025년 잠재 방한여행객 조사` 본보고서와 전체/거주국별 집계표를 공개했다. 일반 외국인 및 방한 의향자를 구분하고 26개 거주국 단위의 세부 결과 확인이 가능하다. 원자료는 별도 신청 절차가 있다.
Source: 한국관광 데이터랩, 2025 잠재 방한여행객 조사.
Status: VERIFIED.

### EV-0022 — 부산 외국인 관광시장
부산시는 2025년 10월 누계 외국인 방문객 3,019,164명을 발표했고, 연간 약 350만명을 추정했다. 2028년 목표는 외국인 관광객 500만명 및 관광지출 연 1.5조원이다.
Status: VERIFIED.

### EV-0023 — 제주 국가별 외국인 소비
제주관광공사 빅데이터플랫폼은 신한카드 기반 읍면동 단위 외국인 소비 데이터를 국가별/대륙별/업종별로 제공한다. 온라인 결제 누락과 데이터 고도화에 따른 과거값 변동 가능성을 유의사항으로 명시한다.
Status: VERIFIED.

### EV-0024 — 경쟁상품의 실제 판매 증거
KKday 서울 Cultural Experiences에는 100개 이상의 상품이 노출되며, 일부 한복 상품은 수천 개 리뷰와 수만 건 이상의 booked proxy가 보인다. Klook의 전통차 체험은 영어/중국어/한국어, 90분, 평점 5.0/5, 96리뷰, 200+ booked로 노출됐다. 락고재 상품은 한옥+한복+다례+도슨트를 하나로 번들한다.
Status: VERIFIED MARKET PROXY.

### EV-0025 — 여행업 규제 경계
관광진흥법 시행령 제2조에서 종합여행업은 국내외를 여행하는 내국인 및 외국인을 대상으로 하는 여행업으로 정의된다. 외국인 대상 국내 여행상품을 직접 기획·알선·판매하는 사업모델은 종합여행업 해당성 검토가 필수다.
Status: VERIFIED LEGAL EVIDENCE.

### EV-0026 — 외국인환자 유치 규제
Medical Korea/KHIDI는 외국인환자 유치 등록기관/유치사업자의 실적보고 체계를 운영하며 관련 법률상 등록·보고 의무가 존재한다. 의료행위와 관광·비의료 웰니스는 상품·결제·운영 구조에서 분리 설계할 필요가 있다.
Status: VERIFIED LEGAL EVIDENCE.

## L2 OBSERVATIONS
### OB-0011
공식 데이터는 `국가 → 지역 → 소비 → 업종`으로 연결 가능한 수준까지 존재하며, 고객 수요 데이터와 공급자 DB를 연결할 수 있는 기반이 확인됐다.

### OB-0012
전통문화 단품 상품은 이미 Klook/KKday/Trazy에서 시장검증이 되어 있다. 한복, 차, 공예 뿐 아니라 한옥+한복+다례 같은 번들까지 존재한다.

### OB-0013
따라서 `전통체험을 온라인에서 판매한다` 자체는 차별화가 아니다.

### OB-0014
의료 K-Wellness는 관광 경험과 동일한 규제층에 놓이지 않는다.

## L3 INSIGHTS
### IN-0009
K전통플랫폼의 moat는 inventory volume이 아니라 `검증된 공급자 + 여러 카테고리 연결 + 개인화 Journey + 이동/언어/결제 마찰 제거 + 데이터 그래프`에서 만들어야 한다.

### IN-0010
국가별/지역별 소비데이터와 OTA 판매데이터를 연결하면 `어느 나라 사람이 어느 지역에서 무엇을 얼마에 사는지`를 기반으로 Journey를 설계할 수 있다.

### IN-0011
서울 단일시장만 보더라도 경쟁이 강하기 때문에 MVP는 일반 검색 Marketplace보다 `curated high-trust journey layer`가 적합하다.

## L4 HYPOTHESES
### HY-0011
고객은 단품 가격의 단순 합보다 5~15% 프리미엄을 내더라도 예약·언어·이동·품질 리스크가 제거된 Journey를 선택할 수 있다.
Status: UNVALIDATED.

### HY-0012
서구권 장거리 고객은 근거리 반복방문 시장보다 Heritage/Wellness/Private Guide 결합상품의 객단가가 높을 것이다.
Status: VALIDATING.

### HY-0013
비의료 Wellness를 초기 MVP에 포함하고 의료상품은 등록 파트너 네트워크 방식으로 후순위 연결하는 것이 규제/운영 리스크 대비 효율적이다.
Status: VALIDATING.

## L5 DECISIONS — provisional
### DE-0006
경쟁 포지셔닝을 `more activities`가 아니라 `better connected Korean journeys`로 둔다.

### DE-0007
Medical Wellness와 Non-medical Wellness를 데이터 스키마와 사업모델에서 별도 도메인으로 관리한다.

## L6 NEXT PLAN
1. 26개국 잠재방한 조사 집계표를 동일 스키마로 정규화.
2. 미국·캐나다·호주·영국·프랑스·독일·일본·중국·대만 우선 Persona 구축.
3. 서울·경주·부산·제주·경기의 체험 공급자 inventory 구축.
4. Klook/KKday/Trazy/GetYourGuide/Viator 상품 샘플을 카테고리/가격/평점/리뷰/booked proxy로 DB화.
5. 종합여행업, 통신판매, PG, 개인정보 국외이전, 외국인환자 유치 규제를 법률 체크리스트로 분해.
6. Journey unit economics 템플릿 작성.
7. 85% 이전에는 L7 확정본 대신 Living Business Plan만 유지.

## L7 BUSINESS PLAN 영향
Problem은 `콘텐츠 부족`이 아니라 `관광 가치사슬 분절과 신뢰/거래비용`으로 정의된다. Solution은 `전통문화 상품목록`이 아니라 `Korean Journey Orchestration`으로 정의된다. 단, PMF와 공급자 경제성은 아직 검증되지 않았으므로 투자/정부지원용 사업계획서에서 확정 사실처럼 기술하지 않는다.
