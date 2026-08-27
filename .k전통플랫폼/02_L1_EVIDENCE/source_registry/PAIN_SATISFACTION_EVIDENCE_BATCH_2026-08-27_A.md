# PAIN / SATISFACTION Evidence Batch — 2026-08-27 A

Status: source/evidence acquisition only. No final scoring weights.

## A. Foreign Tourist Survey — design and codebook backbone

Source: Tourism Knowledge Information System (Korea Culture & Tourism Institute / MCST)
Survey design: https://know.tour.go.kr/stat/fResearchExpDis19Re.do
Codebooks: https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
Tier: A
Format: WEB + XLSX/PDF/ZIP/HWP depending year
2025 design: target population is foreign-national travelers departing after visiting Korea; excludes under age 15 and stays of 91 days or longer. Total annual sample is 16,000, allocated monthly and then by nationality, gateway, sex, and age using recent inbound statistics.
2025 codebook: XLSX, posted 2026-06-01.
2024 codebook: XLSX plus PDF, posted 2025-06-09.
2023 codebook: ZIP.
Axes: WHO, WHY, STAY, DO, SPEND, SEARCH, PAIN, SATISFACTION
Confidence: HIGH
Use rule: preserve yearly codebook and questionnaire version; do not assume identical variable coding across pandemic and post-pandemic survey redesigns.

## B. PAIN direct measure — insufficient Korea-related information

Source: Foreign Tourist Survey quarterly results, 2023 provisional outputs
Example source: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=306194&cbIdx=1127&streFileNm=344716d8-c2a3-49d6-bfd3-fa9d36632f11.pdf
Tier: A
Format: PDF
Measure: multiple-response question for Korea-related information that was insufficient.
2023 surfaced overall values in provisional table: transportation information 20.7%; food/restaurant information 16.6%; destination information 14.1%; financial information 12.8%; 'none' 43.3%.
Earlier 2023 provisional output also surfaced regional festival/event information at 15.5% in its top-five presentation.
Axes: PAIN, SEARCH, MOVE, BOOK_PAY, WHERE
Confidence: MEDIUM-HIGH for the quoted provisional values; annual final 2023 report/codebook should supersede provisional quarter tables for definitive time-series storage.
Interpretation rule: these are reported information shortages, not measured transaction failures. They can seed Information Asymmetry candidates only after segment/country cross-tabs are extracted.

## C. SATISFACTION / behavior time series dashboard

Source: Korea Tourism Data Lab, country-specific Korea travel dashboard
URL example: https://datalab.visitkorea.or.kr/datalab/portal/nat/getForTourDashForm.do?NatCd=CN
Tier: A
Format: WEB with data-download support
Displayed domain: Korea travel behavior and satisfaction evaluation by year, including historical series beginning at least 2015 on the surfaced dashboard.
Critical warning from KTO: 2020–2022 Foreign Tourist Survey changed methodology/content because inbound tourism collapsed during COVID-19; comparisons with pre-2020 results require caution.
Axes: SATISFACTION, DO, STAY, WHO
Confidence: HIGH
Normalization rule: create pandemic-regime flag and never estimate continuous pre/post trend without methodology adjustment or robustness checks.

## D. 2025 Foreign Tourist Survey provisional methodology

Source: 2025 Q1 provisional report
URL: https://datalab.visitkorea.or.kr/common/board/Download.do?bcIdx=309194&cbIdx=1127&streFileNm=5ee75d9e-e097-4aca-9103-863fef84bf59.pdf
Tier: A
Format: PDF
Purpose: measures behavior, spending and satisfaction across the Korea travel process for tourism policy and reception-readiness improvement.
Frequency: monthly survey through 2025.
Method: structured face-to-face interviews of departing foreign travelers.
Axes: PAIN, SATISFACTION, SPEND, DO, STAY
Confidence: HIGH

## E. Summary-result statistical caveat affecting SPEND/SATISFACTION joins

Source: Tourism Knowledge Information System Foreign Tourist Survey summary
URL: https://know.tour.go.kr/stat/fResearchExpSummaryDis19Re.do
Tier: A
Format: WEB
Caveat: spending treatment changed. From 2020 expenditure includes international transportation; legacy handling of extreme expenditure cases differs, and from 2023 top/bottom 1% cases are winsorized to nearest values according to the surfaced methodology note.
Axes: SPEND, SATISFACTION, WHO
Confidence: HIGH
Use rule: expenditure series needs `expenditure_definition_version` and outlier-treatment metadata before using spend as an outcome in any causal/predictive model.

## Priority extraction queue generated from this evidence

1. Download and parse 2025 XLSX codebook to enumerate exact PAIN and SATISFACTION variables and value labels.
2. Build 2015–2025 variable-harmonization table, with explicit COVID methodology regime.
3. Extract country × age × repeat-visit × travel-type cross-tabs for information shortage and satisfaction.
4. Test whether transportation / food / destination / finance information gaps predict lower satisfaction, but only from respondent-level microdata and with confounder controls.
5. Keep `reported_information_shortage` distinct from `observed_booking_failure`, `payment_failure`, `mobility_failure`, and `complaint_event`.

No causal claim or final opportunity score is asserted in this file.
