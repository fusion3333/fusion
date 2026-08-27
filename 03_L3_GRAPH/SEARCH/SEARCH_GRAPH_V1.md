# SEARCH GRAPH V1
Date: 2026-08-28

## Nodes
TravelerSegment, Motivation, Exposure, InspirationSource, Query, QueryLanguage, SearchEngine, SocialPlatform, SearchResult, Destination, Place, Supplier, ReviewSet, MapListing, Route, OTAListing, SupplierSite, BookingAttempt, Abandonment, Transaction.

## Canonical edges
TravelerSegment -> HAS_MOTIVATION -> Motivation
Motivation -> TRIGGERS -> Query
Exposure -> MAY_TRIGGER -> InspirationSource
InspirationSource -> MAY_TRIGGER -> Query
Query -> SUBMITTED_TO -> SearchEngine/SocialPlatform
Query -> RETURNS -> SearchResult
SearchResult -> REPRESENTS -> Destination/Place/Supplier
SearchResult -> CLICKED_TO -> MapListing/OTAListing/SupplierSite
TravelerSegment -> COMPARES -> SearchResult
MapListing -> REQUESTS_ROUTE -> Route
OTAListing/SupplierSite -> ENABLES_OR_BLOCKS -> BookingAttempt
BookingAttempt -> RESULTS_IN -> Abandonment/Transaction

## Forbidden collapses
INSPIRATION != SEARCH
SEARCH_INDEX != ABSOLUTE_VOLUME
RESULT_SHOWN != CLICK
CLICK != BOOK_ATTEMPT
MAP_OPEN != VISIT
BOOK_ATTEMPT != SUCCESS
SOCIAL_MENTION != DEMAND

## Required dimensions on measurements
origin_country, residence_country where known, language, traveler_segment, yyyy_mm, platform, device where lawful/available, query/topic definition, destination/region, supplier/product, measurement_type, denominator_scope, source_class, methodology_version.

## Cross-axis bridges
WHY -> SEARCH: motivation/trigger to query.
SEARCH -> BOOK_PAY: supplier/OTA discovery to transaction attempt.
SEARCH -> MOVE: map/route intent to actual movement.
SEARCH -> SUPPLY: discoverability of existing assets.
SEARCH -> PAIN: information failure/mismatch.
SEARCH -> FAILURE_JOURNEY: attempted discovery without downstream success.

## Explainability rule
Any SEARCH-derived opportunity must retain the evidence chain to source, measurement definition, denominator, date and platform scope.