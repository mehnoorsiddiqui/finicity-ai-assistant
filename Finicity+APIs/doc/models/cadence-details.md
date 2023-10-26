
# Cadence Details

## Structure

`CadenceDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `stopDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `days` | `number \| undefined` | Optional | Number of days between the recurring deposits |

## Example (as JSON)

```json
{
  "startDate": 1607450357,
  "stopDate": 1607450357,
  "days": 14
}
```

