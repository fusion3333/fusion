# K-ETA official policy regime observation — 2026-08-28

## Scope
Evidence-supported L2 observation only. No causal estimate, opportunity score, traveler-psychology interpretation, or business recommendation is made here.

## Verified observations
1. The Ministry of Justice states that K-ETA pilot operation began on 2021-05-03, with pilot operation during May-August 2021 and full implementation from September 2021.
2. A separate Ministry of Justice notice fixes the full-implementation date at 2021-09-01 and states that covered travelers needed approved K-ETA before boarding a Korea-bound flight.
3. The current Korea Immigration Service K-ETA policy page defines K-ETA as advance travel authorization for covered visa-free entrants. The current page states a KRW 10,000 application fee, three-year validity subject to passport validity, and recommends application at least 72 hours before boarding; it also lists several exclusion categories.
4. The official K-ETA homepage currently lists a notice titled `대한민국 전자여행허가제(K-ETA) 한시 면제 기간 연장 알림` dated 2026-03-20. During this verification run, the notice detail URL returned `ERR_SYS001 / 정의되지 않은 URL 접근`, so the exact extension end date and covered country/region roster were not treated as verified.

## Measurement / join rules
- Code `2021-05-03` as a pilot-regime event boundary, not as universal mandatory coverage for all visa-waiver nationalities.
- Code `2021-09-01` as the verified full-implementation boundary for travelers covered under then-current K-ETA rules.
- Do not construct a nationality-month K-ETA obligation panel from these dates alone. Country eligibility changed with entry policy and later temporary exemptions.
- Current nominal policy scope must not overwrite historical scope.
- The existence of a 2026 temporary-exemption extension notice is verified, but its exact period and country roster remain `UNKNOWN` until the official detail or equivalent Tier-A document is accessible.
- K-ETA policy changes may be joined as temporal policy covariates only after nationality-level applicability is verified; no causal effect on arrivals, booking, or conversion is inferred here.

## Coverage change
The WHEN policy/event ledger now has Tier-A evidence for the K-ETA pilot boundary and full-implementation boundary, plus a verified current policy definition. This closes the implementation-date discovery gap but does NOT close nationality-month applicability or temporary-exemption history.

## Remaining blocker
Acquire an authoritative Tier-A source exposing the exact 2026 temporary-exemption extension period and country/region roster, then backfill the historical exemption/eligibility roster by effective date before nationality-level joins.

## Evidence
See `01_L1_EVIDENCE/WHEN/KETA_OFFICIAL_POLICY_REGIME_MANIFEST_2026-08-28.csv`.
