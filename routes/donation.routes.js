const router = require("express").Router()
const stripe = require("stripe")("sk_test_51IpuJBFCggon7cbVjO77uUc3zvY68lhiqvtQkZtK6m3bwMJ6eNKQHHZNS7sKHWOnClCh6Ob6tipA6SrNRkwSbKjq00S3zpCkEO")

router.post("/create-payment-intent", async (req, res) => {
  const { money } = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(money) * 100,
    currency: "eur"
  })
  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

module.exports = router