/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { PortfolioReport, portfolioReportSchema } from './portfolioReport';

export interface PortfolioSummary {
  /** A unique identifier that will be consistent across all reports created for the same customer */
  portfolioId: string;
  /** A list of reports in the portfolio */
  reports: PortfolioReport[];
}

export const portfolioSummarySchema: Schema<PortfolioSummary> = object({
  portfolioId: ['portfolioId', string()],
  reports: ['reports', array(lazy(() => portfolioReportSchema))],
});
