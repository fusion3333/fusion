# BENCHMARK PUBLIC METHOD EVIDENCE — BATCH F — 2026-08-27

Status: L1 EVIDENCE
Rule: only public documentation / official statistics. Proprietary implementation details remain UNKNOWN.

## Mabrian / Data Appeal family
Public Mabrian material states access to 30 global information sources and 400+ tourism indicators and explicitly organizes analytics across the full travel cycle: Dreaming & Inspiration (trends, social listening, flight searches), Booking & Planning (air capacity, flight prices, flight booking, accommodation), During (spend, interests & perception, mobile data), and Post (trip reviews). Its data-method page emphasizes source validation, refinement and cross-analysis of layers.

Evidence URLs:
- https://mabrian.com/
- https://mabrian.com/technology/data/

Korea Tour implication: benchmark the sensor-fusion architecture, not a proprietary score. Preserve each sensor's observation type and avoid collapsing interest, booking, presence and transaction into one demand number.

## ForwardKeys
Public methodology describes traveller nationality/profile as an inferred variable when it is not directly available. Signals include point of origin, correlation with official statistics, itinerary, ticket issuing office, length of stay and additional travel-profile signals. ForwardKeys also states weekly updates for this nationality view and explains why full itinerary can outperform first-destination official statistics for multi-stop trips.

Evidence URL:
- https://forwardkeys.com/how-forwardkeys-can-define-traveller-nationality/

Korea Tour implication: latent variables may be estimated from multiple sensors, but must be stored as INFERRED with method, calibration and confidence rather than masquerading as directly observed facts.

## Amadeus
Amadeus Travel Trends 2026 publicly demonstrates use of Travel Intelligence Future Bookings / Air Visitor data and Demand360 hotel data. The report uses future flight bookings to Seoul and hotel on-the-books occupancy/ADR to examine future and content-related destination demand.

Evidence URL:
- https://amadeus.com/documents/resources/research-report/travel-trends-2026/amadeus-travel-trends-2026-report.pdf

Korea Tour implication: separate backward-looking arrivals from forward booking pace. Content/search shocks should be tested against future air bookings and hotel OTB before treating them as realized visitation.

## AirDNA
Public methodology defines market occupancy as booked nights divided by nights available to be booked rather than 365 calendar days. Host-blocked nights are excluded from the economically available denominator. AirDNA states use of 16 booking signals to distinguish booked from blocked days and 14 metrics for cross-platform property de-duplication. Revenue is defined from nightly rates and cleaning fees with documented discount/service-fee treatment. RevPAR uses available rental/listing-night denominators. Enterprise Tourism Insights separates historical and forward-looking pacing, supports monthly/year comparisons and future pacing, and documents a cleaning-fee difference between historical and forward-looking views.

Evidence URLs:
- https://help.airdna.co/en/articles/8062178-how-does-airdna-calculate-occupancy-rate
- https://help.airdna.co/en/articles/8374548-how-does-airdna-calculate-revenue
- https://help.airdna.co/en/articles/8062179-what-is-revpar
- https://enterprise-help.airdna.co/en/articles/8886507-navigating-the-tourism-insights-dashboard
- https://help.airdna.co/en/articles/15480669-where-is-our-data-sourced-from

Korea Tour implication: adopt denominator/state discipline. Registered or listed supply must not be treated as available, bookable, sold or foreigner-usable supply. Historical and forward metrics need separate measurement regimes.

## Evidence boundary
These sources expose method primitives but not the full proprietary models, weights, partner contracts, raw feeds, ML features or validation datasets. Those fields remain PROPRIETARY/UNKNOWN. Korea Tour should reproduce definitions only where publicly supportable and should BUY/CONNECT specialist feeds when reconstruction has little strategic value.
