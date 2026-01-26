import express, { urlencoded } from "express";
import authRouter from "./routes/authRouter.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
const app = express();

app.use(express.json());

app.use("/api/v1", authRouter);
app.use(errorMiddleware);
export default app;
