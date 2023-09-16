const express = require('express')
const { cropList, cropDetail } = require('../controllers/cropController')
const router = express.Router()

router.get('/croplist',cropList)
router.get('/cropdetail',cropDetail)

module.exports = router