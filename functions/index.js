const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KbxWBFVJhlMD51ZhJMSW85InQmnfa56eilqR3r92dh6JdfM8yakdH2ePxtugNuHHLKUZ2uTXmXf63CVoLgF6SJc0084lIc2hW');

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json())

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,   
    })
})

// Listen command
exports.api = functions.https.onRequest(app);