
# Payroll Data

## Structure

`PayrollData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ssn` | `string` | Required | A full SSN without hyphens |
| `dob` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `reportId` | `string \| undefined` | Optional | A Finicity report ID |

## Example (as JSON)

```json
{
  "ssn": "999999999",
  "dob": 1607450357,
  "reportId": "u4hstnnak45g"
}
```

