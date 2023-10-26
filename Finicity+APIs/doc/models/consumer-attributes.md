
# Consumer Attributes

## Structure

`ConsumerAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `analyticsId` | `string` | Required | An ID for a Consumer Attributes report |
| `ca360Data` | [`ConsumerAttributesData`](../../doc/models/consumer-attributes-data.md) | Required | - |

## Example (as JSON)

```json
{
  "analytics_id": "ce9693d5-a83e-4ad0-a694-6f48c4fc7877",
  "ca360_data": {
    "dateRange": {
      "From": "02/01/2021 00:00:00",
      "To": "02/08/2022 00:00:00"
    },
    "income": {
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
    },
    "expenses": {
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
    },
    "netAmount": {
      "monthlyNetAmount": {
        "NetAmount": {
          "Wed Mar 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -4333.85,
          "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -3605.57,
          "Mon May 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -9374.7,
          "Wed Jun 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -10084.15,
          "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -6318.96,
          "Tue Aug 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -1363.57,
          "Thu Sep 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": -16997.87,
          "Sun Oct 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": -6870.64,
          "Tue Nov 30 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -6244.79,
          "Fri Dec 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -35750.48,
          "Sun Jan 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -21232.13,
          "Sun Feb 28 2021 00:00:00 GMT+0000 (Greenwich Mean Time)": -6723.7
        }
      }
    },
    "nsf": {
      "monthlyNSFOccurrences": {
        "Fri Apr 30 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1,
        "Sat Jul 31 2021 01:00:00 GMT+0100 (Irish Standard Time)": 1
      },
      "monthlyLateFeeOccurrences": 35
    },
    "assets": {
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
    },
    "liabilities": {
      "monthlyLoanDeposits": {
        "3-2021": 2799.08,
        "4-2021": 2947.63,
        "5-2021": 2863.37
      },
      "monthlyLoanWitdrawls": {
        "3-2021": -150.17,
        "4-2021": -95.03,
        "5-2021": -341.26
      },
      "monthlyNumberOfLoanDeposits": {
        "3-2021": 1,
        "4-2021": 1,
        "5-2021": 1
      },
      "monthlyNumberOfLoanWithdrawls": {
        "3-2021": 1,
        "4-2021": 1,
        "5-2021": 1
      }
    }
  }
}
```

