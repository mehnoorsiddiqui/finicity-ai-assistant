
# Registered Application

## Structure

`RegisteredApplication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preAppId` | `bigint` | Required | Identifier to track the application registration from the "App Registration" and "Get App Registration Status" endpoints, represented as a number |
| `status` | `string` | Required | The status of an app registration request. "A" means approved. "P" means pending which is the status when initially submitted or when the app is modified and awaiting approval. "R" means rejected. If it is rejected there will be a note with the rejected reason. |

## Example (as JSON)

```json
{
  "preAppId": 2581,
  "status": "P"
}
```

