# REAL SELLABLE SUPPLY — Graph V1

## Core entities
Supplier, Asset, Product, Experience, Listing, Channel, InventorySlot, PriceOffer, LanguageCapability, BookingPath, IdentityRequirement, PaymentPath, CancellationPolicy, RefundPath, Capacity, StaffCapability, TravelerSegment, GroundInterview, TransactionAttempt.

## Core edges
Supplier→OWNS/OPERATES→Asset
Supplier→OFFERS→Product
Product→DELIVERED_AS→Experience
Product→LISTED_ON→Listing→CHANNEL→Channel
Listing→EXPOSES→PriceOffer
Listing→EXPOSES→InventorySlot
Product→SUPPORTED_BY→LanguageCapability
Product→USES→BookingPath
BookingPath→REQUIRES→IdentityRequirement
BookingPath→USES→PaymentPath
Product→HAS→CancellationPolicy/RefundPath
Supplier→HAS→Capacity/StaffCapability
TravelerSegment→ATTEMPTS→TransactionAttempt→TARGETS→Product
GroundInterview→VALIDATES→Supplier/Product/Capacity/Willingness

## Sellability dimensions
existence_status, operating_status, discoverability, language_coverage, price_visibility, inventory_visibility, instant_booking, request_booking, identity_accessibility, foreign_card_support, wallet_support, confirmation_reliability, cancellation_clarity, refund_accessibility, physical_accessibility, capacity_per_day, foreigner_capacity, lead_time, seasonality, supplier_willingness, bundling_willingness, international_shipping, support_language, last_verified_at, evidence_source, confidence.

## Traveler-specific sellability
Do not store one global boolean `sellable`.
Represent SELLABLE_FOR(Product, TravelerSegment, Channel, DateWindow) with component states and evidence.

## Cross-axis joins
SEARCH→Listing/Discoverability
BOOK_PAY→BookingPath/PaymentPath
MOVE→PhysicalAccessibility
DO→Experience/Completion
SPEND→PriceOffer/Transaction
PAIN_VOC→FrictionEvent/Workaround
SATISFACTION→Quality/Recovery
SUPPLY→Supplier/Asset/Product
GROUND_INTELLIGENCE→Capacity/Willingness/RealityCheck
N_TELEMETRY→Attempt/Conversion/Failure denominator

## Forbidden inference
- Listing on platform => live inventory: forbidden
- Foreign-language page => foreigner bookable: forbidden
- Card logo => successful foreign-card authorization: forbidden
- Registered/open => capacity available: forbidden
- Review exists => current operation: forbidden
- One channel works => supplier globally sellable: forbidden
