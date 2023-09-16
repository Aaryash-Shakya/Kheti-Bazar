const express = require('express')
const router = express.Router()
const Order = require('../models/orderModel')
const { postOrder, orderComplete, orderNotComplete } = require('../controllers/orderController')

router.post('/postorder',postOrder)
router.put('/ordercomplete/:oid',orderComplete)
router.put('/ordernotcomplete/:oid',orderNotComplete)

module.exports = router
