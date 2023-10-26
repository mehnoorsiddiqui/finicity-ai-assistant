/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, lazy, object, Schema, string } from '../schema';
import {
  ReportConstraintsOut,
  reportConstraintsOutSchema,
} from './reportConstraintsOut';
import { ReportTypeEnum, reportTypeEnumSchema } from './reportTypeEnum';

export interface ReportSummary {
  /** A Finicity report ID */
  id: string;
  /** A Finicity consumer ID. See also: "Create Consumer". */
  consumerId: string;
  /** Last 4 digits of a SSN */
  consumerSsn: string;
  /** Name of a Finicity partner */
  requesterName: string;
  /** Finicity indicator to track all activity associated with this report */
  requestId: string;
  constraints: ReportConstraintsOut;
  type: ReportTypeEnum;
  /** A report generation status ("inProgress", "success", "failure") */
  status: string;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  createdDate: bigint;
}

export const reportSummarySchema: Schema<ReportSummary> = object({
  id: ['id', string()],
  consumerId: ['consumerId', string()],
  consumerSsn: ['consumerSsn', string()],
  requesterName: ['requesterName', string()],
  requestId: ['requestId', string()],
  constraints: ['constraints', lazy(() => reportConstraintsOutSchema)],
  type: ['type', reportTypeEnumSchema],
  status: ['status', string()],
  createdDate: ['createdDate', bigint()],
});