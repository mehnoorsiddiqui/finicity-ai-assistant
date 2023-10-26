/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** A Connect URL object */
export interface ConnectUrl {
  /** A generated Connect URL */
  link: string;
}

export const connectUrlSchema: Schema<ConnectUrl> = object({
  link: ['link', string()],
});