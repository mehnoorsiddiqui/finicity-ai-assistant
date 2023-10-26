
# Report Summaries

## Structure

`ReportSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reports` | [`ReportSummary[]`](../../doc/models/report-summary.md) | Required | Data pertaining to each report |

## Example (as JSON)

```json
{
  "reports": [
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
  ]
}
```

