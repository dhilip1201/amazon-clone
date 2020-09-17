const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe= require("stripe")('sk_test_51HQEw7Ci12Lsn25ceVi7pLmVG0Nze0rrXidg1Nc4F67QeJ4gMn7PJj5PC6gYdDoKNhP49GGnUKHKYQjFsIjyp4du00Ni0DHvHZ')


// API


// APP Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/',(request, response)=>response.status(200).send('Hello Dhilip'))
// app.get('/qazi',(request, response)=>response.status(200).send('whats up Qazi'))
app.post("/payments/create",async (request, response) =>{
    const total= request.query.total;
    console.log('Payment Request Received For this amount', total);
    const paymentIntent= await stripe.paymentIntents.create({
        amount: total,
        currency:"INR",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.api= functions.https.onRequest(app);


// Example API
// http://localhost:5001/dhilip-amazan-clone/us-central1/api