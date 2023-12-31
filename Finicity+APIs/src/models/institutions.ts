/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, boolean, lazy, number, object, Schema } from '../schema';
import { Institution, institutionSchema } from './institution';

/** A list of Finicity financial institutions from the "Get Institutions" API */
export interface Institutions {
  /** The total number of results matching search criteria */
  found: number;
  /** The number of results returned */
  displaying: number;
  /** If `true`, you can fetch the next page of results */
  moreAvailable: boolean;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  createdDate: bigint;
  /** A list of institutions */
  institutions: Institution[];
}

export const institutionsSchema: Schema<Institutions> = object({
  found: ['found', number()],
  displaying: ['displaying', number()],
  moreAvailable: ['moreAvailable', boolean()],
  createdDate: ['createdDate', bigint()],
  institutions: ['institutions', array(lazy(() => institutionSchema))],
});
