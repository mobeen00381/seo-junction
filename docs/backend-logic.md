# Backend Integration Logic: Domains & Payments

This document outlines the technical implementation for the domain registration and payment processing system for SEO Junction.

## 1. Domain Registration Strategy
To maintain the $19.99 price point ($9.99 profit), the system should use a programmable Registrar API.

### Recommended Providers:
- **Namecheap API**: Robust and well-documented.
- **Porkbun API**: Competitive pricing and simple REST interface.
- **GoDaddy API**: Extensive TLD support.

### Implementation Workflow:
1. **Search**: When the user types in the search bar, the backend calls the Registrar's `CHECK_AVAILABILITY` endpoint.
2. **Reservation**: Upon selection, the domain is temporarily held or tagged in the user's session.
3. **Execution**: Once the Stripe payment is confirmed (via Webhooks), the backend calls the `PURCHASE_DOMAIN` endpoint.

```javascript
// Example logic (Node.js)
async function registerDomain(domainName, ownerInfo) {
  const registrarUrl = 'https://api.registrar.com/v1/purchase';
  const response = await fetch(registrarUrl, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.REGISTRAR_API_KEY}` },
    body: JSON.stringify({
      domain: domainName,
      years: 1,
      contact: ownerInfo
    })
  });
  return response.json();
}
```

## 2. Stripe Payment Integration
The system uses a combination of a one-time "Setup Fee" (for the domain) and a "Subscription" (for the Pro Plan with a 30-day trial).

### Stripe Setup:
1. **Product 1**: `SEO Junction Pro Plan` - $39.00/month with a 30-day trial period.
2. **Product 2**: `Domain Setup Fee` - $19.99 (One-time).

### Payment Flow:
1. **Step 5 (UI)**: The `StripePayment` component collects card details using **Stripe Elements**.
2. **Server-Side**: Create a `Subscription` with `trial_period_days: 30` and add an `add_invoice_item` for the $19.99 domain fee.
3. **Webhook**: Listen for `invoice.paid`. Once paid, trigger the domain registration logic above.

```javascript
// Example Stripe Subscription Setup
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: 'price_PRO_PLAN_ID' }],
  trial_period_days: 30,
  add_invoice_items: [{ price: 'price_DOMAIN_FEE_ID' }],
});
```

## 3. Profit Margin Calculation
- **User Pays**: $19.99
- **Registrar Cost**: ~$10.00 (avg for .com/.net/.org)
- **Stripe Fee (2.9% + 30¢)**: ~$0.88
- **Net Profit per Domain**: **~$9.11**

---
*Note: This logic should be implemented in a secure Next.js Route Handler (API endpoint) to protect your secret keys.*
