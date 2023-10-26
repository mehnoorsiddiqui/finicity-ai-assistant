
# Tx Verify Interview

## Structure

`TxVerifyInterview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetId` | `string` | Required | A Finicity asset ID. Generated by Connect or by using the "Store Customer Pay Statement" API. |
| `accounts` | `string[] \| undefined` | Optional | An array of Finicity account IDs to be included in the report (all accounts will be included if not set) |

## Example (as JSON)

```json
{
  "assetId": "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
  "accounts": [
    "5011648377",
    "5011648378",
    "5011648379"
  ]
}
```
