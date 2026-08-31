# Foreign Tourist Survey 2014 same-year field materialization observation

Date: 2026-08-31
Layer: L2 OBSERVATION
Scope: evidence-supported 2014 wave only

## Verified coverage change

The 2014 Foreign Tourist Survey has moved from artifact/method availability toward same-year field-level evidence. Official KTO Tourism Data Lab codebook indexing verifies `q4` (competing destination consideration), `q4a1` (first competing destination), `q5` (visit purpose), `q5a1` (travel motivation rank 1), `q13` (overall satisfaction), `q14` (3-year revisit intention), and `q17` (travel form). KOSSDA's archived same-year codebook verifies `q10` (stay-length category) and its raw companions `mq10` and `mmq10`.

KOSSDA dataset metadata verifies collection during 2014-01 through 2014-12, 12,024 valid cases, universe of foreign travelers aged 15+ staying 1 day to 1 year, six exit gateways (Incheon/Gimpo/Gimhae/Jeju international airports and Incheon/Busan international ports), self-administered mode, nationality × entry-route × gender proportional quota sampling, and existence of weighting. Questionnaire PDF, SAV data, codebook PDF and user guide PDF are registered; access is Member Access.

## Comparability caution

Raw question numbering changed materially relative to earlier waves. In 2014 travel form is `q17`, while destination consideration is `q4`, visit purpose is `q5`, and stay length is `q10`. These are recorded as same-year raw mappings only. Similar wording or response values do not by themselves authorize silent longitudinal harmonization.

`q14` is explicitly a 3-year revisit *intention* measure and must not be treated as observed revisit behavior. For `q13`, code `8=해당 없음` is preserved separately from `9=모름/무응답`.

## Remaining blockers

- Exact weight variable, formula, population controls, normalization and calibration cells remain `UNKNOWN` from Tier-A/B metadata.
- Universe/skip mechanics for `q4a1-q4a5`, response mechanics for ranked/multiple-response fields, and full raw numeric domains for companion variables remain unverified.
- Respondent SAV bytes, row-count/checksum, month/site case distribution and attachment-level reuse licenses are not acquired.
- Direct PDF screenshot verification failed in the current web runtime, so only fields exposed by official KTO indexing or KOSSDA's archived codebook were materialized.

No cross-year harmonization or canonical architecture/model changes are made by this observation.
