# 2012 외래관광객 실태조사 월별 published case count 관찰

## Evidence boundary

- Source: 문화체육관광부·한국문화관광연구원 공식 `2012년 외래관광객 실태조사`, 한국관광 데이터랩 배포 PDF.
- Evidence location: `표 3-42 월별 동반자 유무`, p.106.
- This observation records only the **published monthly 사례수/base counts** printed in the official report.
- It does **not** assert that these are a respondent raw-file row-count audit, nor that the counts are unweighted/weighted beyond what the table itself states.
- The official download endpoint currently returns `application/octet-stream` to the web renderer, so page screenshot verification could not be completed in this run. The official search index exposed the table text and page marker directly. This acquisition limitation is preserved rather than bypassed by an adjacent-year inference.

## Verified published monthly counts

| Month | Published 사례수 |
|---|---:|
| 2012-01 | 797 |
| 2012-02 | 873 |
| 2012-03 | 1,015 |
| 2012-04 | 1,058 |
| 2012-05 | 1,005 |
| 2012-06 | 1,020 |
| 2012-07 | 1,105 |
| 2012-08 | 1,201 |
| 2012-09 | 1,050 |
| 2012-10 | 1,090 |
| 2012-11 | 908 |
| 2012-12 | 899 |
| **Sum / published overall** | **12,021** |

The 12 monthly published counts sum exactly to **12,021**, matching the overall 사례수 printed in the same table and the already-registered 2012 valid-sample metadata. This resolves the prior blocker for **published monthly case-count coverage**.

## What remains UNKNOWN / MISSING

- `UNKNOWN`: respondent-level month variable name/code and raw domain.
- `UNKNOWN`: whether each monthly published 사례수 is explicitly an unweighted base, weighted base, or another report-table base convention; do not infer.
- `MISSING`: respondent raw-file ingestion, row-count validation, and checksum needed to prove 1:1 equivalence with published monthly counts.
- `UNKNOWN`: site × month counts and site-specific monthly allocation/realized sample.
- `UNKNOWN`: exact weighting variable/formula/calibration cells beyond previously registered 2012 metadata.
- `UNKNOWN`: codebook/questionnaire/raw-data attachment-level license. The separately registered official MCST landing-page evidence establishes KOGL Type 4 for the 2012 report attachment, but that license must not be propagated mechanically to other artifacts.

## Harmonization restriction

Do not use these monthly counts to infer field schemas, weighting mechanics, seasonal population estimates, or adjacent-year equivalence. This is a narrow L2 observation supported only by same-year published report evidence.
