const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// Get list all goals
// route:   GET /api/goals
// access   Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find() // returns array of all records
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
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findById(req.params.id, req.body, {
    new: true, // seems imprecise, but covered by "not found" condition above? -JEA 
  })

  // console.log("Received PUT request: api/ root")
  res.status(200).json({message: `PUT: Updated goal, object: ${updateGoal}.`})
})

// Delete a goal by id
// route:   DELETE /api/goals
// access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  await goal.remove


  // console.log("Received DELETE request: api/ root")
  res.status(200).json({message: `DELETE: Removed goal, id: ${req.params.id}.`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
