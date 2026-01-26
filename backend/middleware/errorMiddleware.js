import HandleError from "../utils/handleError.js";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "server error";

  // duplicate key error
  if (err.code === 11000) {
    const message = `This ${Object.keys(err.keyValue)} is already exist.`;
    err = new HandleError(404, message);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
