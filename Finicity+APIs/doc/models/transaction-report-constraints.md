
# Transaction Report Constraints

## Structure

`TransactionReportConstraints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIds` | `string[] \| undefined` | Optional | An array of Finicity account IDs to be included in the report (all accounts will be included if not set) |
| `fromDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `toDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `includePending` | `boolean \| undefined` | Optional | If pending transactions must be included<br>**Default**: `false` |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.<br><br>Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.<br><br>* `true`: (default) display the custom field in the PDF report<br>* `false`: don't display the custom field in the PDF report<br><br>For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.<br><br>All custom fields display in the Reseller Billing endpoint. |

## Example (as JSON)

```json
{
  "accountIds": [
    "5011648377",
    "5011648378",
    "5011648379"
  ],
  "fromDate": 1607450357,
  "toDate": 1607450357,
  "includePending": true,
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

