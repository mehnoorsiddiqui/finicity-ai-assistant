# Connect

```ts
const connectController = new ConnectController(client);
```

## Class Name

`ConnectController`

## Methods

* [Generate Connect Url](../../doc/controllers/connect.md#generate-connect-url)
* [Generate Lite Connect Url](../../doc/controllers/connect.md#generate-lite-connect-url)
* [Generate Fix Connect Url](../../doc/controllers/connect.md#generate-fix-connect-url)
* [Send Connect Email](../../doc/controllers/connect.md#send-connect-email)
* [Generate Joint Borrower Connect Url](../../doc/controllers/connect.md#generate-joint-borrower-connect-url)
* [Send Joint Borrower Connect Email](../../doc/controllers/connect.md#send-joint-borrower-connect-email)


# Generate Connect Url

Generate a Connect 2.0 URL link to add within your own applications.

Use the `experience` parameter to call Connect (per session) in the body of the request. Configure the `experience` parameter to change the brand color, logo, icon, which credit decisioning report to generate when the Connect application completes, and more.

Note: contact your Sales Account Team to set up the `experience` parameter.

MVS Developers: You can pre-populate the consumer's SSN on the "Find employment records" page at the beginning of the MVS payroll app. Pass the SSN value for the consumer in the body of the request call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateConnectUrl(
  body: ConnectParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectUrl>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConnectParameters`](../../doc/models/connect-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectUrl`](../../doc/models/connect-url.md)

## Example Usage

```ts
const body: ConnectParameters = {
  partnerId: '1234583871234',
  customerId: '1005061234',
  language: 'fr-CA',
  consumerId: '0bf46322c167b562e6cbed9d40e19a4c',
  redirectUri: 'https://www.finicity.com/connect/',
  webhook: 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b',
  webhookContentType: 'application/json',
  singleUseUrl: true,
  experience: 'default',
  fromDate: BigInt(1607450357),
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await connectController.generateConnectUrl(body);
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


# Generate Lite Connect Url

Connect Lite is a variation of Connect Full (`POST /connect/v2/generate`), which has a limited set of features.

* Sign in, user's credentials, and Multi-Factor Authentication (MFA)
* No user account management

The Connect Web SDK isn't a requirement when using Connect lite. However, if you want to use the SDK events, routes, and user events, then you must integrate with the Connect Web SDK.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateLiteConnectUrl(
  body: LiteConnectParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectUrl>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LiteConnectParameters`](../../doc/models/lite-connect-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectUrl`](../../doc/models/connect-url.md)

## Example Usage

```ts
const body: LiteConnectParameters = {
  partnerId: '1234583871234',
  customerId: '1005061234',
  institutionId: BigInt(4222),
  language: 'fr-CA',
  redirectUri: 'https://www.finicity.com/connect/',
  webhook: 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b',
  webhookContentType: 'application/json',
  experience: 'default',
  singleUseUrl: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await connectController.generateLiteConnectUrl(body);
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


# Generate Fix Connect Url

Use the Connect Fix endpoint when the following conditions occur:

* The connection to the user's financial institution is lost
* The user's credentials were updated (for any number of reasons)
* The user's MFA challenge has expired

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateFixConnectUrl(
  body: FixConnectParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectUrl>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`FixConnectParameters`](../../doc/models/fix-connect-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectUrl`](../../doc/models/connect-url.md)

## Example Usage

```ts
const body: FixConnectParameters = {
  partnerId: '1234583871234',
  customerId: '1005061234',
  institutionLoginId: '1007302745',
  language: 'fr-CA',
  redirectUri: 'https://www.finicity.com/connect/',
  webhook: 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b',
  webhookContentType: 'application/json',
  experience: 'default',
  singleUseUrl: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await connectController.generateFixConnectUrl(body);
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


# Send Connect Email

Same as Connect Full (`POST /connect/v2/generate`) but send a Connect email to a consumer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async sendConnectEmail(
  body: ConnectEmailParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectEmailUrl>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConnectEmailParameters`](../../doc/models/connect-email-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectEmailUrl`](../../doc/models/connect-email-url.md)

## Example Usage

```ts
const body: ConnectEmailParameters = {
  partnerId: '1234583871234',
  customerId: '1005061234',
  consumerId: '0bf46322c167b562e6cbed9d40e19a4c',
  email: {
    to: 'alex.salido@finicity.com',
    from: 'test.lender@test.com',
    supportPhone: '800-555-5555',
    subject: 'Verify your income',
    firstName: 'Bob',
    institutionName: 'Acme Lending',
    institutionAddress: '222 Winipeg Drive SLC UT, 84109',
    signature: [
      'Cindy Mayfield',
      'Senior Loan Officer',
      'Direct 123-456-7890'
    ],
  },
  language: 'fr-CA',
  redirectUri: 'https://www.finicity.com/connect/',
  webhook: 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b',
  webhookContentType: 'application/json',
  experience: 'default',
  singleUseUrl: true,
  fromDate: BigInt(1607450357),
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await connectController.sendConnectEmail(body);
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


# Generate Joint Borrower Connect Url

Same as Connect Full (`POST /connect/v2/generate`) but for joint borrowers.

MVS prompts both the primary and joint borrower to enter each of their financial, payroll, and paystub information in the same Connect session.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async generateJointBorrowerConnectUrl(
  body: ConnectJointBorrowerParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectUrl>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConnectJointBorrowerParameters`](../../doc/models/connect-joint-borrower-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectUrl`](../../doc/models/connect-url.md)

## Example Usage

```ts
const body: ConnectJointBorrowerParameters = {
  partnerId: '1234583871234',
  borrowers: [
    {
      customerId: '1005061234',
      consumerId: '0bf46322c167b562e6cbed9d40e19a4c',
      type: BorrowerTypeEnum.Primary,
    }
  ],
  language: 'fr-CA',
  redirectUri: 'https://www.finicity.com/connect/',
  webhook: 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b',
  webhookContentType: 'application/json',
  experience: 'default',
  fromDate: BigInt(1607450357),
  singleUseUrl: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await connectController.generateJointBorrowerConnectUrl(body);
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


# Send Joint Borrower Connect Email

Same as Connect Joint Borrower (`POST /connect/v2/generate/jointBorrower`) but send a Connect email  to at least one of the joint borrower's email addresses.

When the consumer opens the email, MVS prompts both the primary and joint borrower to enter each of their financial, payroll, and paystub information in the same Connect session.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async sendJointBorrowerConnectEmail(
  body: ConnectJointBorrowerEmailParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectEmailUrl>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConnectJointBorrowerEmailParameters`](../../doc/models/connect-joint-borrower-email-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectEmailUrl`](../../doc/models/connect-email-url.md)

## Example Usage

```ts
const body: ConnectJointBorrowerEmailParameters = {
  partnerId: '1234583871234',
  borrowers: [
    {
      customerId: '1005061234',
      consumerId: '0bf46322c167b562e6cbed9d40e19a4c',
      type: BorrowerTypeEnum.Primary,
    }
  ],
  email: {
    to: 'alex.salido@finicity.com',
    from: 'test.lender@test.com',
    supportPhone: '800-555-5555',
    subject: 'Verify your income',
    firstName: 'Bob',
    institutionName: 'Acme Lending',
    institutionAddress: '222 Winipeg Drive SLC UT, 84109',
    signature: [
      'Cindy Mayfield',
      'Senior Loan Officer',
      'Direct 123-456-7890'
    ],
  },
  experience: 'default',
  language: 'fr-CA',
  redirectUri: 'https://www.finicity.com/connect/',
  webhook: 'https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b',
  webhookContentType: 'application/json',
  fromDate: BigInt(1607450357),
  singleUseUrl: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await connectController.sendJointBorrowerConnectEmail(body);
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

