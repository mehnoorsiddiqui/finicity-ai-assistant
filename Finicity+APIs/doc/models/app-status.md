
# App Status

Registration status details for the application

## Structure

`AppStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string` | Required | Your Partner ID displayed in the [Developer Dashboard](https://developer.finicity.com/admin) |
| `preAppId` | `string` | Required | Identifier to track the application registration from the "App Registration" and "Get App Registration Status" endpoints |
| `note` | `string \| undefined` | Optional | A note on the registration. Typically used to indicate reasons for rejected apps. |
| `applicationId` | `string \| undefined` | Optional | `applicationId` value returned from the "Get App Registration Status" endpoint and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved. |
| `appName` | `string` | Required | The name of the application assigned to the customer |
| `submittedDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `modifiedDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `status` | `string` | Required | The status of an app registration request. "A" means approved. "P" means pending which is the status when initially submitted or when the app is modified and awaiting approval. "R" means rejected. If it is rejected there will be a note with the rejected reason. |
| `scopes` | `string \| undefined` | Optional | Indicates scopes of data accessible to the app |
| `institutionDetails` | [`AppFinancialInstitutionStatus[] \| undefined`](../../doc/models/app-financial-institution-status.md) | Optional | A list of the registration status for each FI for the application |

## Example (as JSON)

```json
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
```

