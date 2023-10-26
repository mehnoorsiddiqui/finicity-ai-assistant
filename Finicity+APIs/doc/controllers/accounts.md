# Accounts

Fetch or refresh customer accounts

```ts
const accountsController = new AccountsController(client);
```

## Class Name

`AccountsController`

## Methods

* [Get Customer Accounts by Institution Login](../../doc/controllers/accounts.md#get-customer-accounts-by-institution-login)
* [Refresh Customer Accounts by Institution Login](../../doc/controllers/accounts.md#refresh-customer-accounts-by-institution-login)
* [Delete Customer Accounts by Institution Login](../../doc/controllers/accounts.md#delete-customer-accounts-by-institution-login)
* [Get Customer Account](../../doc/controllers/accounts.md#get-customer-account)
* [Delete Customer Account](../../doc/controllers/accounts.md#delete-customer-account)
* [Get Customer Accounts](../../doc/controllers/accounts.md#get-customer-accounts)
* [Refresh Customer Accounts](../../doc/controllers/accounts.md#refresh-customer-accounts)
* [Get Customer Accounts by Institution](../../doc/controllers/accounts.md#get-customer-accounts-by-institution)
* [Load Historic Transactions for Customer Account](../../doc/controllers/accounts.md#load-historic-transactions-for-customer-account)
* [Get Account Owner](../../doc/controllers/accounts.md#get-account-owner)


# Get Customer Accounts by Institution Login

Get all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerAccountsByInstitutionLogin(
  customerId: string,
  institutionLoginId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `institutionLoginId` | `string` | Template, Required | The institution login ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = '1005061234';

const institutionLoginId = '1007302745';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.getCustomerAccountsByInstitutionLogin(
  customerId,
  institutionLoginId
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


# Refresh Customer Accounts by Institution Login

Refresh account and transaction data for all accounts associated with a given `institutionLoginId` with a connection to the institution.

Client apps are not permitted to automate calls to the "Refresh" services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.

Apps may call "Refresh" services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async refreshCustomerAccountsByInstitutionLogin(
  customerId: string,
  institutionLoginId: string,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `institutionLoginId` | `string` | Template, Required | The institution login ID |
| `body` | `unknown \| undefined` | Body, Optional | No payload expected |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = '1005061234';

const institutionLoginId = '1007302745';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.refreshCustomerAccountsByInstitutionLogin(
  customerId,
  institutionLoginId
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


# Delete Customer Accounts by Institution Login

Remove from the Finicity system the set of accounts matching the institution login ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async deleteCustomerAccountsByInstitutionLogin(
  customerId: string,
  institutionLoginId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `institutionLoginId` | `string` | Template, Required | The institution login ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

const institutionLoginId = '1007302745';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.deleteCustomerAccountsByInstitutionLogin(
  customerId,
  institutionLoginId
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


# Get Customer Account

Get a customer account by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerAccount(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccount`](../../doc/models/customer-account.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.getCustomerAccount(
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


# Delete Customer Account

Remove the given account from the Finicity system.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async deleteCustomerAccount(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.deleteCustomerAccount(
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


# Get Customer Accounts

Get all accounts owned by the given customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerAccounts(
  customerId: string,
  status?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `status` | `string \| undefined` | Query, Optional | A filter to fetch account in the given status |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = '1005061234';

const status = 'pending';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.getCustomerAccounts(
  customerId,
  status
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


# Refresh Customer Accounts

Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.

Client apps are not permitted to automate calls to the "Refresh" services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.

Apps may call "Refresh" services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async refreshCustomerAccounts(
  customerId: string,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | `unknown \| undefined` | Body, Optional | No payload expected |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.refreshCustomerAccounts(customerId);
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


# Get Customer Accounts by Institution

Get all active accounts owned by the given customer at the given institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerAccountsByInstitution(
  customerId: string,
  institutionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `institutionId` | `string` | Template, Required | The institution ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = '1005061234';

const institutionId = '4222';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.getCustomerAccountsByInstitution(
  customerId,
  institutionId
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


# Load Historic Transactions for Customer Account

Connect to the account's financial institution and load up to 24 months of historic transactions for the account. Length of history varies by institution.

This is a premium service. The billable event is a call to this service specifying a customer ID that has not been seen before by this service. (If this service is called multiple times with the same customer ID, to load transactions from multiple accounts, only one billable event has occurred.)

The recommended timeout setting for this request is 180 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

The date range sent to the institution is calculated from the account's `createdDate`. This means that calling this service a second time for the same account normally will not add any new transactions for the account. For this reason, a second call to this service for a known account ID will usually return immediately.

In a few specific scenarios, it may be desirable to force a second connection to the institution for a known account ID. Some examples are:

* The institution's policy has changed, making more transactions available
* Finicity has now added a longer transaction history support for the institution
* The first call encountered an error, and the resulting Aggregation Ticket has now been fixed by the Finicity Support Team

In these cases, the POST request can contain the parameter `force=true` in the request body to force the second connection.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async loadHistoricTransactionsForCustomerAccount(
  customerId: string,
  accountId: string,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `body` | `unknown \| undefined` | Body, Optional | No payload expected |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.loadHistoricTransactionsForCustomerAccount(
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


# Get Account Owner

Retrieve the names and addresses of the account owner from a financial institution.

Note: this is a premium service, billable per every successful API call.

This service retrieves account data from the institution. This usually returns quickly, but in some scenarios may take a few minutes to complete. In the event of a timeout condition, retry the call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAccountOwner(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountOwner>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountOwner`](../../doc/models/account-owner.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await accountsController.getAccountOwner(
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

