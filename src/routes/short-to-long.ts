import express, { Request, Response } from "express";
import { LongToShort } from "../models";

const router = express.Router();

router.post("/api/short-to-long", async (req: Request, res: Response) => {
  const { shortURL } = req.body;

  let existing = await LongToShort.findOne({ shortURL });
  if (!existing) {
    throw new Error("URL not shortened");
  }

  res.status(200).send(existing);
});

export { router as shortToLongRouter };
