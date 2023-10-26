
# Loan Payment Details

Loan payment details for a customer account

## Structure

`LoanPaymentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loanNumber` | `string` | Required | The number of the specific loan under the account. |
| `loanPaymentNumber` | `string` | Required | The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. |
| `loanPaymentAddress` | `string` | Required | The payment address to send manual payments to |
| `accountDetail` | [`LoanPaymentDetailsAccount \| undefined`](../../doc/models/loan-payment-details-account.md) | Optional | - |

## Example (as JSON)

```json
{
  "loanNumber": "123456789",
  "loanPaymentNumber": "5231123456789",
  "loanPaymentAddress": "Heartland ECSI       PO Box 718       Wexford PA 15090",
  "accountDetail": {
    "accountId": "accountId0",
    "accountNumber": "accountNumber2",
    "accountPaymentNumber": "accountPaymentNumber2",
    "accountPaymentAddress": "accountPaymentAddress8",
    "accountFuturePayoffAmount": 14.62,
    "accountFuturePayoffDate": "2016-03-13T12:52:32.123Z",
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
}
```

