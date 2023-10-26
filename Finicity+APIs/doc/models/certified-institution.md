
# Certified Institution

## Structure

`CertifiedInstitution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The ID of a financial institution, represented as a number |
| `rssd` | `bigint \| undefined` | Optional | The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits. |
| `name` | `string` | Required | The name of the institution |
| `transAgg` | `boolean` | Required | `true`: The institution is certified for the Transaction Aggregation product<br>`false`: The institution is decertified for the Transaction Aggregation product |
| `ach` | `boolean` | Required | `true`: The institution is certified for the ACH product<br>`false`: The institution is decertified for the ACH product |
| `stateAgg` | `boolean` | Required | `true`: The institution is certified for the Statement Aggregation product<br>`false`: The institution is decertified for the Statement Aggregation product |
| `voi` | `boolean` | Required | `true`: The institution is certified for the VOI product<br>`false`: The institution is decertified for the VOI product |
| `voa` | `boolean` | Required | `true`: The institution is certified for the VOA product<br>`false`: The institution is decertified for the VOA product |
| `aha` | `boolean` | Required | `true`: The institution is certified for the Account History Aggregation product<br>`false`: The institution is decertified for the Account History Aggregation product |
| `availBalance` | `boolean` | Required | `true`: The institution is certified for the Account Balance Check (ABC) product<br>`false`: The institution is decertified for the Account Balance Check product |
| `accountOwner` | `boolean` | Required | `true`: The institution is certified for the Account Owner product<br>`false`: The institution is decertified for the Account Owner product |
| `childInstitutions` | [`ChildInstitution[] \| undefined`](../../doc/models/child-institution.md) | Optional | An array of child financial institutions<br>**Constraints**: *Minimum Items*: `0` |

## Example (as JSON)

```json
{
  "id": 4222,
  "rssd": 490535,
  "name": "FinBank",
  "transAgg": true,
  "ach": true,
  "stateAgg": false,
  "voi": true,
  "voa": true,
  "aha": false,
  "availBalance": false,
  "accountOwner": true,
  "childInstitutions": [
    {
      "rssd": 192,
      "parentRSSD": 50,
      "name": "name0",
      "institutionId": 106
    },
    {
      "rssd": 192,
      "parentRSSD": 50,
      "name": "name0",
      "institutionId": 106
    }
  ]
}
```

