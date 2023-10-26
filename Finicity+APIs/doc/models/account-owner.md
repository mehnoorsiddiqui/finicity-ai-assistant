
# Account Owner

Owner of a customer account

## Structure

`AccountOwner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ownerName` | `string` | Required | The name of the account owner. Can be multiple account owners in one string. This is how the source data is returned from the institution. |
| `ownerAddress` | `string` | Required | A street address |
| `asOfDate` | `bigint \| undefined` | Optional | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "ownerName": "John Smith",
  "ownerAddress": "434 W Ascension Way",
  "asOfDate": 1607450357
}
```

