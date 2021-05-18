const router = require("express").Router();
const stripe = require("stripe")("sk_test_51IpuJBFCggon7cbVjO77uUc3zvY68lhiqvtQkZtK6m3bwMJ6eNKQHHZNS7sKHWOnClCh6Ob6tipA6SrNRkwSbKjq00S3zpCkEO");

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router