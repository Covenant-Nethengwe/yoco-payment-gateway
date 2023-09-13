import express from 'express';
import routes  from '../../common/routes.js';
import payment from '../../controller/payment.js'

const router = express.Router();

router.route(routes.payment.pay)
  .get(payment.makePayment)

export default router