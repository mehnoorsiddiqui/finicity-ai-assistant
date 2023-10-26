
# Created Test Tx Push Transaction

Response for TxPush test transaction

## Structure

`CreatedTestTxPushTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | A Finicity transaction ID |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "id": 21284820852,
  "createdDate": 1607450357
}
```

