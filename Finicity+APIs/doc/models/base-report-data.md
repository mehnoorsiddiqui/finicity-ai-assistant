
# Base Report Data

## Structure

`BaseReportData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A Finicity report ID |
| `portfolioId` | `string \| undefined` | Optional | A unique identifier that will be consistent across all reports created for the same customer |
| `customerType` | `string \| undefined` | Optional | The type of Finicity customer ("active" or "testing" or "" for all types) |
| `customerId` | `bigint \| undefined` | Optional | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `requestId` | `string \| undefined` | Optional | Finicity indicator to track all activity associated with this report |
| `requesterName` | `string \| undefined` | Optional | Name of a Finicity partner |
| `createdDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `title` | `string \| undefined` | Optional | Title of the report |
| `consumerId` | `string \| undefined` | Optional | A Finicity consumer ID. See also: "Create Consumer". |
| `consumerSsn` | `string \| undefined` | Optional | Last 4 digits of a SSN |
| `type` | [`ReportTypeEnum \| undefined`](../../doc/models/report-type-enum.md) | Optional | - |
| `status` | `string \| undefined` | Optional | A report generation status ("inProgress", "success", "failure") |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | In case errors occurred during the report generation |

## Example (as JSON)

```json
{
  "id": "u4hstnnak45g",
  "portfolioId": "y4zsgccj4xpw-6-port",
  "customerType": "active",
  "customerId": 1005061234,
  "requestId": "cjqm4wtdcn",
  "requesterName": "Finicity Test API",
  "createdDate": 1607450357,
  "title": "Finicity Asset Ready Report (CRA)",
  "consumerId": "0bf46322c167b562e6cbed9d40e19a4c",
  "consumerSsn": "9999",
  "type": "voi",
  "status": "inProgress"
}
```

