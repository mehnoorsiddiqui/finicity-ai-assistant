
# VOIE With Statement Data

## Structure

`VOIEWithStatementData`

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
    "assetIds7",
    "assetIds8"
  ],
  "extractEarnings": true,
  "extractDeductions": true,
  "extractDirectDeposit": true
}
```

