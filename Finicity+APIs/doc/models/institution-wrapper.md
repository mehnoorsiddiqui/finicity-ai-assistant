
# Institution Wrapper

## Structure

`InstitutionWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `institution` | [`Institution`](../../doc/models/institution.md) | Required | A financial institution |

## Example (as JSON)

```json
{
  "institution": {
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
}
```

