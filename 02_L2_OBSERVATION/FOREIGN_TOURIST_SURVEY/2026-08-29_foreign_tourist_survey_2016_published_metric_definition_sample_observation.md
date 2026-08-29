# 2016 Foreign Tourist Survey — published metric definition/sample observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-29
Dataset: KORC-FTS-001
Primary L1: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2016_PUBLISHED_METRIC_DEFINITION_SAMPLE_EVIDENCE_2026-08-29.csv`

## Observation

Official MCST/KTO 2017 Foreign Tourist Survey release material directly publishes several 2016 comparator values and metric definitions. These provide a narrow fallback for the 2016 wave while the official questionnaire registry still lists the 2016 questionnaire with `No File`.

Verified 2016 facts from the official comparator material:

- realized sample: `12,003` respondents;
- survey country/group frame count: `16` before Vietnam, Indonesia and the Philippines were added for 2017;
- visit-frequency published categories: first visit `61.4%`, repeat visit (2+) `38.6%`, 2 visits `12.7%`, 3 visits `6.7%`, 4+ visits `19.2%`;
- published mean stay: `6.4 days`, with the table explicitly excluding respondents staying `61 days or longer` from that metric;
- tourism revisit-intention horizon: `within the next 3 years`, with the 2016 published positive-intention result `84.1%`;
- published recommendation-intention result: `88.9%`.

## Evidence boundary

These are published-result / published-metric-definition facts, not raw-field extraction. They do **not** establish the 2016 raw variable names, response codes, exact questionnaire wording, skip/universe rules, missing codes, weight variable/formula, or respondent-row schema.

The `61+ day exclusion` is specifically an analysis/output rule for the published average-stay metric. It must not be converted into a claim that the 2016 survey eligibility universe itself ended at 60 days.

The official 2017 release says 2016 covered 16 countries/groups, but it does not enumerate the exact 16 in the evidence used here. Do not reconstruct the roster by simply subtracting the three 2017 additions.

## Blocker

The official Tourism Knowledge Information System questionnaire registry lists `2016년 외래관광객 실태조사 설문지` dated 2017-06-02 but currently shows `No File`. Exact 2016 wording therefore remains a same-year retrieval blocker and should be recovered only from the 2016 codebook, user guide, annual report, archived official copy, or another authoritative same-year artifact.

## Canonical impact

No longitudinal equivalence group, harmonized variable, ontology, opportunity model, or business inference is created here. The canonical crosswalk is intentionally left unchanged because the newly verified evidence does not yet expose raw-variable-level 2016 fields.