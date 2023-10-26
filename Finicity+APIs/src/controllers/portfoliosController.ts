/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorMessageError } from '../errors/errorMessageError';
import {
  PortfolioSummary,
  portfolioSummarySchema,
} from '../models/portfolioSummary';
import {
  PortfolioWithConsumerSummary,
  portfolioWithConsumerSummarySchema,
} from '../models/portfolioWithConsumerSummary';
import { string } from '../schema';
import { BaseController } from './baseController';

export class PortfoliosController extends BaseController {
  /**
   * Return a portfolio of most recently generated reports for each report type for the given customer.
   * If there are multiple reports that were generated for a report type (VOA, VOI, etc), only the most
   * recently generated report for the type will be returned.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   *
   * @param customerId  A Finicity customer ID
   * @param portfolioId A portfolio ID with the portfolio version number. Using the portfolio number without
   *                              a version number will return the most recently generated reports.
   * @return Response from the API call
   */
  async getPortfolioByCustomer(
    customerId: string,
    portfolioId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PortfolioSummary>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      portfolioId: [portfolioId, string()],
    });
    req.appendTemplatePath`/decisioning/v1/customers/${mapped.customerId}/portfolios/${mapped.portfolioId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(portfolioSummarySchema, requestOptions);
  }

  /**
   * Return a portfolio of most recently generated reports for each report type for a given consumer. If
   * there are multiple reports that were generated for a report type (VOA, VOI, etc), only the most
   * recently generated report for the type will be returned.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param consumerId  The consumer ID
   * @param portfolioId A portfolio ID with the portfolio version number. Using the portfolio number without
   *                              a version number will return the most recently generated reports.
   * @return Response from the API call
   */
  async getPortfolioByConsumer(
    consumerId: string,
    portfolioId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PortfolioWithConsumerSummary>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      consumerId: [consumerId, string()],
      portfolioId: [portfolioId, string()],
    });
    req.appendTemplatePath`/decisioning/v1/consumers/${mapped.consumerId}/portfolios/${mapped.portfolioId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(portfolioWithConsumerSummarySchema, requestOptions);
  }
}
