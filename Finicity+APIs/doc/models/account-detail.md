
# Account Detail

## Structure

`AccountDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `interestMarginBalance` | `number` | Required | Only available for investment accounts. Net interest earned after deducting interest paid out |
| `availableCashBalance` | `number` | Required | Only available for investment accounts. Amount available for cash withdrawal |
| `vestedBalance` | `number` | Required | Only available for investment accounts. Vested amount in account |
| `currentLoanBalance` | `number` | Required | Only available for investment accounts. Current loan balance |
| `availableBalanceAmount` | `number` | Required | The available balance for the account |

## Example (as JSON)

```json
{
  "interestMarginBalance": -50000.0,
  "availableCashBalance": 1500.0,
  "vestedBalance": 300000.0,
  "currentLoanBalance": 0.0,
  "availableBalanceAmount": 1000.0
}
```

