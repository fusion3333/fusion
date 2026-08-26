# 우리동네 안전알림 — MVP 제품 명세

## 1. 목표

사용자가 현재 위치 또는 관심 지역을 선택하면 공식 공공데이터를 바탕으로 지역 치안 통계와 인구 지표를 이해하기 쉽게 보여준다.

## 2. 사용자 경험

### 홈
- 현재/관심 지역
- 최근 공개 데이터 기준일
- 5대 범죄 요약
- 전년/이전 기간 대비 증감
- 데이터가 새로 갱신됐을 때 알림

### 범죄 통계
- 살인
- 강도
- 성범죄(공개 데이터의 공식 분류명 병기)
- 절도
- 폭력
- 기간별 추이
- 인구 10만 명당 발생률(인구 데이터 확보 시)

### 지역 정보
- 총 주민 수
- 외국인 주민 수
- 외국인 주민 비율
- 연령/성별 등 추가 공개 지표(후속)

범죄 지표와 외국인 주민 지표는 별도의 카드/섹션으로 표시하며 상관관계 또는 인과관계를 암시하는 위험점수 계산에 결합하지 않는다.

## 3. 알림 정책

### MVP
공식 데이터셋의 새로운 기준월/분기/연도가 게시되거나 사용자의 관심 지역 통계가 변경되면 알림한다.

### 향후
사건 단위의 공식 실시간 공개 API가 확보되는 경우에만 실시간 사건 알림을 추가한다. 뉴스 크롤링이나 확인되지 않은 SNS 게시물을 범죄 발생 사실로 푸시하지 않는다.

## 4. 데이터 계층

```text
Public APIs
   ↓
Provider adapters
   ↓
Normalizer
   ↓
Safety API / cache
   ↓
Mobile app
```

공공데이터 인증키는 모바일 앱에 직접 포함하지 않는다.

## 5. 표준 데이터 모델

```ts
export type CrimeCategory =
  | 'murder'
  | 'robbery'
  | 'sexual_violence'
  | 'theft'
  | 'violence';

export interface CrimeStat {
  regionCode: string;
  regionName: string;
  policeStation?: string;
  period: string;
  category: CrimeCategory;
  incidents: number;
  arrests?: number;
  source: string;
  sourceUpdatedAt?: string;
}

export interface PopulationStat {
  regionCode: string;
  regionName: string;
  period: string;
  totalPopulation: number;
  foreignResidents: number;
  foreignResidentRatio: number;
  source: string;
}
```

## 6. 데이터 품질 표시

모든 화면에 다음을 노출한다.
- 출처 기관
- 통계 기준 기간
- 최종 갱신 시점
- 공간 단위(시군구/경찰서/읍면동 등)
- 확정/잠정 통계 여부

## 7. 개인정보

- 정확한 GPS 위치는 기본적으로 서버에 장기 저장하지 않는다.
- 관심지역은 행정구역 코드 중심으로 저장한다.
- 사용자의 이동경로를 생성하지 않는다.

## 8. 1차 개발 순서

1. Expo 앱 골격
2. 행정구역 선택/위치 → 행정구역 변환
3. 경찰 공개통계 provider
4. 인구/외국인 주민 provider
5. 홈 대시보드
6. 데이터 갱신 감지
7. 푸시 알림
8. 지도 시각화
