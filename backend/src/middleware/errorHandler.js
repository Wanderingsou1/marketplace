const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map(val => val.message)
      .join(", ");
  }

  // Duplicate key error (Mongo)
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;
