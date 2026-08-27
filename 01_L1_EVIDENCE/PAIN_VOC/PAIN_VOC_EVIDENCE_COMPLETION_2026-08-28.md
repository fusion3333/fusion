# PAIN / VOC Evidence Completion — 2026-08-28

## Scope
PAIN/VOC is modeled as observed friction across the full traveler journey, not as a single satisfaction score.

Canonical journey attachment:
Exposure → Search → Compare → Book → Pay → Arrive → Move → Stay → Do → Spend → Support/Complaint → Return/Advocacy.

## Tier-A official backbone
1. Korea Tourism Organization Tourism Data Lab exposes Tourism Complaint data from the Tourist Complaint Center and 1330, queryable by year/month and organized by complaint type, region and nationality. Monthly UI queries cover up to 18 months; historical annual complaint analysis reports must therefore be retained as separate long-horizon evidence.
2. KTO published the `2025 관광불편신고 종합분석서` on 2026-03-27 and explicitly points to historical annual complaint-analysis reports.
3. VISITKOREA 1330 provides multilingual travel information, interpretation and complaint submission; complaints are relayed for investigation/resolution. This defines an official complaint/support pathway but does not provide a denominator of all travelers.
4. Seoul Metropolitan Government provides a strong verified case study for taxi friction. For Jun–Dec 2025 it received 487 foreign-passenger QR complaints; unfair fares were the most frequent complaint type. Eight cases were confirmed after investigation. The city responded with English receipts and clearer fare/toll presentation.

## Critical measurement separation
ReportedPain != VerifiedViolation != PopulationPrevalence.

The Seoul taxi example is canonical: 487 reports and 8 confirmed violations are different measurements with different denominators and evidentiary meaning.

## Open-web / SNS qualitative sensors
Reddit Korea-travel discussions repeatedly surface navigation/map switching, foreign-card/identity/booking barriers, language/communication, luggage/stairs/transfer burden and uncertainty about local reviews/pricing. These are useful hypothesis generators and taxonomy evidence, not prevalence estimates.

## Required record fields
pain_id, journey_stage, topic, subtopic, origin_market, language, region, asset/operator, source_class, source_platform, event_date, report_date, severity, monetary_loss, time_loss, abandonment, workaround, resolution, verified_status, sentiment, evidence_ref, denominator_type.

## Evidence discipline
- Never divide complaint counts by total arrivals unless complaint capture/eligibility is comparable and the interpretation is explicitly `reported complaint rate`.
- Never treat social post counts as incidence.
- Never merge negative review, complaint, support request, verified violation and behavioral abandonment into one metric.
- Preserve time, platform, nationality/language, region and journey-stage context.
- Positive/neutral VOC is retained because absence of pain and successful workarounds matter for causal comparison.

## Status
Public source discovery is sufficient to lock the source architecture. Population-level pain incidence, platform review denominators, cross-platform identity, and attempted-but-failed journey telemetry remain incomplete.