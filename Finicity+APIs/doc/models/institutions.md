
# Institutions

A list of Finicity financial institutions from the "Get Institutions" API

## Structure

`Institutions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `found` | `number` | Required | The total number of results matching search criteria |
| `displaying` | `number` | Required | The number of results returned |
| `moreAvailable` | `boolean` | Required | If `true`, you can fetch the next page of results |
| `createdDate` | `bigint` | Required | A date in Unix epoch time (in seconds). See also: [Handling Epoch Dates and Times](https://docs.finicity.com/endpoint-syntax-and-format/). |
| `institutions` | [`Institution[]`](../../doc/models/institution.md) | Required | A list of institutions<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1000` |

## Example (as JSON)

```json
{
  "found": 200,
  "displaying": 2,
  "moreAvailable": true,
  "createdDate": 1607450357,
  "institutions": [
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
  ]
}
```

