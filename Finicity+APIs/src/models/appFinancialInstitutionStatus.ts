/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, boolean, object, optional, Schema, string } from '../schema';

/** The registration status fields for each specific OAuth financial institution */
export interface AppFinancialInstitutionStatus {
  /** The ID of a financial institution, represented as a number */
  id: bigint;
  /** The application's abbreviated name */
  abbrvName?: string;
  /** An URL to a logo file */
  logoUrl?: string;
  /** Status of decryption keys for financial institution app registration */
  decryptionKeyActivated: boolean;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  createdDate: bigint;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  lastModifiedDate: bigint;
  /** `false` indicates registration is still pending */
  status: boolean;
}

export const appFinancialInstitutionStatusSchema: Schema<AppFinancialInstitutionStatus> = object(
  {
    id: ['id', bigint()],
    abbrvName: ['abbrvName', optional(string())],
    logoUrl: ['logoUrl', optional(string())],
    decryptionKeyActivated: ['decryptionKeyActivated', boolean()],
    createdDate: ['createdDate', bigint()],
    lastModifiedDate: ['lastModifiedDate', bigint()],
    status: ['status', boolean()],
  }
);
