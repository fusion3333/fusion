# SOURCE PRIORITY MASTER V1 — FULL TRAVELER LIFECYCLE

Date: 2026-08-27
Status: **MASTER / OPERATIONAL V1**
Scope: Korea Inbound Tourism — awareness abroad → return home → review/rebuy/revisit
Must reference:
- `SOURCE_ROUTING_AND_EVIDENCE_STANDARD_V1.md`
- `TRAVELER_LIFECYCLE_VARIABLE_ONTOLOGY_V1.md`
- `DECISION_2026-08-27_FEDERATED_INTELLIGENCE_STRATEGY.md`

## 0. Rule
There is no universal O1>E1>S1>R1 hierarchy. Priority is defined **per variable/question and measurement purpose**. O/E/S/R are parallel evidence families. The first source is the preferred measurement route; secondary sources are used for granularity, triangulation, or missing dimensions.

Measurement types must remain separate: ADMIN/CENSUS, SURVEY, TRANSACTION, BOOKING, MOBILITY, SEARCH, NAVIGATION, PRICE/INVENTORY, REVIEW, SOCIAL, SUPPLY_REGISTRY, MODEL_DERIVED, RESEARCH_ESTIMATE.

---

## 1. PRE-AWARENESS / EXOGENOUS CONTEXT
Variables: origin-country economy, FX, Korea price competitiveness, visa/friction, air capacity/direct routes, geopolitical/safety perception, K-content penetration, competing destinations.
- O1: Bank of Korea / Statistics Korea / Ministry of Justice / MOLIT·aviation·airport official statistics according to variable
- O2: origin-country official statistics / central banks / immigration or aviation authorities
- O3: UN Tourism / OECD / World Bank for internationally harmonized comparison
- E1: airline/airport route & schedule outputs; Google Trends for search proxy where appropriate
- E2: travel metasearch/OTA public trend reports where methodology is disclosed
- S1: country-specific social/search discussion only for perception and emerging signals
- R1: peer-reviewed tourism demand / FX / aviation / media-effect research
Priority note: macro cause variables must never be inferred from SNS alone.

## 2. AWARENESS — HOW KOREA ENTERS THE CONSIDERATION SET
Variables: first exposure, K-content, friends/family, advertising, influencer, news, food/beauty/music, school/business, prior visit, platform exposure.
- O1: Foreign Tourist Survey (외래관광객조사) — Korea interest trigger / pre-trip information exposure where asked
- O2: KTO/KCTI official inbound/potential-traveler and Hallyu-related surveys when variable matches
- E1: Google Trends / YouTube and platform trend outputs as SEARCH/PLATFORM proxy, not population share
- E2: airline/OTA/travel-platform campaign or demand reports with disclosed methodology
- S1: YouTube/TikTok/Instagram/Threads/X/Reddit + origin-country travel communities for actual narratives
- R1: Hallyu/tourism conversion research
Gap: first-touch attribution at individual level is generally weak; mark UNKNOWN rather than fabricate.

## 3. INTEREST / WHY KOREA
Variables: main purpose, Korea selection reason, desired activities, competing Asian destination, latent wants, WTP expectations.
- O1: Foreign Tourist Survey
- O2: KTO/KCTI potential-visitor / market research by origin country
- E1: search and OTA demand/trend data
- S1: origin-language travel communities, social posts, comments
- R1: academic demand/choice-model studies

## 4. SEARCH / INFORMATION ACQUISITION
Variables: search channel, query language, query themes, timing, information sufficiency, language coverage, map discoverability, trust signals.
- O1: Foreign Tourist Survey — pre-trip information contact/search and insufficient information
- E1: Google Search/Trends and Google Maps public signals where lawful/available
- E2: OTA/experience platform destination pages and public search/trend reports
- E3: KTO multilingual content/TourAPI coverage
- S1: origin-language social/community discussions
- R1: travel information-search behavior research
Critical derived measures: LanguageGap, DiscoverabilityGap, InformationCompleteness, SourceFragmentation.

## 5. CONSIDERATION / COMPARE / DECISION
Variables: destination shortlist, itinerary alternatives, price comparison, trust, review effect, cancellation flexibility, package vs FIT vs hybrid, decision-maker within party.
- O1: Foreign Tourist Survey for travel form / competing destination / reservation variables
- E1: OTA/metasearch public price/inventory/terms
- E2: airline/agency public package and fare products
- S1: Google/OTA reviews + travel communities for decision rationale
- R1: choice/conjoint/booking-behavior research
Unknown: true abandoned consideration sets are often platform-private.

## 6. PARTY / SOCIAL DECISION STRUCTURE
Variables: solo/couple/friends/family/business/group, party size, planner, payer, influencer, child/elder needs.
- O1: Foreign Tourist Survey — companion type and count
- O2: market-specific official surveys
- E1: booking occupancy/party public aggregates if disclosed
- S1: qualitative trip reports for planner/payer/influencer roles
- Ground Intelligence: direct traveler research for roles not covered online

## 7. BOOK — FLIGHT / PACKAGE / ACCOMMODATION / EXPERIENCE
Variables: booking lead time, channel, direct vs intermediary, instant confirmation, cancellation/refund, booking failure, cross-platform switching.
- O1: Foreign Tourist Survey for international flight/package timing and individually booked items
- O2: official aviation statistics for realized passenger/route volumes (not booking behavior)
- E1: airline official channels / OTA / travel agencies / accommodation & experience platforms
- E2: provider direct booking channels
- S1: review/community reports for booking failure and friction
- Ground Intelligence: provider-side actual channel mix and failure reasons

## 8. PAY / FX / FINANCIAL FRICTION
Variables: payment method, foreign-card acceptance, wallet, cash, FX, DCC, payment failure, refund delay, fees.
- O1: Foreign Tourist Survey expenditure/payment questions where available + official FX/payment regulatory data
- O2: KTO Tourism Data Lab card-derived tourism consumption for observed tourism spending aggregates
- E1: card/PG/payment-company official public reports
- E2: provider/OTA payment methods and checkout conditions
- S1: reviews/community complaints for payment/refund pain
- Ground Intelligence: actual foreign-card acceptance, settlement and provider pain
Do not equate card tourism consumption with total foreign visitor spending.

## 9. DEPARTURE / AIR ACCESS
Variables: origin airport, direct/connection, airline, seat capacity, fare, departure day/time, disruption.
- O1: MOLIT / airport operators / official aviation statistics
- O2: Ministry of Justice realized entry flows for arrivals, with definition kept separate
- E1: airline schedules/fares; aviation data vendors where licensed
- S1: disruption/experience VOC
- R1: air-connectivity demand research

## 10. ENTRY / IMMIGRATION
Variables: nationality, purpose/status where defined, port, month, entry volume, visa friction.
- O1: Ministry of Justice Immigration Statistics monthly/yearbook raw tables
- O2: Korean Tourism Statistics where tourism-specific processed definitions are required
- O3: KOSIS if same official series is distributed there
- E/S/R: only explanatory/triangulation, never replacement for official entry counts
Note: immigration flow counts can count repeated entries; preserve official definitions.

## 11. ARRIVAL FIRST-HOUR
Variables: immigration time, baggage, SIM/eSIM, Wi-Fi, ATM/FX, transport ticket, navigation, airport transfer, first-language friction.
- O1: airport/operator/transport official operational information and surveys where available
- E1: telecom/eSIM, transport, map, payment provider outputs
- S1: airport/Google/travel-community reviews and trip reports
- Ground Intelligence: observational traveler interviews if no reliable digital measure
High UNKNOWN risk; do not infer operational wait times from isolated posts.

## 12. MOVE — INTERCITY / LOCAL MOBILITY
Variables: city-to-city path, mode, transfers, travel time, cost, navigation, luggage, taxi/bus/rail friction.
- O1: KTO Tourism Data Lab mobility-derived regional visitation/flow outputs when matching the question
- O2: rail/bus/airport/local transit official usage/open data
- O3: regional tourism organization surveys
- E1: navigation/map/mobility platforms and operators
- S1: travel reviews/communities for pain and failed trips
- R1: tourism mobility research
Keep inferred mobility population separate from immigration population.

## 13. WHERE — REALIZED REGIONAL VISITATION
Variables: province/city/district visited, sequence, dwell, overnight vs daytrip, regional concentration.
- O1: KTO Tourism Data Lab telecom-derived foreign-tourist regional visitation where available
- O2: Foreign Tourist Survey — province/city stay and favorite place
- O3: regional tourism surveys
- E1: navigation/maps/OTA destination signals
- S1: geotag/review evidence only as behavioral signal

## 14. STAY
Variables: total nights, nights by region, accommodation type, property, nightly price, occupancy, booking channel, quality, language, check-in friction.
- O1: Foreign Tourist Survey — total stay, regional stay, main lodging type
- O2: MCST official tourism accommodation registry/statistics
- O3: Tourism Industry Survey for sector structure
- E1: accommodation official site + Booking/Agoda/Expedia/Trip.com etc. for price/inventory/terms
- S1: Google/OTA reviews for quality/pain
- Ground Intelligence: actual capacity, foreigner share, channel mix, willingness

## 15. DO — ACTIVITIES / EXPERIENCES
Variables: planned activity, actual activity, failed desired activity, time, price, category, satisfaction, cultural authenticity.
- O1: Foreign Tourist Survey — activities participated / satisfied activity
- O2: KTO TourAPI/content APIs + regional official supply sources
- E1: Klook/KKday/Viator/GetYourGuide/OTA/provider official listings
- S1: Google/OTA/social reviews and origin-language communities
- Ground Intelligence: hidden workshops/artisans/real sellability
Mandatory states: PLANNED / ACTUAL / DESIRED_BUT_FAILED.

## 16. FOOD / SHOPPING / BEAUTY / MEDICAL / WELLNESS / NIGHTLIFE
Variables: category participation, location, spend, price, booking, trust, language, regulation, product purchase.
- O1: Foreign Tourist Survey for activity/spend/shopping items & locations
- O2: relevant ministry/local official sector statistics; KTO medical/wellness open data where applicable
- E1: card/payment/booking/provider public data
- S1: category-specific reviews/social/community VOC
- Ground Intelligence: capacity, foreigner readiness, margin/recombination potential

## 17. SPEND
Variables: total trip expenditure, category spend, region spend, per-person/per-day spend, payment channel, high-spender segments.
- O1: Foreign Tourist Survey for survey-estimated total/category expenditure
- O2: KTO Tourism Data Lab foreign-tourist card consumption for observed card-spend geography/category
- O3: official tax-free/duty-free/sector statistics where variable matches
- E1: payment/card/PG/retail/OTA disclosed aggregates
- R1: tourism satellite/account/economic-impact studies
Never merge survey total spend and card spend without a measurement bridge.

## 18. EXPERIENCE QUALITY / SATISFACTION
Variables: satisfaction overall/by item, delight, disappointment, expectation gap, recommendation.
- O1: Foreign Tourist Survey
- O2: regional official visitor surveys
- S1: Google/OTA/experience-platform reviews
- E1: provider/platform ratings
- R1: satisfaction/NPS/revisit research
Derived: ExpectationGap = expected state vs experienced state only when both are observed or defensibly proxied.

## 19. PAIN / FAILURE / SERVICE RECOVERY
Variables: language, payment, booking, refund, transport, navigation, cleanliness, discrimination/safety, service failure, recovery, complaint channel.
- O1: Foreign Tourist Survey / official visitor inconvenience surveys where question exists
- E1: platform cancellation/refund/help policies and disclosed service metrics
- S1: reviews/social/community VOC — primary for detailed lived pain
- Ground Intelligence: supplier pain and actual recovery process
- R1: service-failure research
Pain frequency from reviews must be corrected for review-selection bias before population inference.

## 20. SUPPLY — OFFICIAL → VISIBLE → BOOKABLE → SELLABLE
Variables: entity count, category, location, legal status, capacity, language, discoverability, booking, payment, trust, foreigner willingness, packaging potential.
- O1: KTO TourAPI/content APIs + relevant official licensing/registry/local-government data
- O2: MCST Tourism Industry Survey / accommodation registry / sector registries
- E1: provider official site
- E2: Google Maps and OTA/experience platform listings
- S1: reviews/social proof
- Ground Intelligence: foreigner share, real capacity, willingness, package/reprice ability, supplier pain
Core funnel: `OfficialSupply → ActiveSupply → VisibleSupply → ForeignLanguageSupply → BookableSupply → PayableSupply → WillingSupply → RevaluableSupply`.

## 21. PLATFORM / INTERMEDIARY
Variables: coverage, ranking, commission, merchant onboarding, language, cancellation, payment, review moat, cross-border reach.
- E1: platform official merchant/customer documentation, terms, filings, public reports
- E2: provider interviews for actual commission/channel economics
- S1: merchant/traveler VOC
- O/R: competition/regulatory/academic platform research
Never infer private GMV/CAC/conversion without evidence.

## 22. MONEY FLOW / UNIT ECONOMICS
Variables: gross price, supplier revenue, OTA commission, PG, FX, tax, refund, fulfillment cost, guide/logistics, CAC, contribution margin.
- O1: tax/regulatory/official fee rules
- E1: platform/PG/provider official terms and disclosed fees
- Ground Intelligence: supplier actual economics and willingness
- R1: sector economics benchmarks
- S1: only hypothesis discovery
Private margins remain UNKNOWN until evidenced.

## 23. RETURN / DEPARTURE
Variables: final spend, airport access, baggage/shipping, tax refund, departure friction, unresolved problem.
- O1: airport/transport/customs/tax-refund official information/data
- E1: logistics/payment/tax-refund providers
- S1: traveler VOC
- Ground: interviews for unresolved pain where needed

## 24. POST-TRIP / REVIEW / WOM / REBUY / REVISIT
Variables: review posted, platform, sentiment, recommendation, content creation, Korea-product repurchase, revisit intent, actual revisit.
- O1: Foreign Tourist Survey — recommendation and 3-year revisit intention
- O2: future official repeat-visitor statistics where definitional match exists
- E1: platform review and commerce/rebuy aggregates where disclosed
- S1: reviews/social/user-generated content
- R1: revisit/WOM research
Intent ≠ actual behavior; preserve separate nodes.

## 25. SUPPLIER GROUND-TRUTH PRIORITY
Use Ground Intelligence only where digital evidence cannot reliably answer the variable or where verification has high information value.
Priority questions:
1. actual foreign visitor share and nationality mix
2. actual acquisition/booking channels
3. actual foreign-language operational ability
4. actual foreign-card/payment capability
5. capacity and blackout constraints
6. supplier pain
7. desire to grow foreign sales
8. willingness to cooperate
9. packaging/recombination willingness
10. repricing/revenue-share/logistics/international shipping feasibility

Ground research queue should be ranked by `Missingness × OpportunitySensitivity × ExpectedInformationGain × FieldFeasibility`, but weights are PROVISIONAL until calibrated.

## 26. RESEARCH SOURCE STOP RULE
For each variable:
1. resolve measurement definition;
2. acquire O/E/S/R primary source according to this router;
3. preserve raw/derived distinction and provenance;
4. obtain independent measurement triangulation when decision-critical;
5. stop when coverage/methodology/confidence is sufficient and marginal information gain is low;
6. mark remaining unavailable variables UNKNOWN;
7. route high-value UNKNOWNs to digital follow-up or Ground Intelligence.

## 27. CURRENT VERIFIED BACKBONE SOURCES (2026-08-27)
- Ministry of Justice Immigration Statistics: monthly statistics provide attached raw Excel tables for foreign entrants; annual yearbook provides Excel statistical tables. Best backbone for immigration ADMIN/FLOW variables.
- Foreign Tourist Survey: official survey explicitly covers pre-trip Korea selection/interest/search/reservation, during-trip travel form/companions/activities/stay/region/accommodation/expenditure, and post-trip satisfaction/revisit/recommendation. This is the single most important SURVEY backbone for traveler lifecycle.
- KTO Tourism Data Lab: telecom-derived regional visitation/stay and card-derived tourism consumption; country analysis provides regional visitation and foreign-tourist card consumption ratios. Best official MODEL_DERIVED/MOBILITY/TRANSACTION-like tourism intelligence layer, but original measurement definitions must be preserved.
- KTO Tourism Data Lab download interface supports Excel/CSV for relevant datasets.
- KTO Tourism Content Lab/TourAPI: multilingual official tourism content/open APIs; current API families include Korean, English, Japanese, Simplified/Traditional Chinese, German, French, Spanish, Russian plus specialized medical/wellness and tourism-demand resources.
- MCST official tourism accommodation registry: downloadable XLSX registry/statistics; licensing terms must be captured per source (e.g. some files are KOGL Type 4 and therefore not freely modifiable/commercially reusable).
- Tourism Industry Survey: official business-count/employment/revenue backbone with methodology breaks recorded (e.g. category changes such as hanok experience business classification).

## 28. SOURCE REGISTRY FIELDS REQUIRED
`variable_id, lifecycle_stage, question, measurement_type, source_class, priority, owner, dataset_or_engine, raw_available, api_available, formats, geography, segment, temporal_coverage, update_frequency, granularity, methodology, definition, license_terms, cost, known_bias, quality_dimensions, confidence, graph_node_edge, ground_required, status, last_verified_at`

## 29. NEXT EXECUTION ORDER
This master is now the routing table. Do not return to broad unstructured searching.
1. instantiate Variable Registry from lifecycle ontology;
2. attach source IDs from this master;
3. harvest official O1 backbone datasets first (10y+ where available);
4. then E sources required to measure booking/search/price/payment/platform gaps;
5. then S/VOC sampling for pain/wants and hidden demand;
6. route irreducible unknowns to Ground Intelligence;
7. normalize and connect into temporal graph;
8. only after sufficient measurement coverage estimate Gap/Island/Bottleneck/Opportunity models.

## 30. MODEL STATUS
KTOF, IslandScore, IA, ValuableGap, BottleneckValue, RVI/NetRVI and NextResearchPriority remain **PROVISIONAL HYPOTHESES**. They are measurement guides, not validated scoring formulas. No arbitrary final weights should be frozen before empirical coverage, relationship testing, methodology-break handling, and eventual real outcome calibration (click→booking→payment→margin→repeat).
