/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { EmailOptions, emailOptionsSchema } from './emailOptions';

export interface ConnectEmailUrl {
  /** A generated Connect URL */
  link: string;
  /** Configuration for the Connect email's sent to customers */
  emailConfig: EmailOptions;
}

export const connectEmailUrlSchema: Schema<ConnectEmailUrl> = object({
  link: ['link', string()],
  emailConfig: ['emailConfig', lazy(() => emailOptionsSchema)],
});