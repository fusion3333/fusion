# Multilingual Pain / Failure Graph V1

## Core nodes
TravelerSegment; OriginMarket; Language; JourneyStage; JourneyEdge; PainSignal; FailureEvent; Complaint; SupportContact; Review; SocialPost; Workaround; Resolution; VerifiedViolation; Operator; Asset; Platform; Region; EvidenceSource; Denominator.

## Core edges
TravelerSegment --USES_LANGUAGE--> Language
TravelerSegment --ASSOCIATED_WITH--> OriginMarket
PainSignal --OCCURS_AT--> JourneyEdge
FailureEvent --OCCURS_AT--> JourneyEdge
Complaint --REPORTS--> PainSignal/FailureEvent
SupportContact --CONCERNS--> PainSignal
Review --DESCRIBES--> PainSignal/Experience
SocialPost --DESCRIBES--> PainSignal/Workaround
PainSignal --AFFECTS--> TravelerSegment
PainSignal --ASSOCIATED_WITH--> Operator/Asset/Platform/Region
FailureEvent --TRIGGERS--> Workaround/Abandonment
Workaround --LEADS_TO--> Recovery/Completion/Failure
Complaint --MAY_LEAD_TO--> Investigation
Investigation --MAY_CONFIRM--> VerifiedViolation
Complaint/FailureEvent --MAY_LEAD_TO--> Resolution
EvidenceSource --SUPPORTS--> Node/Edge
Denominator --BOUNDS--> RateEstimate

## Two parallel state machines
### Reporting state
LatentPain → RecognizedPain → ReportIntent → ChannelAccess → SubmittedReport → Investigated → Verified/Unverified → Resolved/Unresolved

### Behavioral state
Attempt → Friction → Continue / Workaround / Abandon → Success / Failure → Support / Review / Silence

These states MUST NOT be collapsed.

## Language/origin model
Language is a node, not a nationality label. An origin market may map to several languages; one language may map to several origin markets. Search language, review language, UI language and complaint language are separate observations.

## Denominator attachment
D0 NONE
D1 PLATFORM
D2 CHANNEL
D3 JOURNEY_ATTEMPT
D4 POPULATION

A rate edge is valid only if a denominator node and eligibility/capture definition are attached.

## Temporal model
Complaint channels, app interfaces, fare disclosure, multilingual support, platform policy and payment/booking rules are versioned events. Every mutable observation stores observed_at/source_date and, when known, valid_from/valid_to.

## Diagnostic candidates
- HIGH_DEMAND + REPEATED_LANGUAGE_FRICTION → LANGUAGE_ACCESS_ISLAND
- HIGH_SEARCH + DISCOVERY_WORKAROUND → INFORMATION_DISCOVERY_ISLAND
- BOOK_ATTEMPT + IDENTITY/PAYMENT_FAILURE → TRANSACTION_ACCESS_GAP
- COMPLETED_TRIP + HIGH_WORKAROUND_COST → HIDDEN_TRANSACTION_COST
- REPEATED_OFFICIAL_COMPLAINT + LOW_RESOLUTION → SERVICE_RECOVERY_GAP
- SOCIAL/REVIEW_SIGNAL + LOW_OFFICIAL_REPORTING → UNDER_REPORTED_PAIN candidate

These are hypotheses. No prevalence or KTOF score is valid without denominators and comparable capture.
