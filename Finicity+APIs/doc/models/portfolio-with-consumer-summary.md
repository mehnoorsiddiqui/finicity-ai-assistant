
# Portfolio With Consumer Summary

## Structure

`PortfolioWithConsumerSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `portfolioId` | `string` | Required | A unique identifier that will be consistent across all reports created for the same customer |
| `reports` | [`PortfolioReport[]`](../../doc/models/portfolio-report.md) | Required | A list of reports in the portfolio |
| `consumer` | [`PortfolioConsumer`](../../doc/models/portfolio-consumer.md) | Required | - |

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
  ],
  "consumer": {
    "id": "0bf46322c167b562e6cbed9d40e19a4c",
    "firstName": "John",
    "lastName": "Smith",
    "customerId": 1005061234,
    "ssn": "999-99-9999",
    "birthday": {
      "year": 1989,
      "month": 8,
      "dayOfMonth": 13
    },
    "suffix": "Mr"
  }
}
```

