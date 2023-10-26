# App Registration

```ts
const appRegistrationController = new AppRegistrationController(client);
```

## Class Name

`AppRegistrationController`

## Methods

* [Register App](../../doc/controllers/app-registration.md#register-app)
* [Modify App Registration](../../doc/controllers/app-registration.md#modify-app-registration)
* [Get App Registration Status](../../doc/controllers/app-registration.md#get-app-registration-status)
* [Set Customer App ID](../../doc/controllers/app-registration.md#set-customer-app-id)
* [Migrate Institution Login Accounts](../../doc/controllers/app-registration.md#migrate-institution-login-accounts)


# Register App

Register a new application to access financial institutions using OAuth connections.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async registerApp(
  body: Application,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegisteredApplication>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Application`](../../doc/models/application.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegisteredApplication`](../../doc/models/registered-application.md)

## Example Usage

```ts
const body: Application = {
  appDescription: 'The app that makes your budgeting experience awesome',
  appName: 'Awesome Budget App',
  appUrl: 'https://www.finicity.com/',
  ownerAddressLine1: '434 W Ascension Way',
  ownerAddressLine2: 'Suite #200',
  ownerCity: 'Murray',
  ownerCountry: 'USA',
  ownerName: 'Finicity',
  ownerPostalCode: '84123',
  ownerState: 'UT',
  image: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await appRegistrationController.registerApp(body);
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


# Modify App Registration

Update a registered application.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async modifyAppRegistration(
  preAppId: string,
  body: Application,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegisteredApplication>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preAppId` | `string` | Template, Required | The application registration tracking ID |
| `body` | [`Application`](../../doc/models/application.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegisteredApplication`](../../doc/models/registered-application.md)

## Example Usage

```ts
const preAppId = '2581';

const body: Application = {
  appDescription: 'The app that makes your budgeting experience awesome',
  appName: 'Awesome Budget App',
  appUrl: 'https://www.finicity.com/',
  ownerAddressLine1: '434 W Ascension Way',
  ownerAddressLine2: 'Suite #200',
  ownerCity: 'Murray',
  ownerCountry: 'USA',
  ownerName: 'Finicity',
  ownerPostalCode: '84123',
  ownerState: 'UT',
  image: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await appRegistrationController.modifyAppRegistration(
  preAppId,
  body
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


# Get App Registration Status

Get the status of your application registration(s).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAppRegistrationStatus(
  preAppId?: string,
  applicationId?: string,
  status?: string,
  appName?: string,
  submittedDate?: bigint,
  modifiedDate?: bigint,
  page?: number,
  pageSize?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AppStatuses>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preAppId` | `string \| undefined` | Query, Optional | The application registration tracking ID |
| `applicationId` | `string \| undefined` | Query, Optional | The application ID |
| `status` | `string \| undefined` | Query, Optional | Look up app registration requests by status |
| `appName` | `string \| undefined` | Query, Optional | Look up app registration requests by app name |
| `submittedDate` | `bigint \| undefined` | Query, Optional | Look up app registration requests by the date they were submitted |
| `modifiedDate` | `bigint \| undefined` | Query, Optional | Look up app registration requests by the date the request was updated. This can be used to determine when a request was updated to "A" or "R". |
| `page` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `pageSize` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AppStatuses`](../../doc/models/app-statuses.md)

## Example Usage

```ts
const preAppId = '2581';

const applicationId = '123456789';

const status = 'P';

const appName = 'Awesome Budget App';

const submittedDate = BigInt(1607450357);

const modifiedDate = BigInt(1607450357);

const page = 1;

const pageSize = 20;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await appRegistrationController.getAppRegistrationStatus(
  preAppId,
  applicationId,
  status,
  appName,
  submittedDate,
  modifiedDate,
  page,
  pageSize
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


# Set Customer App ID

If you have multiple applications for a single client, and you want to register their applications to access financial institutions using OAuth connections, then use this API to assign applications to an existing customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async setCustomerAppID(
  customerId: string,
  applicationId: string,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `applicationId` | `string` | Template, Required | The application ID |
| `body` | `unknown \| undefined` | Body, Optional | No payload expected |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

const applicationId = '123456789';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await appRegistrationController.setCustomerAppID(
  customerId,
  applicationId
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


# Migrate Institution Login Accounts

The `institutionLoginId` parameter uses Finicity's internal FI mapping to move accounts from the current FI legacy connection to the new OAuth FI connection.

This API returns a list of accounts for the given institution login ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async migrateInstitutionLoginAccounts(
  customerId: string,
  institutionLoginId: string,
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerAccounts>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `institutionLoginId` | `string` | Template, Required | The institution login ID |
| `body` | `unknown` | Body, Required | No payload expected |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerAccounts`](../../doc/models/customer-accounts.md)

## Example Usage

```ts
const customerId = '1005061234';

const institutionLoginId = '1007302745';

const body = { 'key1': 'val1', 'key2': 'val2' };

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await appRegistrationController.migrateInstitutionLoginAccounts(
  customerId,
  institutionLoginId,
  body
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

