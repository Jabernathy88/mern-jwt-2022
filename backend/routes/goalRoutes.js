const express = require('express')
const router = express.Router()

router.get('/api/goals', (req, res) => {
  res.status(200).json({message: 'GET goals route.'})
})

module.exports = router