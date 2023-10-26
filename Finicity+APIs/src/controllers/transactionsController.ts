/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorMessageError } from '../errors/errorMessageError';
import {
  ReportConstraints,
  reportConstraintsSchema,
} from '../models/reportConstraints';
import { Transaction, transactionSchema } from '../models/transaction';
import { Transactions, transactionsSchema } from '../models/transactions';
import {
  TransactionsReportData,
  transactionsReportDataSchema,
} from '../models/transactionsReportData';
import { bigint, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class TransactionsController extends BaseController {
  /**
   * Get all transactions available for this customer within the given date range, across all accounts.
   * This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction
   * date is provided), with a maximum of 1000 transactions per request.
   *
   * Standard consumer aggregation provides up to 180 days of transactions prior to the date each account
   * was added to the Finicity system. To access older transactions, you must first call the service Load
   * Historic Transactions for Account.
   *
   * There is no limit for the size of the window between `fromDate` and `toDate`, however, the maximum
   * number of transactions returned on one page is 1000.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId     A Finicity customer ID
   * @param fromDate       A "from" date
   * @param toDate         A "to" date
   * @param start          Index of the page of results to return
   * @param limit          Maximum number of results per page
   * @param sort           Date sort order: "asc" for ascending, "desc" for descending
   * @param includePending If pending transactions must be included
   * @return Response from the API call
   */
  async getAllCustomerTransactions(
    customerId: string,
    fromDate: bigint,
    toDate: bigint,
    start?: number,
    limit?: number,
    sort?: string,
    includePending?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transactions>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      fromDate: [fromDate, bigint()],
      toDate: [toDate, bigint()],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
      sort: [sort, optional(string())],
      includePending: [includePending, optional(boolean())],
    });
    req.query('fromDate', mapped.fromDate);
    req.query('toDate', mapped.toDate);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('sort', mapped.sort);
    req.query('includePending', mapped.includePending);
    req.appendTemplatePath`/aggregation/v3/customers/${mapped.customerId}/transactions`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(transactionsSchema, requestOptions);
  }

  /**
   * Get details for the given transaction.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId    A Finicity customer ID
   * @param transactionId A Finicity transaction ID
   * @return Response from the API call
   */
  async getCustomerTransaction(
    customerId: string,
    transactionId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transaction>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      transactionId: [transactionId, bigint()],
    });
    req.appendTemplatePath`/aggregation/v2/customers/${mapped.customerId}/transactions/${mapped.transactionId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(transactionSchema, requestOptions);
  }

  /**
   * Get all transactions available for this customer account within the given date range. This service
   * supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is
   * provided), with a maximum of 1000 transactions per request.
   *
   * Standard consumer aggregation provides up to 180 days of transactions prior to the date each account
   * was added to the Finicity system. To access older transactions, you must first call the Cash Flow
   * Verification service Load Historic Transactions for Account.
   *
   * There is no limit for the size of the window between `fromDate` and `toDate`, however, the maximum
   * number of transactions returned on one page is 1000.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId     A Finicity customer ID
   * @param accountId      The account ID
   * @param fromDate       A "from" date
   * @param toDate         A "to" date
   * @param start          Index of the page of results to return
   * @param limit          Maximum number of results per page
   * @param sort           Date sort order: "asc" for ascending, "desc" for descending
   * @param includePending If pending transactions must be included
   * @return Response from the API call
   */
  async getCustomerAccountTransactions(
    customerId: string,
    accountId: string,
    fromDate: bigint,
    toDate: bigint,
    start?: number,
    limit?: number,
    sort?: string,
    includePending?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transactions>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      accountId: [accountId, string()],
      fromDate: [fromDate, bigint()],
      toDate: [toDate, bigint()],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
      sort: [sort, optional(string())],
      includePending: [includePending, optional(boolean())],
    });
    req.query('fromDate', mapped.fromDate);
    req.query('toDate', mapped.toDate);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('sort', mapped.sort);
    req.query('includePending', mapped.includePending);
    req.appendTemplatePath`/aggregation/v3/customers/${mapped.customerId}/accounts/${mapped.accountId}/transactions`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(transactionsSchema, requestOptions);
  }

  /**
   * Generate a Transaction Report for the given accounts under the given customer. This service
   * retrieves up to 24 months of transaction history for the given customer. It then uses this
   * information to generate the Transaction Report.
   *
   * This is a premium service. A billable event will be created upon the successful generation of the
   * Transactions Report.
   *
   * A report consumer must be created for the given customer before calling this API (see "Consumers").
   *
   * There cannot be more than 24 months between `fromDate` and `toDate`.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param customerId     A Finicity customer ID
   * @param toDate         A "to" date
   * @param body
   * @param callbackUrl    A Report Listener URL to receive notifications. The webhook
   *                                                   must respond to the Finicity API with 2xx HTTP status code.
   * @param includePending If pending transactions must be included
   * @return Response from the API call
   */
  async generateTransactionsReport(
    customerId: string,
    toDate: bigint,
    body: ReportConstraints,
    callbackUrl?: string,
    includePending?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransactionsReportData>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      toDate: [toDate, bigint()],
      body: [body, reportConstraintsSchema],
      callbackUrl: [callbackUrl, optional(string())],
      includePending: [includePending, optional(boolean())],
    });
    req.header('Content-Type', 'application/json');
    req.query('toDate', mapped.toDate);
    req.query('callbackUrl', mapped.callbackUrl);
    req.query('includePending', mapped.includePending);
    req.json(mapped.body);
    req.appendTemplatePath`/decisioning/v2/customers/${mapped.customerId}/transactions`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(transactionsReportDataSchema, requestOptions);
  }
}