
# Transactions

A list of transactions

## Structure

`Transactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | The total number of results matching search criteria |
| `displaying` | `number` | Required | The number of results returned |
| `moreAvailable` | `boolean` | Required | If `true`, you can fetch the next page of results |
| `fromDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `toDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `sort` | `string` | Required | Value of the sort request parameter that generated this response |
| `transactions` | [`Transaction[]`](../../doc/models/transaction.md) | Required | The array of transactions |

## Example (as JSON)

```json
{
  "found": 200,
  "displaying": 2,
  "moreAvailable": true,
  "fromDate": 1607450357,
  "toDate": 1607450357,
  "sort": "desc",
  "transactions": [
    {
      "id": 21284820852,
      "amount": 3678.9,
      "accountId": 5011648377,
      "customerId": 1005061234,
      "status": "active",
      "description": "MAD SCIENCE RESEARCH PR PAYMENT",
      "memo": "PPD ID 098749",
      "postedDate": 1607450357,
      "transactionDate": 1607450357,
      "effectiveDate": 1607450357,
      "firstEffectiveDate": 1607450357,
      "createdDate": 1607450357,
      "type": "atm",
      "checkNum": 1876,
      "escrowAmount": 134.01,
      "feeAmount": 25,
      "interestAmount": 256.78,
      "principalAmount": 1345.56,
      "unitQuantity": 50,
      "unitPrice": 5,
      "categorization": {
        "normalizedPayeeName": "Mad Science Research",
        "category": "ATM Fee",
        "city": "Murray",
        "state": "UT",
        "postalCode": "84123",
        "country": "USA",
        "bestRepresentation": "YOU BOUGHT DELTA AIR LINES INC DAL CASH"
      },
      "subaccountSecurityType": "Cash",
      "commissionAmount": 0,
      "ticker": "DAL",
      "investmentTransactionType": "purchased",
      "taxesAmount": 0,
      "currencySymbol": "USD"
    }
  ]
}
```

