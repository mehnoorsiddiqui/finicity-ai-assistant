/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** A pay statement document and pay statement label */
export interface PayStatement {
  /**
   * The label to be associated with the pay statement. This label will allow the paystub to go through data extraction.
   * * `lastPayPeriod`: default label that should be used for the VOIE - Paystub products
   * * `lastPayPeriodMinusOne`: the second most recent pay statement
   * * `lastPayPeriodMinusTwo`: the third most recent pay statement
   * * `previousYearLastPayPeriod` Last pay statement of the previous calendar year
   * * `previousYear2LastPayPeriod`: last pay statement of the calendar year 2 years prior
   * * `earliestPayPeriod`: the earliest pay statement
   */
  label: string;
  /** A Base64 encoded pay statement file. Finicity supports PDF, JPG, or PNG files. */
  statement: string;
}

export const payStatementSchema: Schema<PayStatement> = object({
  label: ['label', string()],
  statement: ['statement', string()],
});
