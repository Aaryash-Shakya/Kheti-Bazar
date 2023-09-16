const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
  crop: {
    type: ObjectId,
    required: true,
    ref: 'Crop'
  },
  quantity:{
    
  }
})
