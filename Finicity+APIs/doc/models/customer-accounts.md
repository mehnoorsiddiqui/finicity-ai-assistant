
# Customer Accounts

A list of customer accounts

## Structure

`CustomerAccounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`CustomerAccount[]`](../../doc/models/customer-account.md) | Required | List of customer accounts |

## Example (as JSON)

```json
{
  "accounts": [
    {
      "id": "5011648377",
      "number": "2000004444",
      "accountNumberDisplay": "1234-9",
      "realAccountNumberLast4": "5678",
      "name": "Super Checking",
      "balance": 401.26,
      "type": "checking",
      "status": "active",
      "customerId": "1005061234",
      "institutionId": "4222",
      "balanceDate": 1607450357,
      "aggregationSuccessDate": 1607450357,
      "aggregationAttemptDate": 1607450357,
      "createdDate": 1607450357,
      "lastUpdatedDate": 1607450357,
      "currency": "USD",
      "lastTransactionDate": 1607450357,
      "oldestTransactionDate": 1607450357,
      "institutionLoginId": 1007302745,
      "displayPosition": 2,
      "parentAccount": "5011648377",
      "financialinstitutionAccountStatus": "OPEN",
      "accountNickname": "Checking",
      "marketSegment": "personal",
      "aggregationStatusCode": 146
    }
  ]
}
```

