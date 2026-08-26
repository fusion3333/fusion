# 외부 권한 때문에 남은 작업

2026-08-27 기준, 코드/공개자료 조사로 처리 가능한 범위는 구현했다. 아래는 사용자 계정·비밀키·실기기 서명이 없으면 완료할 수 없다.

## 1. 공공데이터포털 활용신청 및 서비스키

필요 API:
- 행정안전부 지방자치단체 외국인주민 현황
- 행정안전부 행정동별(통반단위) 주민등록 인구 및 세대현황 (공공데이터포털 15108065)
- 필요 시 공공데이터포털이 자동변환한 경기북부경찰청 파일 OpenAPI

서비스키는 GitHub에 커밋하지 않고 배포 서버 secret `DATA_GO_KR_SERVICE_KEY`에만 저장한다.

## 2. 공식 경찰 CSV 실제 파일 확보

공식 페이지: https://www.data.go.kr/data/15086083/fileData.do
파일은 로그인 없이 다운로드 가능하다. 최신 파일은 2016~2025, 150행, 13개 경찰서이며 2025는 2026년 10월 확정 예정인 잠정자료다.

다운로드 후:
`node scripts/import-gyeonggi-north-crime.mjs official.csv crime-normalized.json`

## 3. Expo 계정

`npx eas init`으로 Expo 프로젝트를 생성/연결하고 발급된 projectId를 app.json의 extra.eas.projectId에 설정한다. Expo 로그인 권한이 필요하다.

## 4. 앱 서명/스토어

- iOS: Apple Developer 계정 및 인증서/프로비저닝
- Android: Google Play Console 계정 및 signing credential
- EAS production build 및 실제 제출

## 5. Mac/실기기 최종 검증

로컬에서 다음을 통과시킨다.
- npm install
- npm run doctor
- npm run typecheck
- cd server && npm install && npm run typecheck
- iOS Simulator / 실제 iPhone
- Android emulator / 실제 Android
- 실제 위치 권한
- 실제 push token 수신

이 파일에 API 키, Apple/Google 비밀번호, 인증서 개인키를 기록하지 않는다.
