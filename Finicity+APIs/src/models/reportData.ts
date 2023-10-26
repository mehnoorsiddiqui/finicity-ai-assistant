/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ErrorMessage, errorMessageSchema } from './errorMessage';
import {
  ReportConstraintsOut,
  reportConstraintsOutSchema,
} from './reportConstraintsOut';
import { ReportTypeEnum, reportTypeEnumSchema } from './reportTypeEnum';

export interface ReportData {
  /** A Finicity report ID */
  id: string;
  /** A unique identifier that will be consistent across all reports created for the same customer */
  portfolioId: string;
  /** The type of Finicity customer ("active" or "testing" or "" for all types) */
  customerType: string;
  /** A Finicity customer ID represented as a number. See also: "Add Customer". */
  customerId: bigint;
  /** Finicity indicator to track all activity associated with this report */
  requestId: string;
  /** Name of a Finicity partner */
  requesterName: string;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  createdDate: bigint;
  /** Title of the report */
  title: string;
  /** A Finicity consumer ID. See also: "Create Consumer". */
  consumerId: string;
  /** Last 4 digits of a SSN */
  consumerSsn: string;
  type: ReportTypeEnum;
  /** A report generation status ("inProgress", "success", "failure") */
  status: string;
  /** In case errors occurred during the report generation */
  errors?: ErrorMessage[];
  constraints?: ReportConstraintsOut;
}

export const reportDataSchema: Schema<ReportData> = object({
  id: ['id', string()],
  portfolioId: ['portfolioId', string()],
  customerType: ['customerType', string()],
  customerId: ['customerId', bigint()],
  requestId: ['requestId', string()],
  requesterName: ['requesterName', string()],
  createdDate: ['createdDate', bigint()],
  title: ['title', string()],
  consumerId: ['consumerId', string()],
  consumerSsn: ['consumerSsn', string()],
  type: ['type', reportTypeEnumSchema],
  status: ['status', string()],
  errors: ['errors', optional(array(lazy(() => errorMessageSchema)))],
  constraints: [
    'constraints',
    optional(lazy(() => reportConstraintsOutSchema)),
  ],
});
