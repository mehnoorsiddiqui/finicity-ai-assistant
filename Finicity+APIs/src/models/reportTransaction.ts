/**
 * Finicity APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ReportTransactionPayStatementMatchTypesEnum,
  reportTransactionPayStatementMatchTypesEnumSchema,
} from './reportTransactionPayStatementMatchTypesEnum';
import {
  TransactionTypeEnum,
  transactionTypeEnumSchema,
} from './transactionTypeEnum';

export interface ReportTransaction {
  /** A Finicity transaction ID */
  id?: bigint;
  /** The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. */
  amount?: number;
  /** A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). */
  postedDate?: bigint;
  /** The description of the transaction, as provided by the institution (often known as payee). In the event that this field is left blank by the institution, Finicity will pass a value of "No description provided by institution". All other values are provided by the institution. */
  description?: string;
  /** The memo field of the transaction, as provided by the institution. The institution must provide either a description, a memo, or both. It is recommended to concatenate the two fields into a single value */
  memo?: string;
  /** A normalized payee, derived from the transaction's description and memo fields. */
  normalizedPayee?: string;
  /** The unique identifier given by the FI for each transaction. */
  institutionTransactionId?: string;
  /**
   * The different categories for transactions.
   * Possible values: ATM Fee, Advertising, Air Travel, Alcohol & Bars, Allowance, Amusement, Arts, Auto & Transport, Auto Insurance, Auto Payment, Baby Supplies, Babysitter & Daycare, Bank Fee, Bills & Utilities, Bonus, Books, Books & Supplies, Business Services, Buy, Cash & ATM, Charity, Check, Child Support, Clothing, Coffee Shops, Credit Card Payment, Dentist, Deposit, Dividend & Cap Gains, Doctor, Education, Electronics & Software, Entertainment, Eyecare, Fast Food, Federal Tax, Fees & Charges, Finance Charge, Financial, Financial Advisor, Food & Dining, Furnishings, Gas & Fuel, Gift, Gifts & Donations, Groceries, Gym, Hair, Health & Fitness, Health Insurance, Hobbies, Home, Home Improvement, Home Insurance, Home Phone, Home Services, Home Supplies, Hotel, Income, Interest Income, Internet, Investments, Kids, Kids Activities, Late Fee, Laundry, Lawn & Garden, Legal, Life Insurance, Loan Fees and Charges, Loan Insurance, Loan Interest, Loan Payment, Loan Principal, Loans, Local Tax, Low Balance, Mobile Phone, Mortgage & Rent, Movies & DVDs, Music, Newspapers & Magazines, Office Supplies, Parking, Paycheck, Personal Care, Pet Food & Supplies, Pet Grooming, Pets, Pharmacy, Printing, Property Tax, Public Transportation, Reimbursement, Rental Car & Taxi, Restaurants, Sales Tax, Sell, Services & Parts, Service Fee, Shipping, Shopping, Spa & Massage, Sporting Goods, Sports, State Tax, Student Loan, Taxes, Television, Toys, Trade Commissions, Transfer, Transfer for Cash Spending, Travel, Tuition, Uncategorized, Utilities, Vacation, Veterinary, Internet / Broadband Charges
   */
  category?: string;
  /** If provided by the institution, the following values may be returned in the field of a record: */
  type?: TransactionTypeEnum;
  /** Field to indicate how transaction is matched with pay statement */
  payStatementMatchTypes?: ReportTransactionPayStatementMatchTypesEnum[];
  /** Combines the description and memo data together, removes any duplicated information from description to memo, and removes any numbers or special characters */
  bestRepresentation?: string;
  /** The type of investment security (VOA only) */
  securityType?: string;
  /** Investment symbol (VOA only) */
  symbol?: string;
  /** Commission amount */
  commission?: number;
}

export const reportTransactionSchema: Schema<ReportTransaction> = object({
  id: ['id', optional(bigint())],
  amount: ['amount', optional(number())],
  postedDate: ['postedDate', optional(bigint())],
  description: ['description', optional(string())],
  memo: ['memo', optional(string())],
  normalizedPayee: ['normalizedPayee', optional(string())],
  institutionTransactionId: ['institutionTransactionId', optional(string())],
  category: ['category', optional(string())],
  type: ['type', optional(transactionTypeEnumSchema)],
  payStatementMatchTypes: [
    'payStatementMatchTypes',
    optional(array(reportTransactionPayStatementMatchTypesEnumSchema)),
  ],
  bestRepresentation: ['bestRepresentation', optional(string())],
  securityType: ['securityType', optional(string())],
  symbol: ['symbol', optional(string())],
  commission: ['commission', optional(number())],
});
