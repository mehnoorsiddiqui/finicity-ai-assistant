
# Certified Institutions

A list of Finicity financial institutions from the "Get Certified Institutions" API

## Structure

`CertifiedInstitutions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | The total number of results matching search criteria |
| `displaying` | `number` | Required | The number of results returned |
| `moreAvailable` | `boolean` | Required | If `true`, you can fetch the next page of results |
| `requestedDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `institutions` | [`CertifiedInstitution[]`](../../doc/models/certified-institution.md) | Required | A list of institutions<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1000` |

## Example (as JSON)

```json
{
  "found": 200,
  "displaying": 2,
  "moreAvailable": true,
  "requestedDate": 1607450357,
  "institutions": [
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
  ]
}
```

