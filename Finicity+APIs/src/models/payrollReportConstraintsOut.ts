/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import { PayrollDataOut, payrollDataOutSchema } from './payrollDataOut';
import { ReportCustomField, reportCustomFieldSchema } from './reportCustomField';

export interface PayrollReportConstraintsOut {
  payrollData: PayrollDataOut;
  /**
   * The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.
   * Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.
   * * `true`: (default) display the custom field in the PDF report
   * * `false`: don't display the custom field in the PDF report
   * For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.
   * All custom fields display in the Reseller Billing endpoint.
   */
  reportCustomFields?: ReportCustomField[];
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  payStatementsFromDate?: bigint;
}

export const payrollReportConstraintsOutSchema: Schema<PayrollReportConstraintsOut> = object(
  {
    payrollData: ['payrollData', lazy(() => payrollDataOutSchema)],
    reportCustomFields: [
      'reportCustomFields',
      optional(array(lazy(() => reportCustomFieldSchema))),
    ],
    payStatementsFromDate: ['payStatementsFromDate', optional(bigint())],
  }
);
