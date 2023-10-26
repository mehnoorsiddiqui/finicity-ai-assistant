
# Payroll Data Out

## Structure

`PayrollDataOut`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payrollDataRetrievalId` | `string` | Required | An id to identify the data retrieved from the payroll providers for the report. |
| `employerNames` | `string[]` | Required | An array of employer names that the consumer submitted after completing the Connect application. |
| `reportId` | `string \| undefined` | Optional | A Finicity report ID |

## Example (as JSON)

```json
{
  "payrollDataRetrievalId": "hahvhe2k0000",
  "employerNames": [
    "employerNames8",
    "employerNames9",
    "employerNames0"
  ],
  "reportId": "u4hstnnak45g"
}
```

