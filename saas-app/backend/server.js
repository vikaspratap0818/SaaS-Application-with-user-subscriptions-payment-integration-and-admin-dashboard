const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const subscriptionRoutes = require('./routes/subscriptionRoutes')
const adminRoutes = require('./routes/adminRoutes')
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/subscription', subscriptionRoutes)
app.use('/api/admin', adminRoutes)
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT)
