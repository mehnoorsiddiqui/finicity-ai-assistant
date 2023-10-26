
# Net Monthly

## Structure

`NetMonthly`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `net` | `number` | Required | Total income during the given month, across all income streams |

## Example (as JSON)

```json
{
  "month": 1607450357,
  "net": 2004.77
}
```

