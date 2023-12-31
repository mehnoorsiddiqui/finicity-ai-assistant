/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema, string } from '../schema';

export interface ChildInstitution {
  /** The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits. */
  rssd: bigint;
  /** The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits. */
  parentRSSD: bigint;
  /** The name of the institution */
  name: string;
  /** The ID of a financial institution, represented as a number */
  institutionId: bigint;
}

export const childInstitutionSchema: Schema<ChildInstitution> = object({
  rssd: ['rssd', bigint()],
  parentRSSD: ['parentRSSD', bigint()],
  name: ['name', string()],
  institutionId: ['institutionId', bigint()],
});
