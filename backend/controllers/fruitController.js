// const { Fruit } = require("../models/fruitModel")

exports.getFruit= (req,res)=>{
  let eg = 'apple'
  res.json({test:`you received a fruit = ${eg}`})
}