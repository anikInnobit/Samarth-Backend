"use strict";
// const express = require('express');
// const bodyParser = require('body-parser');
// const { v4: uuidv4 } = require('uuid');
// const Razorpay = require('razorpay');
// const app = express();
// app.use(bodyParser.json());
// // Define the database schema
// const services = [
//   {
//     id: '1',
//     name: 'Service 1',
//     price: 100
//   },
//   {
//     id: '2',
//     name: 'Service 2',
//     price: 200
//   },
//   {
//     id: '3',
//     name: 'Service 3',
//     price: 300
//   }
// ];
// const bookings = [];
// // Set up the Razorpay SDK
// const razorpay = new Razorpay({
//   key_id: 'your_key_id_here',
//   key_secret: 'your_key_secret_here'
// });
// // Define the API endpoints
// // Endpoint to list available services
// app.get('/services', (req, res) => {
//   res.json(services);
// });
// // Endpoint to book a service and process payment
// app.post('/bookings', async (req, res) => {
//   const { serviceId, name, email, amount } = req.body;
//   // Validate user input
//   if (!serviceId || !name || !email || !amount) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }
//   // Find the selected service
//   const selectedService = services.find(service => service.id === serviceId);
//   if (!selectedService) {
//     return res.status(400).json({ error: 'Invalid service ID' });
//   }
//   // Create a Razorpay order
//   const options = {
//     amount: selectedService.price * 100,
//     currency: 'INR',
//     receipt: uuidv4(),
//     payment_capture: 1
//   };
//   const order = await razorpay.orders.create(options);
//   // Create a booking object
//   const booking = {
//     id: uuidv4(),
//     serviceId,
//     name,
//     email,
//     amount: selectedService.price,
//     orderId: order.id
//   };
//   bookings.push(booking);
//   res.json({ booking, order });
// });
// // Endpoint to get the status of a booking
// app.get('/bookings/:id', async (req, res) => {
//   const booking = bookings.find(booking => booking.id === req.params.id)
// })
