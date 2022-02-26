const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'GET: List goals route.'})
})

router.post('/', (req, res) => {
  res.status(200).json({message: 'POST: Set a new goal route.'})
})

router.put('/', (req, res) => {
  res.status(200).json({message: 'PUT: Update a goal route.'})
})

router.delete('/', (req, res) => {
  res.status(200).json({message: 'DELETE: Remove a goal route.'})
})

module.exports = router
