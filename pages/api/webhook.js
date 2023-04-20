
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';
import {Order} from "@/models/Order";
import mongooseConfig from "../lib/mongoose";

const endpointSecret = "whsec_5ac64107c4056f9c432c216f8f10d075a29078ef826571fc0cc1958b9cdcdee0";

export default async function handler(req,res) {
  await mongooseConfig();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId,{
          paid:true,
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

//to prevent nextjs auto parse issue
export const config = {
  api: {
    bodyParser:false,
}
};

//acct_1MybHFFrdgzhvLwK