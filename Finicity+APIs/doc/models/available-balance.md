
# Available Balance

## Structure

`AvailableBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `realAccountNumberLast4` | `string` | Required | The last 4 digits of the ACH account number |
| `availableBalance` | `number` | Required | The available balance of the account |
| `availableBalanceDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `clearedBalance` | `number` | Required | The cleared balance of the account. Also referred as posted balance, current balance, ledger balance |
| `clearedBalanceDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `aggregationStatusCode` | `number` | Required | The status of the most recent aggregation attempt (see [Aggregation Status Codes](https://docs.finicity.com/aggregation-status-codes/)). Won't be present until you have run your first aggregation for the account. |
| `currency` | `string` | Required | A currency code |

## Example (as JSON)

```json
{
  "id": 1005061234,
  "realAccountNumberLast4": "5678",
  "availableBalance": 173.47,
  "availableBalanceDate": 1607450357,
  "clearedBalance": 222.25,
  "clearedBalanceDate": 1607450357,
  "aggregationStatusCode": 86,
  "currency": "USD"
}
```

