require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-04-22.dahlia'
});
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('.'));

// Create Checkout Session (Embedded Mode)
app.post('/create-checkout-session', async (req, res) => {
    try {
        const { cart } = req.body;

        const lineItems = cart.map(item => {
            const unitAmount = Math.round(item.price * 100); 
            
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.image.startsWith('http') ? item.image : `https://yourdomain.com/${item.image}`],
                    },
                    unit_amount: unitAmount,
                },
                quantity: item.quantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: lineItems,
            mode: 'payment',
            return_url: `${process.env.COMPLETE_URL}?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.json({ clientSecret: session.client_secret });
    } catch (e) {
        console.error('Session Error:', e.message);
        res.status(500).json({ error: e.message });
    }
});

// Session Status Endpoint
app.get('/session-status', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id, {
            expand: ["payment_intent", "subscription"]
        });

        res.json({ 
            status: session.status, 
            payment_status: session.payment_status, 
            payment_intent_id: session.payment_intent?.id, 
            payment_intent_status: session.payment_intent?.status,
            customer_email: session.customer_details?.email
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Kimi's Atelier Server running on port ${PORT}`));
