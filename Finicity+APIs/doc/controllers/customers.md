# Customers

Enroll and manage customers

```ts
const customersController = new CustomersController(client);
```

## Class Name

`CustomersController`

## Methods

* [Add Testing Customer](../../doc/controllers/customers.md#add-testing-customer)
* [Add Customer](../../doc/controllers/customers.md#add-customer)
* [Get Customers](../../doc/controllers/customers.md#get-customers)
* [Get Customer With App Data](../../doc/controllers/customers.md#get-customer-with-app-data)
* [Get Customer](../../doc/controllers/customers.md#get-customer)
* [Modify Customer](../../doc/controllers/customers.md#modify-customer)
* [Delete Customer](../../doc/controllers/customers.md#delete-customer)


# Add Testing Customer

Enroll a testing customer ([Test Drive](https://signup.finicity.com/) accounts).

For using Testing customers, register a test application with your systems engineer or account manager. Then use that testing `applicationId` when creating testing customers. Testing customers can only be assigned to testing OAuth applications and can only add accounts to Finbank OAuth for testing OAuth implementation as well as other Finbank testing institutions.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async addTestingCustomer(
  body: NewCustomer,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatedCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NewCustomer`](../../doc/models/new-customer.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatedCustomer`](../../doc/models/created-customer.md)

## Example Usage

```ts
const body: NewCustomer = {
  username: 'customerusername1',
  firstName: 'John',
  lastName: 'Smith',
  applicationId: '123456789',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.addTestingCustomer(body);
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


# Add Customer

Enroll an active customer, which is the actual owner of one or more real-world accounts. This is a billable customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async addCustomer(
  body: NewCustomer,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatedCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NewCustomer`](../../doc/models/new-customer.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatedCustomer`](../../doc/models/created-customer.md)

## Example Usage

```ts
const body: NewCustomer = {
  username: 'customerusername1',
  firstName: 'John',
  lastName: 'Smith',
  applicationId: '123456789',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.addCustomer(body);
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
| 429 | The service can't accept more requests or is not available from the [Test Drive](https://signup.finicity.com/). | `ApiError` |


# Get Customers

Find all customers enrolled by the current partner, where the search text is found in the customer's username or any combination of `firstName` and `lastName` fields. If no search text is provided, all customers will be returned.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomers(
  username?: string,
  type?: string,
  search?: string,
  start?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Customers>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string \| undefined` | Query, Optional | Username for exact match (will return 0 or 1 record) |
| `type` | `string \| undefined` | Query, Optional | "testing" or "active" to return only customers of that type, or leave empty to return all customers. |
| `search` | `string \| undefined` | Query, Optional | The text you wish to match. Leave this empty if you wish to return all customers. Must be URL-encoded (see also: [Handling Spaces in Queries](https://docs.finicity.com/endpoint-syntax-and-format/)). |
| `start` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `25`<br>**Constraints**: `<= 1000` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Customers`](../../doc/models/customers.md)

## Example Usage

```ts
const username = 'customerusername1';

const type = 'active';

const search = 'searchvalue';

const start = 1;

const limit = 25;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.getCustomers(
  username,
  type,
  search,
  start,
  limit
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


# Get Customer With App Data

Retrieve a customer along with additional details about the OAuth application.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomerWithAppData(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerWithAppData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerWithAppData`](../../doc/models/customer-with-app-data.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.getCustomerWithAppData(customerId);
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


# Get Customer

Retrieve a customer by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCustomer(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Customer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Customer`](../../doc/models/customer.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.getCustomer(customerId);
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


# Modify Customer

Modify an enrolled customer by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async modifyCustomer(
  customerId: string,
  body: CustomerUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`CustomerUpdate`](../../doc/models/customer-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

const body: CustomerUpdate = {
  firstName: 'John',
  lastName: 'Smith',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.modifyCustomer(
  customerId,
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


# Delete Customer

Completely remove a customer from the system. This will remove the customer and all associated accounts and transactions.

⚠️ Use this service carefully! It will not pause for confirmation before performing the operation!

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async deleteCustomer(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await customersController.deleteCustomer(customerId);
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
| 401 | The request lacks valid authentication credentials. Check "Finicity-App-Key" or "Finicity-App-Token". | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | The resource doesn't exist | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

