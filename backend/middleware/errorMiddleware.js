// error is being sent on duplicate login attempt, localhost, POST login route?
// "Cannot set headers after they are sent to the client"

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err. stack
  })
}

module.exports = {
  errorHandler,
}
