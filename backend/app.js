import express from "express";
import authRouter from "./routes/authRouter.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRouter);
app.use(errorMiddleware);
export default app;
