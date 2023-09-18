import express, { Request, Response } from "express";
import { LongToShort } from "../models";
import { URLShortener } from "../services";

const router = express.Router();

router.post("/api/long-to-short", async (req: Request, res: Response) => {
  const { longURL } = req.body;

  //   let existing = await LongToShort.findOne({ longURL });
  //   if (existing) {
  //     throw new Error("URL already shortened");
  //   }
  const shortURL = await URLShortener.convertToShort(longURL);
  const processed = LongToShort.build({ longURL, shortURL });
  await processed.save();

  res.status(200).send(processed);
});

export { router as longToShortRouter };
