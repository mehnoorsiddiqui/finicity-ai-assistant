
# Test Tx Push Transaction

A fake transaction for TxPush testing

## Structure

`TestTxPushTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | The amount of the transaction |
| `description` | `string` | Required | The description of the transaction |
| `status` | `string \| undefined` | Optional | active or pending (optional)<br>**Default**: `'active'` |
| `postedDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `transactionDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "amount": -4.25,
  "description": "a testing transaction description",
  "status": "pending",
  "postedDate": 1607450357,
  "transactionDate": 1607450357
}
```

