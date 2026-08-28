# Foreign Tourist Survey 2012 / 2016 official artifact availability observation

Date verified: 2026-08-28
Evidence class: official Tier-A portal metadata

## Verified observation
The Korea Culture and Tourism Institute tourism-statistics portal currently lists year-specific respondent raw downloads for both the 2012 and 2016 Foreign Tourist Survey. It also lists a 2012 codebook and user guide, and for 2016 separately lists the main codebook, country/city codebook, user guide and annual report.

The official raw-data page identifies `2016년 외래관광객 실태조사 원자료.zip` and `2012년 외래관광객 실태조사 원자료.zip`. The same page also exposes a combined `2014~2016 원데이터.zip`, but the year-specific 2016 archive should be preferred for provenance unless direct inspection demonstrates an exact duplicate.

## Evidence-supported change
The prior `UNKNOWN` status for whether an authoritative 2016 codebook/raw artifact exists is resolved to `VERIFIED_AVAILABLE_WITH_DOWNLOAD_PROCEDURE`. The previously unresolved 2012 historical artifact gap is likewise resolved at the portal-metadata level.

## Access constraint
The official raw-data interface requires applicant information, stated use purpose and consent before download. This run therefore verifies availability and file identity but does not claim that respondent rows were ingested or inspected.

## Methodology boundary
No cross-year variable equivalence is inferred from artifact availability. The official survey-history page records multiple historical changes, including 2011 expansion of eligible stay duration, 2012 selection for the Statistics Korea Nara Statistics system, 2015 repeat-visit-definition change, and major 2017/2018 sampling and scope changes. Year-specific codebooks/user guides remain authoritative for variable crosswalks.

## Remaining blocker
The P0 harmonization blocker is now narrower: direct raw-file acquisition plus field-level comparison of question wording, codes, weights, sample design and expenditure/stay definitions across vintages. `UNKNOWN` remains for any field not directly confirmed from the year-specific artifacts.

Sources:
- https://know.tour.go.kr/stat/fRawDataDownloadDis19Re.do
- https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do
- https://know.tour.go.kr/stat/fCodeBookOfForeignerDis19Re.do?pageIndex=2&searchCondition=res_year&searchWord=
- https://know.tour.go.kr/stat/fUserGuideOfForeignerDis19Re.do
- https://know.tour.go.kr/stat/fReportsOfForeignerDis19Re.do?pageIndex=2&searchCondition=res_year
- https://know.tour.go.kr/stat/fResearchSumDis19Re.do
