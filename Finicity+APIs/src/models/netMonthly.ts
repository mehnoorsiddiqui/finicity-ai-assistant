/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, Schema } from '../schema';

export interface NetMonthly {
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  month: bigint;
  /** Total income during the given month, across all income streams */
  net: number;
}

export const netMonthlySchema: Schema<NetMonthly> = object({
  month: ['month', bigint()],
  net: ['net', number()],
});
