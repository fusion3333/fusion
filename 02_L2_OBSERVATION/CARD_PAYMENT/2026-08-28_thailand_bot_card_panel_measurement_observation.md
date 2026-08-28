# Thailand BOT card-panel measurement observation

Date: 2026-08-28
Evidence class: official central-bank statistics and official table metadata

## Verified evidence

Bank of Thailand table PS_PT_016 (`Foreign payment cards and e-money spent in Thailand`) is publicly available from 2016-01 through 2026-05 in the currently verified release. BOT metadata states that the statistics are compiled from banks, specialized financial institutions and non-banks reporting under the Payment Systems Act B.E. 2560 (2017). Transaction volume is reported in thousand transactions and value in million baht. The table separates cash withdrawal, cash advance, credit-card EFTPOS, credit-card online transactions acquired by Thai acquirers, debit-card EFTPOS, debit-card online transactions acquired by Thai acquirers, and foreign e-money point-of-sale activity. BOT states that revisions are made when updated data become available.

Bank of Thailand table PS_PT_017 (`Thai payment cards spent abroad`) is also publicly available from 2016-01 through 2026-05. It separates Thai credit/debit card point-of-sale transactions abroad from online transactions acquired by foreign acquirers, and separately reports cash withdrawal and cash advance. Values are million baht and volumes are thousand transactions.

## Measurement implications supported by the source

1. `foreign_card_spend_in_thailand` must not be interpreted as `foreign_tourist_spend`. PS_PT_016 includes online transactions acquired in Thailand and cash-related transactions, and does not provide a tourist-status denominator.
2. For closer-to-physical-presence measurement, EFTPOS/POS components are a more defensible sensor than online components, but they still do not prove tourism purpose.
3. `thai_card_spend_abroad` must not be interpreted as outbound tourism expenditure because PS_PT_017 explicitly includes online purchases acquired by foreign acquirers.
4. The two BOT series are useful as a symmetric payment-system sensor because both preserve channel decomposition, but they are not a destination-country travel cube.
5. Because BOT explicitly revises values when updated source data become available, any bulk ingest must retain retrieval date and revision/vintage information rather than silently replacing historical values.

## Concrete blocker

The public tables provide a long monthly series, but this evidence pass did not yet preserve every 2016-01~2026-05 row as immutable raw data in the repository. A destination-country field is not present in the confirmed PS_PT_016/017 schema. Bulk-row ingestion therefore remains pending and destination-level tourism inference remains unsupported.

## Provenance

- PS_PT_016 table: https://app.bot.or.th/BTWS_STAT/statistics/ReportPage.aspx?language=eng&reportID=892
- PS_PT_016 official metadata: https://app.bot.or.th/BTWS_STAT/statistics/DownloadFile.aspx?file=PS_PT_016_ENG.PDF
- PS_PT_017 table: https://app.bot.or.th/BTWS_STAT/statistics/BOTWEBSTAT.aspx?language=eng&reportID=893
- PS_PT_017 official metadata: https://app.bot.or.th/BTWS_STAT/statistics/DownloadFile.aspx?file=PS_PT_017_TH.PDF
