const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connection')
const morgan = require('morgan')




const userRoute = require('./routes/userRoute')

// middleware
app.use(morgan('dev'))
app.use(express.json())

// routes middleware - check if we can let the req proceed forward or not
app.get('/', (req, res) => {
  res.send('express works')
})
app.use('/api',userRoute)



const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})