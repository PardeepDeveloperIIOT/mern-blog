import app from "./app.js";
import { mongodbConnection } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

//database Connection
mongodbConnection();

// ⭕ refrence error:uncaughtException error handle
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION 💥 Shutting down...", err.name, err.message);
  process.exit(1);
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});

// ⭕ promiss error handle (catch)
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED PROMISE REJECTION 💥 Shutting down...", err.message);
  server.close(() => {
    process.exit(1);
  });
});
