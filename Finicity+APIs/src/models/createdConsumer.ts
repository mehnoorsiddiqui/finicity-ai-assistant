/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

/** A consumer that was just created */
export interface CreatedConsumer {
  /** A Finicity consumer ID. See also: "Create Consumer". */
  id?: string;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  createdDate?: bigint;
  /** A Finicity customer ID represented as a number. See also: "Add Customer". */
  customerId?: bigint;
}

export const createdConsumerSchema: Schema<CreatedConsumer> = object({
  id: ['id', optional(string())],
  createdDate: ['createdDate', optional(bigint())],
  customerId: ['customerId', optional(bigint())],
});
