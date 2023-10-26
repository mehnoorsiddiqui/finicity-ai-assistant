
# App Financial Institution Status

The registration status fields for each specific OAuth financial institution

## Structure

`AppFinancialInstitutionStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The ID of a financial institution, represented as a number |
| `abbrvName` | `string \| undefined` | Optional | The application's abbreviated name |
| `logoUrl` | `string \| undefined` | Optional | An URL to a logo file |
| `decryptionKeyActivated` | `boolean` | Required | Status of decryption keys for financial institution app registration |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `lastModifiedDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `status` | `boolean` | Required | `false` indicates registration is still pending |

## Example (as JSON)

```json
{
  "id": 4222,
  "abbrvName": "VAEJ",
  "logoUrl": "https://prod-direct-integration-client.s3.us-west-2.amazonaws.com/976521f99-7b36-4b3b-a3e0-faff9545836d/102224/90x90.png",
  "decryptionKeyActivated": false,
  "createdDate": 1607450357,
  "lastModifiedDate": 1607450357,
  "status": true
}
```

