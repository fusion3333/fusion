# 실데이터 실행 절차

이 프로젝트는 비밀키를 GitHub에 저장하지 않는다. 공공데이터포털에서 발급받은 인증키는 사용자 Mac 또는 배포 서버의 환경변수에만 둔다.

## 1. 최신 코드

```bash
git checkout feature/neighborhood-safety-implementation
git pull
```

## 2. 앱 환경변수

저장소 루트에 `.env` 생성:

```env
EXPO_PUBLIC_API_BASE_URL=http://localhost:8787
```

## 3. 서버 환경변수

`server/.env` 생성:

```env
DATA_GO_KR_SERVICE_KEY=여기에_재발급받은_인증키
CORS_ORIGIN=http://localhost:8081,http://localhost:19006
INTERNAL_JOB_TOKEN=충분히_긴_랜덤문자열
SUBSCRIPTIONS_FILE=./data/subscriptions.json
```

인증키는 채팅, GitHub issue, commit, screenshot에 공유하지 않는다.

## 4. 서버 실행

```bash
cd server
npm install
npm run dev
```

성공 확인:

```bash
curl http://localhost:8787/health
```

## 5. 전국 지역 API 확인

```bash
curl 'http://localhost:8787/api/regions?q=양주시'
```

행정안전부 법정동코드 API가 정상 연결되면 `경기도 양주시` 등 검색 결과가 반환된다.

## 6. 경기북부 실제 범죄 API 확인

```bash
curl 'http://localhost:8787/api/safety?regionCode=4163000000'
```

`CRIME_DATA_URL`이 비어 있으면 서버가 공공데이터포털에서 승인된 경기북부경찰청 odcloud API를 직접 호출한다. 2025 자료는 잠정값으로 표시한다.

## 7. 앱 실행

다른 터미널에서 저장소 루트로 이동:

```bash
npm install
npm run start -- --clear
```

웹은 `w`, iOS Simulator는 `i`를 누른다.

## 현재 연결 수준

- 전국 법정동코드: 실 API 직접 연결
- 경기북부 5대범죄: 실 odcloud API 직접 연결
- 외국인주민: 행안부 XML API 직접 연결 코드 존재, 실제 응답 필드 검증 필요
- 주민등록 총인구: 정확한 행정동/법정동 코드 대응과 응답 필드 검증이 필요하므로 검증된 스냅샷 provider 유지
- 전국 범죄: 각 시도경찰청이 서로 다른 데이터셋으로 공개하고 있어 단일 전국 경찰서 API가 확인되지 않음. 지역별 provider 확장이 필요

## 보안

이미 외부에 노출된 인증키는 재발급 후 폐기하고 새 키를 `server/.env`에만 저장한다.
