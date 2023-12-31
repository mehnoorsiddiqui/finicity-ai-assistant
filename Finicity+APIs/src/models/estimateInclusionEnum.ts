/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EstimateInclusionEnum
 */
export enum EstimateInclusionEnum {
  HIGH = 'HIGH',
  MODERATE = 'MODERATE',
  LOW = 'LOW',
  NO = 'NO',
}

/**
 * Schema for EstimateInclusionEnum
 */
export const estimateInclusionEnumSchema: Schema<EstimateInclusionEnum> = stringEnum(EstimateInclusionEnum);
