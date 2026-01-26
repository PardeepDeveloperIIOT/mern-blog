import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter the username"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true },
);

// password hassing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// JWT token create
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECURITY_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("user", userSchema);

export default User;
