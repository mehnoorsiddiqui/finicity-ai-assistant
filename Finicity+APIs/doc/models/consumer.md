
# Consumer

A finicity consumer record

## Structure

`Consumer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity consumer ID. See also: "Create Consumer". |
| `firstName` | `string` | Required | First name(s) / given name(s) |
| `lastName` | `string` | Required | Last name(s) / surname(s) |
| `customerId` | `bigint` | Required | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `address` | `string` | Required | A street address |
| `city` | `string` | Required | A city |
| `state` | `string` | Required | A state |
| `zip` | `string` | Required | A ZIP code |
| `phone` | `string` | Required | A phone number |
| `ssn` | `string` | Required | Last 4 digits of a SSN |
| `birthday` | [`Birthday`](../../doc/models/birthday.md) | Required | A birth date |
| `email` | `string` | Required | An email address |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `suffix` | `string \| undefined` | Optional | A person suffix |

## Example (as JSON)

```json
{
  "id": "0bf46322c167b562e6cbed9d40e19a4c",
  "firstName": "John",
  "lastName": "Smith",
  "customerId": 1005061234,
  "address": "434 W Ascension Way",
  "city": "Murray",
  "state": "UT",
  "zip": "84123",
  "phone": "1-800-986-3343",
  "ssn": "9999",
  "birthday": {
    "year": 1989,
    "month": 8,
    "dayOfMonth": 13
  },
  "email": "finicity@test.com",
  "createdDate": 1607450357,
  "suffix": "Mr"
}
```

