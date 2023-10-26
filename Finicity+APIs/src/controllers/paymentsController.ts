/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorMessageError } from '../errors/errorMessageError';
import { ACHDetails, aCHDetailsSchema } from '../models/aCHDetails';
import {
  AvailableBalance,
  availableBalanceSchema,
} from '../models/availableBalance';
import { string } from '../schema';
import { BaseController } from './baseController';

export class PaymentsController extends BaseController {
  /**
   * Return the real account number and routing number details for an ACH payment.
   *
   * Note: this is a premium service, billable per every successful API call.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId A Finicity customer ID
   * @param accountId  The account ID
   * @return Response from the API call
   */
  async getAccountACHDetails(
    customerId: string,
    accountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ACHDetails>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      accountId: [accountId, string()],
    });
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts/${mapped.accountId}/details`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(aCHDetailsSchema, requestOptions);
  }

  /**
   * Retrieve the available and cleared account balances for a single account in real-time directly from
   * a financial institution.
   *
   * Note: this is a premium service, billable per every successful API call.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId A Finicity customer ID
   * @param accountId  The account ID
   * @return Response from the API call
   */
  async getAvailableBalanceLive(
    customerId: string,
    accountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AvailableBalance>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      accountId: [accountId, string()],
    });
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts/${mapped.accountId}/availableBalance/live`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(availableBalanceSchema, requestOptions);
  }

  /**
   * Retrieve the latest cached available and cleared account balances for a customer. Since we update
   * and store balances throughout the day, this is the most accurate balance information available when
   * a connection to a financial institution is unavailable or when a faster response is needed.
   *
   * Note: this is a premium service, billable per every successful API call. Enrollment is required.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId A Finicity customer ID
   * @param accountId  The account ID
   * @return Response from the API call
   */
  async getAvailableBalance(
    customerId: string,
    accountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AvailableBalance>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      accountId: [accountId, string()],
    });
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/accounts/${mapped.accountId}/availableBalance`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(availableBalanceSchema, requestOptions);
  }
}