# Authentication

Generate authentication tokens and manage credentials

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Create Token](../../doc/controllers/authentication.md#create-token)
* [Modify Partner Secret](../../doc/controllers/authentication.md#modify-partner-secret)


# Create Token

Send Partner ID and Partner Secret to the Partner Authentication service to obtain a token for accessing Finicity APIs.

* The token is valid for two hours and is required on all calls to the Finicity APIs
* As a best practice, use a single token for all calls. Assign a timestamp for each token, and then check the current timestamp before making any calls. If the token is greater than 90 minutes, generate a new one.
* ⚠️ After five failed attempts to authenticate, your account will be locked. Contact [support@finicity.com](mailto:support@finicity.com) to get help resetting your account.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async createToken(
  body: PartnerCredentials,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccessToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PartnerCredentials`](../../doc/models/partner-credentials.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccessToken`](../../doc/models/access-token.md)

## Example Usage

```ts
const body: PartnerCredentials = {
  partnerId: '1234583871234',
  partnerSecret: 'aqJ5Ic4SEVx2IgDQ6oR4',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.createToken(body);
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
| 401 | The request lacks valid authentication credentials. Check Partner ID, Partner Secret or Finicity-App-Key. | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Modify Partner Secret

Change the Partner Secret used to authenticate this partner.

The secret does not expire, but can be changed by calling this endpoint. A valid Partner Secret may contain upper and lowercase characters, numbers, and the characters !, @, #, $, %, &, *, _, -, +. It must include at least one number and at least one letter, and its length should be between 12 and 255 characters.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async modifyPartnerSecret(
  body: PartnerCredentialsWithNewSecret,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PartnerCredentialsWithNewSecret`](../../doc/models/partner-credentials-with-new-secret.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: PartnerCredentialsWithNewSecret = {
  partnerId: '1234583871234',
  partnerSecret: 'aqJ5Ic4SEVx2IgDQ6oR4',
  newPartnerSecret: 'OrU7tjiA3tIspCgb85xV',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.modifyPartnerSecret(body);
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
| 401 | The request lacks valid authentication credentials. Check Partner ID, Partner Secret or Finicity-App-Key. | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

