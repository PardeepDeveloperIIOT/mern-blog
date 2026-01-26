import mongoose from "mongoose";

export const mongodbConnection = () => {
  mongoose.connect(process.env.DB_PATH).then((data) => {
    console.log(`Database connected ${data.connection.host}`);
  });
};
