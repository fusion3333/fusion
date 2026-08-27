# MOVE FOREIGN TRAVELER MULTISOURCE EVIDENCE — BATCH G
Date: 2026-08-27
Status: L1 EVIDENCE
Scope: mobility after an international visitor arrives in Korea. Source routing follows O Official -> E Enterprise -> S Social/VOC -> R Research -> G Ground, with N New/Operational telemetry added where the fixed stack cannot observe actual failure.

## 1. Canonical mobility journey
ARRIVAL_GATE -> MODE_DISCOVERY -> ROUTE_UNDERSTANDING -> TICKET/CARD_ACQUISITION -> TOPUP/BOOKING -> PAYMENT -> BOARDING -> TRANSFER -> LAST_MILE -> DESTINATION_ARRIVAL -> RETURN/CONTINUE

Every mode is measured as SUPPLY -> DISCOVERABLE -> UNDERSTANDABLE -> BOOKABLE/ACQUIRABLE -> PAYABLE -> BOARDABLE -> COMPLETED. Technical availability is never treated as foreign-traveler usability.

## 2. Mode universe
Airport access: AREX, airport limousine/intercity bus, taxi/call-van, rental car, terminal transfer.
Intercity: KTX, SRT, express bus, intercity bus, domestic air, ferry, rental car.
Urban/local: subway, city/village bus, taxi/ride-hailing, bicycle/PM where relevant, walking.
Last mile: local bus, taxi, shuttle, walking, supplier pickup, rental car.

## 3. O — OFFICIAL
### O1 Korea Tourism Organization — 2026 Korea Transportation Guide
KTO's May 2026 foreign-visitor transport service status board is the strongest current cross-mode foreigner-usability reference found in this batch. It distinguishes online information/booking, ticket machines/counters, ride hailing, prepaid Tmoney and rental cars rather than treating transport as one binary variable. The board states that foreign-issued cards are accepted on identified paths including taxi-hailing platforms, express/intercity booking channels, selected ticket-machine/counter paths and rental cars, while prepaid Tmoney purchase/top-up is shown as cash-only/no foreign-issued card acceptance. It also notes reciprocity limitations for rental cars/IDPs for some nationalities. Evidence: KTO/VisitKorea, KoreaTransportationGuide_enu.pdf, published 2026-05-18.

### O2 Incheon International Airport Corporation
The airport's official transport pages expose the arrival gateway as a multimodal node: bus, Airport Railroad, taxi/call-van, plus terminal-transfer information. Its taxi guide explicitly warns about illegal solicitation/overcharging by call-vans posing as taxis and directs users to designated taxi stands. It identifies International Taxi/Smart Taxi for foreign nationals and publishes taxi categories, stands and surcharge rules. This is both SUPPLY evidence and official PAIN/risk evidence.

### O3 KORAIL
KORAIL announced that foreign users can scan a QR code to reach its English/Chinese/Japanese booking site without installing KorailTalk and can purchase tickets using foreign-issued credit cards. KORAIL explicitly framed the change as reducing inconvenience caused by app use and the lack of overseas-card support at ticket machines. This is direct evidence that BOOKABILITY/PAYABILITY depends on channel, not simply on rail supply.

### O4 Seoul Metropolitan Government — Climate Card
Seoul's official English guidance shows a distinct visitor path for short-term Climate Card passes and documents international-card purchase/recharge support introduced from 2025-03-20 for relevant products. Coverage remains mode/geography specific: Seoul-area subway/bus and specified lines/services; airport/other buses and out-of-area services are not universally included. This must remain a product/channel/date-specific accessibility state.

## 4. E — ENTERPRISE / PLATFORM
### E1 Tmoney
Tmoney's official MaaS description shows TmoneyGO combining bus/subway information, express/intercity/SRT/air/rental-car booking, taxi calling, bicycle/kickboard rental. It reports 14.22m cumulative members, 4.35m monthly active users, 7.7m monthly payments and KRW 118.1bn monthly payment scale on its current product page. These are platform-scale/context measures, not foreigner-use measures.

Tmoney Mobility's taxi settlement page states that its network supports domestic/foreign credit cards and QR payment including Alipay/UnionPay/WeChat, and is integrated with Kakao T, Uber, Tada, TmoneyGO Taxi and regional call apps. It reports roughly 2m taxi settlement cases and KRW 20bn settled per day as of Dec 2024, with 160k of 250k taxis using its settlement service. This is strong PAYMENT-SUPPLY evidence but does not reveal foreign-card authorization failure rate.

### E2 Kakao Mobility k.ride
k.ride is explicitly positioned as a mobility platform for foreigners. Public product material states English/Japanese/Chinese UI, destination search and translated driver chat across 100+ languages (the k.ride site currently states 133-language search/chat support), cashless credit/debit/mobile payment, and cross-border ride-hailing availability. This directly addresses LANGUAGE + SEARCH + COMMUNICATION + PAYMENT friction. It does not publicly expose request-to-match, cancellation, payment-failure or completion conversion by nationality.

### E3 Uber Taxi Korea
Uber's Korea pages expose licensed local taxi request, upfront/estimated fares, driver/vehicle information, real-time tracking, in-app support and card or in-person payment paths. Seoul documentation states 24/7 requesting and permits cash/card in-person payment or a card added to the Uber account. This is a useful foreign-familiar platform comparator, but public pages do not establish actual foreign-tourist success rates.

## 5. S — SOCIAL / VOC
Reddit KoreaTravel is used only as REPORTED_PAIN, never as prevalence. Recurrent themes in the sampled threads include: overseas-card/Kakao account or identity-registration confusion; uncertainty over which transit card to buy; cash/top-up confusion; preference for Naver/Kakao navigation over Google for Korean transit; luggage influencing airport/taxi choice; late-night airport/last-mile anxiety; and taxi overcharge anecdotes. A recent Aug 2026 thread specifically reports Kakao identity/foreign-card signup friction; another Aug 2026 Busan thread describes taxi vs subway/bus tradeoffs for coastal/last-mile destinations. These signals generate hypotheses to test against official/platform telemetry, not population estimates.

## 6. R — RESEARCH ROUTE
Research acquisition should now be targeted, not broad: tourist mode-choice; public-transport accessibility; destination accessibility and repeat/satisfaction; MaaS adoption barriers for temporary foreign visitors; language/payment effects; airport-to-city mode choice; rural/regional last-mile tourism; luggage and mobility; mobility impairment/accessibility; and smartphone/navigation dependence. Research evidence is used to validate mechanisms and variable design, not replace operational measurements.

## 7. G — GROUND INTELLIGENCE REQUIRED
Online sources cannot reliably observe: tourist tried-but-failed boarding; route abandoned after map search; bus stop/terminal comprehension failure; driver refusal; luggage rejection/capacity; supplier shuttle availability; rural taxi wait; last train/bus miss; payment authorization failure; wrong-platform identity verification; or the final 3–20 km to a tourism asset. Ground instruments required: visitor travel diary/intercept, mystery journey, supplier pickup interview, station/terminal observation, and failure-event capture.

## 8. N — NEW DATA ROUTE ADDED
The fixed O/E/S/R/G stack is insufficient for FAILURE JOURNEY. Add N=Operational/First-party Telemetry as an explicit acquisition route. Highest-value targets: app funnel events (search -> quote -> request -> match -> board -> complete), payment authorization/decline by foreign BIN/brand, transit-card purchase/top-up attempts, booking abandonment reason, AFC/ticketing channel outcomes, taxi dispatch failure, last-mile wait time, and supplier pickup capacity. These require partnership, licensed data purchase or our own instrumentation; do not infer them from public supply.

## 9. Evidence discipline
TransportSupply != ForeignerUsableSupply != NavigationIntent != BookingAttempt != PaymentSuccess != Boarding != ActualPresence != CompletedJourney.
Reported complaint != verified violation.
Platform feature != platform conversion.
Network ridership without nationality != foreigner ridership.
Search/navigation != physical presence.

## 10. Immediate evidence gaps
1. Foreign visitor mode share by nationality/region/season.
2. Airport access mode share by nationality and party/luggage.
3. KTX/SRT/express/intercity actual foreign booking channel mix.
4. Foreign-card approval/decline and top-up failure rates.
5. App signup/identity failure for short-term visitors.
6. Cross-region OD for foreigners, especially Seoul -> non-capital regions.
7. Last-mile completion from rail/bus terminal to tourism POI.
8. Late-night/low-frequency/rural accessibility.
9. Luggage/party-size accessibility.
10. Mobility friction -> abandoned visit/spend causal link.
