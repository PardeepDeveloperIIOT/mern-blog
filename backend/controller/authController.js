import HandleError from "../utils/handleError.js";
import User from "../models/userModel.js";
import handleAsyncError from "../middleware/handleAsyncError.js";
import { jwtToken } from "../utils/jwtToken.js";

// Sign Up
export const signUp = handleAsyncError(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(new HandleError(400, "all filed are required"));
  }

  const user = await User.create(req.body);

  // JWT Token and cookies
  jwtToken(user, 200, res);
});

// SignIn User
export const signIn = handleAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new HandleError(400, "Email or Password can not be empty"));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new HandleError(404, "Invalid Email or Password"));
  }

  // check passowrd
  if (!(await user.checkPassword(password))) {
    return next(new HandleError(404, "Password is incorrect"));
  }

  //Tokern and cookies
  jwtToken(user, 200, res);
});
