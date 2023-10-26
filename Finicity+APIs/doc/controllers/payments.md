# Payments

Fetch ACH details and account balances

```ts
const paymentsController = new PaymentsController(client);
```

## Class Name

`PaymentsController`

## Methods

* [Get Account ACH Details](../../doc/controllers/payments.md#get-account-ach-details)
* [Get Available Balance Live](../../doc/controllers/payments.md#get-available-balance-live)
* [Get Available Balance](../../doc/controllers/payments.md#get-available-balance)


# Get Account ACH Details

Return the real account number and routing number details for an ACH payment.

Note: this is a premium service, billable per every successful API call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAccountACHDetails(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ACHDetails>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ACHDetails`](../../doc/models/ach-details.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentsController.getAccountACHDetails(
  customerId,
  accountId
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


# Get Available Balance Live

Retrieve the available and cleared account balances for a single account in real-time directly from a financial institution.

Note: this is a premium service, billable per every successful API call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAvailableBalanceLive(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AvailableBalance>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AvailableBalance`](../../doc/models/available-balance.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentsController.getAvailableBalanceLive(
  customerId,
  accountId
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


# Get Available Balance

Retrieve the latest cached available and cleared account balances for a customer. Since we update and store balances throughout the day, this is the most accurate balance information available when a connection to a financial institution is unavailable or when a faster response is needed.

Note: this is a premium service, billable per every successful API call. Enrollment is required.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAvailableBalance(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AvailableBalance>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AvailableBalance`](../../doc/models/available-balance.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentsController.getAvailableBalance(
  customerId,
  accountId
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

