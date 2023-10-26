
# Borrower

## Structure

`Borrower`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | A Finicity customer ID. See also: "Add Customer". |
| `consumerId` | `string` | Required | A Finicity consumer ID. See also: "Create Consumer". |
| `type` | [`BorrowerTypeEnum`](../../doc/models/borrower-type-enum.md) | Required | - |
| `optionalConsumerInfo` | [`ConsumerInfo \| undefined`](../../doc/models/consumer-info.md) | Optional | The SSN and date of birth of a consumer |

## Example (as JSON)

```json
{
  "customerId": "1005061234",
  "consumerId": "0bf46322c167b562e6cbed9d40e19a4c",
  "type": "primary",
  "optionalConsumerInfo": {
    "ssn": "ssn4",
    "dob": 0
  }
}
```

