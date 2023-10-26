/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ErrorMessage
 */
interface ErrorMessage {
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
  user_message?: string;
  /** A Finicity asset ID. Generated by Connect or by using the "Store Customer Pay Statement" API. */
  assetId?: string;
  /** A Finicity account ID */
  accountId?: string;
}

export class ErrorMessageError extends ApiError<ErrorMessage> {}
