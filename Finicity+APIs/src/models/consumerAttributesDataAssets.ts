/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  ConsumerAttributesAssetsAccount,
  consumerAttributesAssetsAccountSchema,
} from './consumerAttributesAssetsAccount';
import {
  ConsumerAttributesAssetsCustomer,
  consumerAttributesAssetsCustomerSchema,
} from './consumerAttributesAssetsCustomer';

export interface ConsumerAttributesDataAssets {
  customer: ConsumerAttributesAssetsCustomer;
  account: ConsumerAttributesAssetsAccount;
}

export const consumerAttributesDataAssetsSchema: Schema<ConsumerAttributesDataAssets> = object(
  {
    customer: ['customer', lazy(() => consumerAttributesAssetsCustomerSchema)],
    account: ['account', lazy(() => consumerAttributesAssetsAccountSchema)],
  }
);
