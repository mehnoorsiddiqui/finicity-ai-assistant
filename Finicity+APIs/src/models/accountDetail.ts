/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface AccountDetail {
  /** Only available for investment accounts. Net interest earned after deducting interest paid out */
  interestMarginBalance: number;
  /** Only available for investment accounts. Amount available for cash withdrawal */
  availableCashBalance: number;
  /** Only available for investment accounts. Vested amount in account */
  vestedBalance: number;
  /** Only available for investment accounts. Current loan balance */
  currentLoanBalance: number;
  /** The available balance for the account */
  availableBalanceAmount: number;
}

export const accountDetailSchema: Schema<AccountDetail> = object({
  interestMarginBalance: ['interestMarginBalance', number()],
  availableCashBalance: ['availableCashBalance', number()],
  vestedBalance: ['vestedBalance', number()],
  currentLoanBalance: ['currentLoanBalance', number()],
  availableBalanceAmount: ['availableBalanceAmount', number()],
});
