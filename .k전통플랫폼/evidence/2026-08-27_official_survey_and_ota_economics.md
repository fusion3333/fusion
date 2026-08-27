# L1 Evidence — 공식 조사 원자료·OTA 경제성 (2026-08-27)

## EV-0101 2025 외래관광객조사 원자료 공개
- 기관: 한국관광공사 관광데이터랩 / 한국문화관광연구원
- 공개일: 2026-06-04
- 내용: 2025년 외래관광객조사 원자료 ZIP(SAV/Excel) 및 코드북 XLSX가 공개되어 있음.
- 의미: 국가별 체류기간, 지출, 활동, 만족도, 정보원 등 Persona를 2차 요약자료가 아니라 microdata 기반으로 재계산할 수 있는 핵심 L0 소스.
- Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310809&cateCont=spt05&cbIdx=1127&pageIndex=1
- Status: VERIFIED_SOURCE / RAW_NOT_YET_INGESTED

## EV-0102 2025 잠재 방한여행객 조사
- 공개일: 2026-05-19
- 본 보고서 2권, 전체/거주국별 집계표 ZIP, 로데이터 신청 양식 제공.
- 조사규모(2025): 일반 외국인 16,360명 + 향후 3년 내 방한 의향자 16,360명.
- 조사방법: 25개국 온라인 패널 + 몽골 오프라인 면접.
- 2025년에는 거주국별 성별/연령뿐 아니라 세부지역별 표본설계를 신규 적용하고, 방한 의향자 표본에 입국통계 사후가중치를 적용.
- 의미: Needs/Wants와 구매채널, 방한 의향, 예상 여행행태를 국가별로 구조화할 수 있음.
- Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310715&cbIdx=1603
- Metadata: https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do
- Status: VERIFIED_SOURCE

## EV-0103 2025 국가별 방한관광시장 분석
- 공개일: 2026-01-26
- 한국관광통계, UN Tourism, 잠재 방한여행객 조사, 외래관광객조사, 해외한류실태조사, 국가이미지조사, 해외한식소비자조사, 외국인환자 유치실적, KOTRA 및 해외지사 동향을 결합.
- 주요 26개 시장별 종합자료 제공.
- 의미: 미국/캐나다/호주/영국/프랑스/독일/일본/중국/대만 Persona의 공식 Backbone.
- Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310156&cateCont=tlt02&cbIdx=1129&pageIndex=1
- Status: VERIFIED_SOURCE

## EV-0104 2025 관광불편신고 종합분석서
- 공개일: 2026-03-27
- 한국관광공사 관광서비스개선팀이 2025 관광불편신고 종합분석서와 인포그래픽 공개.
- 의미: Reddit/OTA 후기와 별개로 공식 complaint taxonomy를 구축할 수 있는 L1 근거.
- Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=310492&cbIdx=1129
- Status: VERIFIED_SOURCE / CONTENT_EXTRACTION_PENDING

## EV-0105 중국 FIT 숙박 구매채널
- 한국관광공사 중국지역센터 설문: 방한 예정 중국인 8,475명(개별방한비자 발급·항공권 구매 인증자), 2024-03-22~05-08.
- 숙박 구매경로는 Agoda, Qunar, Ctrip, Airbnb 4개 플랫폼에 80% 이상 집중된 것으로 공사 시장동향 자료가 요약.
- 의미: 중국 고객 acquisition/partnership은 서구권과 다른 채널전략이 필요.
- Source: https://datalab.visitkorea.or.kr/site/portal/ex/bbs/View.do?bcIdx=307479&cbIdx=1132
- Status: VERIFIED_SECONDARY_OFFICIAL

## EV-0106 GetYourGuide 공급자 경제구조
- Supplier Terms version: 2026-01-12.
- 완료된 예약마다 Retail Price의 일정 비율을 commission으로 지불하며 실제 비율은 Supplier Account에 명시되고 기밀 취급.
- 월 1회 또는 2회 payout 선택 가능.
- GetYourGuide가 별도 Service Fee를 고객에게 부과할 수 있음.
- Supplier는 플랫폼 밖 예약 유도를 금지받음.
- 의미: Experience OTA는 단순 광고가 아니라 결제·CS·중개를 commission으로 monetization하고 고객관계를 플랫폼 내부에 잠금.
- Source: https://www.getyourguide.com/c/supplier-terms-and-conditions/
- Status: VERIFIED

## EV-0107 GetYourGuide 고객 계약구조
- GetYourGuide는 Supplier의 commercial agent로 거래 체결 및 대금수취를 중개하며, Activity 자체의 제공자/organizer가 아니라는 계약구조를 명시.
- 게시/결제 가격에는 Supplier가 부담하는 플랫폼 commission이 포함됨.
- Source: https://www.getyourguide.com/c/general-terms-and-conditions
- Status: VERIFIED

## EV-0108 Booking.com 숙박 commission 구조
- 숙박업체 조건은 예약의 숙박일수 × 객실가격 × 객실수 × 계약상 commission percentage로 aggregate commission을 산정한다고 규정.
- 공개 약관에는 개별 숙소의 실제 percentage 숫자가 일률적으로 기재되지 않고 Agreement에 따름.
- Source: https://admin.booking.com/hotelreg/terms-and-conditions.html?cc1=us&lang=en
- Status: VERIFIED

## EV-0109 Viator 2026 Supplier Agreement 변경
- 2026-07-09 공개된 안내에서 2026 Supplier Agreement 개정과 함께 Public Liability Insurance를 global baseline으로 의무화한다고 안내.
- 의미: 체험 공급망 온보딩에는 상품/가격 외 보험·안전·사업자 검증 필드가 필요.
- Source: https://operatorresources.viator.com/updated-supplier-agreement-august-2026/
- Status: VERIFIED

## EV-0110 여행업 법적 경계
- 관광진흥법 시행령 [시행 2026-08-04] 제2조: 종합여행업은 국내외를 여행하는 내국인 및 외국인을 대상으로 하는 여행업.
- 외국인을 대상으로 숙박/체험/이동 등을 직접 조직·판매하는 모델은 종합여행업 규제 검토가 필요.
- Source: https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1026312553
- Status: VERIFIED; 법률자문 필요

## Evidence quality note
공식 원자료/법령은 A급, OTA 자체 약관은 해당 플랫폼의 경제구조를 확인하는 A/B급 1차자료로 취급한다. OTA의 실제 commission rate가 계정별 비공개인 경우 임의 숫자를 사업계획서에 넣지 않는다.
