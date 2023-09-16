const express = require('express')
const router = express.Router()
const Contract = require('../models/contractModel')
const { postContract, contractVerified, contractNotVerified, contractDetail } = require('../controllers/contractController')

router.post('/postcontract',postContract)
router.put('/contractverified/:cid',contractVerified)
router.put('/contractnotberified/:cid',contractNotVerified)
router.get('/contractdetail/:cid',contractDetail)

module.exports = router
