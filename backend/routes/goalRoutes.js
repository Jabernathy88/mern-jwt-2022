const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')

router.get('/', (req, res) => {
  console.log("Received GET request: api/ root")
  res.status(200).json({message: 'GET: List goals route.'})
})

// router.post('/', getGoals)

router.put('/', (req, res) => {
  res.status(200).json({message: `PUT: Update a goal, id: ${req.params.id}.`})
})

router.delete('/', (req, res) => {
  res.status(200).json({message: `DELETE: Remove a goal, id: ${req.params.id}.`})
})

module.exports = router
