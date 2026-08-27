# L2 Observation — MOVE / PAYMENT / REGIONAL first signal

Date: 2026-08-27
Status: OBSERVATION, not hypothesis-confirmed

## Observed signal 1 — MOVE is partially measurable at transaction level
서울교통공사 외국인 관광객 기간권 데이터는 2024년부터 역·시간대별 승하차, 2025년부터 서울교통공사 관할 밖 하차 유출 edge를 제공한다.

This improves MOVE from purely aggregated regional presence toward partial origin/destination edge measurement.

However the population is a specific foreign-tourist pass user subset, so this must not be extrapolated directly to all inbound tourists.

## Observed signal 2 — transport payment had a documented accessibility regime change
서울시는 2026-03-17 국제카드/모바일결제를 이용한 단기 Climate Card 및 1회권 구매·충전을 확대했다. 정책 설명의 목적이 외국인 방문자의 환전 필요와 구매불편 해소에 있으므로, 교통 결제 접근성이 과거 Journey friction의 실재 후보였다는 근거가 강화됐다.

Effect size remains UNKNOWN until before/after usage or complaint data are measured.

## Observed signal 3 — tourism card spend is systematically incomplete in some categories
제주관광공사 2014-2023 카드소비 보고서 설명은 OTA/전자상거래로 결제되는 숙박·항공 등 일부 거래가 카드소비 통계에서 빠질 수 있음을 명시한다.

Therefore:
`observed_card_spend != total_tourism_spend`

The bias is likely category-dependent, and therefore SPEND/MONEY FLOW normalization must preserve channel coverage.

## Observed signal 4 — official supply is only the first layer of sellable supply
서울시 관광사업체/호텔 등록 통계는 법정 공급과 객실 수를 잡을 수 있지만, foreign-language support, discoverability, live inventory, booking, foreign-card payment, supplier willingness and packageability are not contained in the registry.

Thus:
`licensed_supply != foreigner_sellable_supply`

## Observed signal 5 — regional data richness is uneven
제주는 외국인 입도, 읍면동 이동통신 방문, 장기 카드소비, 방문관광객 실태조사 등의 공개 Layer가 상대적으로 깊다. 서울은 등록공급과 교통데이터가 강하고, 다른 지역은 동등한 공개 coverage가 아직 확인되지 않았다.

This creates a `measurement coverage asymmetry` that itself must be stored as metadata; data-rich regions must not automatically appear more opportunity-rich merely because more variables are observable.

## Next validation
- ingest actual Seoul foreign-tourist transit CSV
- normalize Jeju historical report/survey variables
- compare Busan/Gyeonggi/Gyeongju equivalent source availability
- quantify OTA/e-commerce blind spot where possible
- search for international-card failure/acceptance rates and Ground Intelligence supplier payment acceptance
