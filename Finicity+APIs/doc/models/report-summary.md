
# Report Summary

## Structure

`ReportSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity report ID |
| `consumerId` | `string` | Required | A Finicity consumer ID. See also: "Create Consumer". |
| `consumerSsn` | `string` | Required | Last 4 digits of a SSN |
| `requesterName` | `string` | Required | Name of a Finicity partner |
| `requestId` | `string` | Required | Finicity indicator to track all activity associated with this report |
| `constraints` | [`ReportConstraintsOut`](../../doc/models/report-constraints-out.md) | Required | - |
| `type` | [`ReportTypeEnum`](../../doc/models/report-type-enum.md) | Required | - |
| `status` | `string` | Required | A report generation status ("inProgress", "success", "failure") |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "id": "u4hstnnak45g",
  "consumerId": "0bf46322c167b562e6cbed9d40e19a4c",
  "consumerSsn": "9999",
  "requesterName": "Finicity Test API",
  "requestId": "cjqm4wtdcn",
  "constraints": {
    "accountIds": [
      "5011648377",
      "5011648378",
      "5011648379"
    ],
    "showNsf": false,
    "fromDate": 1607450357,
    "incomeStreamConfidenceMinimum": 50,
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
  },
  "type": "voi",
  "status": "inProgress",
  "createdDate": 1607450357
}
```

