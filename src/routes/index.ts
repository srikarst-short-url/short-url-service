import express, { Request, Response } from "express";
import awsInstanceMetadata from "aws-instance-metadata";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let ip = await awsInstanceMetadata.fetch("instance-id");
  console.log(ip);
  res.send(`Welcome to URL shortener service`);
});

export { router as indexRouter };
