
# New Consumer

A new consumer to be created

## Structure

`NewConsumer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | First name(s) / given name(s) |
| `lastName` | `string` | Required | Last name(s) / surname(s) |
| `address` | `string` | Required | A street address |
| `city` | `string` | Required | A city |
| `state` | `string` | Required | A state |
| `zip` | `string` | Required | A ZIP code |
| `phone` | `string` | Required | A phone number |
| `ssn` | `string` | Required | A full SSN with or without hyphens |
| `birthday` | [`Birthday`](../../doc/models/birthday.md) | Required | A birth date |
| `email` | `string \| undefined` | Optional | An email address |
| `suffix` | `string \| undefined` | Optional | A person suffix |

## Example (as JSON)

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "address": "434 W Ascension Way",
  "city": "Murray",
  "state": "UT",
  "zip": "84123",
  "phone": "1-800-986-3343",
  "ssn": "999-99-9999",
  "birthday": {
    "year": 1989,
    "month": 8,
    "dayOfMonth": 13
  },
  "email": "finicity@test.com",
  "suffix": "Mr"
}
```

