
# Application

## Structure

`Application`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appDescription` | `string` | Required | A short description of the app. This will be visible to end users in the FI interface. |
| `appName` | `string` | Required | The name of the application assigned to the customer |
| `appUrl` | `string` | Required | An URL for the app. This will be visible to end users in the FI interface. |
| `ownerAddressLine1` | `string` | Required | An address line 1 |
| `ownerAddressLine2` | `string` | Required | An address line 2 |
| `ownerCity` | `string` | Required | City for the business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerCountry` | `string` | Required | Country for the  business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerName` | `string` | Required | Business name for the business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerPostalCode` | `string` | Required | Zip code for the business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `ownerState` | `string` | Required | State for the business entity that owns the app. Information for registration purposes only and not given to the end user. |
| `image` | `string` | Required | An app logo passed as a Base64 encoded image (1:1 SVG file, must be less than 50KB) |

## Example (as JSON)

```json
{
  "appDescription": "The app that makes your budgeting experience awesome",
  "appName": "Awesome Budget App",
  "appUrl": "https://www.finicity.com/",
  "ownerAddressLine1": "434 W Ascension Way",
  "ownerAddressLine2": "Suite #200",
  "ownerCity": "Murray",
  "ownerCountry": "USA",
  "ownerName": "Finicity",
  "ownerPostalCode": "84123",
  "ownerState": "UT",
  "image": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K"
}
```

