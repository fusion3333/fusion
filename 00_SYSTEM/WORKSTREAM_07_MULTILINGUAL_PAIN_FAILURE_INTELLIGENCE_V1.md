# WORKSTREAM 07 — Multilingual Pain / Failure Intelligence V1

Date: 2026-08-28

## Decision target
Close public-source discovery and harmonization for multilingual traveler pain/failure evidence without pretending that complaint or review data measure population incidence.

## Scope
Journey: Exposure → Search → Compare → Book → Pay → Arrive → Move → Stay → Do → Spend → Support/Complaint → Return/Advocacy.

The unit is not a generic negative sentiment. The unit is a friction/failure observation attached to a journey edge, language/origin context, time, region, asset/operator and evidence channel.

## Required source families
- O Official: KTO Tourism Complaint/Data Lab, 1330 Helpline & Complaint Center, central/local agencies, domain complaint/violation records.
- E Enterprise: OTA/map/product reviews, supplier/customer-support policies and transaction-adjacent public evidence.
- S Social/VOC: Reddit, YouTube, Instagram, TikTok, Threads, X and origin-market travel communities.
- R Research: KCTI, OECD/UN Tourism methods, academic and industry research.
- G Ground: traveler/supplier interviews, mystery booking, direct verification.
- N Native telemetry: owned search/book/pay/attend/refund funnel and failure events.

## Official multilingual anchor
KTO 1330 provides travel information/interpretation and complaint submission. Verified historical/current official pages document Korean plus English, Japanese, Chinese, Russian, Vietnamese, Thai and Malay service/complaint access. Complaint handling proceeds through submission → relay/investigation/resolution. Language/channel access therefore forms part of the reporting-selection mechanism.

Seoul taxi QR complaint evidence provides a domain example with English/Chinese/Japanese access and a crucial measurement split: submitted reports are not the same as investigated/verified violations.

## Canonical record
pain_id
observed_at
event_date
journey_stage
journey_edge
topic
subtopic
origin_market
source_language
normalized_language
region
asset_operator
source_family
source_platform
source_type
report_or_review_type
severity
monetary_loss
time_loss
abandonment
workaround
resolution
verified_status
sentiment
positive_control
denominator_type
denominator_value
source_ref
confidence
translation_method
translation_confidence

## Core states
UNKNOWN
→ FRICTION_SIGNAL
→ RECOGNIZED_PAIN
→ REPORTED_OR_REVIEWED
→ INVESTIGATED_IF_APPLICABLE
→ VERIFIED_OR_UNVERIFIED
→ RESOLVED_OR_UNRESOLVED

A behavioral failure may bypass complaint entirely:
ATTEMPT → FRICTION → ABANDONMENT/WORKAROUND → SUCCESS_OR_FAILURE.

## Multilingual normalization contract
1. Preserve original language and original source text reference.
2. Store normalized topic separately from translated/paraphrased content.
3. Never infer nationality solely from language.
4. Never infer origin market solely from platform locale.
5. Simplified Chinese, Traditional Chinese, English, Japanese, Korean, Vietnamese, Thai, Malay/Indonesian and Russian remain separately tagged even when mapped to a common topic taxonomy.
6. Machine translation is a transformation layer, not primary evidence; record translation_method/confidence.
7. Slang, sarcasm, code-switching and named local services require manual/LLM review before high-confidence topic assignment.

## TOP15 language routing
- Japan → Japanese primary.
- China → Simplified Chinese primary.
- Taiwan/Hong Kong → Traditional Chinese primary; preserve local vocabulary differences.
- United States/Canada/Australia/United Kingdom → English primary.
- Philippines/Singapore → English primary with local-language/code-switching evidence retained where encountered.
- Vietnam → Vietnamese primary.
- Thailand → Thai primary.
- Malaysia → Malay + English.
- Indonesia → Indonesian primary.
- Russia → Russian primary.

This routing is a search/sampling prior, not an identity classifier.

## Canonical pain taxonomy
DISCOVERY_INFORMATION
MAP_NAVIGATION
LANGUAGE_COMMUNICATION
IDENTITY_ACCOUNT
BOOKING_AVAILABILITY
PAYMENT_ACCEPTANCE
PRICE_FEE_TRANSPARENCY
TRANSPORT_TAXI
TRANSIT_TRANSFER
LAST_MILE
ACCOMMODATION
FOOD_DIETARY
SHOPPING_TAX_REFUND
EXPERIENCE_ACCESS
ACCESSIBILITY
SAFETY_SCAM
SERVICE_ATTITUDE_DISCRIMINATION
CONNECTIVITY_DIGITAL
LUGGAGE_PHYSICAL_BURDEN
REFUND_CANCELLATION
SUPPORT_COMPLAINT
OTHER

Each topic requires a journey_edge and may have multiple contributing causes.

## Prohibited shortcuts
- complaint_count != pain_prevalence
- review_count != visitor_count
- negative_review_share != failure_rate unless denominator/sample rules are explicit
- language != nationality
- platform_locale != residence
- reported_complaint != verified_violation
- support_contact != complaint
- social_engagement != incidence
- workaround_success != absence_of_friction
- no_complaint != no_pain

## Denominator hierarchy
D0 NONE: anecdote/post/review without eligible population.
D1 PLATFORM: reviews / completed platform transactions only if platform discloses denominator.
D2 CHANNEL: complaints / eligible channel interactions where eligibility is defined.
D3 JOURNEY_ATTEMPT: failures / observed attempts from first-party or owned telemetry.
D4 POPULATION: validated survey/population denominator with comparable capture.

Do not upgrade D0–D2 to a population failure rate.

## Regime and causal use
Changes in complaint access, multilingual UI, fare/receipt disclosure, payment support, booking rules or platform policies are candidate regime boundaries. Before/after differences are not causal unless exposure, controls and competing changes are modeled.

## Completion boundary
Public-source architecture, official complaint backbone, multilingual routing, taxonomy, denominator rules and O/E/S/R search map are locked. Full TOP15 review/social corpora, cross-platform identity, unreported pain and true attempted-failure denominators require dynamic platform access, Ground research or N telemetry and are explicitly outside public-source completion.

Status: PUBLIC_SOURCE_MAXIMUM_COMPLETE_WITH_PLATFORM_DENOMINATOR_AND_TELEMETRY_LIMITS
