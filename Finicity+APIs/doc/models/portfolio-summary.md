
# Portfolio Summary

## Structure

`PortfolioSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer |
| `reports` | [`PortfolioReport[]`](../../doc/models/portfolio-report.md) | Required | A list of reports in the portfolio |

## Example (as JSON)

```json
{
  "portfolioId": "y4zsgccj4xpw-6-port",
  "reports": [
    {
      "id": "u4hstnnak45g",
      "portfolioId": "y4zsgccj4xpw-6-port",
      "type": "voi",
      "status": "inProgress",
      "createdDate": 1607450357
    }
  ]
}
```

