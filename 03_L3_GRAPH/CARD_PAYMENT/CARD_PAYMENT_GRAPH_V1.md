# CARD & PAYMENT — L3 GRAPH V1

## Core nodes
Traveler/PaymentUser; OriginMarket; Issuer; IssuingMarket; PaymentInstrument; CardNetwork; Wallet; Acquirer; PSP; Merchant; Supplier; Product; MerchantCategory; Destination; Region; Transaction; Refund; Fee; FXRate; EvidenceSource.

## Core edges
PaymentUser --USES--> PaymentInstrument
PaymentInstrument --ISSUED_BY--> Issuer
Issuer --LOCATED_IN--> IssuingMarket
PaymentInstrument --ROUTED_BY--> CardNetwork
Merchant --ACQUIRED_BY--> Acquirer
Merchant --USES--> PSP
Merchant --SELLS--> Product
Product --PROVIDED_BY--> Supplier
Merchant --CLASSIFIED_AS--> MerchantCategory
Transaction --PAYS--> Merchant
Transaction --FOR--> Product
Transaction --OBSERVED_IN--> Destination/Region
Transaction --DENOMINATED_IN--> Currency
Transaction --HAS_FX--> FXRate
Transaction --INCURS--> Fee
Refund --REVERSES_PART_OF--> Transaction
EvidenceSource --OBSERVES--> Transaction/Aggregate

## Observable state chain
PAYMENT_PATH_UNKNOWN
-> PAYMENT_METHOD_IDENTIFIED
-> FOREIGN_ACCEPTANCE_OBSERVED
-> PRICE_VISIBLE
-> PAYMENT_ATTEMPT_OBSERVED
-> AUTHORIZATION_OBSERVED
-> SETTLEMENT_PENDING
-> SETTLED
-> REFUND_OR_CHARGEBACK_OBSERVED

Public aggregate datasets normally observe only aggregates over parts of this chain. They must never be promoted to merchant-level transaction truth.

## Core analytical joins
WHO/ORIGIN -> issuing-market payment propensity
WHEN -> monthly/quarterly spend seasonality
DESTINATION/REGION -> geographic yield
SUPPLY -> merchant/supplier/category
REAL_SELLABLE_SUPPLY -> foreign payment acceptance and checkout friction
FX/EVENT_LEDGER -> nominal-vs-real and shock controls
SPEND/MONEY_FLOW -> transaction value, ticket size, fees and supplier yield
PAIN/VOC -> declined card, cash-only, QR/app/account friction hypotheses

## Candidate metrics
ObservedCrossBorderSpend = sum(transaction_value within explicit source universe)
ObservedTransactions = sum(transaction_count within explicit source universe)
AverageTicket = ObservedCrossBorderSpend / ObservedTransactions
CardPresentShare = card_present_value / observed_value where channel is reported
OnlineShare = online_value / observed_value where channel is reported
RegionalSpendShare = region_value / source_universe_total
CategorySpendShare = category_value / source_universe_total
InternationalAcceptanceCost = merchant_fee_pct where official fee statistics exist

## Denominator rule
Every metric name or metadata must identify the source universe. Never label a network/processor aggregate simply `TotalTourismSpend`.

## Prohibited shortcuts
ISSUER_COUNTRY --IMPLIES--> NATIONALITY
FOREIGN_CARD --IMPLIES--> TOURIST
TRANSACTION --IMPLIES--> PERSON
MERCHANT_COUNTRY --IMPLIES--> PHYSICAL_TRAVEL
OVERSEAS_SPEND --IMPLIES--> TOURISM
CARD_SPEND --IMPLIES--> TOTAL_SPEND
AUTHORIZED --IMPLIES--> NET_REVENUE
SOCIAL_PAYMENT_COMPLAINT --IMPLIES--> FAILURE_RATE
