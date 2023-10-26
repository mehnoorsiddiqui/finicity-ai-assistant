
# Statement Report Data

## Structure

`StatementReportData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity report ID |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer |
| `customerType` | `string` | Required | The type of Finicity customer ("active" or "testing" or "" for all types) |
| `customerId` | `bigint` | Required | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `requestId` | `string` | Required | Finicity indicator to track all activity associated with this report |
| `requesterName` | `string` | Required | Name of a Finicity partner |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `title` | `string` | Required | Title of the report |
| `consumerId` | `string` | Required | A Finicity consumer ID. See also: "Create Consumer". |
| `consumerSsn` | `string` | Required | Last 4 digits of a SSN |
| `type` | [`ReportTypeEnum`](../../doc/models/report-type-enum.md) | Required | - |
| `status` | `string` | Required | A report generation status ("inProgress", "success", "failure") |
| `errors` | [`ErrorMessage[] \| undefined`](../../doc/models/error-message.md) | Optional | In case errors occurred during the report generation |
| `constraints` | [`StatementReportConstraints \| undefined`](../../doc/models/statement-report-constraints.md) | Optional | - |

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
  "status": "inProgress",
  "errors": [
    {
      "code": {
        "key1": "val1",
        "key2": "val2"
      },
      "status": "status8",
      "title": "title4",
      "level": "level6",
      "message": "message0",
      "user_message": "user_message6"
    },
    {
      "code": {
        "key1": "val1",
        "key2": "val2"
      },
      "status": "status8",
      "title": "title4",
      "level": "level6",
      "message": "message0",
      "user_message": "user_message6"
    },
    {
      "code": {
        "key1": "val1",
        "key2": "val2"
      },
      "status": "status8",
      "title": "title4",
      "level": "level6",
      "message": "message0",
      "user_message": "user_message6"
    }
  ],
  "constraints": {
    "statementReportData": {
      "accountId": 196,
      "index": 132
    },
    "reportCustomFields": [
      {
        "label": "label6",
        "value": "value8",
        "shown": false
      },
      {
        "label": "label6",
        "value": "value8",
        "shown": false
      },
      {
        "label": "label6",
        "value": "value8",
        "shown": false
      }
    ]
  }
}
```

