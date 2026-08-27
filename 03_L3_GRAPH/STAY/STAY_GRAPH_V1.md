# STAY Graph V1

## Core nodes
TravelerSegment
Trip
Region
AccommodationProperty
AccommodationType
BookingChannel
Night
PriceQuote
Reservation
CheckIn
Checkout
Cancellation
PresenceObservation
Event

## Core edges
TravelerSegment --TAKES--> Trip
Trip --HAS_TOTAL_DURATION--> Duration
Trip --ALLOCATES_NIGHT_TO--> Region
Region --CONTAINS--> AccommodationProperty
AccommodationProperty --IS_TYPE--> AccommodationType
TravelerSegment --SEARCHES/BOOKS--> AccommodationProperty
Reservation --VIA--> BookingChannel
Reservation --QUOTES--> PriceQuote
Reservation --EXPECTED_NIGHTS--> Night
CheckIn --CONFIRMS_START_OF--> ConsumedStay
Checkout --CONFIRMS_END_OF--> ConsumedStay
PresenceObservation --SUPPORTS_OVERNIGHT_IN--> Region
Cancellation --PREVENTS_OR_REDUCES--> ConsumedStay
Event --MAY_SHIFT--> Demand/Price/Duration

## Canonical state transition
Search → Compare → Reserve → Pay/Guarantee → ArriveRegion → CheckIn → ConsumeNight(s) → Extend/Checkout/Cancel/NoShow.

## Mandatory dimensions
origin_country
nationality_or_residence_definition
traveler_segment
party_type
why_segment
year_month
season
region
property_or_accommodation_type
booking_channel
booked_nights
consumed_nights
price_basis
measurement_source
measurement_definition
confidence
regime_flag

## Forbidden inference edges
OTA_SEARCH --CAUSES--> STAY
REGISTERED_ROOM --EQUALS--> AVAILABLE_ROOM
TELECOM_OVERNIGHT --EQUALS--> HOTEL_NIGHT
REGION_VISIT --EQUALS--> REGION_STAY
BOOKING --EQUALS--> CHECKIN
LONGER_STAY --CAUSES--> HIGHER_SATISFACTION

## Cross-axis joins
WHO × WHY × WHEN determine conditional stay behavior.
SEARCH × BOOK_PAY determine lodging discovery and transaction access.
MOVE determines reachable night allocation.
STAY creates time-at-destination exposure for DO and SPEND.
PAIN/SATISFACTION can alter extensions, repeat stays and reviews.
SUPPLY/REAL_SELLABLE_SUPPLY determine usable lodging capacity.
MONEY_FLOW later attaches room price, commission, tax, FX, refund and margin.