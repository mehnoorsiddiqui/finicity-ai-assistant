
# Created Customer

A new customer that was just enrolled

## Structure

`CreatedCustomer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity customer ID. See also: "Add Customer". |
| `username` | `string` | Required | The customer's username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ – + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. í, ü, etc.) |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "id": "1005061234",
  "username": "customerusername1",
  "createdDate": 1607450357
}
```

