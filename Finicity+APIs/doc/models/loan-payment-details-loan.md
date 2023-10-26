
# Loan Payment Details Loan

Loan details

## Structure

`LoanPaymentDetailsLoan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A Finicity account ID |
| `loanNumber` | `string` | Required | Institution's ID of the Student Loan |
| `loanPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `loanPaymentAddress` | `string` | Required | The payment address to which send manual payments should be sent |
| `loanFuturePayoffAmount` | `number \| undefined` | Optional | The payoff amount for the loan |
| `loanFuturePayoffDate` | `string \| undefined` | Optional | The date to which the "Future Payoff Amount" applies |

## Example (as JSON)

```json
{
  "accountId": "5011648377",
  "loanNumber": "3210-Group A-1",
  "loanPaymentNumber": "00001234895413-A-1",
  "loanPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054",
  "loanFuturePayoffAmount": 5000.0,
  "loanFuturePayoffDate": "01/01/2022 00:00:00"
}
```

