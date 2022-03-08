// method:  GET goals
// route:   /api/goals 
// access   Private
const getGoals = (req, res) => {
  // console.log("Received GET request: api/ root")
  res.status(200).json({message: 'GET: List goals route.'})
}

module.exports = {
  getGoals,
  // setGoal,
  // updateGoal,
  // deleteGoal,
}
