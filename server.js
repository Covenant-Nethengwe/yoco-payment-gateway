import express from 'express';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const SERVER_KEY = process.env.SERVER_KEY;
const SERVER_CERT = process.env.SERVER_CERT;

import paymentRouter from './routes/payment/payment.js';
app.use(paymentRouter)

const options = {
  key: SERVER_KEY,
  cert: SERVER_CERT
}

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log(`server listening on port https://localhost:${PORT}`);
})