# 2018 Foreign Tourist Survey — weight formula observation

Status: L2 OBSERVATION / EVIDENCE-SUPPORTED ONLY
Date: 2026-08-30
Canonical dataset: `KORC-FTS-001`
Parent L1: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2018_WEIGHT_FORMULA_EVIDENCE_2026-08-30.csv`

## Verified observation
The official 2018 Foreign Tourist Survey final report resolves a previously explicit methodology gap in the 2018 evidence set: the post-survey weight is defined over **country × sex × age × survey month** cells, not merely country/month.

The report states that valid samples obtained under modified proportional allocation are post-weighted according to inbound-arrival proportions by country, month, sex and age. Its notation defines:

- `N`: 2018 inbound arrivals excluding overseas Koreans, crew and cruise arrivals
- `n`: survey sample count
- `i`: country, 21 categories including Other
- `j`: sex, male/female
- `k`: age, four strata: 30 or younger; 31–40; 41–50; 51 or older
- `l`: survey month, 12 months
- published cell formula: `w_ijkl = N_ijkl / n_ijkl`

This is a material closure because the existing 2018 sample-allocation evidence had already verified that age was added to the allocation regime but left the exact age bands and weighting formula `UNKNOWN`.

## Comparability boundary
This does **not** establish the raw respondent-file weight variable name, exact country value labels, respondent-level missing codes, zero-cell treatment, trimming/capping, calibration tolerances, or any unreported nonresponse adjustment. Those remain `UNKNOWN` until the same-year HWP codebook/raw ZIP is directly ingested.

The weighting population explicitly excludes cruise arrivals in 2018. Therefore the 2018 weighting regime must not be silently treated as identical to pre-2018 waves even where variable labels appear similar.

## Access limitation
The official KTO final-report PDF is publicly indexed and its methodology text is retrievable, but the direct PDF endpoint returned `application/octet-stream` when opened in this evidence run. No binary PDF or screenshot was therefore archived. The evidence file records this access limitation rather than claiming direct byte-level ingestion.

## Repository impact
No master architecture, ontology, source-routing standard, KTOF logic, business strategy, psychology layer or opportunity-scoring file was modified. No canonical crosswalk cell was rewritten in this run; the new L1 evidence can support a later mechanical crosswalk refresh after raw-variable extraction or registry-safe synchronization.