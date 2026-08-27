# WHY + HUMAN PSYCHOLOGY — L2 OBSERVATIONS V1
Date: 2026-08-28

## Observation contract
These are evidence-status observations, not claims that one factor causes inbound arrivals.

### O1 — WHY is observable at multiple decision stages
The official visitor instrument separates trip purpose, Korea-interest trigger, Asia consideration set and pre-trip considered activities/infrastructure. Therefore a single `reason_for_visit` field would destroy information.
Status: CONFIRMED.

### O2 — Potential demand and realized demand have separate official sensors
Potential Foreign Tourist Survey observes general foreigners and Korea-intenders before realized travel, while Foreign Tourist Survey observes departing actual visitors. These populations must be parallel nodes, not merged rows.
Status: CONFIRMED.

### O3 — Search interest is a bridge sensor, not conversion truth
KTO exposes a Google-derived Korea-travel interest index for seven origin markets and notes positive correlation with monthly inbound volume, but it is normalized relative interest rather than absolute search volume. It supports temporal co-movement analysis, not user-level attribution.
Status: CONFIRMED with scope limit.

### O4 — Information influence is market-specific
Country-market reports show information sources and product-purchase sites differ by origin market. Therefore motivation/influence should be conditioned on WHO/origin rather than modeled as one global coefficient.
Status: HIGH.

### O5 — K-content/content exposure must remain upstream until conversion is observed
Content can be represented as exposure/trigger/image evidence. Public surveys may show respondents naming content or media as an influence, but this is not sufficient to label `content → arrival` as causal.
Status: MODEL RULE.

### O6 — Negative intent is first-class evidence
The 2025 Potential Foreign Tourist Survey expanded questions for non-intenders and undecided respondents. Their barriers belong in the graph as negative/blocked intention rather than being discarded from demand analysis.
Status: CONFIRMED.

## Rejected shortcuts
- `K-content popularity = tourism demand` REJECTED.
- `visit intent = future arrival` REJECTED.
- `Google interest index = search volume` REJECTED.
- `stated reason = causal effect size` REJECTED.
- `no booking = no desire` REJECTED.
