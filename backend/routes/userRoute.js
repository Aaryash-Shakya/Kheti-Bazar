const express = require('express')
const {postUser, signIn} = require('../controllers/userController')
const router = express.Router()

const userTest = (req,res)=>{
  res.json({msg:"hello user"})
}
router.post('/signup',postUser)
router.post('/signin',signIn)
router.get('/testuser',userTest)

module.exports = router

