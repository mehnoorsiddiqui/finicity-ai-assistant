# Bank Statements

```ts
const bankStatementsController = new BankStatementsController(client);
```

## Class Name

`BankStatementsController`

## Methods

* [Get Customer Account Statement](../../doc/controllers/bank-statements.md#get-customer-account-statement)
* [Generate Statement Report](../../doc/controllers/bank-statements.md#generate-statement-report)


# Get Customer Account Statement

Retrieve the customer's bank statements in PDF format. Up to 24 months of history is available depending on the financial institution. Since this is a premium service, charges incur per each successful statement retrieved.

Our list of [Supported Institutions](https://docs.finicity.com/institutions/) confirms that you can retrieve statements for the following account types:

* Checking
* Savings
* Money market
* CDs
* Investments
* Mortgage
* Credit cards
* Loans
* Line of credit

Note: setting the timeout to 180 seconds is recommended to allow enough time for a response.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerAccountStatement(
  customerId: string,
  accountId: string,
  index?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `index` | `number \| undefined` | Query, Optional | Request statements from 1-24. By default, 1 is the most recent statement. Increase the index value to count back (by month) and retrieve its most recent statement.<br>**Default**: `1`<br>**Constraints**: `<= 24` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

const index = 1;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await bankStatementsController.getCustomerAccountStatement(
  customerId,
  accountId,
  index
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


# Generate Statement Report

Generate a Statement Report report for the given accounts under the given customer.

This is a premium service. A billable event will be created upon the successful generation of the Statement Report.

A report consumer must be created for the given customer before calling this API (see "Consumers").

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateStatementReport(
  customerId: string,
  body: StatementReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`StatementReportConstraints`](../../doc/models/statement-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementReportData`](../../doc/models/statement-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: StatementReportConstraints = {
  statementReportData: {
    accountId: BigInt(5011648377),
    index: 1,
  },
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await bankStatementsController.generateStatementReport(
  customerId,
  body,
  callbackUrl
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

