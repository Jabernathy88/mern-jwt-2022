const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

app.get('/api/goals', (req, res) => {
  res.send('Get goals please.')
})

app.listen(port, () => console.log(`Node server started on port ${port}`))
