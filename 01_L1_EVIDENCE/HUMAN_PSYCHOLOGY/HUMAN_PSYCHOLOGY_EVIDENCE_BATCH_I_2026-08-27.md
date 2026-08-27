# HUMAN PSYCHOLOGY — L1 EVIDENCE BATCH I
Date: 2026-08-27
Status: ACTIVE

## Purpose
Populate the previously weak Human Psychology layer with observable evidence rather than treating motives as free-form labels.

## O — Official
1. KTO 2025 Potential Korea Visitor Survey
   - Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310715&cbIdx=1603
   - Provides full report, residence-country tables and raw-data application path.
   - Role: Korea image, intention, desired experiences, barriers and pre-trip psychology by residence market.
2. KTO 2025 Foreign Tourist Survey raw data + codebook
   - Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310809&cateCont=spt05&cbIdx=1127&pageIndex=1
   - Role: stated reason, visit purpose, behavior, satisfaction, revisit/recommendation. Treat as DIRECT_STATED/SURVEY, not revealed preference.
3. MCST 2025 National Image Survey
   - Source: https://www.mcst.go.kr/site/s_policy/dept/deptView.jsp?pDataCD=0417000000&pSeq=2095&pType=
   - 26 countries / 13,000 respondents; license is KOGL type 4. Role: country-image and collective-attitude layer.
4. MCST 2025 Overseas Hallyu Survey
   - Public result reports K-pop as top spontaneous Korea association (17.8%), followed by Korean food, drama, beauty and film.
   - Role: collective cultural association / destination-image inputs, not direct tourism conversion.

## E — Enterprise / behavioral proxies
- Google/YouTube search and viewing trends: intent/exposure proxies, not motive itself.
- Flight/OTA search: downstream consideration proxy.
- Booking/activity purchase: revealed preference proxy.
- Card spend/mobility: realized behavior only.

## S — Social/VOC
- Reddit, Instagram, TikTok, YouTube comments, country-local social platforms.
- Use to discover vocabulary, identity/fandom narratives, authenticity/healing/status/novelty themes.
- Never infer population prevalence from raw post counts without normalization.

## R — Research primitives
1. Push/Pull framework: push = reason to travel; pull = reason to select a destination.
   - https://www.sciencedirect.com/science/article/pii/S0261517702000596
2. Pop-star fan self-expansion and destination loyalty.
   - https://www.sciencedirect.com/science/article/pii/S0261517718303108
3. Integrated tourist motivation / psychographic destination-choice models.
   - https://www.sciencedirect.com/science/article/pii/S1660537318000097

## Canonical constructs
`ESCAPE_RECOVERY`, `NOVELTY`, `CURIOSITY_LEARNING`, `AUTHENTICITY`, `SELF_EXPANSION`, `BELONGING_FANDOM`, `STATUS`, `SOCIAL_BONDING`, `RISK_AVERSION`, `CONVENIENCE_CONTROL`, `WELLNESS_HEALING`, `AESTHETIC_DESIRE`.

## Evidence-state rule
Underlying need != stated reason != observed behavior.
Each psychology observation must carry one of:
`DIRECT_STATED`, `MULTI_PROXY_SUPPORTED`, `BEHAVIOR_INFERRED`, `SOCIAL_SIGNAL_ONLY`, `HYPOTHESIS`.

## Measurement chain
`Collective exposure -> destination image -> stated intention -> search -> air/OTA consideration -> booking -> arrival -> activity -> spend -> satisfaction/revisit`.
Psychology becomes engine-ready only after country/time matched lead-lag validation.

## Remaining blockers
- 10-year country-level continuity of the same motive questions is incomplete.
- Platform search/view data often proprietary.
- Counterfactual destination-choice data remain weak.
- Need country x motive x month proxy panel and traveler interviews/choice experiments.
