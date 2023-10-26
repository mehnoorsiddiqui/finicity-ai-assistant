
# Connect Email Url

## Structure

`ConnectEmailUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | `string` | Required | A generated Connect URL |
| `emailConfig` | [`EmailOptions`](../../doc/models/email-options.md) | Required | Configuration for the Connect email's sent to customers |

## Example (as JSON)

```json
{
  "link": "https://connect2.finicity.com?customerId=5025024821&institutionId=102105&origin=url&partnerId=2445583925753&signature=b5667164db7a9a0007b59267785c996ca3bc9ce97f2e72c98099cead76edfad9&timestamp=1648050761908&ttl=1648057961908&type=lite&webhookContentType=application%2Fjson",
  "emailConfig": {
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
}
```

