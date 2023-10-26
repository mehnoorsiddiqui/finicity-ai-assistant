
# Report Account

## Structure

`ReportAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity account ID |
| `number` | `string` | Required | The account number from the institution (all digits except the last four are obfuscated) |
| `ownerName` | `string` | Required | The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `ownerAddress` | `string` | Required | The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. |
| `name` | `string` | Required | The account name from the institution |
| `type` | `string` | Required | One of the values from Account Types |
| `currency` | `string \| undefined` | Optional | A currency code |
| `availableBalance` | `number \| undefined` | Optional | The available balance for the account |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see [Aggregation Status Codes](https://docs.finicity.com/aggregation-status-codes/)). Won't be present until you have run your first aggregation for the account. |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `balanceDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `averageMonthlyBalance` | `number` | Required | The average monthly balance of this account |
| `transactions` | [`ReportTransaction[]`](../../doc/models/report-transaction.md) | Required | An array of transactions belonging to the account |
| `asset` | [`PrequalificationReportAssetSummary`](../../doc/models/prequalification-report-asset-summary.md) | Required | - |
| `details` | [`AccountDetail`](../../doc/models/account-detail.md) | Required | - |
| `incomeStream` | [`ReportIncomeStream \| undefined`](../../doc/models/report-income-stream.md) | Optional | - |
| `incomeStreams` | [`ReportIncomeStream[] \| undefined`](../../doc/models/report-income-stream.md) | Optional | A list of income stream records |
| `totNumberInsufficientFundsFeeDebitTxAccount` | `bigint \| undefined` | Optional | The count for the total number of insufficient funds transactions, based on the `fromDate` of the report. |
| `totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount` | `bigint \| undefined` | Optional | The count for the total number of insufficient funds transactions for the last two months, based on the `fromDate` of the report. |
| `totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount` | `bigint \| undefined` | Optional | The count for the total number of insufficient funds transactions for the last six months, based on the `fromDate` of the report. |
| `totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount` | `bigint \| undefined` | Optional | The number of days since the most recent insufficient funds transaction, based on the `fromDate` of the report. |

## Example (as JSON)

```json
{
  "id": "5011648377",
  "number": "1111",
  "ownerName": "JOHN DOE",
  "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
  "name": "Checking",
  "type": "checking",
  "currency": "USD",
  "availableBalance": 501.24,
  "aggregationStatusCode": 36,
  "balance": 501.24,
  "balanceDate": 1607450357,
  "averageMonthlyBalance": 501.02,
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
  ],
  "asset": {
    "type": "checking",
    "availableBalance": 1000.0,
    "currentBalance": 1000.0,
    "twoMonthAverage": -1865.96,
    "sixMonthAverage": -7616.01,
    "beginningBalance": -17795.6
  },
  "details": {
    "interestMarginBalance": -50000.0,
    "availableCashBalance": 1500.0,
    "vestedBalance": 300000.0,
    "currentLoanBalance": 0.0,
    "availableBalanceAmount": 1000.0
  },
  "totNumberInsufficientFundsFeeDebitTxAccount": 0,
  "totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount": 0,
  "totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount": 0,
  "totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount": 120,
  "incomeStream": {
    "id": "id8",
    "name": "name8",
    "status": "ACTIVE",
    "estimateInclusion": "HIGH",
    "confidence": 34,
    "cadence": {
      "startDate": 88,
      "stopDate": 216,
      "days": 24
    },
    "netMonthly": [
      {
        "month": 166,
        "net": 110.7
      },
      {
        "month": 166,
        "net": 110.7
      }
    ],
    "netAnnual": 14.68,
    "projectedNetAnnual": 59.28,
    "estimatedGrossAnnual": 44.18,
    "projectedGrossAnnual": 240.44,
    "averageMonthlyIncomeNet": 67.98,
    "transactions": [
      {
        "id": 242,
        "amount": 157.0,
        "postedDate": 16,
        "description": "description8",
        "memo": "memo2"
      }
    ]
  },
  "incomeStreams": [
    {
      "id": "id0",
      "name": "name0",
      "status": "ACTIVE",
      "estimateInclusion": "LOW",
      "confidence": 228,
      "cadence": {
        "startDate": 88,
        "stopDate": 216,
        "days": 24
      },
      "netMonthly": [
        {
          "month": 166,
          "net": 110.7
        }
      ],
      "netAnnual": 165.1,
      "projectedNetAnnual": 46.3,
      "estimatedGrossAnnual": 194.6,
      "projectedGrossAnnual": 134.86,
      "averageMonthlyIncomeNet": 218.4,
      "transactions": [
        {
          "id": 242,
          "amount": 157.0,
          "postedDate": 16,
          "description": "description8",
          "memo": "memo2"
        },
        {
          "id": 242,
          "amount": 157.0,
          "postedDate": 16,
          "description": "description8",
          "memo": "memo2"
        }
      ]
    },
    {
      "id": "id0",
      "name": "name0",
      "status": "ACTIVE",
      "estimateInclusion": "LOW",
      "confidence": 228,
      "cadence": {
        "startDate": 88,
        "stopDate": 216,
        "days": 24
      },
      "netMonthly": [
        {
          "month": 166,
          "net": 110.7
        }
      ],
      "netAnnual": 165.1,
      "projectedNetAnnual": 46.3,
      "estimatedGrossAnnual": 194.6,
      "projectedGrossAnnual": 134.86,
      "averageMonthlyIncomeNet": 218.4,
      "transactions": [
        {
          "id": 242,
          "amount": 157.0,
          "postedDate": 16,
          "description": "description8",
          "memo": "memo2"
        },
        {
          "id": 242,
          "amount": 157.0,
          "postedDate": 16,
          "description": "description8",
          "memo": "memo2"
        }
      ]
    },
    {
      "id": "id0",
      "name": "name0",
      "status": "ACTIVE",
      "estimateInclusion": "LOW",
      "confidence": 228,
      "cadence": {
        "startDate": 88,
        "stopDate": 216,
        "days": 24
      },
      "netMonthly": [
        {
          "month": 166,
          "net": 110.7
        }
      ],
      "netAnnual": 165.1,
      "projectedNetAnnual": 46.3,
      "estimatedGrossAnnual": 194.6,
      "projectedGrossAnnual": 134.86,
      "averageMonthlyIncomeNet": 218.4,
      "transactions": [
        {
          "id": 242,
          "amount": 157.0,
          "postedDate": 16,
          "description": "description8",
          "memo": "memo2"
        },
        {
          "id": 242,
          "amount": 157.0,
          "postedDate": 16,
          "description": "description8",
          "memo": "memo2"
        }
      ]
    }
  ]
}
```

