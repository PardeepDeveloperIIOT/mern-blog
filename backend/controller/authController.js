import HandleError from "../utils/handleError.js";
import User from "../models/userModel.js";
import handleAsyncError from "../middleware/handleAsyncError.js";

// Sign Up
export const signUp = handleAsyncError(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(new HandleError(400, "all filed are required"));
  }

  const user = await User.create(req.body);

  res.json({
    status: "success",
    user,
  });
});
