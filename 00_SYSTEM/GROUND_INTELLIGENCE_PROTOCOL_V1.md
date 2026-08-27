# GROUND INTELLIGENCE PROTOCOL V1
Date: 2026-08-27
Status: ACTIVE

## Role
Ground Intelligence exists to measure variables that O/E/S/R sources cannot reliably observe: actual supplier willingness, practical foreigner usability, capacity, hidden operational friction and failed transactions.

## Pilot scope
Seoul + Gyeonggi traditional-tourism suppliers first; later expand nationally.

## Stage A — desk shortlist (target 100)
Categories: hanok, tea ceremony, hanbok, traditional/temple/royal food, traditional alcohol, pottery/onggi, lacquer/wood/metal/hanji, calligraphy/minhwa/dancheong, gugak/dance, temple stay, Korean medicine/wellness, markets, masters/artisans, villages, festivals, hidden workshops.

Fields:
`supplier_id`, `category`, `address`, `contact`, `original_asset`, `current_product`, `price`, `duration`, `capacity_claim`, `languages_claim`, `website_languages`, `Google_presence`, `rating`, `review_count`, `OTA_presence`, `instant_booking`, `foreign_payment_claim`, `social_presence`, `foreign_visitor_signal`, `recombination_candidate`, `source`, `checked_at`.

## Stage B — information-value ranking
Prioritize suppliers where:
- demand appears high,
- asset quality/authenticity appears high,
- global discoverability/bookability appears low,
- critical fields are UNKNOWN,
- resolving UNKNOWN can materially change opportunity ranking.

Do not call suppliers simply because they are famous.

## Stage C — phone/interview validation (initial top 20)
Ask:
1. Current foreign-visitor share and common origins?
2. Where do foreign bookings currently come from?
3. Practical English/Japanese/Chinese support?
4. Foreign-card/payment capability?
5. Actual daily/group capacity?
6. Biggest pain in selling to foreigners?
7. Desire to receive more foreign customers?
8. Willingness to package with nearby food/stay/guide/transport?
9. Price/package flexibility?
10. International shipping where relevant?
11. Willingness to partner/distribute through a new channel?

## Evidence discipline
Store `claimed_by_supplier` separately from `observed/tested`.
Phone answers are not converted into verified transaction capability until tested where necessary.
Record interviewer, date, contact mode, consent, exact question version and confidence.

## Traveler ground research
Later intercept/remote interviews must capture:
`desired activity`, `planned activity`, `attempted activity`, `actual activity`, `failure reason`, `substitute activity`, `willingness_to_pay`, `time_cost`, `trust issue`, `transport issue`, `payment issue`.

## Sampling warning
Convenience sample != population estimate. Ground data primarily validates state transitions and discovers missing mechanisms; prevalence estimates require designed sampling.

## Output
Ground results feed:
`SupplierState`, `JourneyFailureEvent`, `RealSellableSupply`, `RecombinationCandidate`, `GroundValidatedOpportunity`.
