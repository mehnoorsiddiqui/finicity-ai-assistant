# Liabilities

Fetch loan payment details

```ts
const liabilitiesController = new LiabilitiesController(client);
```

## Class Name

`LiabilitiesController`


# Get Loan Payment Details

Return the loan payment details of the customer for a loan-type account.

Note: this is a premium service, billable per every successful API call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getLoanPaymentDetails(
  customerId: string,
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoanPaymentDetails>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoanPaymentDetails`](../../doc/models/loan-payment-details.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await liabilitiesController.getLoanPaymentDetails(
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

