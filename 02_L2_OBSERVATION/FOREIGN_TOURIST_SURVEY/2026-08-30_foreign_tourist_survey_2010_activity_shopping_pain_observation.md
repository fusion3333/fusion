# 2010 Foreign Tourist Survey — activity and shopping-pain observation

Date: 2026-08-30
Canonical dataset: `KORC-FTS-001`
Layer: L2 OBSERVATION
Evidence: `01_L1_EVIDENCE/FOREIGN_TOURIST_SURVEY/FOREIGN_TOURIST_SURVEY_2010_ACTIVITY_SHOPPING_PAIN_EVIDENCE_2026-08-30.csv`

## Evidence-supported observations

1. The 2010 same-year official codebook exposes the principal Korea-visit activity family as `q12a1`, `q12a2`, `q12a3` (문12, 한국방문 주요활동 1~3). Its response frame includes 관광지 방문, 쇼핑, 식도락 관광, 미용관광, 유흥/오락, 카지노, 테마파크, 온천/스파, 휴양/휴식, 스포츠·레포츠, 전통문화체험, 공연/행사/축제, 치료, 시찰, 연수/교육/연구, MICE participation, 업무수행 and 직업적 스포츠, plus 기타/없다/무응답. This is a year-specific activity taxonomy and must not be silently harmonized to later activity frames.

2. The codebook also exposes `q12b1:q12b4` as 스포츠활동 detail and `q12c1:q12c3` as 전통문화체험 detail. The searchable official text shows a response frame attached to the q12b block that unexpectedly includes 템플스테이·태권도·김치 등 한국음식 만들기 alongside 스키·수영·골프. That label/content tension is preserved as `CONFLICTING_LABEL_CONTENT_PRESERVED`; it is not corrected by assumption. The exact q12c response-code mapping and q12a→q12b/q12c routing remain UNKNOWN pending direct questionnaire/raw ingestion.

3. The 2010 same-year official codebook exposes shopping-specific pain as `q15a1:q15a8` (문15, 쇼핑중 불편사항 1~8), with coded categories for lack of product variety, lack of Korean-style products, solicitation, too few shopping places, unfriendly staff, language difficulty, early closing, inadequate signs, other, none and don't-know/nonresponse.

4. This field family is specifically shopping inconvenience. It must not be substituted for or merged with a general trip-inconvenience construct without an explicit same-year equivalence rule. Eligibility (all respondents vs shoppers), skip logic, denominator and respondent-level missing treatment remain UNKNOWN because respondent rows and the questionnaire routing were not ingested in this evidence pass.

## Coverage change

2010 now has direct same-year Tier-A raw-field evidence for two previously unmaterialized areas: `DO/major_activities` and `PAIN/shopping_inconvenience`, including exact raw variable families and visible code frames where the official codebook exposes them.

## Remaining blockers

- Exact universe/filter and denominator for q12 and q15.
- q12a routing to q12b/q12c and the exact q12c response codes.
- Full missing-value semantics beyond visible none/nonresponse codes.
- Respondent raw-row ingestion, row count and checksum.
- Weight formula/calibration/nonresponse adjustment beyond the already known `wt` field.
- Attachment-level reuse/license scope.

No longitudinal equivalence, causal interpretation, opportunity ranking or business inference is made here.
