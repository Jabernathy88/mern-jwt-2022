const getGoals = (req, res) => {
  res.status(200).json({message: 'GET: List goals route.'})
}

module.exports = {
  getGoals,
}
