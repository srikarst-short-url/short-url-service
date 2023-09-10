import request from "supertest";
import { app } from "../../app";

it("responds with welcome message", async () => {
  const response = await request(app).get("/").send().expect(200);

  expect(response.text).toEqual("Welcome to URL shortener service");
});
