import { rest } from "msw";

export const handlers = [
  rest.get("/test-handler", (req, res, ctx) => {
    return res(ctx.json({ msg: "test" }));
  }),
];
