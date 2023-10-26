
# Portfolio Report

## Structure

`PortfolioReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A Finicity report ID |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer |
| `type` | [`ReportTypeEnum`](../../doc/models/report-type-enum.md) | Required | - |
| `status` | `string` | Required | A report generation status ("inProgress", "success", "failure") |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |

## Example (as JSON)

```json
{
  "id": "u4hstnnak45g",
  "portfolioId": "y4zsgccj4xpw-6-port",
  "type": "voi",
  "status": "inProgress",
  "createdDate": 1607450357
}
```

