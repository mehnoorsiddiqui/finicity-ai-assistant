# Consumers

Create and manage consumers associated with customers in order to use report services

```ts
const consumersController = new ConsumersController(client);
```

## Class Name

`ConsumersController`

## Methods

* [Create Consumer](../../doc/controllers/consumers.md#create-consumer)
* [Get Consumer for Customer](../../doc/controllers/consumers.md#get-consumer-for-customer)
* [Get Consumer](../../doc/controllers/consumers.md#get-consumer)
* [Modify Consumer](../../doc/controllers/consumers.md#modify-consumer)


# Create Consumer

Create a consumer record associated with the given customer. A consumer persists as the owner of any reports that are generated, even after the original customer is deleted from the system.

A consumer must be created for the given customer before calling any of the "Generate Report" services.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async createConsumer(
  customerId: string,
  body: NewConsumer,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatedConsumer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`NewConsumer`](../../doc/models/new-consumer.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatedConsumer`](../../doc/models/created-consumer.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: NewConsumer = {
  firstName: 'John',
  lastName: 'Smith',
  address: '434 W Ascension Way',
  city: 'Murray',
  state: 'UT',
  zip: '84123',
  phone: '1-800-986-3343',
  ssn: '999-99-9999',
  birthday: {
    year: 1989,
    month: 8,
    dayOfMonth: 13,
  },
  email: 'finicity@test.com',
  suffix: 'Mr',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await consumersController.createConsumer(
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
| 409 | The resource already exists | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Consumer for Customer

Get the details of a consumer record by customer ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getConsumerForCustomer(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Consumer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Consumer`](../../doc/models/consumer.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await consumersController.getConsumerForCustomer(customerId);
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


# Get Consumer

Get the details of a consumer record by consumer ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getConsumer(
  consumerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Consumer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | The consumer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Consumer`](../../doc/models/consumer.md)

## Example Usage

```ts
const consumerId = '0bf46322c167b562e6cbed9d40e19a4c';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await consumersController.getConsumer(consumerId);
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


# Modify Consumer

Modify an existing consumer. All fields are required for a consumer record, but individual fields for this call are optional because fields that are not specified will be left unchanged.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async modifyConsumer(
  consumerId: string,
  body: ConsumerUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | The consumer ID |
| `body` | [`ConsumerUpdate`](../../doc/models/consumer-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const consumerId = '0bf46322c167b562e6cbed9d40e19a4c';

const body: ConsumerUpdate = {
  firstName: 'John',
  lastName: 'Smith',
  address: '434 W Ascension Way',
  city: 'Murray',
  state: 'UT',
  zip: '84123',
  phone: '1-800-986-3343',
  ssn: '999-99-9999',
  email: 'finicity@test.com',
  suffix: 'Mr',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await consumersController.modifyConsumer(
  consumerId,
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

