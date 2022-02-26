const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')

router.get('/', (req, res) => {
  res.status(200).json({message: 'GET: List goals route.'})
})

router.post('/', getGoals)

router.put('/', (req, res) => {
  res.status(200).json({message: 'PUT: Update a goal route.'})
})

router.delete('/', (req, res) => {
  res.status(200).json({message: 'DELETE: Remove a goal route.'})
})

module.exports = router
