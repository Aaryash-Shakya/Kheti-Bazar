const User = require("../models/userModel")

// to create User
exports.postUser = async (req, res) => {
  // get data from req body and assign in the object. THis obj is sent to db
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  })
  
  // check if email is already registered
  User.findOne({ email: user.email })
    .then(async data => {
      if (data) {
        return res.status(400).json({ error: 'email is already registered' })
      }
      else {
        user = await user.save()
        if (!user) {
          return res.status(400).json({ error: 'something went wrong while creating your account' })
        }
        res.send(user)
      }
    })
    .catch(err => {
      return res.status(400).json({ error: err })
    })
}


// For SignIn
exports.signIn = async (req, res) => {
  // destructuring userSelect: 
  const { email, password } = req.body

  // at first check if email is registered in the database or not
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(403).json({ error: 'Sorry the email you provided has not been registered' })
  }
  else if (user) {
    if (user.password === password) {
      const { _id, name, role } = user
      return res.json({ user: { _id, name, email, role } })
    }
    else {
      return res.status(401).json({ error: 'Invalid password' })
    }
  }
}