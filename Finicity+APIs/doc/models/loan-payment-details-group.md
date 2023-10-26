
# Loan Payment Details Group

Group details

## Structure

`LoanPaymentDetailsGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A Finicity account ID |
| `groupNumber` | `string` | Required | Institution's ID of the Student Loan Group |
| `groupPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `groupPaymentAddress` | `string` | Required | The payment address to which send manual payments should be sent |
| `groupFuturePayoffAmount` | `number \| undefined` | Optional | The payoff amount for the group |
| `groupFuturePayoffDate` | `string \| undefined` | Optional | The date to which the "Future Payoff Amount" applies |
| `groupLoanDetail` | [`LoanPaymentDetailsLoan[]`](../../doc/models/loan-payment-details-loan.md) | Required | - |

## Example (as JSON)

```json
{
  "accountId": "5011648377",
  "groupNumber": "3210-Group A",
  "groupPaymentNumber": "00001234895413-A",
  "groupPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054",
  "groupFuturePayoffAmount": 7500.0,
  "groupFuturePayoffDate": "01/01/2022 00:00:00",
  "groupLoanDetail": [
    {
      "accountId": "5011648377",
      "loanNumber": "3210-Group A-1",
      "loanPaymentNumber": "00001234895413-A-1",
      "loanPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054",
      "loanFuturePayoffAmount": 5000.0,
      "loanFuturePayoffDate": "01/01/2022 00:00:00"
    }
  ]
}
```

