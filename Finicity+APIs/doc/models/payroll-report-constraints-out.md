
# Payroll Report Constraints Out

## Structure

`PayrollReportConstraintsOut`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payrollData` | [`PayrollDataOut`](../../doc/models/payroll-data-out.md) | Required | - |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.<br><br>Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.<br><br>* `true`: (default) display the custom field in the PDF report<br>* `false`: don't display the custom field in the PDF report<br><br>For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.<br><br>All custom fields display in the Reseller Billing endpoint. |
| `payStatementsFromDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "payrollData": {
    "payrollDataRetrievalId": "hahvhe2k0000",
    "employerNames": [
      "employerNames2"
    ],
    "reportId": "u4hstnnak45g"
  },
  "payStatementsFromDate": 1607450357,
  "reportCustomFields": [
    {
      "label": "label6",
      "value": "value8",
      "shown": false
    }
  ]
}
```

