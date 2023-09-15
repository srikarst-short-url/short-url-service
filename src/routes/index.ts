import express, { Request, Response } from "express";
import ip from "ip"

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send(`Welcome to URL shortener service, ip is ${ip.address()}`);
});

export { router as indexRouter };