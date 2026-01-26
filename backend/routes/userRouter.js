import express from "express";
import { test } from "../controller/userController.js";
const userRouter = express.Router();

userRouter.route("/test").get(test);

export default userRouter;
