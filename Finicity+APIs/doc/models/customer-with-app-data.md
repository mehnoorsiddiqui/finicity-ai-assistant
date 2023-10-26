
# Customer With App Data

A finicity customer record with application info

## Structure

`CustomerWithAppData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity customer ID. See also: "Add Customer". |
| `username` | `string` | Required | The customer's username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ – + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. í, ü, etc.) |
| `firstName` | `string` | Required | First name(s) / given name(s) |
| `lastName` | `string` | Required | Last name(s) / surname(s) |
| `type` | `string` | Required | The type of Finicity customer ("active" or "testing" or "" for all types) |
| `createdDate` | `string` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `lastModifiedDate` | `string \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `applicationId` | `string` | Required | `applicationId` value returned from the "Get App Registration Status" endpoint and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved. |
| `applicationName` | `string` | Required | The name of the application assigned to the customer |

## Example (as JSON)

```json
{
  "id": "1005061234",
  "username": "customerusername1",
  "firstName": "John",
  "lastName": "Smith",
  "type": "active",
  "createdDate": "1607450357",
  "lastModifiedDate": "1607450357",
  "applicationId": "123456789",
  "applicationName": "Awesome Budget App"
}
```

