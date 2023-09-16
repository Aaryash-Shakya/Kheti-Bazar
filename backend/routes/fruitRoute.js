const express=require('express')
const { getFruit } = require('../controllers/fruitController')
const router=express.Router()

router.get('/test',getFruit)

module.exports = router