/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Loan details */
export interface LoanPaymentDetailsLoan {
  /** A Finicity account ID */
  accountId: string;
  /** Institution's ID of the Student Loan */
  loanNumber: string;
  /** The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. */
  loanPaymentNumber: string;
  /** The payment address to which send manual payments should be sent */
  loanPaymentAddress: string;
  /** The payoff amount for the loan */
  loanFuturePayoffAmount?: number;
  /** The date to which the "Future Payoff Amount" applies */
  loanFuturePayoffDate?: string;
}

export const loanPaymentDetailsLoanSchema: Schema<LoanPaymentDetailsLoan> = object(
  {
    accountId: ['accountId', string()],
    loanNumber: ['loanNumber', string()],
    loanPaymentNumber: ['loanPaymentNumber', string()],
    loanPaymentAddress: ['loanPaymentAddress', string()],
    loanFuturePayoffAmount: ['loanFuturePayoffAmount', optional(number())],
    loanFuturePayoffDate: ['loanFuturePayoffDate', optional(string())],
  }
);
