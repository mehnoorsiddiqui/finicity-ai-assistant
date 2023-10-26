# Tx Push

Manage TxPush subscriptions

```ts
const txPushController = new TxPushController(client);
```

## Class Name

`TxPushController`

## Methods

* [Subscribe to Tx Push Notifications](../../doc/controllers/tx-push.md#subscribe-to-tx-push-notifications)
* [Disable Tx Push Notifications](../../doc/controllers/tx-push.md#disable-tx-push-notifications)
* [Create Tx Push Test Transaction](../../doc/controllers/tx-push.md#create-tx-push-test-transaction)
* [Delete Tx Push Subscription](../../doc/controllers/tx-push.md#delete-tx-push-subscription)


# Subscribe to Tx Push Notifications

Register a client app's TxPush Listener to receive TxPush notifications related to the given account.

Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account's fields (such as `balance` or `interestRate`). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPush services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.

For additional details on this process, see [TxPush Listener Service](https://docs.finicity.com/txpush-listener-service/).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async subscribeToTxPushNotifications(
  customerId: string,
  accountId: string,
  body: TxPushSubscriptionParameters,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TxPushSubscriptions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `body` | [`TxPushSubscriptionParameters`](../../doc/models/tx-push-subscription-parameters.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TxPushSubscriptions`](../../doc/models/tx-push-subscriptions.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

const body: TxPushSubscriptionParameters = {
  callbackUrl: 'https://www.mydomain.com/txpush/listener',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await txPushController.subscribeToTxPushNotifications(
  customerId,
  accountId,
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


# Disable Tx Push Notifications

Delete all TxPush subscriptions with their notifications for the given account. No more notifications will be sent for account or transaction events.

For additional details on this process, see [TxPush Listener Service](https://docs.finicity.com/txpush-listener-service/).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async disableTxPushNotifications(
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
  const { result, ...httpResponse } = await txPushController.disableTxPushNotifications(
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


# Create Tx Push Test Transaction

Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app's TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts.

For additional details on this process, see [TxPush Listener Service](https://docs.finicity.com/txpush-listener-service/).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async createTxPushTestTransaction(
  customerId: string,
  accountId: string,
  body: TestTxPushTransaction,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatedTestTxPushTransaction>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `accountId` | `string` | Template, Required | The account ID |
| `body` | [`TestTxPushTransaction`](../../doc/models/test-tx-push-transaction.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatedTestTxPushTransaction`](../../doc/models/created-test-tx-push-transaction.md)

## Example Usage

```ts
const customerId = '1005061234';

const accountId = '5011648377';

const body: TestTxPushTransaction = {
  amount: -4.25,
  description: 'a testing transaction description',
  transactionDate: BigInt(1607450357),
  status: 'pending',
  postedDate: BigInt(1607450357),
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await txPushController.createTxPushTestTransaction(
  customerId,
  accountId,
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


# Delete Tx Push Subscription

Delete a specific subscription to TxPush notifications for the given account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.

For additional details on this process, see [TxPush Listener Service](https://docs.finicity.com/txpush-listener-service/).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async deleteTxPushSubscription(
  customerId: string,
  subscriptionId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `subscriptionId` | `bigint` | Template, Required | The subscription ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customerId = '1005061234';

const subscriptionId = BigInt(17554874);

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await txPushController.deleteTxPushSubscription(
  customerId,
  subscriptionId
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

