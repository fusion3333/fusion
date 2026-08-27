# Ground Intelligence Graph V1
Supplier -> Asset -> Product -> Capacity -> Sellability -> Channel -> Payment -> Completion.
Supplier -> Pain -> Workaround.
Supplier -> Willingness -> BundleCandidate -> RevalueCandidate.
TravelerSegment -> Intent -> Attempt -> Failure/SuccessWithFriction -> Workaround/Substitution -> Completion -> Spend -> Satisfaction.

Required joins: supplier_id/product_id/region/category/observed_at/origin/language/channel.

GroundCorrectedSupply = public/platform supply reconciled with field evidence, never a replacement of original evidence. Preserve both observations and provenance.

High-value diagnostic: high target demand + strong ground quality + low global discoverability + high supplier willingness + feasible capacity = Hidden Gem candidate. No opportunity score until economics and validation gates pass.