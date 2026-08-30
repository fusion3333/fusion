# 2021 Foreign Tourist Survey — core vs QR collection routing observation

## Evidence basis
Official Korea Tourism Data Lab distribution page for the 2021 Foreign Tourist Survey raw package states that COVID-19 sharply reduced inbound foreign visitors and temporarily changed both survey method and content. The page identifies two collection paths within the same survey wave:

- a structured questionnaire used to prioritize major indicator questions, with examples including visit frequency, main visit purpose, factors considered when choosing Korea, length of stay, expenditure, activities during the visit, and overall satisfaction;
- a QR-code additional-question path, with examples including travel companions, major shopping items/locations, and item-level satisfaction.

Official source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=301765&cateCont=spt05&cbIdx=1127&pageIndex=1&subFlag=Y&tabFlag=N

The same page lists the official raw ZIP and same-year PDF codebook and displays Public Nuri Type 4 terms.

## Evidence-supported observation
2021 cannot be represented as a single undifferentiated questionnaire-delivery regime at field level. The official publisher explicitly separates prioritized structured-questionnaire domains from QR-routed additional domains. Therefore collection route is a same-year methodological attribute that must be retained when extracting and harmonizing 2021 fields.

This evidence does **not** establish that QR-routed fields have a smaller denominator, a particular response rate, or a specific missing-data mechanism. Those remain `UNKNOWN`. It only establishes that the collection opportunity/path differed. Respondent-level linkage, QR invitation/completion counts, skip/universe rules, raw variable names, value labels and item missing codes require direct ingestion of the same-year codebook/raw package.

## Comparability guardrail
Do not silently assign core and QR-routed 2021 fields the same response denominator or missingness interpretation. Do not infer exact field identity from 2020 or 2022. Preserve `COVID_2020_2022_MODIFIED_REGIME` and route-specific provenance until same-year raw/codebook extraction resolves the denominator and linkage questions.

## Coverage change
Newly verified: `2021 collection_routing = STRUCTURED_CORE + QR_ADDITIONAL`, plus official domain examples for each route and official raw/codebook package naming.

Still missing: exhaustive core/QR field inventory; raw variable names; exact wording/codes; QR eligibility/invitation/completion denominator; respondent linkage key; skip/universe; item missing codes; raw respondent ingestion/checksum.