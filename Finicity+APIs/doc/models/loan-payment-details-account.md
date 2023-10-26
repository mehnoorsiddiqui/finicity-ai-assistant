
# Loan Payment Details Account

## Structure

`LoanPaymentDetailsAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | A Finicity account ID |
| `accountNumber` | `string` | Required | Institution's ID of the Student Loan Account |
| `accountPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `accountPaymentAddress` | `string` | Required | The payment address to which send manual payments should be sent |
| `accountFuturePayoffAmount` | `number \| undefined` | Optional | The payoff amount for the account |
| `accountFuturePayoffDate` | `string \| undefined` | Optional | The date to which the "Future Payoff Amount" applies |
| `groupDetail` | [`LoanPaymentDetailsGroup[] \| undefined`](../../doc/models/loan-payment-details-group.md) | Optional | Group details |
| `loanDetail` | [`LoanPaymentDetailsLoan[] \| undefined`](../../doc/models/loan-payment-details-loan.md) | Optional | Loan details |

## Example (as JSON)

```json
{
  "accountId": "5011648377",
  "accountNumber": "9876543210",
  "accountPaymentNumber": "00001234895413",
  "accountPaymentAddress": "P.O. Box 123 Sioux Falls, IA 51054",
  "accountFuturePayoffAmount": 10000.0,
  "accountFuturePayoffDate": "01/01/2022 00:00:00",
  "groupDetail": [
    {
      "accountId": "accountId4",
      "groupNumber": "groupNumber0",
      "groupPaymentNumber": "groupPaymentNumber2",
      "groupPaymentAddress": "groupPaymentAddress6",
      "groupFuturePayoffAmount": 17.52,
      "groupFuturePayoffDate": "2016-03-13T12:52:32.123Z",
      "groupLoanDetail": [
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        },
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        },
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        }
      ]
    },
    {
      "accountId": "accountId4",
      "groupNumber": "groupNumber0",
      "groupPaymentNumber": "groupPaymentNumber2",
      "groupPaymentAddress": "groupPaymentAddress6",
      "groupFuturePayoffAmount": 17.52,
      "groupFuturePayoffDate": "2016-03-13T12:52:32.123Z",
      "groupLoanDetail": [
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        },
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        },
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        }
      ]
    },
    {
      "accountId": "accountId4",
      "groupNumber": "groupNumber0",
      "groupPaymentNumber": "groupPaymentNumber2",
      "groupPaymentAddress": "groupPaymentAddress6",
      "groupFuturePayoffAmount": 17.52,
      "groupFuturePayoffDate": "2016-03-13T12:52:32.123Z",
      "groupLoanDetail": [
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        },
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        },
        {
          "accountId": "accountId4",
          "loanNumber": "loanNumber2",
          "loanPaymentNumber": "loanPaymentNumber0",
          "loanPaymentAddress": "loanPaymentAddress2",
          "loanFuturePayoffAmount": 144.94,
          "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
        }
      ]
    }
  ],
  "loanDetail": [
    {
      "accountId": "accountId6",
      "loanNumber": "loanNumber4",
      "loanPaymentNumber": "loanPaymentNumber2",
      "loanPaymentAddress": "loanPaymentAddress4",
      "loanFuturePayoffAmount": 127.86,
      "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
    },
    {
      "accountId": "accountId6",
      "loanNumber": "loanNumber4",
      "loanPaymentNumber": "loanPaymentNumber2",
      "loanPaymentAddress": "loanPaymentAddress4",
      "loanFuturePayoffAmount": 127.86,
      "loanFuturePayoffDate": "2016-03-13T12:52:32.123Z"
    }
  ]
}
```

