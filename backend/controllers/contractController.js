const Contract = require("../models/contractModel");

// to create Order
exports.postContract = async (req, res) => {
  // get data from req body and assign in the object. THis obj is sent to db
  let currentDate = new Date()
  const specificDate = new Date('2023-09-16');
  let contract = new Contract({
    order: req.body.order,
    farmer_id: req.body.farmer_id,
    buyer_id: req.body.buyer_id,
    status: 0,
    isVerified: false
  })
  contract = await contract.save()
  if (!contract) {
    return res.status(400).json({ error: 'something went wrong while creating your contract' })
  }
  res.send(contract)
}

// set order is verified
exports.contractVerified = async (req, res) => {
  let contract = await Contract.findById(req.params.cid)
  contract.isVerified = true
  contract = await contract.save()
  if (!contract) {
    return res.status(500).json({ error: 'failed to update status' })
  }
  return res.status(200).json({ msg: "set contract status: verified" })
}

// set order is not verified
exports.contractNotVerified = async (req, res) => {
  let contract = await Contract.findById(req.params.cid)
  contract.isVerified = false
  contract = await contract.save()
  contract = contract.findById(contract._id)
    .populate('order')
    .populate('user')
  if (!contract) {
    return res.status(500).json({ error: 'failed to update status' })
  }
  return res.status(200).json({ msg: "set contract status: not verified" })
}

exports.contractDetail = async (req, res) => {
  let contract = await Contract.findById(req.params.cid)
    .populate({
      path: 'orders',
      populate: {
        path: 'crops',
        model: 'Crop',
      },
    })
  if (!contract) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(contract)
}