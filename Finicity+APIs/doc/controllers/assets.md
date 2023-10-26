# Assets

Download asset files

```ts
const assetsController = new AssetsController(client);
```

## Class Name

`AssetsController`


# Get Asset by Customer ID

Retrieve a binary file for the given asset ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getAssetByCustomerID(
  customerId: string,
  assetId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `assetId` | `string` | Template, Required | The Finicity asset ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const customerId = '1005061234';

const assetId = '097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await assetsController.getAssetByCustomerID(
  customerId,
  assetId
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

