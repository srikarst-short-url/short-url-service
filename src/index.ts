import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://srikarsuri:Srikar10$@cluster0.a0wwm8w.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3001, () => {
    console.log("Listening on port 3001!!!!!!!!");
  });
};

start();
