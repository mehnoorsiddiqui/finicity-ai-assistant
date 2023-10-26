# Verify Assets

```ts
const verifyAssetsController = new VerifyAssetsController(client);
```

## Class Name

`VerifyAssetsController`

## Methods

* [Generate VOA Report](../../doc/controllers/verify-assets.md#generate-voa-report)
* [Generate VOA With Income Report](../../doc/controllers/verify-assets.md#generate-voa-with-income-report)
* [Generate Prequalification Report](../../doc/controllers/verify-assets.md#generate-prequalification-report)
* [Generate Prequalification Non CRA Report](../../doc/controllers/verify-assets.md#generate-prequalification-non-cra-report)


# Generate VOA Report

Generate a Verification of Assets (VOA) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to twelve months of transaction history for each account and uses this information to generate the VOA report.

This is a premium service. The billing rate is the variable rate for Verification of Assets under the current subscription plan. The billable event is the successful generation of a VOA report.

A report consumer must be created for the given customer before calling this API (see "Consumers").

If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOAReport(
  customerId: string,
  body: ReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportData`](../../doc/models/report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: ReportConstraints = {
  accountIds: '5011648377 5011648378 5011648379',
  showNsf: false,
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyAssetsController.generateVOAReport(
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


# Generate VOA With Income Report

Generate a Verification of Assets with Income (VOAI) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to 24 months of transaction history for each account and uses this information to generate the VOAI report. The report includes 1 - 6 months of all debit and credit transactions for asset verification. By default, the history is set to 61 days, however, you can change the transaction history in this section by setting the `fromDate` parameter. The report also includes up to 24 months of income credit transactions (ordered by account and confidence level) regardless of `fromDate` for income verification.

This is a premium service. The billable event is the successful generation of a VOAI report.

A report consumer must be created for the given customer before calling this API (see "Consumers").

If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOAWithIncomeReport(
  customerId: string,
  body: ReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportData`](../../doc/models/report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: ReportConstraints = {
  accountIds: '5011648377 5011648378 5011648379',
  showNsf: false,
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyAssetsController.generateVOAWithIncomeReport(
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


# Generate Prequalification Report

Generate a Prequalification Report (`preQualVoa`) for all checking, savings, money market, and investment accounts for the given customer. This service retrieves account and owner information as well as the number of NSFs for any account that is a checking account for the customer.

This is a premium service. The billing rate is billed per report for the Prequalification report.

A report consumer must be created for the given customer before calling this API (see "Consumers").

If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generatePrequalificationReport(
  customerId: string,
  body: ReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportData`](../../doc/models/report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: ReportConstraints = {
  accountIds: '5011648377 5011648378 5011648379',
  showNsf: false,
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyAssetsController.generatePrequalificationReport(
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


# Generate Prequalification Non CRA Report

Retrieve all checking, savings, money market, and investment accounts for a customer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.

This is a premium service, billable per every successful API call.

If no account type of checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generatePrequalificationNonCRAReport(
  customerId: string,
  body: ReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`ReportConstraints`](../../doc/models/report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportData`](../../doc/models/report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: ReportConstraints = {
  accountIds: '5011648377 5011648378 5011648379',
  showNsf: false,
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyAssetsController.generatePrequalificationNonCRAReport(
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

