
# Created Consumer

A consumer that was just created

## Structure

`CreatedConsumer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A Finicity consumer ID. See also: "Create Consumer". |
| `createdDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `customerId` | `bigint \| undefined` | Optional | A Finicity customer ID represented as a number. See also: "Add Customer". |

## Example (as JSON)

```json
{
  "id": "0bf46322c167b562e6cbed9d40e19a4c",
  "createdDate": 1607450357,
  "customerId": 1005061234
}
```

