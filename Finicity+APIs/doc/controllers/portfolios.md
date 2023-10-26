# Portfolios

Generate portfolios of the most recent reports

```ts
const portfoliosController = new PortfoliosController(client);
```

## Class Name

`PortfoliosController`

## Methods

* [Get Portfolio by Customer](../../doc/controllers/portfolios.md#get-portfolio-by-customer)
* [Get Portfolio by Consumer](../../doc/controllers/portfolios.md#get-portfolio-by-consumer)


# Get Portfolio by Customer

Return a portfolio of most recently generated reports for each report type for the given customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc), only the most recently generated report for the type will be returned.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getPortfolioByCustomer(
  customerId: string,
  portfolioId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortfolioSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | A Finicity customer ID |
| `portfolioId` | `string` | Template, Required | A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PortfolioSummary`](../../doc/models/portfolio-summary.md)

## Example Usage

```ts
const customerId = '1005061234';

const portfolioId = 'y4zsgccj4xpw-6-port';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await portfoliosController.getPortfolioByCustomer(
  customerId,
  portfolioId
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


# Get Portfolio by Consumer

Return a portfolio of most recently generated reports for each report type for a given consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc), only the most recently generated report for the type will be returned.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getPortfolioByConsumer(
  consumerId: string,
  portfolioId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortfolioWithConsumerSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | The consumer ID |
| `portfolioId` | `string` | Template, Required | A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PortfolioWithConsumerSummary`](../../doc/models/portfolio-with-consumer-summary.md)

## Example Usage

```ts
const consumerId = '0bf46322c167b562e6cbed9d40e19a4c';

const portfolioId = 'y4zsgccj4xpw-6-port';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await portfoliosController.getPortfolioByConsumer(
  consumerId,
  portfolioId
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

