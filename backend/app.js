import express from "express";
import authRouter from "./routes/authRouter.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173/", //allow frontend
  }),
);

app.use("/api/v1", authRouter);
app.use(errorMiddleware);
export default app;
