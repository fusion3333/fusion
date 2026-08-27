# Opportunity Graph V1
ValidatedGap -> InterventionCandidate -> BusinessModelCandidate -> Pilot -> Outcome.

InterventionCandidate joins TravelerSegment, Supplier/Product, Region, Month/Regime, Channel, Bottleneck, MoneyFlow, Competition, Regulation, ResolutionCost and EvidenceConfidence.

Explainability path must remain traversable:
Opportunity -> Gap -> JourneyEdge -> Observation -> Source.

Outcome labels for later learning: incremental conversion, incremental GMV, supplier payout, contribution margin, local retained value, repeat/referral, satisfaction, failure reduction, acquisition cost, support cost, refund/chargeback and capacity utilization.

No black-box rank may suppress evidence or uncertainty.