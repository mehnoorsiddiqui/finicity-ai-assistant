
# Portfolio Consumer

## Structure

`PortfolioConsumer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity consumer ID. See also: "Create Consumer". |
| `firstName` | `string` | Required | First name(s) / given name(s) |
| `lastName` | `string` | Required | Last name(s) / surname(s) |
| `customerId` | `bigint` | Required | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `ssn` | `string` | Required | A full SSN with or without hyphens |
| `birthday` | [`Birthday`](../../doc/models/birthday.md) | Required | A birth date |
| `suffix` | `string \| undefined` | Optional | A person suffix |

## Example (as JSON)

```json
{
  "id": "0bf46322c167b562e6cbed9d40e19a4c",
  "firstName": "John",
  "lastName": "Smith",
  "customerId": 1005061234,
  "ssn": "999-99-9999",
  "birthday": {
    "year": 1989,
    "month": 8,
    "dayOfMonth": 13
  },
  "suffix": "Mr"
}
```

