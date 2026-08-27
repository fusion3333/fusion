# MOVE — L1 EVIDENCE
Date: 2026-08-27
Status: ACTIVE

## Scope
Airport → first-hour transfer → rail/bus/taxi → metro/local transport → navigation → regional transfer → last mile → return gateway.

## E1. KTO Tourism Data Lab: tourism demand and mobility context
- Source: https://datalab.visitkorea.or.kr/datalab/portal/loc/getTourActivateForm.do
- Type: Official / aggregated tourism big data.
- Observed method: tourism-demand index uses credit-card, mobile-telecom and navigation data across 4 major categories, 8 middle categories and 59 detailed indicators.
- Use: cross-check actual regional presence (mobile), destination-search intent (navigation) and spend outcomes (card).
- Limitation: index values are re-computed from monthly regional min/max and are not a fixed 0–100 scale. Raw/indicator-level interpretation must preserve methodology.

## E2. Incheon International Airport: ground transport topology
- Source: https://www.airport.kr/ap_ko/983/subview.do and airport public-transport pages.
- Type: Official operational information.
- Evidence: airport railway ticketing/facilities and public-transport topology including buses, trains, taxis/call-vans, shuttle, rental/car-sharing.
- Use: Gateway node and available-choice graph.
- Limitation: availability ≠ traveler usage or success.

## E3. KORAIL passenger transport records
- Source: https://www.data.go.kr/data/15088862/fileData.do and related KORAIL open datasets.
- Type: Official administrative.
- Evidence: passenger transport performance by date/train type/line; annual transport statistics also available.
- Use: line-level demand/capacity context and regional-access backbone.
- Limitation: not foreigner-specific by default; never infer foreigner volume directly.

## E4. MOLIT transport-card system
- Source: https://www.data.go.kr/data/15071637/fileData.do ; https://www.data.go.kr/data/15142086/openapi.do
- Type: Official aggregated administrative.
- Evidence: modal share and card-type metadata sourced from transport-card big-data systems.
- Use: public-transport mode mix, infrastructure usage and payment-medium context.
- Limitation: usually all users, not foreign tourists specifically.

## E5. Local AFC historical depth example
- Source: https://www.data.go.kr/data/15122868/fileData.do
- Type: Official administrative.
- Evidence: Daejeon monthly station-level transport-card payment/boarding/alighting/transfer data from 2006-03 through 2025-08-31.
- Use: proof that long-horizon station/month AFC series can exist and can support seasonality/accessibility modelling.
- Limitation: Daejeon-specific and generally no nationality field.

## E6. Foreign-tourist taxi friction — Seoul
- Source: https://english.seoul.go.kr/seoul-simplifies-taxi-complaint-reports-for-international-tourists-with-qr-codes/
- Type: Official enforcement/survey.
- Evidence: Seoul conducted 7,435 interviews with international tourists in 2024 and identified 345 taxi violations; through end-May 2025, 2,901 interviews identified 143 violations. Main monitored frictions include overcharging, refusal and meter-related violations.
- Use: direct foreigner-specific transport-pain evidence.
- Limitation: Seoul-focused and enforcement/interview samples are not the same as population prevalence.

## E7. Taxi complaint channel and fare-information asymmetry
- Source: https://english.seoul.go.kr/seoul-cracks-down-on-overcharging-of-foreigners-with-english-receipts-and-other-service-improvements/
- Type: Official complaint/enforcement.
- Evidence: Jun–Dec 2025 recorded 487 foreign-passenger QR complaints; unfair fares were the most frequent issue. Seoul announced English receipts and clearer separation of meter fare vs toll fee in foreigner-facing taxi apps.
- Use: INFORMATION_GAP + TRANSACTION_COST + TRUST friction nodes.
- Limitation: complaint counts are selected reports, not incidence rates.

## E8. Foreigner taxi app access constraint
- Source: https://english.seoul.go.kr/service/movement/public-transportation/taxi/
- Type: Official service guidance.
- Evidence: Seoul explicitly distinguishes domestic taxi-app use requiring Korean phone/card context from international-service options for people without Korean cards.
- Use: onboarding/payment-accessibility graph.
- Limitation: current availability must be versioned because app rules change.

## Evidence rule
Never merge `available transport`, `aggregate ridership`, `foreigner mobility`, `navigation searches`, and `complaints` into one measure. They are separate measurements connected by graph edges.
