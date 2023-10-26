/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema, string } from '../schema';

export interface RegisteredApplication {
  /** Identifier to track the application registration from the "App Registration" and "Get App Registration Status" endpoints, represented as a number */
  preAppId: bigint;
  /** The status of an app registration request. "A" means approved. "P" means pending which is the status when initially submitted or when the app is modified and awaiting approval. "R" means rejected. If it is rejected there will be a note with the rejected reason. */
  status: string;
}

export const registeredApplicationSchema: Schema<RegisteredApplication> = object(
  { preAppId: ['preAppId', bigint()], status: ['status', string()] }
);
