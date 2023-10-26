# Institutions

Search and fetch financial institutions

```ts
const institutionsController = new InstitutionsController(client);
```

## Class Name

`InstitutionsController`

## Methods

* [Get Certified Institutions With RSSD](../../doc/controllers/institutions.md#get-certified-institutions-with-rssd)
* [Get Institutions](../../doc/controllers/institutions.md#get-institutions)
* [Get Certified Institutions](../../doc/controllers/institutions.md#get-certified-institutions)
* [Get Institution](../../doc/controllers/institutions.md#get-institution)
* [Get Institution Branding](../../doc/controllers/institutions.md#get-institution-branding)


# Get Certified Institutions With RSSD

Search for certified financial institutions w/RSSD.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCertifiedInstitutionsWithRSSD(
  search?: string,
  start?: number,
  limit?: number,
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CertifiedInstitutions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | `string \| undefined` | Query, Optional | Search term (financial institution `name` field). Leave empty for all FIs. |
| `start` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `25`<br>**Constraints**: `<= 1000` |
| `type` | `string \| undefined` | Query, Optional | A product type: "transAgg", "ach", "stateAgg", "voi", "voa", "aha", "availBalance", "accountOwner" |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CertifiedInstitutions`](../../doc/models/certified-institutions.md)

## Example Usage

```ts
const search = 'finbank';

const start = 1;

const limit = 25;

const type = 'voa';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await institutionsController.getCertifiedInstitutionsWithRSSD(
  search,
  start,
  limit,
  type
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


# Get Institutions

Search for financial institutions.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getInstitutions(
  search?: string,
  start?: number,
  limit?: number,
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Institutions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | `string \| undefined` | Query, Optional | Search term (financial institution `name` field). Leave empty for all FIs. |
| `start` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `25`<br>**Constraints**: `<= 1000` |
| `type` | `string \| undefined` | Query, Optional | A product type: "transAgg", "ach", "stateAgg", "voi", "voa", "aha", "availBalance", "accountOwner" |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Institutions`](../../doc/models/institutions.md)

## Example Usage

```ts
const search = 'finbank';

const start = 1;

const limit = 25;

const type = 'voa';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await institutionsController.getInstitutions(
  search,
  start,
  limit,
  type
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


# Get Certified Institutions

Search for financial institutions by certified product.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getCertifiedInstitutions(
  search?: string,
  start?: number,
  limit?: number,
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CertifiedInstitutions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | `string \| undefined` | Query, Optional | Search term (financial institution `name` field). Leave empty for all FIs. |
| `start` | `number \| undefined` | Query, Optional | Index of the page of results to return<br>**Default**: `1` |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of results per page<br>**Default**: `25`<br>**Constraints**: `<= 1000` |
| `type` | `string \| undefined` | Query, Optional | A product type: "transAgg", "ach", "stateAgg", "voi", "voa", "aha", "availBalance", "accountOwner" |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CertifiedInstitutions`](../../doc/models/certified-institutions.md)

## Example Usage

```ts
const search = 'finbank';

const start = 1;

const limit = 25;

const type = 'voa';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await institutionsController.getCertifiedInstitutions(
  search,
  start,
  limit,
  type
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


# Get Institution

Get financial institution details by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getInstitution(
  institutionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InstitutionWrapper>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `institutionId` | `string` | Template, Required | The institution ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InstitutionWrapper`](../../doc/models/institution-wrapper.md)

## Example Usage

```ts
const institutionId = '4222';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await institutionsController.getInstitution(institutionId);
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


# Get Institution Branding

Return the branding information for a financial institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

```ts
async getInstitutionBranding(
  institutionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BrandingWrapper>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `institutionId` | `string` | Template, Required | The institution ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BrandingWrapper`](../../doc/models/branding-wrapper.md)

## Example Usage

```ts
const institutionId = '4222';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await institutionsController.getInstitutionBranding(institutionId);
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

