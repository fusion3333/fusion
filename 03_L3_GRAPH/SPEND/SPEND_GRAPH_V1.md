# SPEND — L3 Graph V1
Date: 2026-08-28

## Core nodes
TravelerSegment, Trip, Month, Region, StayNight, Activity, Merchant, MerchantCategory, BookingChannel, PaymentMethod, Transaction, Refund, Supplier, Platform.

## Core edges
TravelerSegment -> MAKES -> Trip
Trip -> OCCURS_IN -> Month
Trip -> ALLOCATES_NIGHT -> StayNight
Trip -> COMPLETES -> Activity
Activity -> GENERATES_OR_INFLUENCES -> Transaction
Transaction -> OCCURS_AT -> Merchant
Merchant -> LOCATED_IN -> Region
Merchant -> CLASSIFIED_AS -> MerchantCategory
Transaction -> USES -> PaymentMethod
Transaction -> ATTRIBUTED_TO -> BookingChannel
Transaction -> SETTLES_TO -> Supplier (when known)
Transaction -> MAY_REFUND_AS -> Refund

## Measurement status
Every edge/value must carry one of `OBSERVED / SELF_REPORTED / PROXY / INFERRED / IMPUTED / UNKNOWN`.
Every transaction-like measure must retain source/network coverage and whether value is `GROSS_PAID / AUTHORIZED / CAPTURED / REFUNDED / NET_SETTLED` when known.

## Geography rule
Keep separate fields for:
- merchant_location
- service_consumption_location
- booking_channel_location/online
- traveler_presence_location
Do not collapse them.

## Join keys to previous axes
WHO: origin/demographic/party/purpose segment
WHEN: YYYY-MM + regime/event flags
ORIGIN_TOP15: origin market
COMPETITIVE_DESTINATION: comparator spend context
SEARCH: discovery/search channel
BOOK_PAY: payment attempt/success/failure
MOVE: arrival/presence region
STAY: consumed nights
DO: activity desired/planned/completed

## Future joins
PAIN/VOC: value complaints, overcharge, hidden fees, refund pain
SATISFACTION: spend vs satisfaction/revisit
SUPPLY: merchant/product availability
MONEY_FLOW: fees/commission/tax/FX/supplier margin/local retention
FAILURE_JOURNEY: desired transaction not completed

## High-value patterns
1. `HIGH_PRESENCE + LOW_LOCAL_SPEND`
2. `HIGH_ACTIVITY_COMPLETION + LOW_ASSOCIATED_SPEND`
3. `HIGH_SPEND + LOW_SATISFACTION`
4. `HIGH_SPEND_IN_ONE_REGION + EXPERIENCE_IN_ANOTHER`
5. `HIGH_ORIGIN_PROPENSITY + LOW_KOREA_SPEND_SHARE`
6. `HIGH_NIGHT_COUNT + LOW_NIGHT_VALUE`
These are diagnostics, not causal claims.