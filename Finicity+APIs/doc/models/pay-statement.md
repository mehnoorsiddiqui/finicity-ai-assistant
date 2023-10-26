
# Pay Statement

A pay statement document and pay statement label

## Structure

`PayStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `label` | `string` | Required | The label to be associated with the pay statement. This label will allow the paystub to go through data extraction.<br><br>* `lastPayPeriod`: default label that should be used for the VOIE - Paystub products<br>* `lastPayPeriodMinusOne`: the second most recent pay statement<br>* `lastPayPeriodMinusTwo`: the third most recent pay statement<br>* `previousYearLastPayPeriod` Last pay statement of the previous calendar year<br>* `previousYear2LastPayPeriod`: last pay statement of the calendar year 2 years prior<br>* `earliestPayPeriod`: the earliest pay statement |
| `statement` | `string` | Required | A Base64 encoded pay statement file. Finicity supports PDF, JPG, or PNG files. |

## Example (as JSON)

```json
{
  "label": "lastPayPeriod",
  "statement": "VGhpcyBtdXN0IGJlIGFuIGltYWdl"
}
```

