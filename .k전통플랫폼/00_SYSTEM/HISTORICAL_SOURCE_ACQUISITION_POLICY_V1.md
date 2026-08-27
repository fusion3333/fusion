# Historical Tourism Source Acquisition Policy V1

기준일: 2026-08-27

## 원칙
Korea Tour Intelligence는 관광 관련 공개 원천을 발견할 때 최신 수치만 기록하지 않는다. 합법적·기술적으로 확보 가능한 원본 파일과 공개 문서를 최대한 보존하고, 시계열 데이터는 최소 10년을 기본 목표로 하며 더 오래 제공되면 전체 가용기간을 우선 확보한다.

## 확보 대상 형식
- CSV
- XLS / XLSX
- PDF
- HWP / HWPX (사용자 표현 HOP 포함: 실제 원천 확장자 확인 후 기록)
- DOC / DOCX
- JSON / XML 등 API 원응답
- WEB/HTML 공개 페이지 및 공개 대시보드의 근거·메타데이터
- ZIP 등 위 자료의 공식 배포 묶음

## 수집 우선순위
1. 원본 machine-readable 데이터: CSV > XLSX/XLS > API JSON/XML
2. 원 조사·보고서: PDF/HWP/HWPX/DOCX
3. 공식 WEB/HTML 및 대시보드
4. 공식 보도자료·기사·정책자료
5. 공개 플랫폼 데이터/리뷰는 약관과 접근정책을 준수하여 별도 Evidence로 관리

## 기간 정책
- 연도 데이터: 최소 최근 10개 완결연도 + 최신 YTD/분기
- 월 데이터: 최소 120개월
- 분기 데이터: 최소 40분기
- 10년 이상 공개: 전체 가용기간 확보 우선
- 10년 미만 공개: 최초 가용시점부터 전량 확보하고 `coverage_gap_reason` 기록
- COVID-19(2020–2022)는 제거하지 않고 구조적 충격 구간으로 명시

## 원본 보존 규칙
원본과 정제본을 분리한다.
- L0 RAW: 공식 원본 그대로
- L1 EVIDENCE: 파싱·정규화한 데이터
- 원본 파일명, 원 URL, 발행기관, 발행일, 다운로드일, 데이터 기준기간, 확장자, 라이선스, 갱신주기, 해시/버전 정보를 가능한 범위에서 기록
- 동일 문서의 PDF/HWP/XLSX 등 복수 포맷이 공식 제공되면 가능한 포맷을 함께 확보한다.

## Source Registry 추가 필드 권장
`source_id, owner, domain, geography, format, url, access_method, first_period, last_period, temporal_granularity, expected_rows, acquired, raw_path, license, refresh, last_checked, coverage_gap_reason, notes`

## 분석 목적
10년 이상 시계열은 단순 보관용이 아니다. 다음을 계산한다.
- 장기 성장률/CAGR
- 계절성
- 국가별 점유율 변화
- 지역 분산/집중 변화
- 소비 카테고리 이동
- 체류·재방문 변화
- 플랫폼/예약행동 변화
- COVID 이전/충격/회복/새 정상 비교
- 정책·환율·항공노선·K-content 이벤트와 구조적 변곡점 연결

## 예외와 제한
- 비공개·유료·개인정보·약관상 금지된 데이터는 우회 수집하지 않는다.
- 직접 파일 저장이 기술적으로 불가능한 WEB 원천은 URL, 접근일, 핵심 메타데이터, 필요한 Evidence를 보존하고 `REMOTE_ONLY`로 표시한다.
- API key/credential은 GitHub에 저장하지 않는다.

## 목표
최종 목표는 최신 관광시장 스냅샷이 아니라 `시간축을 가진 대한민국 Inbound Tourism Digital Twin`을 구축하는 것이다.
