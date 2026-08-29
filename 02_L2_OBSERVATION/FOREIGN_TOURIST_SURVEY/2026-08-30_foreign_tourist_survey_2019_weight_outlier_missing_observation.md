# 2019 Foreign Tourist Survey — weighting / outlier / missing-policy observation

## Evidence boundary

Tier-A official evidence: Statistics Korea-hosted `외래관광객조사 통계정보보고서` describing the 2019 survey production process. This observation records only directly stated weighting, expenditure-outlier, and general missing-data mechanics. It does not infer adjacent-year rules or raw-variable mappings.

Source: https://kostat.go.kr/boardDownload.es?bid=12030&list_no=372686&seq=3

## Verified observations

1. **2019 post-weighting formula is directly specified.** Effective samples obtained through modified proportional allocation were post-weighted by inbound-arrival proportions for country × month × sex × age. The report gives `wt_ijkl = N_ijkl / n_ijkl`, with country = 21 groups including Other, sex = 2, age = 4 groups (`≤30`, `31–40`, `41–50`, `≥51`), and month = 12. Population `N` excludes overseas Koreans, crew, and cruise entrants. This closes the prior formula/cell-definition UNKNOWN for 2019.

2. **2019 expenditure outlier handling is directly specified.** Per-person total expenditure above USD 10,000 for independent travelers and above USD 11,000 for package/Air-tel travelers was treated as Missing and replaced by a mean. The official report also states that weighted estimation was used. Exact replacement-cell grouping, component aggregation order, exchange-rate sequence, and raw transformed-variable name remain UNKNOWN.

3. **General missing/skip coding policy is directly described but is not a substitute for variable-level codebook extraction.** Core trip-behavior items generally did not permit item nonresponse; demographic items such as age/occupation/education could. For yes/no variables, refusal/don't-know is described as code `99`, while not-applicable is missing. Open numeric items use an all-9 pattern for don't-know/nonresponse. The report states that skip patterns were enforced in the input system. Exact variable-specific missing codes remain PENDING.

## Conflict / limitation

The same quality report contains a respondent-eligibility passage saying `1 day to 1 year`, while the same-year 2019 official survey package establishes the operational 2019 stay criterion as `≤90 days`. Therefore the quality report is used here for weighting/data-processing mechanics only; its conflicting eligibility wording must not overwrite the canonical 2019 `≤90 days` regime.

## Repository implication

This is a narrow evidence addition. No master architecture, ontology, longitudinal harmonization, source-routing rule, or opportunity logic is changed. The remaining P0 work for 2019 is direct same-year codebook/raw extraction for raw variable names, exact questionnaire codes and universes, country/city mappings, transformed expenditure fields, and variable-specific missing values.