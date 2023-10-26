
# Report Income Stream

## Structure

`ReportIncomeStream`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Finicity's income stream ID |
| `name` | `string` | Required | A human-readable name based on the normalizedPayee name of the transactions for this income stream |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | - |
| `estimateInclusion` | [`EstimateInclusionEnum`](../../doc/models/estimate-inclusion-enum.md) | Required | Estimate Inclusion |
| `confidence` | `number` | Required | Level of confidence that the deposit stream represents income |
| `cadence` | [`CadenceDetails`](../../doc/models/cadence-details.md) | Required | - |
| `netMonthly` | [`NetMonthly[]`](../../doc/models/net-monthly.md) | Required | A list of net monthly records. One instance for each complete calendar month in the report<br>**Constraints**: *Unique Items Required* |
| `netAnnual` | `number` | Required | Sum of all values in netMonthlyIncome over the previous 12 months |
| `projectedNetAnnual` | `number` | Required | Projected net income over the next 12 months, across all income streams, based on netAnnualIncome |
| `estimatedGrossAnnual` | `number` | Required | Before-tax gross annual income (estimated from netAnnual) across all income stream in the past 12 months |
| `projectedGrossAnnual` | `number` | Required | Projected gross income over the next 12 months, across all active income streams, based on projectedNetAnnual |
| `averageMonthlyIncomeNet` | `number` | Required | Monthly average amount over the previous 24 months |
| `transactions` | [`ReportTransaction[]`](../../doc/models/report-transaction.md) | Required | A list of transaction records |

## Example (as JSON)

```json
{
  "id": "dens28i3vsch-voi1",
  "name": "none",
  "status": "ACTIVE",
  "estimateInclusion": "HIGH",
  "confidence": 85,
  "cadence": {
    "startDate": 1607450357,
    "stopDate": 1607450357,
    "days": 14
  },
  "netMonthly": [
    {
      "month": 1607450357,
      "net": 2004.77
    }
  ],
  "netAnnual": 110475.7,
  "projectedNetAnnual": 0.0,
  "estimatedGrossAnnual": 100000.0,
  "projectedGrossAnnual": 151609.0,
  "averageMonthlyIncomeNet": 9206.31,
  "transactions": [
    {
      "id": 21284820852,
      "amount": 22.21,
      "postedDate": 1607450357,
      "description": "FINICITY INC PAYROLL",
      "memo": "Finicity amount credit",
      "normalizedPayee": "Finicity",
      "institutionTransactionId": "100000000",
      "category": "ATM Fee",
      "type": "atm",
      "bestRepresentation": "FINICITY INC PAYROLL",
      "securityType": "Cash",
      "symbol": "JPM",
      "commission": 0
    }
  ]
}
```

