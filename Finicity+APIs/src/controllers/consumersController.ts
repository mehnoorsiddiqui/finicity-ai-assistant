/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorMessageError } from '../errors/errorMessageError';
import { Consumer, consumerSchema } from '../models/consumer';
import { ConsumerUpdate, consumerUpdateSchema } from '../models/consumerUpdate';
import {
  CreatedConsumer,
  createdConsumerSchema,
} from '../models/createdConsumer';
import { NewConsumer, newConsumerSchema } from '../models/newConsumer';
import { string } from '../schema';
import { BaseController } from './baseController';

export class ConsumersController extends BaseController {
  /**
   * Create a consumer record associated with the given customer. A consumer persists as the owner of any
   * reports that are generated, even after the original customer is deleted from the system.
   *
   * A consumer must be created for the given customer before calling any of the "Generate Report"
   * services.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId   A Finicity customer ID
   * @param body
   * @return Response from the API call
   */
  async createConsumer(
    customerId: string,
    body: NewConsumer,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreatedConsumer>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      body: [body, newConsumerSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/decisioning/v1/customers/${mapped.customerId}/consumer`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    req.throwOn(409, ErrorMessageError, 'The resource already exists');
    return req.callAsJson(createdConsumerSchema, requestOptions);
  }

  /**
   * Get the details of a consumer record by customer ID.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId A Finicity customer ID
   * @return Response from the API call
   */
  async getConsumerForCustomer(
    customerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Consumer>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ customerId: [customerId, string()] });
    req.appendTemplatePath`/decisioning/v1/customers/${mapped.customerId}/consumer`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(consumerSchema, requestOptions);
  }

  /**
   * Get the details of a consumer record by consumer ID.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param consumerId The consumer ID
   * @return Response from the API call
   */
  async getConsumer(
    consumerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Consumer>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ consumerId: [consumerId, string()] });
    req.appendTemplatePath`/decisioning/v1/consumers/${mapped.consumerId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(consumerSchema, requestOptions);
  }

  /**
   * Modify an existing consumer. All fields are required for a consumer record, but individual fields
   * for this call are optional because fields that are not specified will be left unchanged.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param consumerId   The consumer ID
   * @param body
   * @return Response from the API call
   */
  async modifyConsumer(
    consumerId: string,
    body: ConsumerUpdate,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      consumerId: [consumerId, string()],
      body: [body, consumerUpdateSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/decisioning/v1/consumers/${mapped.consumerId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.call(requestOptions);
  }
}
