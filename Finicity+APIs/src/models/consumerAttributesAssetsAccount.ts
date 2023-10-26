/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, unknown } from '../schema';

export interface ConsumerAttributesAssetsAccount {
  /** Account closing balance by month. */
  monthlyClosingBalance?: unknown;
  /** Account minimum balance by month. */
  monthlyMinimumBalance?: unknown;
  /** Account maximum balance by month. */
  monthlyMaximumBalance?: unknown;
  /** Account maximum balance by month. */
  monthlyAverageBalance?: unknown;
  /** Standard deviation of balance by account. */
  monthlyStandardDeviationOfBalance?: unknown;
  /** Number of days in a month with a positive account balance. */
  monthlyDaysWithPositiveBalance?: unknown;
  /** Number of days in a month with a negative account balance. */
  monthlyDaysWithNegativeBalance?: unknown;
  /** Two month average balance by account. */
  monthlyTwoMonthAverageBalance?: unknown;
  /** Six month average balance by account. */
  monthlySixMonthAverageBalance?: unknown;
  /** Twelve month average balance by account. */
  twelveMonthAverageBalance?: unknown;
  /** Standard deviation of account balance across two months. */
  twoMonthStandardDeviationOfBalance?: unknown;
  /** Standard deviation of account balance across six months. */
  sixMonthStandardDeviationOfBalance?: unknown;
  /** Standard deviation of account balance across twelve months. */
  twelveMonthStandardDeviationOfBalance?: unknown;
}

export const consumerAttributesAssetsAccountSchema: Schema<ConsumerAttributesAssetsAccount> = object(
  {
    monthlyClosingBalance: ['monthlyClosingBalance', optional(unknown())],
    monthlyMinimumBalance: ['monthlyMinimumBalance', optional(unknown())],
    monthlyMaximumBalance: ['monthlyMaximumBalance', optional(unknown())],
    monthlyAverageBalance: ['monthlyAverageBalance', optional(unknown())],
    monthlyStandardDeviationOfBalance: [
      'monthlyStandardDeviationOfBalance',
      optional(unknown()),
    ],
    monthlyDaysWithPositiveBalance: [
      'monthlyDaysWithPositiveBalance',
      optional(unknown()),
    ],
    monthlyDaysWithNegativeBalance: [
      'monthlyDaysWithNegativeBalance',
      optional(unknown()),
    ],
    monthlyTwoMonthAverageBalance: [
      'monthlyTwoMonthAverageBalance',
      optional(unknown()),
    ],
    monthlySixMonthAverageBalance: [
      'monthlySixMonthAverageBalance',
      optional(unknown()),
    ],
    twelveMonthAverageBalance: [
      'twelveMonthAverageBalance',
      optional(unknown()),
    ],
    twoMonthStandardDeviationOfBalance: [
      'twoMonthStandardDeviationOfBalance',
      optional(unknown()),
    ],
    sixMonthStandardDeviationOfBalance: [
      'sixMonthStandardDeviationOfBalance',
      optional(unknown()),
    ],
    twelveMonthStandardDeviationOfBalance: [
      'twelveMonthStandardDeviationOfBalance',
      optional(unknown()),
    ],
  }
);