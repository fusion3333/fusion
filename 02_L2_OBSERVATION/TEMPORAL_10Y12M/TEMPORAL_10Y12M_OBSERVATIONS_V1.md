# TEMPORAL 10Y x 12M Observations V1

## T1 The project needs a ragged panel, not a fake rectangular panel
Official arrivals can span the decade monthly, while telecom/card/search/payment/platform variables start later or change methodology. Missing historical sensors must remain explicit missingness.

## T2 Seasonality is origin x motive x activity x region specific
A national monthly seasonal index is insufficient. Build seasonal signatures only at grains supported by denominator volume and source precision.

## T3 Four seasons are labels, not the model
Store month as the primary temporal grain. Season is a derived feature. Also store origin-country holiday calendars, Korean holidays, school breaks, lunar calendars and event windows where material.

## T4 Structural breaks must not be averaged away
MERS, geopolitical restrictions, COVID, reopening, visa changes, route restoration and major payment/platform changes can alter the data-generating process. Models require regime flags and break tests.

## T5 Lead-lag is central to the neural-network concept
Candidate sequence examples: media/search signal -> booking -> arrival -> regional movement -> activity -> spend -> review/recommendation -> repeat. Estimate lag distributions empirically later; do not hard-code them now.

## T6 Sensor disagreement is information
Survey, telecom, card, navigation, search and platform sensors measure different populations and behaviors. Divergence can signal denominator change, channel shift or real behavioral change.

## T7 Calendar alignment is a first-class problem
Origin-country holidays and lunar calendars can shift across Gregorian months. Month-on-month comparisons without calendar features can manufacture false anomalies.

## T8 Revisions and methodology changes require vintages
A historical value downloaded today may differ from the value available at decision time. Forecast backtests need publication/revision vintages to avoid look-ahead leakage.

## T9 Competitive destination panels must share comparable definitions
Korea vs Japan/Taiwan/Thailand comparisons require harmonized visitor definitions, residency/nationality rules, transit treatment and month of arrival before modeling substitution.

## T10 Temporal opportunity is persistence plus change, not one spike
A candidate opportunity should later distinguish persistent gap, seasonal recurring gap, emerging trend, event-only spike and structural break. One-month anomalies are not opportunities by themselves.