
# Subscription Record

TxPush subscription details

## Structure

`SubscriptionRecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | ID of a TxPush subscription |
| `accountId` | `bigint` | Required | A Finicity account ID represented as a number |
| `type` | `string` | Required | A TxPush subscription type ("account" or "transaction") |
| `callbackUrl` | `string` | Required | A callback URL where to receive TxPush notifications |
| `signingKey` | `string` | Required | Signing key for events |

## Example (as JSON)

```json
{
  "id": 17554874,
  "accountId": 5011648377,
  "type": "account",
  "callbackUrl": "https://www.mydomain.com/txpush/listener",
  "signingKey": "zg4U0v1IvTzFEHIXzJMxPHnfUwWZAMVpXrUuNuL9IvZI0QzkDdwp39IAKuNOFxOVqCOgHLMS1Zpe4ZL40NX83aJkqI6v0Ez5B7BLBtvr7Ag11kPH3uG1taTeOV0CTyI4LOg7ohSHn0DqaRu2aBq26KI90nYe0CecTCzzhu4yMXL43JV8YfydAexNdkzfg8tY44MlhBPUh2neHW2EFTT2ja4s4Ul10JgID03un8WBSrIm2adHw3QYJB4jk4k1e"
}
```

