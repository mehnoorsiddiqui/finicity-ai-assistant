# Verify Incomeand Employment

```ts
const verifyIncomeandEmploymentController = new VerifyIncomeandEmploymentController(client);
```

## Class Name

`VerifyIncomeandEmploymentController`

## Methods

* [Generate VOI Report](../../doc/controllers/verify-incomeand-employment.md#generate-voi-report)
* [Generate VOE Payroll Report](../../doc/controllers/verify-incomeand-employment.md#generate-voe-payroll-report)
* [Generate VOE Transactions Report](../../doc/controllers/verify-incomeand-employment.md#generate-voe-transactions-report)
* [Generate Pay Statement Report](../../doc/controllers/verify-incomeand-employment.md#generate-pay-statement-report)
* [Generate VOIE Paystub With TX Verify Report](../../doc/controllers/verify-incomeand-employment.md#generate-voie-paystub-with-tx-verify-report)
* [Generate VOIE Paystub Report](../../doc/controllers/verify-incomeand-employment.md#generate-voie-paystub-report)
* [Refresh VOIE Payroll Report](../../doc/controllers/verify-incomeand-employment.md#refresh-voie-payroll-report)


# Generate VOI Report

Generate a Verification of Income (VOI) report for all checking, savings, and money market accounts for the given customer. This service retrieves up to two years of transaction history for each account and uses this information to generate the VOI report.

This is a premium service. The billing rate is the variable rate for Verification of Income under the current subscription plan. The billable event is the successful generation of a VOI report.

If no account of type checking, savings, or money market is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOIReport(
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
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOIReport(
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


# Generate VOE Payroll Report

Premium Service: A billable event when the API response is successful.

MVS Implementation Options: Direct API Integration.

Used as a complementary report to the VOIE-Payroll report. This report is used to fulfill the pre-close VOE requirements. It retrieves the customer's employment details and employment status through the payroll source without any income information.

To generate this report, pass the values from the customer `SSN`, `DOB`, and the `reportId` from the first VOIE-Payroll report generated after the Connect session.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOEPayrollReport(
  customerId: string,
  body: PayrollReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayrollReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`PayrollReportConstraints`](../../doc/models/payroll-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PayrollReportData`](../../doc/models/payroll-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: PayrollReportConstraints = {
  payrollData: {
    ssn: '999999999',
    dob: BigInt(1607450357),
    reportId: 'u4hstnnak45g',
  },
  payStatementsFromDate: BigInt(1607450357),
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOEPayrollReport(
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


# Generate VOE Transactions Report

Premium Service: A billable event when the API response is successful.

MVS-Direct integration developers only.

Used as a complimentary report to the VOA with Income and VOIE - Paystub (with TXVerify) reports and used to fulfill the pre-close VOE requirements.

Retrieve the latest credit transaction information from the borrower's connected bank accounts and groups them into income streams so that you can view their payment history to ensure a direct deport was made within the expected cadence. The report displays transaction descriptions without any dollar amounts so that income re-verification isn't necessary.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOETransactionsReport(
  customerId: string,
  body: VOETransactionsReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOETransactionsReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`VOETransactionsReportConstraints`](../../doc/models/voe-transactions-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOETransactionsReportData`](../../doc/models/voe-transactions-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: VOETransactionsReportConstraints = {
  reportId: 'u4hstnnak45g',
  accountIds: '5011648377 5011648378 5011648379',
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOETransactionsReport(
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


# Generate Pay Statement Report

Generate Pay Statement Extraction Report for the given customer. This service accepts asset IDs of the stored pay statements to generate a Pay Statement Extraction Report.

This is a premium service. The billing rate is the variable rate for Pay Statement Extraction Report under the current subscription plan. The billable event is the successful generation of a Pay Statement Extraction Report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generatePayStatementReport(
  customerId: string,
  body: PayStatementReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayStatementReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`PayStatementReportConstraints`](../../doc/models/pay-statement-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PayStatementReportData`](../../doc/models/pay-statement-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: PayStatementReportConstraints = {
  paystatementReport: {
    assetIds: [
      'assetIds3',
      'assetIds4',
      'assetIds5'
    ],
    extractEarnings: true,
    extractDeductions: true,
    extractDirectDeposit: true,
  },
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generatePayStatementReport(
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


# Generate VOIE Paystub With TX Verify Report

Generate a VOIE - Paystub (with TXVerify) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given accounts. It then uses this information as well as the provided paystub(s), which are passed into the request body as asset IDs (generated using the Store Customer Pay Statement API) to generate the VOIE - Paystub (with TXVerify) report.

Note: if you are using this endpoint to refresh the bank transactions, use the same asset ID from the first report. A new paystub is not required unless the paystub is too old for underwriting requirements. Using the same asset ID that was on the original report and the previously extracted details will be used to speed up report generation response time.

This is a premium service. The billing rate is the variable rate for VOIE TXVerify under the current subscription plan. The billable event is the successful generation of a VOIE TXVerify Report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOIEPaystubWithTXVerifyReport(
  customerId: string,
  body: VOIEWithTXVerifyReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPaystubWithTXVerifyReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`VOIEWithTXVerifyReportConstraints`](../../doc/models/voie-with-tx-verify-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPaystubWithTXVerifyReportData`](../../doc/models/voie-paystub-with-tx-verify-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: VOIEWithTXVerifyReportConstraints = {
  voieWithInterviewData: {
    txVerifyInterview: [
      {
        assetId: '097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178',
        accounts: [
          '5011648377',
          '5011648378',
          '5011648379'
        ],
      }
    ],
    extractEarnings: true,
    extractDeductions: true,
    extractDirectDeposit: true,
  },
  accountIds: '5011648377 5011648378 5011648379',
  fromDate: BigInt(1607450357),
  incomeStreamConfidenceMinimum: 50,
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOIEPaystubWithTXVerifyReport(
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


# Generate VOIE Paystub Report

Generate a VOIE - Paystub report. This service uses the provided paystub(s), which are passed into the request body as asset IDs (generated using the "Store Customer Pay Statement" API) to generate the VOIE - Paystub report with digitized paystub details.

This is a premium service. The billing rate is the variable rate for VOIE - Paystub under the current subscription plan. The billable event is the successful generation of a VOIE - Paystub Report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateVOIEPaystubReport(
  customerId: string,
  body: VOIEWithStatementReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPaystubWithStatementReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`VOIEWithStatementReportConstraints`](../../doc/models/voie-with-statement-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPaystubWithStatementReportData`](../../doc/models/voie-paystub-with-statement-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: VOIEWithStatementReportConstraints = {
  voieWithStatementData: {
    assetIds: [
      'assetIds1',
      'assetIds2',
      'assetIds3'
    ],
    extractEarnings: true,
    extractDeductions: true,
    extractDirectDeposit: true,
  },
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.generateVOIEPaystubReport(
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


# Refresh VOIE Payroll Report

The VOIE – Payroll report generates when the customer completes Connect. Lenders, who commonly use this report for pre-close verification employment check, can refresh this report by passing the consumer's SSN, DOB, and the `reportId` from the first VOIE – Payroll report they received.

We'll refresh this report and update any new pay histories since the first report generated, including borrower's employment status as active or not.

Note: lenders can only refresh this report one time in a 60-day period starting from the date of the first report. Any further report refreshes will incur additional charges.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async refreshVOIEPayrollReport(
  customerId: string,
  body: PayrollReportConstraints,
  callbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayrollReportData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`PayrollReportConstraints`](../../doc/models/payroll-report-constraints.md) | Body, Required | - |
| `callbackUrl` | `string \| undefined` | Query, Optional | A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with 2xx HTTP status code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PayrollReportData`](../../doc/models/payroll-report-data.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: PayrollReportConstraints = {
  payrollData: {
    ssn: '999999999',
    dob: BigInt(1607450357),
    reportId: 'u4hstnnak45g',
  },
  payStatementsFromDate: BigInt(1607450357),
};

const callbackUrl = 'https://finicity-test/webhook';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await verifyIncomeAndEmploymentController.refreshVOIEPayrollReport(
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

