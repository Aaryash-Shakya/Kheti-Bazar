const express = require('express')
const {postUser, signIn, userList, userDetails, signOut} = require('../controllers/userController')
const router = express.Router()

const userTest = (req,res)=>{
  res.json({msg:"hello user"})
}
router.get('/testuser',userTest)
router.post('/signup',postUser)
router.post('/signin',signIn)
router.get('/userlist',userList)
router.get('/userdetails/:uid',userDetails)
router.post('/signout',signOut)

module.exports = router

