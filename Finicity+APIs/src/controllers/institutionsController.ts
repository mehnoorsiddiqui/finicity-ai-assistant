/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorMessageError } from '../errors/errorMessageError';
import {
  BrandingWrapper,
  brandingWrapperSchema,
} from '../models/brandingWrapper';
import {
  CertifiedInstitutions,
  certifiedInstitutionsSchema,
} from '../models/certifiedInstitutions';
import { Institutions, institutionsSchema } from '../models/institutions';
import {
  InstitutionWrapper,
  institutionWrapperSchema,
} from '../models/institutionWrapper';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class InstitutionsController extends BaseController {
  /**
   * Search for certified financial institutions w/RSSD.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param search Search term (financial institution `name` field). Leave empty for all FIs.
   * @param start  Index of the page of results to return
   * @param limit  Maximum number of results per page
   * @param type   A product type: "transAgg", "ach", "stateAgg", "voi", "voa", "aha", "availBalance",
   *                         "accountOwner"
   * @return Response from the API call
   */
  async getCertifiedInstitutionsWithRSSD(
    search?: string,
    start?: number,
    limit?: number,
    type?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CertifiedInstitutions>> {
    const req = this.createRequest(
      'GET',
      '/institution/v2/certifiedInstitutions/rssd'
    );
    const mapped = req.prepareArgs({
      search: [search, optional(string())],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
      type: [type, optional(string())],
    });
    req.query('search', mapped.search);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('type', mapped.type);
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    return req.callAsJson(certifiedInstitutionsSchema, requestOptions);
  }

  /**
   * Search for financial institutions.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param search Search term (financial institution `name` field). Leave empty for all FIs.
   * @param start  Index of the page of results to return
   * @param limit  Maximum number of results per page
   * @param type   A product type: "transAgg", "ach", "stateAgg", "voi", "voa", "aha", "availBalance",
   *                         "accountOwner"
   * @return Response from the API call
   */
  async getInstitutions(
    search?: string,
    start?: number,
    limit?: number,
    type?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Institutions>> {
    const req = this.createRequest('GET', '/institution/v2/institutions');
    const mapped = req.prepareArgs({
      search: [search, optional(string())],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
      type: [type, optional(string())],
    });
    req.query('search', mapped.search);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('type', mapped.type);
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    return req.callAsJson(institutionsSchema, requestOptions);
  }

  /**
   * Search for financial institutions by certified product.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param search Search term (financial institution `name` field). Leave empty for all FIs.
   * @param start  Index of the page of results to return
   * @param limit  Maximum number of results per page
   * @param type   A product type: "transAgg", "ach", "stateAgg", "voi", "voa", "aha", "availBalance",
   *                         "accountOwner"
   * @return Response from the API call
   */
  async getCertifiedInstitutions(
    search?: string,
    start?: number,
    limit?: number,
    type?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CertifiedInstitutions>> {
    const req = this.createRequest(
      'GET',
      '/institution/v2/certifiedInstitutions'
    );
    const mapped = req.prepareArgs({
      search: [search, optional(string())],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
      type: [type, optional(string())],
    });
    req.query('search', mapped.search);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('type', mapped.type);
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    return req.callAsJson(certifiedInstitutionsSchema, requestOptions);
  }

  /**
   * Get financial institution details by ID.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param institutionId The institution ID
   * @return Response from the API call
   */
  async getInstitution(
    institutionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<InstitutionWrapper>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      institutionId: [institutionId, string()],
    });
    req.appendTemplatePath`/institution/v2/institutions/${mapped.institutionId}`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(institutionWrapperSchema, requestOptions);
  }

  /**
   * Return the branding information for a financial institution.
   *
   * _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
   *
   * @param institutionId The institution ID
   * @return Response from the API call
   */
  async getInstitutionBranding(
    institutionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BrandingWrapper>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      institutionId: [institutionId, string()],
    });
    req.appendTemplatePath`/institution/v2/institutions/${mapped.institutionId}/branding`;
    req.throwOn(400, ErrorMessageError, 'The request was rejected');
    req.throwOn(401, ErrorMessageError, 'The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token".');
    req.throwOn(404, ErrorMessageError, 'The resource doesn\'t exist');
    return req.callAsJson(brandingWrapperSchema, requestOptions);
  }
}
