
# Consumer Info

The SSN and date of birth of a consumer

## Structure

`ConsumerInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ssn` | `string` | Required | A full SSN without hyphens |
| `dob` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "ssn": "999999999",
  "dob": 1607450357
}
```

