import express from "express";
import cors from "cors";
import { json } from "body-parser";

import {
  indexRouter
} from "./routes";

var app = express();

app.use(cors());
app.set("trust proxy", true);

app.use(json());
app.use(indexRouter);

export { app };
