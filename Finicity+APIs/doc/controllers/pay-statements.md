# Pay Statements

```ts
const payStatementsController = new PayStatementsController(client);
```

## Class Name

`PayStatementsController`


# Store Customer Pay Statement

Upload pay statements for a customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async storeCustomerPayStatement(
  customerId: string,
  body: PayStatement,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Asset>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `body` | [`PayStatement`](../../doc/models/pay-statement.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Asset`](../../doc/models/asset.md)

## Example Usage

```ts
const customerId = '1005061234';

const body: PayStatement = {
  label: 'lastPayPeriod',
  statement: 'VGhpcyBtdXN0IGJlIGFuIGltYWdl',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await payStatementsController.storeCustomerPayStatement(
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

