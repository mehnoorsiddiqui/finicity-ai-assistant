
# Statement Data

## Structure

`StatementData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `bigint` | Required | A Finicity account ID represented as a number |
| `index` | `number \| undefined` | Optional | Index of the statement to retrieve<br>**Default**: `1`<br>**Constraints**: `<= 6` |

## Example (as JSON)

```json
{
  "accountId": 5011648377,
  "index": 1
}
```

