
# Auditable Report

A report

## Structure

`AuditableReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity report ID |
| `customerId` | `bigint` | Required | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `consumerId` | `string \| undefined` | Optional | A Finicity consumer ID. See also: "Create Consumer". |
| `consumerSsn` | `string \| undefined` | Optional | Last 4 digits of a SSN |
| `requesterName` | `string` | Required | Name of a Finicity partner |
| `requestId` | `string` | Required | Finicity indicator to track all activity associated with this report |
| `type` | [`ReportTypeEnum`](../../doc/models/report-type-enum.md) | Required | - |
| `status` | `string` | Required | A report generation status ("inProgress", "success", "failure") |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `constraints` | [`ReportConstraintsOut`](../../doc/models/report-constraints-out.md) | Required | - |
| `customerType` | `string` | Required | The type of Finicity customer ("active" or "testing" or "" for all types) |
| `title` | `string` | Required | Title of the report |
| `startDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `endDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `days` | `number` | Required | Number of days covered by the report |
| `seasoned` | `boolean` | Required | If a report covers more than 180 days |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer |
| `consolidatedAvailableBalance` | `number` | Required | Sum of available balances for all of the accounts included in the report |
| `institutions` | [`ReportInstitution[]`](../../doc/models/report-institution.md) | Required | A list of institution records, including information about the individual accounts used in this report |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | In case errors occurred during the report generation |

## Example (as JSON)

```json
{
  "id": "u4hstnnak45g",
  "customerId": 1005061234,
  "consumerId": "0bf46322c167b562e6cbed9d40e19a4c",
  "consumerSsn": "9999",
  "requesterName": "Finicity Test API",
  "requestId": "cjqm4wtdcn",
  "type": "voi",
  "status": "inProgress",
  "createdDate": 1607450357,
  "constraints": {
    "accountIds": [
      "5011648377",
      "5011648378",
      "5011648379"
    ],
    "showNsf": false,
    "fromDate": 1607450357,
    "incomeStreamConfidenceMinimum": 50,
    "reportCustomFields": [
      {
        "label": "label6",
        "value": "value8",
        "shown": false
      },
      {
        "label": "label6",
        "value": "value8",
        "shown": false
      },
      {
        "label": "label6",
        "value": "value8",
        "shown": false
      }
    ]
  },
  "customerType": "active",
  "title": "Finicity Asset Ready Report (CRA)",
  "startDate": 1607450357,
  "endDate": 1607450357,
  "days": 230,
  "seasoned": true,
  "portfolioId": "y4zsgccj4xpw-6-port",
  "consolidatedAvailableBalance": 1929.57,
  "institutions": [
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
  ],
  "errors": [
    {
      "code": {
        "key1": "val1",
        "key2": "val2"
      },
      "status": "status8",
      "title": "title4",
      "level": "level6",
      "message": "message0",
      "user_message": "user_message6"
    }
  ]
}
```

