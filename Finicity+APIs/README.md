
# Getting Started with Finicity APIs

## Introduction

OpenAPI specification for Finicity APIs

![](https://raw.githubusercontent.com/Finicity-Mastercard/finicity-openapi/main/res/logo.png)

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=FinicityAPIs&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=FinicityAPIs&workspaceName=finicity-apislib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Finicity APIsLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add FinicityApislib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=FinicityAPIs&workspaceName=finicity-apislib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install FinicityApislib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `finicityAppKey` | `string` | The "Finicity-App-Key" from the developer dashboard |
| `finicityAppToken` | `string` | The 'Finicity-App-Token" generated by the "Create-token" endpoint |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524, 408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT', 'GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  finicityAppKey: 'Finicity-App-Key',
  finicityAppToken: 'Finicity-App-Token',
});
```

## Authorization

This API uses `Custom Header Signature`.

## List of APIs

* [Connect](doc/controllers/connect.md)
* [App Registration](doc/controllers/app-registration.md)
* [Pay Statements](doc/controllers/pay-statements.md)
* [Verify Assets](doc/controllers/verify-assets.md)
* [Verify Incomeand Employment](doc/controllers/verify-incomeand-employment.md)
* [Bank Statements](doc/controllers/bank-statements.md)
* [Cash Flow](doc/controllers/cash-flow.md)
* [Analyticsand Attributes](doc/controllers/analyticsand-attributes.md)
* [Authentication](doc/controllers/authentication.md)
* [Customers](doc/controllers/customers.md)
* [Consumers](doc/controllers/consumers.md)
* [Accounts](doc/controllers/accounts.md)
* [Payments](doc/controllers/payments.md)
* [Institutions](doc/controllers/institutions.md)
* [Assets](doc/controllers/assets.md)
* [Transactions](doc/controllers/transactions.md)
* [Reports](doc/controllers/reports.md)
* [Liabilities](doc/controllers/liabilities.md)
* [Portfolios](doc/controllers/portfolios.md)
* [Tx Push](doc/controllers/tx-push.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

