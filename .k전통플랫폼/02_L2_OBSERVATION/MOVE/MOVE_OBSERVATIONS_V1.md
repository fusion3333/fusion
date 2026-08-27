# MOVE — L2 OBSERVATIONS V1
Date: 2026-08-27
Status: ACTIVE

## O1. MOVE is not one variable
Foreign-tourist mobility must be decomposed into at least five distinct observation classes:
1. `transport_supply` — routes, schedules, stations, service languages, payment methods.
2. `movement_presence` — where visitors are actually observed.
3. `navigation_intent` — searched destinations/routes.
4. `transaction_usage` — tickets/cards/taxi/rail/bus usage.
5. `friction_event` — failure, refusal, overcharge, language/payment/navigation problems.

Do not treat any one class as a substitute for another.

## O2. Airport-to-city is a measurable first major bottleneck candidate
The gateway offers multiple modes (rail, bus, taxi/call-van, etc.), but service availability does not guarantee accessibility for a foreign visitor. Payment method, phone/account requirements, language, luggage, arrival time and destination location can create friction between `AVAILABLE` and `USABLE`.

Canonical state chain:
`AVAILABLE → DISCOVERABLE → UNDERSTANDABLE → PAYABLE → BOARDABLE → SUCCESSFULLY_COMPLETED`.

## O3. Taxi provides confirmed foreigner-specific pain evidence
Seoul's official foreign-tourist monitoring confirms that taxi overcharging/refusal/meter violations exist as observable friction events. These should become `JourneyFrictionEvent` nodes rather than generic sentiment. Complaint/enforcement data and population satisfaction must remain separate measurements.

## O4. Navigation search and actual movement can expose an intent-execution gap
KTO navigation data represents destination-search/intent signals while mobile-location data can represent regional presence. Once harmonized by place/time, the graph can test:
`HighNavigationIntent + LowActualPresence`.
This is a candidate `MobilityConversionGap`, not yet a causal conclusion.

## O5. Rail/transit aggregate data is valuable even when nationality is absent
KORAIL and transport-card datasets can describe network load, seasonality, accessibility and route-level capacity. They cannot directly measure foreigner usage without a valid foreigner identifier or cross-source estimation. Their correct role is `NETWORK_CONTEXT`, not `FOREIGNER_COUNT`.

## O6. Long historical station-level series can support the 10-year × 12-month architecture
Local AFC data can extend well beyond ten years in some cities. This supports monthly/seasonal accessibility and network-change baselines even when foreigner-specific granularity is unavailable.

## Provisional derived metrics
All formulas below are HYPOTHESIS/DERIVED until validated.

### Mobility Conversion Gap
`MCG = normalized(navigation_intent) - normalized(actual_presence)`
Use only on matched geography/time/category.

### First-hour Friction Rate
`FHFR = failed_or_recovered_first_hour_transport_events / observed_first_hour_transport_attempts`
Requires ground/survey data; currently MISSING.

### Last-mile Accessibility Ratio
`LAR = foreigner_usable_transport_options / technically_available_transport_options`
"Foreigner usable" must test language, payment, operating hours, route clarity and booking/access requirements.

### Regional Connectivity Island candidate
Candidate when all hold:
- demand/search signal high,
- attraction/supply quality high,
- network access or last-mile usability low,
- actual visitation/conversion lower than expected.

## Next evidence requirements
- KTO downloadable monthly mobile + navigation regional datasets and methodology.
- KORAIL route/date passenger series and station topology.
- Current airport rail/bus/taxi schedules, fares and operating hours as versioned supply nodes.
- Foreign-user transport-app onboarding/payment compatibility by app.
- Review/complaint taxonomy for `overcharge`, `refusal`, `lost`, `wrong-route`, `ticketing`, `payment`, `language`, `luggage`, `late-night`.
- Ground survey at gateway and first regional transfer to measure attempts, failures and recoveries.
