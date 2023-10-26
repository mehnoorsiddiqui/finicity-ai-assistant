
# Institution

A financial institution

## Structure

`Institution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | The ID of a financial institution, represented as a number |
| `name` | `string \| undefined` | Optional | The name of the institution |
| `transAgg` | `boolean` | Required | `true`: The institution is certified for the Transaction Aggregation product<br>`false`: The institution is decertified for the Transaction Aggregation product |
| `ach` | `boolean` | Required | `true`: The institution is certified for the ACH product<br>`false`: The institution is decertified for the ACH product |
| `stateAgg` | `boolean` | Required | `true`: The institution is certified for the Statement Aggregation product<br>`false`: The institution is decertified for the Statement Aggregation product |
| `voi` | `boolean` | Required | `true`: The institution is certified for the VOI product<br>`false`: The institution is decertified for the VOI product |
| `voa` | `boolean` | Required | `true`: The institution is certified for the VOA product<br>`false`: The institution is decertified for the VOA product |
| `aha` | `boolean` | Required | `true`: The institution is certified for the Account History Aggregation product<br>`false`: The institution is decertified for the Account History Aggregation product |
| `availBalance` | `boolean` | Required | `true`: The institution is certified for the Account Balance Check (ABC) product<br>`false`: The institution is decertified for the Account Balance Check product |
| `accountOwner` | `boolean` | Required | `true`: The institution is certified for the Account Owner product<br>`false`: The institution is decertified for the Account Owner product |
| `accountTypeDescription` | `string \| undefined` | Optional | Values: Banking, Investments, Credit Cards/Accounts, Workplace Retirement, Mortgages and Loans, Insurance |
| `phone` | `string \| undefined` | Optional | A phone number |
| `urlHomeApp` | `string \| undefined` | Optional | The URL of the institution's primary home page |
| `urlLogonApp` | `string \| undefined` | Optional | The URL of the institution's login page |
| `oauthEnabled` | `boolean` | Required | `true`: The institution is an OAuth connection |
| `urlForgotPassword` | `string \| undefined` | Optional | Institution's forgot password page |
| `urlOnlineRegistration` | `string \| undefined` | Optional | Institution's signup page |
| `mClass` | `string \| undefined` | Optional | Institution's class |
| `specialText` | `string \| undefined` | Optional | Special instructions given to customers for login |
| `specialInstructions` | `string[] \| undefined` | Optional | Instructions given to the customer before they are sent to the institution website to login for OAuth institutions.<br><br>Note: this helps the customer to provide the proper permission for data needed for the application. |
| `address` | [`InstitutionAddress \| undefined`](../../doc/models/institution-address.md) | Optional | The address of a financial institution |
| `currency` | `string` | Required | A currency code |
| `email` | `string \| undefined` | Optional | An email address |
| `status` | `string` | Required | Institution's status: online, offline, maintenance, testing |
| `newInstitutionId` | `bigint \| undefined` | Optional | The ID of a financial institution, represented as a number |
| `branding` | [`Branding \| undefined`](../../doc/models/branding.md) | Optional | All assets are SVGs so can be slightly resized without any issues. |
| `oauthInstitutionId` | `bigint \| undefined` | Optional | The ID of a financial institution, represented as a number |

## Example (as JSON)

```json
{
  "id": 4222,
  "name": "FinBank",
  "transAgg": true,
  "ach": true,
  "stateAgg": false,
  "voi": true,
  "voa": true,
  "aha": false,
  "availBalance": false,
  "accountOwner": true,
  "accountTypeDescription": "Workplace Retirement",
  "phone": "1-800-986-3343",
  "urlHomeApp": "https://www.example.com/home",
  "urlLogonApp": "https://www.example.com/login",
  "oauthEnabled": true,
  "urlForgotPassword": "https://www.example.com/forgotPassword.do",
  "urlOnlineRegistration": "https://www.example.com/signup",
  "class": "retirement",
  "specialText": "Please enter your Principal Financial - Retirement (Personal) Username and Password.",
  "specialInstructions": [
    "Account details",
    "Balances and transactions",
    "Personal and account ownership info"
  ],
  "currency": "USD",
  "email": "finicity@test.com",
  "status": "online",
  "newInstitutionId": 4222,
  "oauthInstitutionId": 4222
}
```

