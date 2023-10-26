
# Report Institution

## Structure

`ReportInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The ID of a financial institution, represented as a number |
| `name` | `string` | Required | The name of the institution |
| `urlHomeApp` | `string` | Required | The URL of the institution's primary home page |
| `accounts` | [`ReportAccount[]`](../../doc/models/report-account.md) | Required | An array of accounts |

## Example (as JSON)

```json
{
  "id": 4222,
  "name": "FinBank",
  "urlHomeApp": "https://finbank.prod.fini.city/CCBankImageMFA/login.jsp",
  "accounts": [
    {
      "id": "5011648377",
      "number": "1111",
      "ownerName": "JOHN DOE",
      "ownerAddress": "924 GAINSVILLE HIGHWAY SUITE 130 BUFORD, GA 30518",
      "name": "Checking",
      "type": "checking",
      "currency": "USD",
      "availableBalance": 501.24,
      "aggregationStatusCode": 146,
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
        }
      ]
    }
  ]
}
```

