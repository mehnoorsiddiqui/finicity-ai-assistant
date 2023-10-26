
# Pay Statement Data

## Structure

`PayStatementData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetIds` | `string[]` | Required | A list of pay statement asset IDs |
| `extractEarnings` | `boolean \| undefined` | Optional | Field to indicate whether to extract the earnings on all pay statements<br>**Default**: `true` |
| `extractDeductions` | `boolean \| undefined` | Optional | Field to indicate whether to extract the deductions on all pay statements<br>**Default**: `false` |
| `extractDirectDeposit` | `boolean \| undefined` | Optional | Field to indicate whether to extract the direct deposits on all pay statements<br>**Default**: `true` |

## Example (as JSON)

```json
{
  "assetIds": [
    "assetIds1",
    "assetIds2",
    "assetIds3"
  ],
  "extractEarnings": true,
  "extractDeductions": true,
  "extractDirectDeposit": true
}
```

