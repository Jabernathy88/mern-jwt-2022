const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// Get list all goals
// route:   GET /api/goals
// access   Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find() // returns array of all records
  // console.log("Received GET request: api/ root")
  res.status(200).json(goals)
})

// Set new goal
// route:   POST /api/goals 
// access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {

    res.status(400)

    throw new Error('Please add a text field.')
  }
  const goal = await Goal.create({
    text: req.body.text
  })

  // console.log("Received POST request: api/ root")
  res.status(200).json(goal)
})

// Update a goal by id
// route:   PUT /api/goals
// access   Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id) // still throws Mongo error if id format/length is invalid

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // seems imprecise, but covered by "not found" condition above? -JEA 
  })

  // console.log("Received PUT request: api/ root")
  res.status(200).json(updatedGoal)
})

// Delete a goal by id
// route:   DELETE /api/goals
// access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id) // still throws MongDB error if id format/length is invalid

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  await goal.remove()

  // console.log("Received DELETE request: api/ root")
  res.status(200).json({ id: req.params.id, message: `DELETE: Removed goal` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
