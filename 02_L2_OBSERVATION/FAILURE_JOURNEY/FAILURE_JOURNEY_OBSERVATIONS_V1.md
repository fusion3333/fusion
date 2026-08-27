# FAILURE JOURNEY Observations V1

## O1 Failure is a state transition, not a complaint
A failure journey exists whenever an intended transition does not complete, whether or not the traveler complains. Complaints are only one downstream sensor.

## O2 The denominator is the scarce asset
To compute a true failure rate we need attempts at the same stage. Example: PAYMENT_DECLINED / PAY_STARTED. Complaint counts alone cannot supply that denominator.

## O3 Success can hide friction
A traveler may fail, use a workaround, then succeed. Preserve FAILED -> WORKAROUND -> SUCCESS as SUCCESS_WITH_FRICTION rather than collapsing it into success.

## O4 Substitution is economically important
When a traveler replaces one destination/product/channel after failure, lost demand may reappear elsewhere. Store the failed object, substitute object, timestamp, traveler segment and stated/observed reason separately.

## O5 Failure can be platform-, traveler- and date-specific
The same product may be sellable for one traveler/channel/date and fail for another because of language, identity, inventory, payment or policy regime.

## O6 Policy changes create natural validation windows
Changes such as nationwide foreign-card acceptance for intercity-bus ticketing create before/after windows. They do not prove causality by themselves, but they provide candidate quasi-experimental regimes for later analysis.

## O7 Mobility failure is often multi-stage
Technically available trunk transport can coexist with route discovery, transfer, last-mile, dispatch, payment or luggage failure. Destination accessibility must be evaluated end-to-end.

## O8 Latent failure is larger than reported failure
Unreported abandonment, substitution and workaround behavior are likely to exceed formal complaints in many stages. This is a hypothesis until Ground/N denominators are collected.

## O9 Opportunity relevance requires solvability and value
A frequent failure is not automatically a business opportunity. It must be joined to demand, willingness to pay, economic value, supplier capacity, competition, regulation and feasible intervention.

## O10 Failure journeys should retain uncertainty
Observed, reported, inferred and unknown failure causes must remain distinguishable. Do not assign UNKNOWN failures to a convenient taxonomy category without evidence.