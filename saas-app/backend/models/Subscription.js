const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  plan: String,
  status: String,
  startDate: Date,
  endDate: Date
})

module.exports = mongoose.model('Subscription', subscriptionSchema)
