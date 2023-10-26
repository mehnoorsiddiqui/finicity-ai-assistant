
# App Statuses

The response for the "Get App Registration Status" endpoint which returns an array of status objects

## Structure

`AppStatuses`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalRecords` | `bigint` | Required | The total number of results |
| `totalPages` | `bigint` | Required | The total number of pages |
| `pageNumber` | `bigint` | Required | The current page number |
| `numberOfRecordsPerPage` | `bigint` | Required | The number of results per page |
| `applications` | [`AppStatus[]`](../../doc/models/app-status.md) | Required | A list of applications with their statuses |

## Example (as JSON)

```json
{
  "totalRecords": 50,
  "totalPages": 5,
  "pageNumber": 2,
  "numberOfRecordsPerPage": 10,
  "applications": [
    {
      "partnerId": "1234583871234",
      "preAppId": "2581",
      "note": "Approved",
      "applicationId": "123456789",
      "appName": "Awesome Budget App",
      "submittedDate": 1607450357,
      "modifiedDate": 1607450357,
      "status": "P",
      "scopes": "Account Info",
      "institutionDetails": [
        {
          "id": 86,
          "abbrvName": "abbrvName2",
          "logoUrl": "logoUrl2",
          "decryptionKeyActivated": false,
          "createdDate": 52,
          "lastModifiedDate": 110,
          "status": false
        },
        {
          "id": 86,
          "abbrvName": "abbrvName2",
          "logoUrl": "logoUrl2",
          "decryptionKeyActivated": false,
          "createdDate": 52,
          "lastModifiedDate": 110,
          "status": false
        },
        {
          "id": 86,
          "abbrvName": "abbrvName2",
          "logoUrl": "logoUrl2",
          "decryptionKeyActivated": false,
          "createdDate": 52,
          "lastModifiedDate": 110,
          "status": false
        }
      ]
    }
  ]
}
```

