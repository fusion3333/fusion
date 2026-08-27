# PLATFORM Graph V1

## Canonical state chain
TravelerSegment -> DiscoverySurface -> Query/FeedExposure -> ListingExposure -> ListingClick -> ProductDetail -> Compare -> BookStart -> Payment -> BookingConfirmed -> ExperienceConsumed -> Review/Referral -> Repeat

Supplier -> Asset -> Product -> PlatformListing -> MarketLanguageVariant -> Inventory -> Price -> Terms -> TransactionRole -> Payout -> Support -> ReviewReputation

## Required dimensions
platform_family
platform_name
product_id
supplier_id
traveler_origin
language
region
channel
integration_model
merchant_of_record
customer_data_owner
support_owner
observed_at

## Edge types
LISTED_ON
DISCOVERED_VIA
RANKED_ON
REFERRED_BY
BOOKED_ON
PAID_VIA
MERCHANT_OF_RECORD
SUPPORTED_BY
REVIEWED_ON
DISTRIBUTED_TO
PAYS_COMMISSION_TO
PAYS_AFFILIATE_TO
PAYOUT_TO
OWNS_CUSTOMER_RELATIONSHIP

## Diagnostic candidates
PlatformCoverageGap = high target demand with weak relevant-platform coverage.
DistributionIsland = high quality and sellability with low foreign-market discoverability.
RankingTax = incremental economic cost associated with incremental platform exposure.
PlatformDependency = high booking concentration with weak direct customer ownership and high effective distribution cost.
ReviewMoat = durable review volume/recency/credibility advantage that may raise conversion and visibility.
ChannelConflict = materially different price/inventory/terms across channels that creates traveler or supplier friction.

These are diagnostic objects only. No empirical KTOF weights are assigned at this stage.

## Join points
SEARCH joins at DiscoverySurface through ProductDetail.
REAL_SELLABLE_SUPPLY joins at PlatformListing, Inventory, Terms and TransactionRole.
BOOK_PAY joins at BookStart through BookingConfirmed.
PAIN_VOC and SATISFACTION join at support/review/recovery.
MONEY_FLOW receives commission, promotion, affiliate, payment, FX, refund and payout edges.