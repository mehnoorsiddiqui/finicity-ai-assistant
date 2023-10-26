
# Categorization

Categorization Record

## Structure

`Categorization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `normalizedPayeeName` | `string \| undefined` | Optional | A normalized payee, derived from the transaction's description and memo fields |
| `category` | `string` | Required | The different categories for transactions.<br><br>Possible values: ATM Fee, Advertising, Air Travel, Alcohol & Bars, Allowance, Amusement, Arts, Auto & Transport, Auto Insurance, Auto Payment, Baby Supplies, Babysitter & Daycare, Bank Fee, Bills & Utilities, Bonus, Books, Books & Supplies, Business Services, Buy, Cash & ATM, Charity, Check, Child Support, Clothing, Coffee Shops, Credit Card Payment, Dentist, Deposit, Dividend & Cap Gains, Doctor, Education, Electronics & Software, Entertainment, Eyecare, Fast Food, Federal Tax, Fees & Charges, Finance Charge, Financial, Financial Advisor, Food & Dining, Furnishings, Gas & Fuel, Gift, Gifts & Donations, Groceries, Gym, Hair, Health & Fitness, Health Insurance, Hobbies, Home, Home Improvement, Home Insurance, Home Phone, Home Services, Home Supplies, Hotel, Income, Interest Income, Internet, Investments, Kids, Kids Activities, Late Fee, Laundry, Lawn & Garden, Legal, Life Insurance, Loan Fees and Charges, Loan Insurance, Loan Interest, Loan Payment, Loan Principal, Loans, Local Tax, Low Balance, Mobile Phone, Mortgage & Rent, Movies & DVDs, Music, Newspapers & Magazines, Office Supplies, Parking, Paycheck, Personal Care, Pet Food & Supplies, Pet Grooming, Pets, Pharmacy, Printing, Property Tax, Public Transportation, Reimbursement, Rental Car & Taxi, Restaurants, Sales Tax, Sell, Services & Parts, Service Fee, Shipping, Shopping, Spa & Massage, Sporting Goods, Sports, State Tax, Student Loan, Taxes, Television, Toys, Trade Commissions, Transfer, Transfer for Cash Spending, Travel, Tuition, Uncategorized, Utilities, Vacation, Veterinary, Internet / Broadband Charges |
| `city` | `string \| undefined` | Optional | A city |
| `state` | `string \| undefined` | Optional | A state |
| `postalCode` | `string \| undefined` | Optional | A ZIP code |
| `country` | `string \| undefined` | Optional | A country code |
| `bestRepresentation` | `string \| undefined` | Optional | A descriptive string |

## Example (as JSON)

```json
{
  "normalizedPayeeName": "Mad Science Research",
  "category": "ATM Fee",
  "city": "Murray",
  "state": "UT",
  "postalCode": "84123",
  "country": "USA",
  "bestRepresentation": "YOU BOUGHT DELTA AIR LINES INC DAL CASH"
}
```

