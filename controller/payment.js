import payment from "../services/payment.js";
import fs from 'fs';
import path from "path";

export default {
  makePayment: async (req, res) => {
    const params = {
      amount: 20000,
      currency: 'ZAR'
    };
  
   await payment.initiatePayment(params, (error, data) => {
    if (error) {
      console.error(`Error while fetching data ${error}`);
    }
    else {
      const paymentObject = JSON.parse(data);
      console.log(`Fetched data ${paymentObject.redirectUrl}`);
      res.redirect(paymentObject.redirectUrl)
    }

   });
  }
}