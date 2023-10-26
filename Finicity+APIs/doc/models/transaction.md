
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | A Finicity transaction ID |
| `amount` | `number` | Required | The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. |
| `accountId` | `bigint` | Required | A Finicity account ID represented as a number |
| `customerId` | `bigint` | Required | A Finicity customer ID represented as a number. See also: "Add Customer". |
| `status` | `string` | Required | One of active, pending, or shadow (see [Pending and Shadow Transactions](https://docs.finicity.com/pending-and-shadow-transactions/)) |
| `description` | `string` | Required | The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of "No description provided by institution". All other values are provided by the institution. |
| `memo` | `string \| undefined` | Optional | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |
| `postedDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `transactionDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `effectiveDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `firstEffectiveDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `type` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | If provided by the institution, the following values may be returned in the field of a record: |
| `checkNum` | `number \| undefined` | Optional | The check number of the transaction, as provided by the institution |
| `escrowAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to escrow, if available |
| `feeAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to fee, if available |
| `interestAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to interest, if available |
| `principalAmount` | `number \| undefined` | Optional | The portion of the transaction allocated to principal, if available |
| `unitQuantity` | `number \| undefined` | Optional | The number of units (e.g. individual shares) in the transaction, if available |
| `unitPrice` | `number \| undefined` | Optional | Share Price for investment unit (e.g., stocks, mutual funds) |
| `categorization` | [`Categorization`](../../doc/models/categorization.md) | Required | Categorization Record |
| `subaccountSecurityType` | `string \| undefined` | Optional | The type of sub account from which funds came |
| `commissionAmount` | `number \| undefined` | Optional | Transaction commission |
| `ticker` | `string \| undefined` | Optional | Ticker symbol for the investment related to the transaction |
| `investmentTransactionType` | `string \| undefined` | Optional | Finicity derived field that normalizes the transaction type from the FI |
| `taxesAmount` | `number \| undefined` | Optional | Taxes applicable to the investment trade |
| `currencySymbol` | `string \| undefined` | Optional | If the foreign amount value is present then this is the currency code of that foreign amount |

## Example (as JSON)

```json
{
  "id": 21284820852,
  "amount": 3678.9,
  "accountId": 5011648377,
  "customerId": 1005061234,
  "status": "active",
  "description": "MAD SCIENCE RESEARCH PR PAYMENT",
  "memo": "PPD ID 098749",
  "postedDate": 1607450357,
  "transactionDate": 1607450357,
  "effectiveDate": 1607450357,
  "firstEffectiveDate": 1607450357,
  "createdDate": 1607450357,
  "type": "atm",
  "checkNum": 1876,
  "escrowAmount": 134.01,
  "feeAmount": 25,
  "interestAmount": 256.78,
  "principalAmount": 1345.56,
  "unitQuantity": 50,
  "unitPrice": 5,
  "categorization": {
    "normalizedPayeeName": "Mad Science Research",
    "category": "ATM Fee",
    "city": "Murray",
    "state": "UT",
    "postalCode": "84123",
    "country": "USA",
    "bestRepresentation": "YOU BOUGHT DELTA AIR LINES INC DAL CASH"
  },
  "subaccountSecurityType": "Cash",
  "commissionAmount": 0,
  "ticker": "DAL",
  "investmentTransactionType": "purchased",
  "taxesAmount": 0,
  "currencySymbol": "USD"
}
```

