
# VOIE With TX Verify Report Constraints

## Structure

`VOIEWithTXVerifyReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIds` | `string \| undefined` | Optional | A whitespace-separated list of Finicity account IDs to be included in the report (all accounts will be included if not set) |
| `voieWithInterviewData` | [`VOIEWithInterviewData`](../../doc/models/voie-with-interview-data.md) | Required | - |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.<br><br>Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.<br><br>* `true`: (default) display the custom field in the PDF report<br>* `false`: don't display the custom field in the PDF report<br><br>For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.<br><br>All custom fields display in the Reseller Billing endpoint. |
| `fromDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `incomeStreamConfidenceMinimum` | `number \| undefined` | Optional | Designate a minimum confidence level threshold to include income streams with a specified confidence level or higher. For example, designate a `incomeStreamConfidenceMinimum` of 50 to see all income streams with a confidence level of 50 or higher. |

## Example (as JSON)

```json
{
  "accountIds": "5011648377 5011648378 5011648379",
  "voieWithInterviewData": {
    "txVerifyInterview": [
      {
        "assetId": "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
        "accounts": [
          "5011648377",
          "5011648378",
          "5011648379"
        ]
      }
    ],
    "extractEarnings": true,
    "extractDeductions": true,
    "extractDirectDeposit": true
  },
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
}
```

