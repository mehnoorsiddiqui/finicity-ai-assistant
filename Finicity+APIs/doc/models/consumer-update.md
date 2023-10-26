
# Consumer Update

## Structure

`ConsumerUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | First name(s) / given name(s) |
| `lastName` | `string \| undefined` | Optional | Last name(s) / surname(s) |
| `address` | `string \| undefined` | Optional | A street address |
| `city` | `string \| undefined` | Optional | A city |
| `state` | `string \| undefined` | Optional | A state |
| `zip` | `string \| undefined` | Optional | A ZIP code |
| `phone` | `string \| undefined` | Optional | A phone number |
| `ssn` | `string \| undefined` | Optional | A full SSN with or without hyphens |
| `birthday` | [`Birthday \| undefined`](../../doc/models/birthday.md) | Optional | A birth date |
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
  "email": "finicity@test.com",
  "suffix": "Mr"
}
```

