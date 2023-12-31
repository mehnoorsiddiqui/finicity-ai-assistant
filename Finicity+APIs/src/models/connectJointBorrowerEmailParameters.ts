/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Borrower, borrowerSchema } from './borrower';
import { EmailOptions, emailOptionsSchema } from './emailOptions';
import { ReportCustomField, reportCustomFieldSchema } from './reportCustomField';

export interface ConnectJointBorrowerEmailParameters {
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
  /** (MVS) Array of borrowers to pass the primary and joint borrower's customer and consumer IDs */
  borrowers: Borrower[];
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
  /** Advanced options for configuration of which institutions to display in. See [Institution Settings](https://docs.finicity.com/connect-institution-settings/). */
  institutionSettings?: unknown;
  /** Configuration for the Connect email's sent to customers */
  email: EmailOptions;
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
  experience: string;
  /**
   * The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it's greater than 10 digits, then the `fromDate` is set to the credit decisioning report's default `fromDate`.
   * For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.
   * However, Connect doesn't pass this parameter to the following reports:
   * * Pay Statement Extraction Report
   * * VOIE - Paystub (with TXVerify) Report
   * * Statement Report
   * * Verification of Income Report
   * * VOIE - Payroll Report
   * Note: this field isn't used if you're only collecting transaction data without a report.
   */
  fromDate?: bigint;
  /**
   * The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.
   * Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.
   * * `true`: (default) display the custom field in the PDF report
   * * `false`: don't display the custom field in the PDF report
   * For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.
   * All custom fields display in the Reseller Billing endpoint.
   */
  reportCustomFields?: ReportCustomField[];
  /**
   * `true`: The URL link expires after a Connect session successfully completes.
   * Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.
   */
  singleUseUrl?: boolean;
}

export const connectJointBorrowerEmailParametersSchema: Schema<ConnectJointBorrowerEmailParameters> = object(
  {
    language: ['language', optional(string())],
    partnerId: ['partnerId', string()],
    borrowers: ['borrowers', array(lazy(() => borrowerSchema))],
    redirectUri: ['redirectUri', optional(string())],
    webhook: ['webhook', optional(string())],
    webhookContentType: ['webhookContentType', optional(string())],
    webhookData: ['webhookData', optional(unknown())],
    webhookHeaders: ['webhookHeaders', optional(unknown())],
    institutionSettings: ['institutionSettings', optional(unknown())],
    email: ['email', lazy(() => emailOptionsSchema)],
    experience: ['experience', string()],
    fromDate: ['fromDate', optional(bigint())],
    reportCustomFields: [
      'reportCustomFields',
      optional(array(lazy(() => reportCustomFieldSchema))),
    ],
    singleUseUrl: ['singleUseUrl', optional(boolean())],
  }
);
