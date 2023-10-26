/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string, unknown } from '../schema';

export interface FixConnectParameters {
  /**
   * Generate a translated Connect URL link.
   * Supported languages:
   * * English (default)
   * * Spanish (United States): `es`
   * * French (Canada): `fr` or `fr-CA`
   */
  language?: string;
  /** Your Partner ID displayed in the [Developer Dashboard](https://developer.finicity.com/admin) */
  partnerId: string;
  /** A Finicity customer ID. See also: "Add Customer". */
  customerId: string;
  /** An institution login ID (from the account record) */
  institutionLoginId: string;
  /** The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe). */
  redirectUri?: string;
  /** The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-and-mvs-webhooks/) for event details. */
  webhook?: string;
  /** The content type the webhook events will be sent in. Supported types: `application/json` and `application/xml`. */
  webhookContentType?: string;
  /** Allows additional identifiable information to be inserted into the payload of connect webhook events. See also: [Custom Webhooks](https://docs.finicity.com/custom-webhooks/). */
  webhookData?: unknown;
  /** Allows additional identifiable information to be included as headers of connect webhook event. See also: [Custom Webhooks](https://docs.finicity.com/custom-webhooks/). */
  webhookHeaders?: unknown;
  /**
   * The `experience` field allows you to customize:
   * * Brand: color and logo
   * * Icon: displayed on the "Share your data" page
   * * Popular institutions: displayed on the Bank Search page
   * * Report: the credit decisioning report to send when Connect completes.
   * * MVS modules: financial, payroll, paystub
   * Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they'll give you a unique ID. See [Generate 2.0 Connect URL APIs](https://docs.finicity.com/migrate-to-connect-web-sdk-2-0/#migrate-connect-web-sdk-1).
   * 
   * Experience values options:
   * * "default": your default experience (must be defined)
   * * GUID: the code for a different experience
   * * Not defined: If you don't pass the experience parameter, then Connect's out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.
   */
  experience?: string;
  /**
   * `true`: The URL link expires after a Connect session successfully completes.
   * Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.
   */
  singleUseUrl?: boolean;
}

export const fixConnectParametersSchema: Schema<FixConnectParameters> = object({
  language: ['language', optional(string())],
  partnerId: ['partnerId', string()],
  customerId: ['customerId', string()],
  institutionLoginId: ['institutionLoginId', string()],
  redirectUri: ['redirectUri', optional(string())],
  webhook: ['webhook', optional(string())],
  webhookContentType: ['webhookContentType', optional(string())],
  webhookData: ['webhookData', optional(unknown())],
  webhookHeaders: ['webhookHeaders', optional(unknown())],
  experience: ['experience', optional(string())],
  singleUseUrl: ['singleUseUrl', optional(boolean())],
});
