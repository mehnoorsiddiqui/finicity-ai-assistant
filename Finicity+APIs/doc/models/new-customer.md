
# New Customer

A new customer to be enrolled

## Structure

`NewCustomer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | The customer's username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ – + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. í, ü, etc.) |
| `firstName` | `string \| undefined` | Optional | First name(s) / given name(s) |
| `lastName` | `string \| undefined` | Optional | Last name(s) / surname(s) |
| `applicationId` | `string \| undefined` | Optional | `applicationId` value returned from the "Get App Registration Status" endpoint and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved. |

## Example (as JSON)

```json
{
  "username": "customerusername1",
  "firstName": "John",
  "lastName": "Smith",
  "applicationId": "123456789"
}
```

