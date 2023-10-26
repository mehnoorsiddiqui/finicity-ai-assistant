
# Customer Account Detail

Additional customer account details. Not all data points will return for each account type. You can see the account type that each data point will return for in descriptions. The data point are also subject to availability by the institution.

## Structure

`CustomerAccountDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postedDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `availableBalanceAmount` | `number \| undefined` | Optional | (Checking/Savings/CD/MoneyMarket) and (Mortgage/Loan)  The available balance (typically the current balance with adjustments for any pending transactions) |
| `openDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `periodStartDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `periodEndDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `periodInterestRate` | `number \| undefined` | Optional | (Checking/Savings/CD/MoneyMarket) The APY for the current period interest rate |
| `periodDepositAmount` | `number \| undefined` | Optional | (Checking/Savings/CD/MoneyMarket) Amount deposited in period |
| `periodInterestAmount` | `number \| undefined` | Optional | (Checking/Savings/CD/MoneyMarket) Interest accrued during the current period |
| `interestYtdAmount` | `number \| undefined` | Optional | (Checking/Savings/CD/MoneyMarket) Interest accrued year-to-date |
| `interestPriorYtdAmount` | `number \| undefined` | Optional | (Checking/Savings/CD/MoneyMarket) Interest earned in prior year |
| `maturityDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `interestRate` | `string \| undefined` | Optional | (Credit Card/Line Of Credit) and (Mortgage/Loan) The account's current interest rate |
| `creditAvailableAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) The available credit (typically the credit limit minus the current balance) |
| `creditMaxAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) The account's credit limit |
| `cashAdvanceAvailableAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Currently available cash advance |
| `cashAdvanceMaxAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Maximum cash advance amount |
| `cashAdvanceBalance` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Balance of current cash advance |
| `cashAdvanceInterestRate` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Interest rate for cash advances |
| `currentBalance` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) and (Investment) Current balance |
| `paymentMinAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) and (Mortgage/Loan) Minimum payment due |
| `paymentDueDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `previousBalance` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Prior balance in last statement |
| `statementStartDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `statementEndDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `statementPurchaseAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Purchase amount of statement period |
| `statementFinanceAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Finance amount of statement period |
| `statementCreditAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Credit amount applied in statement period |
| `rewardEarnedBalance` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Earned reward balance |
| `pastDueAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Balance past due |
| `lastPaymentAmount` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) and (Mortgage/Loan) The amount received in the last payment |
| `lastPaymentDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `statementCloseBalance` | `number \| undefined` | Optional | (Credit Card/Line Of Credit) Balance of statement at close |
| `termOfMl` | `string \| undefined` | Optional | (Mortgage/Loan) Length of loan in months |
| `mlHolderName` | `string \| undefined` | Optional | (Mortgage/Loan) Holder of the mortgage or loan |
| `description` | `string \| undefined` | Optional | (Mortgage/Loan) Description of loan |
| `lateFeeAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Late fee charged |
| `payoffAmount` | `number \| undefined` | Optional | (Mortgage/Loan) The amount required to payoff the loan |
| `payoffAmountDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `originalMaturityDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `principalBalance` | `number \| undefined` | Optional | (Mortgage/Loan) The principal balance |
| `escrowBalance` | `number \| undefined` | Optional | (Mortgage/Loan) The escrow balance |
| `interestPeriod` | `string \| undefined` | Optional | (Mortgage/Loan) Period of interest |
| `initialMlAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Original loan amount |
| `initialMlDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `nextPaymentPrincipalAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Amount towards principal in next payment |
| `nextPaymentInterestAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Amount of interest in next payment |
| `nextPayment` | `number \| undefined` | Optional | (Mortgage/Loan) Minimum payment due |
| `nextPaymentDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `lastPaymentDueDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `lastPaymentReceiveDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `lastPaymentPrincipalAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Amount towards principal in last payment |
| `lastPaymentInterestAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Amount of interest in last payment |
| `lastPaymentEscrowAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Amount towards escrow in last payment |
| `lastPaymentLastFeeAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Amount of last fee in last payment |
| `lastPaymentLateCharge` | `number \| undefined` | Optional | (Mortgage/Loan) Amount of late charge in last payment |
| `ytdPrincipalPaid` | `number \| undefined` | Optional | (Mortgage/Loan) Principal paid year-to-date |
| `ytdInterestPaid` | `number \| undefined` | Optional | (Mortgage/Loan) Interest paid year-to-date |
| `ytdInsurancePaid` | `number \| undefined` | Optional | (Mortgage/Loan) Insurance paid year-to-date |
| `ytdTaxPaid` | `number \| undefined` | Optional | (Mortgage/Loan) Tax paid year-to-date |
| `autoPayEnrolled` | `string \| undefined` | Optional | (Mortgage/Loan) Enrolled in autopay (F/Y) |
| `collateral` | `string \| undefined` | Optional | (Mortgage/Loan) Collateral on loan |
| `currentSchool` | `string \| undefined` | Optional | (Mortgage/Loan) Current school |
| `firstPaymentDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `firstMortgage` | `string \| undefined` | Optional | (Mortgage/Loan) First mortgage (F/Y) |
| `loanPaymentFreq` | `string \| undefined` | Optional | (Mortgage/Loan) Frequency of payments (monthly, etc.) |
| `originalSchool` | `string \| undefined` | Optional | (Mortgage/Loan) Original school |
| `recurringPaymentAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Recurring payment amount |
| `lender` | `string \| undefined` | Optional | (Mortgage/Loan) Owner of loan |
| `endingBalanceAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Ending balance |
| `loanTermType` | `string \| undefined` | Optional | (Mortgage/Loan) Type of loan term |
| `paymentsMade` | `number \| undefined` | Optional | (Mortgage/Loan) Number of payments made |
| `balloonAmount` | `number \| undefined` | Optional | (Mortgage/Loan) Balloon payment amount |
| `projectedInterest` | `number \| undefined` | Optional | (Mortgage/Loan) Projected interest on the loan |
| `interestPaidLtd` | `number \| undefined` | Optional | (Mortgage/Loan) Interest paid since inception of loan (life to date) |
| `interestRateType` | `string \| undefined` | Optional | (Mortgage/Loan) Type of interest rate |
| `loanPaymentType` | `string \| undefined` | Optional | (Mortgage/Loan) Type of loan payment |
| `repaymentPlan` | `string \| undefined` | Optional | (Mortgage/Loan) Type of repayment plan for the student loan |
| `paymentsRemaining` | `number \| undefined` | Optional | (Mortgage/Loan) Number of payments remaining before loan is paid off |
| `interestMarginBalance` | `number \| undefined` | Optional | (Investment) Net interest earned after deducting interest paid out |
| `shortBalance` | `number \| undefined` | Optional | (Investment) Sum of short balance |
| `availableCashBalance` | `number \| undefined` | Optional | (Investment) Amount available for cash withdrawal |
| `maturityValueAmount` | `number \| undefined` | Optional | (Investment) amount payable to an investor at maturity |
| `vestedBalance` | `number \| undefined` | Optional | (Investment) Vested amount in account |
| `empMatchAmount` | `number \| undefined` | Optional | (Investment) Employer matched contributions |
| `empPretaxContribAmount` | `number \| undefined` | Optional | (Investment) Employer pretax contribution amount |
| `empPretaxContribAmountYtd` | `number \| undefined` | Optional | (Investment) Employer pretax contribution amount year to date |
| `contribTotalYtd` | `number \| undefined` | Optional | (Investment) Total year to date contributions |
| `cashBalanceAmount` | `number \| undefined` | Optional | (Investment) Cash balance of account |
| `preTaxAmount` | `number \| undefined` | Optional | (Investment) Pre tax amount of total balance |
| `afterTaxAmount` | `number \| undefined` | Optional | (Investment) Post tax amount of total balance |
| `matchAmount` | `number \| undefined` | Optional | (Investment) Amount matched |
| `profitSharingAmount` | `number \| undefined` | Optional | (Investment) Amount of balance for profit sharing |
| `rolloverAmount` | `number \| undefined` | Optional | (Investment) Amount of balance rolled over from original account (401k, etc.) |
| `otherVestAmount` | `number \| undefined` | Optional | (Investment) Other vested amount |
| `otherNonvestAmount` | `number \| undefined` | Optional | (Investment) Other nonvested amount |
| `currentLoanBalance` | `number \| undefined` | Optional | (Investment) Current loan balance |
| `loanRate` | `number \| undefined` | Optional | (Investment) Interest rate of loan |
| `buyPower` | `number \| undefined` | Optional | (Investment) Money available to buy securities |
| `rolloverLtd` | `number \| undefined` | Optional | (Investment) Life to date of money rolled over |
| `loanAwardId` | `string \| undefined` | Optional | (Student Loan) The federal unique loan identifying number |
| `originalInterestRate` | `number \| undefined` | Optional | (Student Loan) The original interest rate to which the loan was disbursed, in APY |
| `guarantor` | `string \| undefined` | Optional | (Student Loan) The financial institution guarantor of the loan (who will pay the loan amount to the owner if the borrower defaults) |
| `interestSubsityType` | `string \| undefined` | Optional | (Student Loan) The indication of the presence of an interest subsidy (i.e. subsidized) |
| `interestBalance` | `number \| undefined` | Optional | (Student Loan) The total outstanding interest balance |
| `feesBalance` | `number \| undefined` | Optional | (Student Loan) The total outstanding fees balance |
| `loanStatus` | `string \| undefined` | Optional | (Student Loan) The repayment status phase (i.e. In School, Grace, Repayment, Deferment, Forbearance) |
| `loanStatusStartDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `loanStatusEndDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `weightedInterestRate` | `number \| undefined` | Optional | (Student Loan) The interest rate of multiple interest rates and balances at the group level, in APY |
| `repaymentPlanStartDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `repaymentPlanEndDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `outOfSchoolDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `convertToRepayment` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `daysDelinquent` | `number \| undefined` | Optional | (Student Loan) The number of days past a due date that a payment should have been made |
| `totalPrincipalPaid` | `number \| undefined` | Optional | (Student Loan) The total amount paid towards the principal balance |
| `totalInterestPaid` | `number \| undefined` | Optional | (Student Loan) The total amount paid towards interest |
| `totalAmountPaid` | `number \| undefined` | Optional | (Student Loan) The total amount paid |

## Example (as JSON)

```json
{
  "postedDate": 1607450357,
  "availableBalanceAmount": 5678.78,
  "openDate": 1607450357,
  "periodStartDate": 1607450357,
  "periodEndDate": 1607450357,
  "periodInterestRate": 13.245,
  "periodDepositAmount": 2356.56,
  "periodInterestAmount": 1234.56,
  "interestYtdAmount": 1056.67,
  "interestPriorYtdAmount": 3056.79,
  "maturityDate": 1607450357,
  "interestRate": "15.789",
  "creditAvailableAmount": 3000,
  "creditMaxAmount": 7000,
  "cashAdvanceAvailableAmount": 2000,
  "cashAdvanceMaxAmount": 3000,
  "cashAdvanceBalance": 1000,
  "cashAdvanceInterestRate": 21.5,
  "currentBalance": 5789.34,
  "paymentMinAmount": 456.78,
  "paymentDueDate": 1607450357,
  "previousBalance": 1234.56,
  "statementStartDate": 1607450357,
  "statementEndDate": 1607450357,
  "statementPurchaseAmount": 2345.9,
  "statementFinanceAmount": 156.78,
  "statementCreditAmount": 345,
  "rewardEarnedBalance": 500,
  "pastDueAmount": 3688.99,
  "lastPaymentAmount": 567.89,
  "lastPaymentDate": 1607450357,
  "statementCloseBalance": 2456.69,
  "termOfMl": "36",
  "mlHolderName": "John Smith",
  "description": "a description",
  "lateFeeAmount": 35,
  "payoffAmount": 45567.98,
  "payoffAmountDate": 1607450357,
  "originalMaturityDate": 1607450357,
  "principalBalance": 45056.7,
  "escrowBalance": 2345.01,
  "interestPeriod": "monthly",
  "initialMlAmount": 65000,
  "initialMlDate": 1607450357,
  "nextPaymentPrincipalAmount": 1256.67,
  "nextPaymentInterestAmount": 234.56,
  "nextPayment": 1578,
  "nextPaymentDate": 1607450357,
  "lastPaymentDueDate": 1607450357,
  "lastPaymentReceiveDate": 1607450357,
  "lastPaymentPrincipalAmount": 1256.67,
  "lastPaymentInterestAmount": 234.56,
  "lastPaymentEscrowAmount": 456.78,
  "lastPaymentLastFeeAmount": 150,
  "lastPaymentLateCharge": 50,
  "ytdPrincipalPaid": 5432.01,
  "ytdInterestPaid": 3948.56,
  "ytdInsurancePaid": 1345.89,
  "ytdTaxPaid": 1489,
  "autoPayEnrolled": "true",
  "collateral": "nissan sentra",
  "currentSchool": "utah valley university",
  "firstPaymentDate": 1607450357,
  "firstMortgage": "true",
  "loanPaymentFreq": "monthly",
  "originalSchool": "brigham young university",
  "recurringPaymentAmount": 456.23,
  "lender": "utah community credit union",
  "endingBalanceAmount": 234789.45,
  "loanTermType": "fixed",
  "paymentsMade": 14,
  "balloonAmount": 1678.56,
  "projectedInterest": 10456.78,
  "interestPaidLtd": 56789.34,
  "interestRateType": "variable",
  "loanPaymentType": "principle",
  "repaymentPlan": "Standard, Graduated, Extended, Pay As You Earn, and more.",
  "paymentsRemaining": 45,
  "interestMarginBalance": 456,
  "shortBalance": 12456.89,
  "availableCashBalance": 3456.78,
  "maturityValueAmount": 34067.78,
  "vestedBalance": 45000,
  "empMatchAmount": 256.99,
  "empPretaxContribAmount": 450,
  "empPretaxContribAmountYtd": 700,
  "contribTotalYtd": 2045,
  "cashBalanceAmount": 2000,
  "preTaxAmount": 78564.99,
  "afterTaxAmount": 68564.99,
  "matchAmount": 378,
  "profitSharingAmount": 34678.89,
  "rolloverAmount": 101234.67,
  "otherVestAmount": 34000,
  "otherNonvestAmount": 26000,
  "currentLoanBalance": 345789.23,
  "loanRate": 3.275,
  "buyPower": 34567.89,
  "rolloverLtd": 23456.78,
  "loanAwardId": "1234568",
  "originalInterestRate": 12,
  "guarantor": "FinBank",
  "interestSubsityType": "Subsity type",
  "interestBalance": 2000,
  "feesBalance": 150,
  "loanStatus": "Deferment",
  "loanStatusStartDate": 1607450357,
  "loanStatusEndDate": 1607450357,
  "weightedInterestRate": 12,
  "repaymentPlanStartDate": 1607450357,
  "repaymentPlanEndDate": 1607450357,
  "outOfSchoolDate": 1607450357,
  "convertToRepayment": 1607450357,
  "daysDelinquent": 5,
  "totalPrincipalPaid": 15000,
  "totalInterestPaid": 1125,
  "totalAmountPaid": 16125
}
```

