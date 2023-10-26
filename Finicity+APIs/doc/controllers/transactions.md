# Transactions

Fetch customer and account transactions and generate reports asynchronously

```ts
const transactionsController = new TransactionsController(client);
```

## Class Name

`TransactionsController`

## Methods

* [Get All Customer Transactions](../../doc/controllers/transactions.md#get-all-customer-transactions)
* [Get Customer Transaction](../../doc/controllers/transactions.md#get-customer-transaction)
* [Get Customer Account Transactions](../../doc/controllers/transactions.md#get-customer-account-transactions)
* [Generate Transactions Report](../../doc/controllers/transactions.md#generate-transactions-report)


# Get All Customer Transactions

Get all transactions available for this customer within the given date range, across all accounts. This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is provided), with a maximum of 1000 transactions per request.

Standard consumer aggregation provides up to 180 days of transactions prior to the date each account was added to the Finicity system. To access older transactions, you must first call the service Load Historic Transactions for Account.

There is no limit for the size of the window between `fromDate` and `toDate`, however, the maximum number of transactions returned on one page is 1000.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAllCustomerTransactions(
  customerId: string,
  fromDate: bigint,
  toDate: bigint,
  start?: number,
  limit?: number,
  sort?: string,
  includePending?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transactions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `fromDate` | `bigint` | Query, Required | A "from" date |
| `toDate` | `bigint` | Query, Required | A "to" date |
| `start` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `25`<br>**Constraints**: `<= 1000` |
| `sort` | `string \| undefined` | Query, Optional | Date sort order: "asc" for ascending, "desc" for descending<br>**Default**: `'desc'` |
| `includePending` | `boolean \| undefined` | Query, Optional | If pending transactions must be included<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transactions`](../../doc/models/transactions.md)

## Example Usage

```ts
const customerId = '1005061234';

const fromDate = BigInt(1607450357);

const toDate = BigInt(1607450357);

const start = 1;

const limit = 25;

const sort = 'desc';

const includePending = false;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transactionsController.getAllCustomerTransactions(
  customerId,
  fromDate,
  toDate,
  start,
  limit,
  sort,
  includePending
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The request was rejected | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 401 | The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token". | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | The resource doesn't exist | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Customer Transaction

Get details for the given transaction.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerTransaction(
  customerId: string,
  transactionId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transaction>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `transactionId` | `bigint` | Template, Required | A Finicity transaction ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transaction`](../../doc/models/transaction.md)

## Example Usage

```ts
const customerId = '1005061234';

const transactionId = BigInt(21284820852);

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transactionsController.getCustomerTransaction(
  customerId,
  transactionId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The request was rejected | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 401 | The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token". | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | The resource doesn't exist | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Customer Account Transactions

Get all transactions available for this customer account within the given date range. This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is provided), with a maximum of 1000 transactions per request.

Standard consumer aggregation provides up to 180 days of transactions prior to the date each account was added to the Finicity system. To access older transactions, you must first call the Cash Flow Verification service Load Historic Transactions for Account.

There is no limit for the size of the window between `fromDate` and `toDate`, however, the maximum number of transactions returned on one page is 1000.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
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
): Promise<ApiResponse<Transactions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `fromDate` | `bigint` | Query, Required | A "from" date |
| `toDate` | `bigint` | Query, Required | A "to" date |
| `start` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `25`<br>**Constraints**: `<= 1000` |
| `sort` | `string \| undefined` | Query, Optional | Date sort order: "asc" for ascending, "desc" for descending<br>**Default**: `'desc'` |
| `includePending` | `boolean \| undefined` | Query, Optional | If pending transactions must be included<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transactions`](../../doc/models/transactions.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

const fromDate = BigInt(1607450357);

const toDate = BigInt(1607450357);

const start = 1;

const limit = 25;

const sort = 'desc';

const includePending = false;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transactionsController.getCustomerAccountTransactions(
  customerId,
  accountId,
  fromDate,
  toDate,
  start,
  limit,
  sort,
  includePending
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The request was rejected | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 401 | The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token". | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | The resource doesn't exist | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Generate Transactions Report

Generate a Transaction Report for the given accounts under the given customer. This service retrieves up to 24 months of transaction history for the given customer. It then uses this information to generate the Transaction Report.

This is a premium service. A billable event will be created upon the successful generation of the Transactions Report.

A report consumer must be created for the given customer before calling this API (see "Consumers").

There cannot be more than 24 months between `fromDate` and `toDate`.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateTransactionsReport(
  customerId: string,
  toDate: bigint,
  body: ReportConstraints,
  callbackUrl?: string,
  includePending?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `toDate` | `bigint` | Query, Required | A "to" date |
| `body` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `includePending` | `boolean \| undefined` | Query, Optional | If pending transactions must be included<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsReportData`](../../doc/models/transactions-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const toDate = BigInt(1607450357);

const body: ReportConstraints = {
  accountIds: '5011648377 5011648378 5011648379',
  showNsf: false,
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

const includePending = false;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transactionsController.generateTransactionsReport(
  customerId,
  toDate,
  body,
  callbackUrl,
  includePending
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The request was rejected | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 401 | The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token". | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | The resource doesn't exist | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

