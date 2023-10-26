/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorMessageError } from '../errors/errorMessageError';
import { string } from '../schema';
import { BaseController } from './baseController';

export class AssetsController extends BaseController {
  /**
   * Retrieve a binary file for the given asset ID.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId A Finicity customer ID
   * @param assetId    The Finicity asset ID
   * @return Response from the API call
   */
  async getAssetByCustomerID(
    customerId: string,
    assetId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      assetId: [assetId, string()],
    });
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/assets/${mapped.assetId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsStream(requestOptions);
  }
}
