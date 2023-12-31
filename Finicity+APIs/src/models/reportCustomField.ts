/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface ReportCustomField {
  /** The name of the custom field */
  label?: string;
  /** The value of the custom field */
  value?: string;
  /** If the custom field will show on the PDF or not */
  shown?: boolean;
}

export const reportCustomFieldSchema: Schema<ReportCustomField> = object({
  label: ['label', optional(string())],
  value: ['value', optional(string())],
  shown: ['shown', optional(boolean())],
});
