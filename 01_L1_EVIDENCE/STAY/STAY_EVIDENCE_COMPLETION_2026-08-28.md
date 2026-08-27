# STAY Evidence Completion — 2026-08-28

## Scope
STAY is not one average length-of-stay variable. Canonical chain:

Arrival → TotalTripDuration → RegionNightAllocation → AccommodationChoice → Reservation → CheckIn → NightsConsumed → Checkout/Extension/Cancel.

## Tier-O verified evidence
1. Korea Tourism Data Lab describes the Foreign Tourist Survey as a national approved survey. Its history states that in 2022 questions were added for travel type, province-level stay duration and main accommodation used. The survey is conducted monthly; current scope covers departing foreign visitors subject to survey eligibility.
2. 2024 Foreign Tourist Survey quarterly reporting publishes main accommodation facility by quarter/month. Example: hotel remained the dominant reported facility; relatives/friends homes, guesthouse/hostel, motel/inn and minbak/pension are separately measured. This is survey usage, not registered capacity.
3. 2025 Q1 Foreign Tourist Survey reports accommodation facilities as a major individually reserved item. This supports linking STAY to BOOK but must not be interpreted as OTA share.
4. Tourism Data Lab SKT mobility metadata provides monthly lodging/stay-time information from 2020 onward. For foreigners, country is estimated from roaming/signaling data; an overnight visitor is defined using overnight 00:00–06:00 longest-stay logic. Data Lab explicitly warns the values are estimated and more appropriate for trend analysis than exact totals.
5. Data Lab regional tourism pages distinguish daily visitor counts from monthly lodging/stay-duration measures and warn against summing incompatible units.
6. MCST publishes annual registered tourism accommodation inventory. 2025-Q4 data provide establishments and rooms by region/type/grade. This is supply capacity context, not realized foreign nights or all accommodation supply.

## Tier-E evidence
Booking.com publishes first-party accommodation search/booking analyses. In its 2025 Korea inbound destination release it selected rising destinations from the 1,000 domestic destinations most booked by inbound travelers over a defined period. This is useful as a platform demand sensor, not a population estimate. Other Booking.com publications define accommodation-search windows explicitly and therefore can be used as event/seasonality sensors when metadata are retained.

## Measurement separations
TotalTripDuration != HotelNights
RegionStayDuration != AccommodationNights
SurveyAccommodationUse != RegisteredRoomSupply
TelecomOvernightProxy != HotelCheckIn
OTA_Search != OTA_Booking != CheckIn
Reservation != ConsumedNight
BookedNights != PaidNights != StayedNights
PropertyLocation != TravelerActivityLocation

## Public evidence boundary
Public sources can support trip duration, accommodation category, some region-level stay duration, estimated regional overnight behavior, registered capacity and selected platform demand signals. They do not expose a universal traveler-level night ledger linking nationality × property × nightly price × channel × check-in/out × cancellation × occupancy × actual consumption.

## Required next layers
- raw survey harmonization across years and method regimes
- nationality × region × month stay-duration panel
- property inventory outside registered tourism accommodation
- OTA channel share and effective ADR by nationality
- cancellation/no-show/extension denominators
- ground supplier occupancy/capacity audit
- N telemetry for search→book→check-in→night consumption