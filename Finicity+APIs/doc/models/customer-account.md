
# Customer Account

An account represents a bank account such as a checking or savings that the customer has added via the Connect interface.

## Structure

`CustomerAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity account ID |
| `number` | `string` | Required | Use `accountNumberDisplay` field. Starting July 1, 2021 the `number` field will sunset with limited support until April 1, 2022, at which time it will be deprecated (no longer available). |
| `accountNumberDisplay` | `string` | Required | The account number from a financial institution in truncated format:<br><br>* Last four digits: "1234"<br>* Last four digits with suffix: "1234-9"<br>* Full value for string accounts: "john@gmail.com" |
| `realAccountNumberLast4` | `string \| undefined` | Optional | The last 4 digits of the ACH account number |
| `name` | `string` | Required | The account name from the institution |
| `balance` | `number` | Required | The cleared balance of the account as-of balanceDate |
| `type` | [`AccountTypeEnum`](../../doc/models/account-type-enum.md) | Required | The enumeration of supported account types.<br><br>* `checking`: Standard checking<br>* `savings`: Standard savings<br>* `cd`: Certificates of deposit<br>* `moneyMarket`: Money Market<br>* `creditCard`: Standard credit cards<br>* `lineOfCredit`: Home equity, line of credit<br>* `investment`: Generic investment (no details)<br>* `investmentTaxDeferred`: Generic tax-advantaged investment (no details)<br>* `employeeStockPurchasePlan`: ESPP, Employee Stock Ownership Plans (ESOP), Stock Purchase Plans<br>* `ira`: Individual Retirement Account (not Rollover or Roth)<br>* `401k`: 401K Plan<br>* `roth`: Roth IRA, Roth 401K<br>* `403b`: 403B Plan<br>* `529plan`: 529 Plan (True value is 529)<br>* `rollover`: Rollover IRA<br>* `ugma`: Uniform Gifts to Minors Act<br>* `utma`: Uniform Transfers to Minors Act<br>* `keogh`: Keogh Plan<br>* `457plan`: 457 Plan (True value is 457)<br>* `401a`: 401A Plan<br>* `mortgage`: Standard Mortgages<br>* `loan`: Auto loans, equity loans, other loans<br>* `studentLoan`: Student Loan<br>* `studentLoanGroup`: Student Loan Group<br>* `studentLoanAccount`: Student Loan Account |
| `aggregationStatusCode` | `number \| undefined` | Optional | The status of the most recent aggregation attempt (see [Aggregation Status Codes](https://docs.finicity.com/aggregation-status-codes/)). Won't be present until you have run your first aggregation for the account. |
| `status` | `string` | Required | "pending" during account discovery, always "active" following successful account activation |
| `customerId` | `string` | Required | A Finicity customer ID. See also: "Add Customer". |
| `institutionId` | `string` | Required | The ID of a financial institution |
| `balanceDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `aggregationSuccessDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `aggregationAttemptDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `lastUpdatedDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `currency` | `string` | Required | A currency code |
| `lastTransactionDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `oldestTransactionDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `institutionLoginId` | `bigint` | Required | An institution login ID (from the account record), represented as a number |
| `detail` | [`CustomerAccountDetail \| undefined`](../../doc/models/customer-account-detail.md) | Optional | Additional customer account details. Not all data points will return for each account type. You can see the account type that each data point will return for in descriptions. The data point are also subject to availability by the institution. |
| `position` | [`CustomerAccountPosition[] \| undefined`](../../doc/models/customer-account-position.md) | Optional | Investment holdings |
| `displayPosition` | `number` | Required | Display position of the account at the financial institution, "1" being the top listed account |
| `parentAccount` | `string \| undefined` | Optional | A Finicity account ID |
| `financialinstitutionAccountStatus` | `string \| undefined` | Optional | Current account status with the financial institution |
| `accountNickname` | `string \| undefined` | Optional | Nickname for account |
| `marketSegment` | `string \| undefined` | Optional | Market segment of account |

## Example (as JSON)

```json
{
  "id": "5011648377",
  "number": "2000004444",
  "accountNumberDisplay": "1234-9",
  "realAccountNumberLast4": "5678",
  "name": "Super Checking",
  "balance": 401.26,
  "type": "checking",
  "status": "active",
  "customerId": "1005061234",
  "institutionId": "4222",
  "balanceDate": 1607450357,
  "aggregationSuccessDate": 1607450357,
  "aggregationAttemptDate": 1607450357,
  "createdDate": 1607450357,
  "lastUpdatedDate": 1607450357,
  "currency": "USD",
  "lastTransactionDate": 1607450357,
  "oldestTransactionDate": 1607450357,
  "institutionLoginId": 1007302745,
  "displayPosition": 2,
  "parentAccount": "5011648377",
  "financialinstitutionAccountStatus": "OPEN",
  "accountNickname": "Checking",
  "marketSegment": "personal",
  "aggregationStatusCode": 30
}
```

