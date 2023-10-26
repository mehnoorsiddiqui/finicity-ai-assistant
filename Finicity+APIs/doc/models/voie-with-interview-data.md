
# VOIE With Interview Data

## Structure

`VOIEWithInterviewData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txVerifyInterview` | [`TxVerifyInterview[]`](../../doc/models/tx-verify-interview.md) | Required | An array of 'TxVerifyInterview' objects |
| `extractEarnings` | `boolean \| undefined` | Optional | Field to indicate whether to extract the earnings on all pay statements<br>**Default**: `true` |
| `extractDeductions` | `boolean \| undefined` | Optional | Field to indicate whether to extract the deductions on all pay statements<br>**Default**: `false` |
| `extractDirectDeposit` | `boolean \| undefined` | Optional | Field to indicate whether to extract the direct deposits on all pay statements<br>**Default**: `true` |

## Example (as JSON)

```json
{
  "txVerifyInterview": [
    {
      "assetId": "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
      "accounts": [
        "5011648377",
        "5011648378",
        "5011648379"
      ]
    }
  ],
  "extractEarnings": true,
  "extractDeductions": true,
  "extractDirectDeposit": true
}
```

