
# Customer Account Position

Details for investment account holdings

## Structure

`CustomerAccountPosition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | The id of the investment position |
| `description` | `string \| undefined` | Optional | The description of the holding |
| `cusipNo` | `string \| undefined` | Optional | A nine-digit numeric or nine-character alphanumeric code that identifies a North American financial security (will be changed to SecurityIdType in the next API version, v2) |
| `cusipNoType` | `string \| undefined` | Optional | Type of the security, attached Finicity's cusipNo field (will be changed to SecurityIdType in the next API version, v2) |
| `symbol` | `string \| undefined` | Optional | The investment position's market/ticker symbol |
| `units` | `number \| undefined` | Optional | The quantity of investment holdings |
| `currentPrice` | `number \| undefined` | Optional | The current price of the investment holding |
| `securityName` | `string \| undefined` | Optional | The security name for the investment holding |
| `transactionType` | `string \| undefined` | Optional | The transaction type of the holding. Cash, Margin, POSSTOCK, Etc |
| `marketValue` | `number \| undefined` | Optional | Market value of an investment position at the time of retrieval |
| `costBasis` | `number \| undefined` | Optional | The total cost of acquiring the security |
| `status` | `string \| undefined` | Optional | The status of the holding |
| `currentPriceDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `invSecurityType` | `string \| undefined` | Optional | The investment holding security type |
| `mfType` | `string \| undefined` | Optional | Type of mutual fund (e.g., open-ended) |
| `posType` | `string \| undefined` | Optional | Fund Type assigned by the FI (long or short) |
| `totalGLDollar` | `number \| undefined` | Optional | Total Gain/Loss of the position, at the time of aggregation ($) |
| `totalGLPercent` | `number \| undefined` | Optional | Total Gain/Loss of the position, at the time of aggregation (%) |

## Example (as JSON)

```json
{
  "id": 454678080,
  "description": "EMB:iShares Emerging Markets USD Bond ETF",
  "cusipNo": "464287242",
  "cusipNoType": "464287242",
  "symbol": "JPM",
  "units": 3.54117,
  "currentPrice": 49.01,
  "securityName": "JPMORGAN CHASE & CO",
  "transactionType": "Cash",
  "marketValue": 914.2,
  "costBasis": 925.5,
  "status": "A",
  "currentPriceDate": 1607450357,
  "invSecurityType": "OTHERINFO",
  "mfType": "Open-Ended",
  "posType": "Long",
  "totalGLDollar": 81.83,
  "totalGLPercent": 43.07
}
```

