/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

export interface ErrorMessage {
  /** An error code (can be returned as a number or a string) */
  code?: unknown;
  /** A status code */
  status?: string;
  /** A title for the error */
  title?: string;
  /** An error level */
  level?: string;
  /** An error message */
  message?: string;
  /** Some more details about the error */
  userMessage?: string;
  /** A Finicity asset ID. Generated by Connect or by using the "Store Customer Pay Statement" API. */
  assetId?: string;
  /** A Finicity account ID */
  accountId?: string;
}

export const errorMessageSchema: Schema<ErrorMessage> = object({
  code: ['code', optional(unknown())],
  status: ['status', optional(string())],
  title: ['title', optional(string())],
  level: ['level', optional(string())],
  message: ['message', optional(string())],
  userMessage: ['user_message', optional(string())],
  assetId: ['assetId', optional(string())],
  accountId: ['accountId', optional(string())],
});
