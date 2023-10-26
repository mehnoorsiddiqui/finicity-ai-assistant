# Cash Flow

```ts
const cashFlowController = new CashFlowController(client);
```

## Class Name

`CashFlowController`

## Methods

* [Generate Cash Flow Business Report](../../doc/controllers/cash-flow.md#generate-cash-flow-business-report)
* [Generate Cash Flow Personal Report](../../doc/controllers/cash-flow.md#generate-cash-flow-personal-report)


# Generate Cash Flow Business Report

Generate a Cash Flow Report (Business) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given account. It then uses this information to generate the CFR report. A consumer is not required to generate this report.

This report is not provided under FCRA rules, and this report is not available in the Finicity Consumer Portal for the borrower to view.

If no account of type checking or savings is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateCashFlowBusinessReport(
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
  const { result, ...httpResponse } = await cashFlowController.generateCashFlowBusinessReport(
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


# Generate Cash Flow Personal Report

Generate a Cash Flow Report (Personal) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given account. It then uses this information to generate the CFR report.

This report is provided under FCRA rules, with Finicity acting as the CRA (Consumer Reporting Agency). If an individual account is included in the report - for example, with an individual acting as an personal guarantor on the loan - then this version of the report should be used. In case of an adverse action on the loan where the decision was based on this report, then the borrower can be referred to the [Finicity Consumer Portal](https://consumer.finicityreports.com) where they can view this report and submit a dispute if they feel any information in this report is inaccurate.

A report consumer must be created for the given customer before calling this API (see "Consumers").

If no account of type checking or savings is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateCashFlowPersonalReport(
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
  const { result, ...httpResponse } = await cashFlowController.generateCashFlowPersonalReport(
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

