const express = require('express')
const app = express()
require('dotenv').config()



const fruitRoute = require('./routes/fruitRoute')
// middleware

// routes middleware - check if we can let the req proceed forward or not
app.get('/', (req, res) => {
  res.send('express works')
})
app.use('/api',fruitRoute)





const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})