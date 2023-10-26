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
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ReportCustomField, reportCustomFieldSchema } from './reportCustomField';

export interface ReportConstraints {
  /** A whitespace-separated list of Finicity account IDs to be included in the report (all accounts will be included if not set) */
  accountIds?: string;
  /**
   * The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.
   * Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.
   * * `true`: (default) display the custom field in the PDF report
   * * `false`: don't display the custom field in the PDF report
   * For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.
   * All custom fields display in the Reseller Billing endpoint.
   */
  reportCustomFields?: ReportCustomField[];
  /** Include the non-sufficient funds (NSF) summary in the JSON and PDF reports */
  showNsf?: boolean;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  fromDate?: bigint;
  /** Designate a minimum confidence level threshold to include income streams with a specified confidence level or higher. For example, designate a `incomeStreamConfidenceMinimum` of 50 to see all income streams with a confidence level of 50 or higher. */
  incomeStreamConfidenceMinimum?: number;
}

export const reportConstraintsSchema: Schema<ReportConstraints> = object({
  accountIds: ['accountIds', optional(string())],
  reportCustomFields: [
    'reportCustomFields',
    optional(array(lazy(() => reportCustomFieldSchema))),
  ],
  showNsf: ['showNsf', optional(boolean())],
  fromDate: ['fromDate', optional(bigint())],
  incomeStreamConfidenceMinimum: [
    'incomeStreamConfidenceMinimum',
    optional(number()),
  ],
});
