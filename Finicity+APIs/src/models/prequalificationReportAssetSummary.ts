/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface PrequalificationReportAssetSummary {
  /** checking / savings / moneyMarket / cd / investment */
  type?: string;
  /** The available balance for the account */
  availableBalance?: number;
  /** Current balance of the account */
  currentBalance: number;
  /** Two month average daily balance of the account */
  twoMonthAverage: number;
  /** Six month average daily balance of the account */
  sixMonthAverage: number;
  /** Beginning balance of account per the time period in the report */
  beginningBalance: number;
}

export const prequalificationReportAssetSummarySchema: Schema<PrequalificationReportAssetSummary> = object(
  {
    type: ['type', optional(string())],
    availableBalance: ['availableBalance', optional(number())],
    currentBalance: ['currentBalance', number()],
    twoMonthAverage: ['twoMonthAverage', number()],
    sixMonthAverage: ['sixMonthAverage', number()],
    beginningBalance: ['beginningBalance', number()],
  }
);
