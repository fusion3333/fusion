# PAIN / VOC Graph V1

## Node classes
TravelerSegment, JourneyStage, Intent, Attempt, FrictionEvent, Complaint, Review, SupportRequest, VerifiedViolation, Workaround, Resolution, Abandonment, MonetaryLoss, TimeLoss, Supplier, Platform, TransportOperator, Place, PolicyRegime, Source.

## Core edges
TravelerSegment → EXPERIENCES → FrictionEvent
FrictionEvent → OCCURS_AT → JourneyStage
FrictionEvent → CONCERNS → Supplier/Platform/Operator/Place
FrictionEvent → MAY_CAUSE → Abandonment
FrictionEvent → MAY_CAUSE → MonetaryLoss/TimeLoss
FrictionEvent → TRIGGERS → Workaround
FrictionEvent → MAY_GENERATE → Complaint/Review/SupportRequest
Complaint → INVESTIGATED_AS → VerifiedViolation
Complaint/Review/SupportRequest → MAY_LEAD_TO → Resolution
PolicyRegime → CHANGES → JourneyEdge
Source → OBSERVES → Complaint/Review/SupportRequest/FrictionEvent

## Canonical pain taxonomy
DISCOVERY, INFORMATION, LANGUAGE, TRUST, PRICE_TRANSPARENCY, OVERCHARGE, BOOKING, INVENTORY, IDENTITY, ACCOUNT, PAYMENT, AUTHENTICATION, FX_DCC_FEE, REFUND, NAVIGATION, TRANSFER, LAST_MILE, ACCESSIBILITY, LUGGAGE, QUEUE, CAPACITY, OPENING_HOURS, SERVICE_ATTITUDE, CULTURAL_RULES, SAFETY, CONNECTIVITY, APP_UX, MAP_SEARCH, QUALITY_MISMATCH, AUTHENTICITY_MISMATCH, WEATHER, CROWDING, CLEANLINESS, AFTERSALES, OTHER.

## State model
Need/Intent → Attempt → SuccessWithoutPain | SuccessWithPain | FailureWithComplaint | FailureWithoutComplaint | Abandonment | Substitution.

## Diagnostic candidates
PainReportingRatio = SubmittedReports / EligibleObservedJourneys only when denominator compatibility is proven.

VerificationRatio = VerifiedViolations / InvestigatedReports, not / all travelers.

WorkaroundBurden = time_cost + money_cost + cognitive burden + dependency burden, with components stored before any aggregation.

CumulativeJourneyFriction = sequence of observed friction events; do not finalize weights before outcome validation.

## Anti-black-box rule
Every future PAIN-derived opportunity must be traceable to source → event/measurement → journey edge → segment → outcome. Social evidence cannot independently establish population prevalence.