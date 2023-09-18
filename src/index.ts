import mongoose from "mongoose";
import { app } from "./app";
import { createClient } from "redis";

const start = async () => {
  const client = createClient({
    url: "redis://default@localhost:6379/",
  });

  client.on("error", (err: any) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("key", "value");
  const value = await client.get("key");
  console.log(value);
  await client.disconnect();
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
