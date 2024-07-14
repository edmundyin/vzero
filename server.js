// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PMbCNKNON36NeaccOOfaNSuSBSGVgUTy5AXzvq81oZMTZvJKETKLsIo5CZ1ucOTEBizlPS6UaSOllWaZiD0e1Wi00kUkW9BCV');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: null,
    submit_type: 'donate',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PMbYAKNON36Neac55Bs1o1v',
        quantity: 1,
        adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
        },
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));