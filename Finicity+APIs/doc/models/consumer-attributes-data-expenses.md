
# Consumer Attributes Data Expenses

## Structure

`ConsumerAttributesDataExpenses`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dwellingExpenseTotal` | `string` | Required | Total dwelling expenses for the last 12 months: rent, mortgage, utilities, and insurance |
| `dwellingExpensesByAccount` | `unknown` | Required | Total dwelling expenses by account for the last 12 months: rent, mortgage, utilities, and insurance |
| `monthlyDwellingExpenseByCustomer` | `unknown` | Required | Monthly dwelling expenses by customer |
| `monthlyDwellingExpenseByAccount` | `unknown` | Required | Monthly dwelling expenses by account |
| `monthlyDebitAmountByCustomer` | `unknown` | Required | Total monthly debit amounts by customer |
| `monthlyExpenseAmountByCustomer` | `unknown` | Required | Total monthly debit amounts, excluding transfers and credit card payments. |

## Example (as JSON)

```json
{
  "dwellingExpenseTotal": "5856.07",
  "dwellingExpensesByAccount": {
    "dwellingExpensesByAccount": {
      "5001861693": -5856.07
    }
  },
  "monthlyDwellingExpenseByCustomer": {
    "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -217.37,
    "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -146.25,
    "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -205.86,
    "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -309.84,
    "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -593.07,
    "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -202.1,
    "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -243.55,
    "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -136.96,
    "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -145.37,
    "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -261.35,
    "Sun Jan 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -172.99,
    "Sun Feb 28 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -176.96
  },
  "monthlyDwellingExpenseByAccount": {
    "5001861693": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -217.37,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -146.25,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -205.86,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -309.84,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -593.07,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -202.1,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -243.55,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -136.96,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -145.37,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -261.35,
      "Sun Jan 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -172.99,
      "Sun Feb 28 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -176.96
    }
  },
  "monthlyDebitAmountByCustomer": {
    "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -7259.58,
    "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -15368.09,
    "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -11937.66,
    "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -12704.43,
    "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -9089.55,
    "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -4099.97,
    "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -19627.13,
    "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -9927.53,
    "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -7694.94,
    "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -37310.54,
    "Sun Jan 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -25129.31,
    "Sun Feb 28 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -9548.28
  },
  "monthlyExpenseAmountByCustomer": {
    "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -7259.58,
    "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -15368.09,
    "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -11937.66,
    "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -12704.43,
    "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -9089.55,
    "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -4099.97,
    "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -19627.13,
    "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -9927.53,
    "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -7694.94,
    "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -37310.54,
    "Sun Jan 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -25129.31,
    "Sun Feb 28 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -9548.28
  }
}
```

