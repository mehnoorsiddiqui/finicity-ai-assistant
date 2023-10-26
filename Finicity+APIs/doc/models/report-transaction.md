
# Report Transaction

## Structure

`ReportTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | A Finicity transaction ID |
| `amount` | `number \| undefined` | Optional | The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. |
| `postedDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `description` | `string \| undefined` | Optional | The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of "No description provided by institution". All other values are provided by the institution. |
| `memo` | `string \| undefined` | Optional | The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value |
| `normalizedPayee` | `string \| undefined` | Optional | A normalized payee, derived from the transaction's description and memo fields. |
| `institutionTransactionId` | `string \| undefined` | Optional | The unique identifier given by the FI for each transaction. |
| `category` | `string \| undefined` | Optional | The different categories for transactions.<br><br>Possible values: ATM Fee, Advertising, Air Travel, Alcohol & Bars, Allowance, Amusement, Arts, Auto & Transport, Auto Insurance, Auto Payment, Baby Supplies, Babysitter & Daycare, Bank Fee, Bills & Utilities, Bonus, Books, Books & Supplies, Business Services, Buy, Cash & ATM, Charity, Check, Child Support, Clothing, Coffee Shops, Credit Card Payment, Dentist, Deposit, Dividend & Cap Gains, Doctor, Education, Electronics & Software, Entertainment, Eyecare, Fast Food, Federal Tax, Fees & Charges, Finance Charge, Financial, Financial Advisor, Food & Dining, Furnishings, Gas & Fuel, Gift, Gifts & Donations, Groceries, Gym, Hair, Health & Fitness, Health Insurance, Hobbies, Home, Home Improvement, Home Insurance, Home Phone, Home Services, Home Supplies, Hotel, Income, Interest Income, Internet, Investments, Kids, Kids Activities, Late Fee, Laundry, Lawn & Garden, Legal, Life Insurance, Loan Fees and Charges, Loan Insurance, Loan Interest, Loan Payment, Loan Principal, Loans, Local Tax, Low Balance, Mobile Phone, Mortgage & Rent, Movies & DVDs, Music, Newspapers & Magazines, Office Supplies, Parking, Paycheck, Personal Care, Pet Food & Supplies, Pet Grooming, Pets, Pharmacy, Printing, Property Tax, Public Transportation, Reimbursement, Rental Car & Taxi, Restaurants, Sales Tax, Sell, Services & Parts, Service Fee, Shipping, Shopping, Spa & Massage, Sporting Goods, Sports, State Tax, Student Loan, Taxes, Television, Toys, Trade Commissions, Transfer, Transfer for Cash Spending, Travel, Tuition, Uncategorized, Utilities, Vacation, Veterinary, Internet / Broadband Charges |
| `type` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | If provided by the institution, the following values may be returned in the field of a record: |
| `payStatementMatchTypes` | [`ReportTransactionPayStatementMatchTypesEnum[] \| undefined`](../../doc/models/report-transaction-pay-statement-match-types-enum.md) | Optional | Field to indicate how transaction is matched with pay statement |
| `bestRepresentation` | `string \| undefined` | Optional | Combines the description and memo data together, removes any duplicated information from description to memo, and removes any numbers or special characters |
| `securityType` | `string \| undefined` | Optional | The type of investment security (VOA only) |
| `symbol` | `string \| undefined` | Optional | Investment symbol (VOA only) |
| `commission` | `number \| undefined` | Optional | Commission amount |

## Example (as JSON)

```json
{
  "id": 21284820852,
  "amount": 22.21,
  "postedDate": 1607450357,
  "description": "FINICITY INC PAYROLL",
  "memo": "Finicity amount credit",
  "normalizedPayee": "Finicity",
  "institutionTransactionId": "100000000",
  "category": "ATM Fee",
  "type": "atm",
  "bestRepresentation": "FINICITY INC PAYROLL",
  "securityType": "Cash",
  "symbol": "JPM",
  "commission": 0
}
```

