
# Child Institution

## Structure

`ChildInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rssd` | `bigint` | Required | The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits. |
| `parentRSSD` | `bigint` | Required | The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits. |
| `name` | `string` | Required | The name of the institution |
| `institutionId` | `bigint` | Required | The ID of a financial institution, represented as a number |

## Example (as JSON)

```json
{
  "rssd": 490535,
  "parentRSSD": 490535,
  "name": "FinBank",
  "institutionId": 4222
}
```

