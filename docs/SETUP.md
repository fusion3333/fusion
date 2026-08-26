# 실행 및 배포 준비

## 요구사항
- Node.js 22+
- npm
- iOS Simulator 또는 Expo Go / Android emulator
- 공공데이터포털 인증키

## 1. 저장소

```bash
git clone https://github.com/fusion3333/fusion.git
cd fusion
git checkout feature/neighborhood-safety-implementation
```

## 2. 모바일 앱

```bash
cp .env.example .env
npm install
npm run start
```

실기기에서 테스트할 경우 `EXPO_PUBLIC_API_BASE_URL`을 Mac의 LAN 주소로 변경한다.

## 3. API 서버

```bash
cd server
npm install
DATA_GO_KR_SERVICE_KEY='발급키' \
CRIME_DATA_URL='https://.../crime-normalized.json' \
npm run dev
```

`DATA_GO_KR_SERVICE_KEY`는 앱의 `EXPO_PUBLIC_*` 환경변수로 넣지 않는다.

## 4. 범죄통계 원본

경기북부경찰청이 공개한 경찰서별 5대 범죄 파일을 공식 페이지에서 내려받아 검증 후 JSON으로 변환한다. 원본 통계의 숫자를 사람이 임의로 수정하거나 누락된 연도를 추정하지 않는다.

정규화 JSON 형식:

```json
[
  {
    "policeStation": "양주경찰서",
    "period": "2024",
    "source": "경기북부경찰청 경찰서별 5대범죄 발생 및 검거 현황",
    "rows": [
      { "category": "murder", "incidents": 0, "arrests": 0 },
      { "category": "robbery", "incidents": 0, "arrests": 0 },
      { "category": "sexual_violence", "incidents": 0, "arrests": 0 },
      { "category": "theft", "incidents": 0, "arrests": 0 },
      { "category": "violence", "incidents": 0, "arrests": 0 }
    ]
  }
]
```

위 숫자 `0`은 **스키마 예시일 뿐 실제 통계가 아니다.** 실제 파일에는 반드시 공식 원본의 수치를 입력한다.

검증:

```bash
node scripts/normalize-crime-data.mjs official-crime.json crime-normalized.json
```

## 5. MVP 완료 기준

- 앱 실행
- 관심지역 변경
- API 서버 연결
- 공식 범죄통계 표시
- 공식 외국인주민 통계 표시
- 데이터 없음/오류 상태에서 가짜 숫자를 표시하지 않음
- 알림 권한 UI
- 데이터 출처/한계 화면

## 다음 운영 단계

실제 푸시 알림은 서버의 주기 작업에서 데이터셋의 최신 기준기간을 비교한 뒤 Expo Push Service 또는 APNs/FCM으로 발송한다. 앱 자체가 백그라운드에서 공공 API를 무한 폴링하지 않는다.
