
# Consumer Attributes Data NSF

## Structure

`ConsumerAttributesDataNSF`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyNSFOccurrences` | `unknown` | Required | The number of non-sufficient funds occurrences per calendar month. |
| `monthlyLateFeeOccurrences` | `number` | Required | The number of late fee occurrences. |

## Example (as JSON)

```json
{
  "monthlyNSFOccurrences": {
    "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
    "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1
  },
  "monthlyLateFeeOccurrences": 35
}
```

