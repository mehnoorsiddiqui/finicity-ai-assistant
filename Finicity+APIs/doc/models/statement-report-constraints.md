
# Statement Report Constraints

## Structure

`StatementReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementReportData` | [`StatementData`](../../doc/models/statement-data.md) | Required | - |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.<br><br>Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.<br><br>* `true`: (default) display the custom field in the PDF report<br>* `false`: don't display the custom field in the PDF report<br><br>For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.<br><br>All custom fields display in the Reseller Billing endpoint. |

## Example (as JSON)

```json
{
  "statementReportData": {
    "accountId": 5011648377,
    "index": 1
  },
  "reportCustomFields": [
    {
      "label": "label6",
      "value": "value8",
      "shown": false
    }
  ]
}
```

