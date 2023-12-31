
# Error Message

## Structure

`ErrorMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `unknown` | Required | An error code (can be returned as a number or a string) |
| `status` | `string \| undefined` | Optional | A status code |
| `title` | `string \| undefined` | Optional | A title for the error |
| `level` | `string \| undefined` | Optional | An error level |
| `message` | `string \| undefined` | Optional | An error message |
| `userMessage` | `string \| undefined` | Optional | Some more details about the error |
| `assetId` | `string \| undefined` | Optional | A Finicity asset ID. Generated by Connect or by using the "Store Customer Pay Statement" API. |
| `accountId` | `string \| undefined` | Optional | A Finicity account ID |

## Example (as JSON)

```json
{
  "code": {
    "key1": "val1",
    "key2": "val2"
  },
  "status": "401",
  "title": "Connecting accounts error",
  "level": "error",
  "message": "Invalid authorization credentials",
  "user_message": "The session has expired or is invalid",
  "assetId": "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
  "accountId": "5011648377"
}
```

