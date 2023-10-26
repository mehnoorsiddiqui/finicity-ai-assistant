/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema, string } from '../schema';

/** A new customer that was just enrolled */
export interface CreatedCustomer {
  /** A Finicity customer ID. See also: "Add Customer". */
  id: string;
  /** The customer's username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ – + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. í, ü, etc.) */
  username: string;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  createdDate: bigint;
}

export const createdCustomerSchema: Schema<CreatedCustomer> = object({
  id: ['id', string()],
  username: ['username', string()],
  createdDate: ['createdDate', bigint()],
});
