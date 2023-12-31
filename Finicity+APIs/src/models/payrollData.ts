/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface PayrollData {
  /** A full SSN without hyphens */
  ssn: string;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  dob: bigint;
  /** A Finicity report ID */
  reportId?: string;
}

export const payrollDataSchema: Schema<PayrollData> = object({
  ssn: ['ssn', string()],
  dob: ['dob', bigint()],
  reportId: ['reportId', optional(string())],
});
