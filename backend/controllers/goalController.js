const asyncHandler = require('express-async-handler')

// Get list all goals
// route:   GET /api/goals
// access   Private
const getGoals = asyncHandler(async (req, res) => {
  // console.log("Received GET request: api/ root")
  res.status(200).json({message: 'GET: List goals route.'})
})

// Set new goal
// route:   POST /api/goals 
// access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {

    res.status(400)

    throw new Error('Please add a text field.')
  }
  // console.log("Received POST request: api/ root")
  res.status(200).json({message: 'POST: Set new goal route.'})
})

// Update a goal by id
// route:   PUT /api/goals 
// access   Private
const updateGoal = asyncHandler(async (req, res) => {
  // console.log("Received PUT request: api/ root")
  res.status(200).json({message: `PUT: Update a goal, id: ${req.params.id}.`})
})

// Delete a goal by id
// route:   DELETE /api/goals
// access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  // console.log("Received DELETE request: api/ root")
  res.status(200).json({message: `DELETE: Remove a goal, id: ${req.params.id}.`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
