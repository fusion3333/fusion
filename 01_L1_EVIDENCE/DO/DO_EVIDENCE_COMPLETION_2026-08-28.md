# DO — L1 EVIDENCE COMPLETION
Date: 2026-08-28
Status: PUBLIC SOURCE DISCOVERY CLOSING

## Objective
Close the DO axis as the realized activity layer of the traveler journey: what foreign visitors intend to do, actually do, pay for, complete, skip, substitute, and combine during a Korea trip.

## Canonical state model
`DESIRED -> CONSIDERED -> PLANNED -> DISCOVERED -> BOOKABLE -> BOOKED -> ATTEMPTED -> COMPLETED -> SATISFIED / FAILED / SKIPPED / SUBSTITUTED`

DO must never collapse planned activities, actual participation, bookings, reviews, or spending into one measure.

## O — Official backbone
1. Korea Tourism Data Lab publishes the 2025 Foreign Visitor Survey raw data and codebook, allowing activity questions to be linked at respondent level to nationality, demographics, trip purpose, stay, region, expenditure and satisfaction variables.
Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310809&cateCont=spt05&cbIdx=1127&pageIndex=1

2. The 2024 Foreign Visitor Survey raw data and codebook are also publicly listed, supporting year-on-year harmonization and activity-category crosswalk work.
Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=309202&cbIdx=1127

3. The 2024 final Foreign Visitor Survey report is separately published and must be kept distinct from raw microdata/codebook extraction.
Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=309193&cbIdx=1127

4. KTO's 2023 inbound shopping-tourism survey provides a useful specialized WHY/DO bridge. In that survey's 'major consideration factors when visiting Korea' multi-response results, food/gourmet exploration was 27%, shopping 24%, natural scenery 15%, and history/cultural heritage/traditional-cultural experience 10%. These are consideration factors in a specialized shopping-tourism survey, not canonical participation rates for all inbound tourists.
Source: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=307173&cbIdx=1129&streFileNm=bb5b5e64-13d7-453b-91ea-808205bcaa08.pdf

5. KTO also publishes quarterly Foreign Visitor Survey reports and vertical analyses; these are valid supporting evidence but should not overwrite the annual microdata backbone.
Example: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310303&cateCont=spt05&cbIdx=1127&pageIndex=1

## E — Enterprise/platform sensors
1. Klook's Korea/KORAIL integration explicitly ties transport to regional travel offerings. Klook reported that bookings for local Korea travel offerings in 1H 2025 increased nearly threefold YoY and local travel offerings increased 40%. This is a platform demand/supply signal, not total-market activity participation.
Source: https://www.klook.com/newsroom/partnership-2025-korail/

2. Klook's 2026 Spring Readiness Index uses survey and owned platform data and reports emerging Korea destinations such as Gyeonggi-do, Gangwon-do and Gyeongju for March-April 2025. It also identifies seasonal attractions as a central spring-trip motive. Use as enterprise/seasonal DO signal, not official arrivals.
Source: https://www.klook.com/newsroom/spring-readiness-index-2026/

3. Trip.com Group's 2025 APAC trend research identifies food, media, fandom and micro-trends as activity/experience drivers. It reports high interest in food festivals, hotel dining and street-food tours across the surveyed APAC markets. This is cross-market consumer research and platform behavior, not Korea-inbound population prevalence.
Source: https://kr.trip.com/newsroom/250219_momentum-2025-report/

4. Trip.com also publishes Korea inbound booking trend summaries combining air, accommodation and activity reservations; this is useful as an enterprise multi-product sensor.
Source: https://kr.trip.com/newsroom/250115_lny-travel-trend/

## S — Social/VOC
Recent KoreaTravel discussions repeatedly expose activity attributes that structured surveys do not capture well: authenticity of hanbok, small local businesses versus mass-produced experiences, convenience with children, weather/heat constraints, local/traditional lodging discovery, and itinerary feasibility. These are taxonomy and Ground-research prompts only; they are not population estimates.
Representative examples:
- https://www.reddit.com/r/koreatravel/comments/1qxerni/hanbok_rental/
- https://www.reddit.com/r/koreatravel/comments/1uq7uug/traditional_hanok_accomodation/
- https://www.reddit.com/r/koreatravel/comments/1uucrey/hanbok_in_julyaugust/

## R — Research triangulation
1. A 2026 Korean study using 2024 Foreign Visitor Survey raw data conceptualizes accessibility as information, experiential and convenience accessibility and studies its relationship with activity conversion rate, participation level, spending and satisfaction. It operationalizes a planned-versus-actual activity conversion concept, which is directly reusable as a method primitive for this project.
Source: https://www.dbpia.co.kr/journal/detail?nodeId=T17395889

2. Longstanding Korea inbound research has found origin-market differences in the value placed on tangible versus intangible activity attributes: Japanese visitors placed relatively more weight on shopping while European/North American travelers placed more value on local culture. Treat as historical research evidence, not current effect size.
Source: https://www.sciencedirect.com/science/article/pii/S0261517703000566

## Canonical activity families
The DO ontology must support at minimum:
- FOOD_GOURMET
- SHOPPING
- BEAUTY_COSMETICS
- MEDICAL
- WELLNESS_HEALING
- KPOP_HALLYU
- FILM_DRAMA_LOCATION
- HISTORY_HERITAGE
- TRADITIONAL_CULTURE
- HANBOK
- CRAFT_ARTISAN
- TEMPLE_RELIGIOUS
- MUSEUM_GALLERY
- PERFORMANCE_NIGHTLIFE
- FESTIVAL_EVENT
- SPORT_SPECTATOR
- SPORT_PARTICIPATION
- NATURE_SCENERY
- OUTDOOR_ADVENTURE
- THEMEPARK_ENTERTAINMENT
- CAFE_LIFESTYLE
- MARKET_LOCAL_LIFE
- MICE_BUSINESS
- FAMILY_EDUCATION
- PHOTOGRAPHY_CONTENT_CREATION
- OTHER

## Measurement rules
- PlannedActivity != ActualActivity.
- ActualActivity != PaidActivity.
- Booking != Attendance/Completion.
- Review != Participation rate.
- Social interest != activity demand denominator.
- Activity count without time budget creates false intensity; hours/days should be added where possible.
- Multi-response survey percentages must preserve denominator and response design.
- Specialized vertical surveys cannot be generalized to all inbound tourists.

## Remaining public-data gaps
- Long-run annual activity-category harmonization over 10+ years.
- Nationality x month x activity panels at stable definitions.
- Activity-level time spent and regional allocation.
- Complete activity-level prices, capacity and availability.
- Desired-but-not-completed denominator.
- Substitution path: activity A intended -> activity B consumed.
- Consumption-confirmed activity logs.

## Boundary
Public source discovery is sufficiently mature to lock the DO source layer. Remaining high-value gaps are predominantly raw harmonization, supplier/Ground validation, and first-party/partner telemetry.