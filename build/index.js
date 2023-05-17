"use strict";
// import http from 'http'
// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import { initDB, models, MirgrationSeeder } from "./config/db";
// import cors from 'cors';
// import {userRoutes} from '../src/modules/routes/user'
// dotenv.config();
// // Initialize Express
// const app: Express = express();
// const port = process.env.PORT;
// // Apply middlewares
// app.use((cors()))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// userRoutes({ app, models });
// app.get('/', (req, res) => {
//   res.send(`Server Running on port : ${port}`)
// })
// // Create the HTTP Express Server
// const server = http.createServer(app);
// // Initialize sequelize connection
// initDB().then(async (res: any) => {
//   console.log('after connection..');
//   await MirgrationSeeder()
// });
// // //initilaize websocket server for sync service
// server.listen(port, () => {
//   console.log('listening on ', port);
// });
