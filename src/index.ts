import mongoose from "mongoose";
import AWS from "aws-sdk";
import { app } from "./app";

const start = async () => {
  try {
    var meta = new AWS.MetadataService();

    meta.request("/latest/meta-data/instance-id", function (err, data) {
      console.log(data);
    });
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
