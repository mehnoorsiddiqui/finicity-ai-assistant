
# Consumer Attributes Data Assets

## Structure

`ConsumerAttributesDataAssets`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`ConsumerAttributesAssetsCustomer`](../../doc/models/consumer-attributes-assets-customer.md) | Required | - |
| `account` | [`ConsumerAttributesAssetsAccount`](../../doc/models/consumer-attributes-assets-account.md) | Required | - |

## Example (as JSON)

```json
{
  "customer": {
    "monthlyMinimumBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20841.81,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 16014.16,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 16949.55,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 645.01,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 702.33,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -18.89,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1346.13,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1288.81,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -1231.49,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -1952.71,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 14614.31,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 19705.31
    },
    "monthlyMaximumBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26321.24,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26528.01,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 25110.12,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22676.89,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22889.45,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 24431.44,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26144.03,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 30679.71,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 29099.98,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 52998.24,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 28163.22,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 26827.62
    },
    "monthlyAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23166.96,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21500.16,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21079.24,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17207.09,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17680.23,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20177.06,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21624.44,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23147.34,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23024.08,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23156.56,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 20371.3,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 22523.83
    },
    "monthlyStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1581.38,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3880.2,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2324.47,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4828.27,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5078.26,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5921.8,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 6092.64,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 7479.2,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 6979.12,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 10374.49,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3116.12,
      "Fri Jan 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 2326.82
    },
    "monthlyDaysWithPositiveBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 19,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 14,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 18,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 13,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 15,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 16,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 15,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 22
    },
    "monthlyDaysWithNegativeBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 0,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 0
    },
    "monthlyTwoMonthAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22845.4,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22333.56,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21289.7,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 19143.17,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17443.66,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 18928.64,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20900.75,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22385.89,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23085.71,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23090.32,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 21763.93,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 24573.46
    },
    "monthlySixMonthAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 28794.93,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 25860.09,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23895.76,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22016.73,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20526.25,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20135.12,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 19878.04,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20152.57,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 20476.71,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 21468.29,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 21916.8,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 32063.74
    },
    "twelveMonthAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 33677.33,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 32656.57,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 31325.31,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 29758.99,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 27896.6,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26099.43,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 24336.49,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23006.33,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 22186.24,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 21742.51,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 21221.53,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 34637.95
    },
    "twoMonthStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1954.1,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2730.79,
      "Sun May 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3102.33,
      "Thu Jul 01 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3576.37,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4953.27,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5500.03,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 6007.22,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 6785.92,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 7229.16,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 8676.8,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 6745.3,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3236.86
    },
    "sixMonthStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3004.4,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3010.97,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2975.17,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3181.34,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3336.57,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3935.73,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4687.61,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5287.44,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 6063.22,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 6987.58,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 6660.56,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3023.26
    },
    "twelveMonthStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2799.08,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2947.63,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2863.37,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3065.62,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3224.32,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3479.49,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3846,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4149.2,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 4519.19,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 5084.46,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 4998.56,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 2871.45
    }
  },
  "account": {
    "monthlyClosingBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20841.81,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 16014.16,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 16949.55,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 645.01,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 702.33,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -18.89,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1346.13,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1288.81,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -1231.49,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -1952.71,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 14614.31,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 19705.31
    },
    "monthlyMinimumBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20841.81,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 16014.16,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 16949.55,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 645.01,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 702.33,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -18.89,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1346.13,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1288.81,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -1231.49,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -1952.71,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 14614.31,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 19705.31
    },
    "monthlyMaximumBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26321.24,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26528.01,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 25110.12,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22676.89,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22889.45,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 24431.44,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26144.03,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 30679.71,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 29099.98,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 52998.24,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 28163.22,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 26827.62
    },
    "monthlyAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23166.96,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21500.16,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21079.24,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17207.09,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17680.23,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20177.06,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21624.44,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23147.34,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23024.08,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23156.56,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 20371.3,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 22523.83
    },
    "monthlyStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1581.38,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3880.2,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2324.47,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4828.27,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5078.26,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5921.8,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 6092.64,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 7479.2,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 6979.12,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 10374.49,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3116.12,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 2326.82
    },
    "monthlyDaysWithPositiveBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 19,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 14,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 18,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 13,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 15,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 16,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 15,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 22
    },
    "monthlyDaysWithNegativeBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 0,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 1,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 0,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 0
    },
    "monthlyTwoMonthAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22845.4,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22333.56,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 21289.7,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 19143.17,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 17443.66,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 18928.64,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20900.75,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22385.89,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23085.71,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 23090.32,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 21763.93,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 24573.46
    },
    "monthlySixMonthAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 28794.93,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 25860.09,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23895.76,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 22016.73,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20526.25,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20135.12,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 19878.04,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 20152.57,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 20476.71,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 21468.29,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 21916.8,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 32063.74
    },
    "twelveMonthAverageBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 33677.33,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 32656.57,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 31325.31,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 29758.99,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 27896.6,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 26099.43,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 24336.49,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 23006.33,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 22186.24,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 21742.51,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 21221.53,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 34637.95
    },
    "twoMonthStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1954.1,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2730.79,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3102.33,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3576.37,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4953.27,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5500.03,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 6007.22,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 6785.92,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 7229.16,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 8676.8,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 6745.3,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3236.86
    },
    "sixMonthStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3004.4,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3010.97,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2975.17,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3181.34,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3336.57,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3935.73,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4687.61,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 5287.44,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 6063.22,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 6987.58,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 6660.56,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 3023.26
    },
    "twelveMonthStandardDeviationOfBalance": {
      "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2799.08,
      "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2947.63,
      "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 2863.37,
      "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3065.62,
      "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3224.32,
      "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3479.49,
      "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 3846,
      "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 4149.2,
      "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 4519.19,
      "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": 5084.46,
      "Mon Jan 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 4998.56,
      "Mon Feb 28 2022 00:00:00 GMT+0000 (Greenwich Mean Time)": 2871.45
    }
  }
}
```

