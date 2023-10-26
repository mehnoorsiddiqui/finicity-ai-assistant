
# Connect Parameters

## Structure

`ConnectParameters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string \| undefined` | Optional | Generate a translated Connect URL link.<br><br>Supported languages:<br><br>* English (default)<br>* Spanish (United States): `es`<br>* French (Canada): `fr` or `fr-CA` |
| `partnerId` | `string` | Required | Your Partner ID displayed in the [Developer Dashboard](https://developer.finicity.com/admin) |
| `customerId` | `string` | Required | A Finicity customer ID. See also: "Add Customer". |
| `consumerId` | `string \| undefined` | Optional | A Finicity consumer ID. See also: "Create Consumer". |
| `redirectUri` | `string \| undefined` | Optional | The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe). |
| `webhook` | `string \| undefined` | Optional | The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-and-mvs-webhooks/) for event details. |
| `webhookContentType` | `string \| undefined` | Optional | The content type the webhook events will be sent in. Supported types: `application/json` and `application/xml`.<br>**Default**: `'application/json'` |
| `webhookData` | `unknown \| undefined` | Optional | Allows additional identifiable information to be inserted into the payload of connect webhook events. See also: [Custom Webhooks](https://docs.finicity.com/custom-webhooks/). |
| `webhookHeaders` | `unknown \| undefined` | Optional | Allows additional identifiable information to be included as headers of connect webhook event. See also: [Custom Webhooks](https://docs.finicity.com/custom-webhooks/). |
| `optionalConsumerInfo` | [`ConsumerInfo \| undefined`](../../doc/models/consumer-info.md) | Optional | The SSN and date of birth of a consumer |
| `singleUseUrl` | `boolean \| undefined` | Optional | `true`: The URL link expires after a Connect session successfully completes.<br><br>Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter. |
| `experience` | `string \| undefined` | Optional | The `experience` field allows you to customize:<br><br>* Brand: color and logo<br>* Icon: displayed on the "Share your data" page<br>* Popular institutions: displayed on the Bank Search page<br>* Report: the credit decisioning report to send when Connect completes.<br>* MVS modules: financial, payroll, paystub<br><br>Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they'll give you a unique ID. See [Generate 2.0 Connect URL APIs](https://docs.finicity.com/migrate-to-connect-web-sdk-2-0/#migrate-connect-web-sdk-1).<br><br>Experience values options:<br><br>* "default": your default experience (must be defined)<br>* GUID: the code for a different experience<br>* Not defined: If you don't pass the experience parameter, then Connect's out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run. |
| `institutionSettings` | `unknown \| undefined` | Optional | Advanced options for configuration of which institutions to display in. See [Institution Settings](https://docs.finicity.com/connect-institution-settings/). |
| `fromDate` | `bigint \| undefined` | Optional | The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it's greater than 10 digits, then the `fromDate` is set to the credit decisioning report's default `fromDate`.<br><br>For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.<br><br>However, Connect doesn't pass this parameter to the following reports:<br><br>* Pay Statement Extraction Report<br>* VOIE - Paystub (with TXVerify) Report<br>* Statement Report<br>* Verification of Income Report<br>* VOIE - Payroll Report<br><br>Note: this field isn't used if you're only collecting transaction data without a report. |
| `reportCustomFields` | [`ReportCustomField[] \| undefined`](../../doc/models/report-custom-field.md) | Optional | The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.<br><br>Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is true or false.<br><br>* `true`: (default) display the custom field in the PDF report<br>* `false`: don't display the custom field in the PDF report<br><br>For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.<br><br>All custom fields display in the Reseller Billing endpoint. |

## Example (as JSON)

```json
{
  "language": "fr-CA",
  "partnerId": "1234583871234",
  "customerId": "1005061234",
  "consumerId": "0bf46322c167b562e6cbed9d40e19a4c",
  "redirectUri": "https://www.finicity.com/connect/",
  "webhook": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  "webhookContentType": "application/json",
  "singleUseUrl": true,
  "experience": "default",
  "fromDate": 1607450357
}
```

