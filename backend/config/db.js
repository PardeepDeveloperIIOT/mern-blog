import mongoose from "mongoose";

export const mongodbConnection = () => {
  console.log(process.env.DB_PATH);
  mongoose.connect(process.env.DB_PATH).then((data) => {
    console.log(`Database connected ${data.connection.host}`);
  });
};
