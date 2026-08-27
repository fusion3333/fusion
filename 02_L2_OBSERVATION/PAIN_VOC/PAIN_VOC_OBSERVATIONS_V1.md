# PAIN / VOC Observations V1

## O1 — Complaint data observes surfaced pain, not all pain
A traveler must notice a problem, decide it is reportable, know a channel, have time/language/access to report, and complete the report. Complaint datasets therefore contain a strong reporting-selection process.

LatentPain → RecognizedPain → ReportIntent → ChannelAccess → SubmittedReport → Investigated → Verified/Unverified → Resolved/Unresolved.

## O2 — Pain must attach to a journey edge
A generic tag such as `transport inconvenience` is insufficient. Record the exact edge: route discovery, ticket search, identity, payment, transfer, boarding, last mile, fare understanding, etc.

## O3 — Repeated workaround language is economically meaningful
If travelers repeatedly solve a failure by asking a Korean friend, switching platforms, paying a premium intermediary, carrying cash, translating screenshots, or abandoning a destination, the workaround is evidence of friction even when the final journey succeeds.

## O4 — Friction can be additive
Many Korea-trip narratives describe no single catastrophic failure but several small planning/navigation/language/payment frictions. The engine must support cumulative friction across edges rather than only maximum severity.

## O5 — Observable complaint and behavioral loss are different
A user may abandon without complaining. Conversely a complaint may be filed after a completed transaction. Therefore complaint severity and conversion loss are separate outcomes.

## O6 — Service correction creates natural regime changes
When an agency changes receipts, foreign-card support, multilingual UI, complaint access or booking rules, the before/after date becomes a candidate quasi-experimental regime boundary. Causal claims still require controls.

## O7 — Pain is segment-specific
The same infrastructure can create different friction by origin language, age, travel party, disability/access needs, luggage, payment instrument, digital literacy, prior Korea visits and trip purpose.

## O8 — VOC needs positive controls
Store praise, successful paths and explicit `no problem` reports. Without controls, a negative-only corpus cannot estimate which conditions distinguish failure from success.

## Opportunity hypotheses, not final scores
- HighDemand + HighPain + HighAbandonment + SolvableEdge → Friction Opportunity candidate.
- HighQualitySupply + RepeatedDiscoverabilityPain → Information/Discovery Island candidate.
- CompletedJourney + HighWorkaroundCost → Hidden Transaction Cost candidate.
- RepeatedPain + OfficialRemedyGap → Service Infrastructure candidate.

No KTOF weights are assigned at this stage.