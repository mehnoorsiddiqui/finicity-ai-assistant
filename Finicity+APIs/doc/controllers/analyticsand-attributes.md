# Analyticsand Attributes

```ts
const analyticsandAttributesController = new AnalyticsandAttributesController(client);
```

## Class Name

`AnalyticsandAttributesController`

## Methods

* [Generate Consumer Attributes](../../doc/controllers/analyticsand-attributes.md#generate-consumer-attributes)
* [List Consumer Attributes](../../doc/controllers/analyticsand-attributes.md#list-consumer-attributes)
* [Generate FCRA Consumer Attributes](../../doc/controllers/analyticsand-attributes.md#generate-fcra-consumer-attributes)
* [Get Consumer Attributes by ID](../../doc/controllers/analyticsand-attributes.md#get-consumer-attributes-by-id)


# Generate Consumer Attributes

Generate a Consumer Attributes report for the given customer. The "to" and "from" date range is the last 12 months of consumer data, based on the date at which the report was generated.

An analytic ID is created and associated with the customer's ID. If you generate multiple Consumer Attributes reports for the same customer, then each report will have its own analytic ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateConsumerAttributes(
  customerId: string,
  body?: ConsumerAttributeAccountIDs,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsumerAttributesAnalyticId>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`ConsumerAttributeAccountIDs \| undefined`](../../doc/models/consumer-attribute-account-i-ds.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsumerAttributesAnalyticId`](../../doc/models/consumer-attributes-analytic-id.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await analyticsAndAttributesController.generateConsumerAttributes(customerId);
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


# List Consumer Attributes

Retrieve the list of all analytic IDs previously created for a customer using the "Generate Consumer Attributes" APIs.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async listConsumerAttributes(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsumerAttributeList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsumerAttributeList`](../../doc/models/consumer-attribute-list.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await analyticsAndAttributesController.listConsumerAttributes(customerId);
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


# Generate FCRA Consumer Attributes

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateFCRAConsumerAttributes(
  customerId: string,
  body?: ConsumerAttributeAccountIDs,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsumerAttributesAnalyticId>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`ConsumerAttributeAccountIDs \| undefined`](../../doc/models/consumer-attribute-account-i-ds.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsumerAttributesAnalyticId`](../../doc/models/consumer-attributes-analytic-id.md)

## Example Usage

```ts
const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await analyticsAndAttributesController.generateFCRAConsumerAttributes(customerId);
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


# Get Consumer Attributes by ID

Retrieve a Consumer Attributes report for a customer.

Use the analytic and customer IDs to retrieve 12 months of data attributes according to the "to" and "from" date range of the report at the time it was created.

If the current date is before the end of the calendar month, then the most recent month provides all available data up to the current date.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getConsumerAttributesByID(
  analyticsId: string,
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsumerAttributes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `analyticsId` | `string` | Template, Required | The Finicity analytic ID |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsumerAttributes`](../../doc/models/consumer-attributes.md)

## Example Usage

```ts
const analyticsId = 'ce9693d5-a83e-4ad0-a694-6f48c4fc7877';

const customerId = '1005061234';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await analyticsAndAttributesController.getConsumerAttributesByID(
  analyticsId,
  customerId
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

