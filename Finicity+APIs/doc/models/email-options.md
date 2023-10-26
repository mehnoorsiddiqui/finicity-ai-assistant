
# Email Options

Configuration for the Connect email's sent to customers

## Structure

`EmailOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `to` | `string` | Required | The email address for the customer receiving the Connect email |
| `from` | `string \| undefined` | Optional | The name of a person or business sending the Connect email |
| `supportPhone` | `string \| undefined` | Optional | The support phone number listed in the email |
| `subject` | `string \| undefined` | Optional | The subject line of the email. The default is "Verify your Financial Information". |
| `firstName` | `string \| undefined` | Optional | The first name of the customer or both names of the customers for joint borrowers. Example: "Marvin and Jenny". |
| `institutionName` | `string \| undefined` | Optional | The name of your company |
| `institutionAddress` | `string \| undefined` | Optional | The institution address to appear in the footer of the email |
| `signature` | `string[] \| undefined` | Optional | A signature for the email |

## Example (as JSON)

```json
{
  "to": "alex.salido@finicity.com",
  "from": "test.lender@test.com",
  "supportPhone": "800-555-5555",
  "subject": "Verify your income",
  "firstName": "Bob",
  "institutionName": "Acme Lending",
  "institutionAddress": "222 Winipeg Drive SLC UT, 84109",
  "signature": [
    "Cindy Mayfield",
    "Senior Loan Officer",
    "Direct 123-456-7890"
  ]
}
```

