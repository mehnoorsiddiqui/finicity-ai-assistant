/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema } from '../schema';

export interface CadenceDetails {
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  startDate?: bigint;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  stopDate?: bigint;
  /** Number of days between the recurring deposits */
  days?: number;
}

export const cadenceDetailsSchema: Schema<CadenceDetails> = object({
  startDate: ['startDate', optional(bigint())],
  stopDate: ['stopDate', optional(bigint())],
  days: ['days', optional(number())],
});