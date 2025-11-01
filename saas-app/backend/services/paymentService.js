const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const createCheckoutSession = async (userId, planId) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [{ price: planId, quantity: 1 }],
    customer: userId,
    success_url: `${process.env.FRONTEND_URL}/success`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel`
  })
  return session
}

module.exports = { createCheckoutSession }
