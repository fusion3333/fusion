# 구현 상태

## 완료
- [x] Expo + React Native + TypeScript 앱 구조
- [x] 홈 안전 대시보드
- [x] 전국 법정동코드 OpenAPI 직접 연결
- [x] 전국 지역 검색 UI
- [x] GPS → 전국 행정구역 자동 선택
- [x] 관심지역/알림 설정 영속화
- [x] 경기북부경찰청 5대범죄 odcloud OpenAPI 직접 연결
- [x] 2022~2025 경기북부 범죄 추이 provider
- [x] 2025 잠정자료 상태 표시
- [x] 공식 CSV importer + CP949 처리
- [x] 행정안전부 외국인주민 XML provider
- [x] 주민등록 총인구를 독립 provider로 분리
- [x] 기준기간 불일치 시 외국인 주민 비율 계산 차단
- [x] Express API 프록시
- [x] `.env` 자동 로딩
- [x] API timeout/cache/error handling
- [x] Push token 구독/해지 API
- [x] 보호된 지역 갱신 push endpoint
- [x] EAS build profiles
- [x] GitHub Actions typecheck/expo-doctor/script syntax 검사
- [x] 데이터 미수집과 0건 구분
- [x] 경찰서 관할과 행정구역 차이 표시

## 실데이터 최종 검증 필요
- [ ] 노출된 data.go.kr 인증키 재발급 후 `server/.env` 설정
- [ ] 주민등록 인구 API 실제 응답 샘플로 요청 파라미터/필드 최종 확정
- [ ] 외국인 주민 API 실제 XML 응답으로 총 외국인 주민 필드 최종 확정
- [ ] 전국 시도경찰청별 범죄 provider 확대
- [ ] Expo EAS projectId 연결
- [ ] iOS/Android 실제 기기 빌드 및 push 검증

## 제품 표현 제한

공식 공개 데이터의 공간·시간 해상도보다 더 세밀하게 표현하지 않는다. 경찰서 단위 통계를 특정 동네 사건으로 바꾸지 않으며, 범죄 데이터가 없는 지역은 추정하지 않는다.
