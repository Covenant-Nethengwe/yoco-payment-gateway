import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

export default {
  initiatePayment: async (params, callback) => {

    const paymentPayLoad = {
      amount: params.amount,
      currency: params.currency
    };

    const options = {
      hostname: 'payments.yoco.com',
      port: 443,
      path:'/api/checkouts/',
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}` 
      }
    }

    let data = '';
    
    const httpsReq = https.request(options, res => {
  
      console.log(`Status code ${res.statusCode}`);
  
      res.on('data', (chunk) => {

        data += chunk;
      });
      
      res.on('end', async () => {

        callback(null, data);
      });

      res.on('error', error => {
        
        callback(error, null)
      })
    });

    
    httpsReq.write(JSON.stringify(paymentPayLoad));
    httpsReq.end();
  }
}