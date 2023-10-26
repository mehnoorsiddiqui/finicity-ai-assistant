
# Consumer Attributes Data Income

## Structure

`ConsumerAttributesDataIncome`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `netAnnualIncome` | `number` | Required | Net annual of all income by customer for the last 12 months. |
| `netAnnualIncomeByAccount` | `unknown` | Required | Net annual of income by account for the last 12 months. |
| `monthlyNetIncome` | `unknown` | Required | Net monthly income by customer for the last 12 months. |
| `monthlyNetIncomeByAccount` | `unknown` | Required | Net monthly income by account for the last 12 months. |

## Example (as JSON)

```json
{
  "netAnnualIncome": 68068.25,
  "netAnnualIncomeByAccount": {
    "5001861692": 229.28,
    "5001861693": 67838.97
  },
  "monthlyNetIncome": {
    "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2925.73,
    "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2562.52,
    "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2562.96,
    "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2620.28,
    "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2770.59,
    "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2736.4,
    "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2629.26,
    "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2836.89,
    "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1450.15,
    "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1560.06,
    "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3897.18,
    "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 2824.58
  },
  "monthlyNetIncomeByAccount": {
    "5001861692": {
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 57.32,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 57.32,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 57.32,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 57.32
    },
    "5001861693": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2925.73,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2562.52,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2562.96,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2620.28,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2770.59,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2736.4,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2629.26,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2836.89,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1450.15,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1560.06,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3897.18,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 2824.58
    }
  }
}
```

