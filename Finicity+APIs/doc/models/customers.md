
# Customers

A list of Finicity customers

## Structure

`Customers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | The total number of results matching search criteria |
| `displaying` | `number` | Required | The number of results returned |
| `moreAvailable` | `boolean` | Required | If `true`, you can fetch the next page of results |
| `customers` | [`Customer[]`](../../doc/models/customer.md) | Required | A list of customer records |

## Example (as JSON)

```json
{
  "found": 200,
  "displaying": 2,
  "moreAvailable": true,
  "customers": [
    {
      "id": "1005061234",
      "username": "customerusername1",
      "firstName": "John",
      "lastName": "Smith",
      "type": "active",
      "createdDate": "1607450357",
      "lastModifiedDate": "1607450357"
    }
  ]
}
```

