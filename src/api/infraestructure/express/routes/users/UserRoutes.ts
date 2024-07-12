import { Request, Response, Router } from "express";
import { createUserController } from "../../../config/UsersDependencie";

export const userRoutes = Router();

userRoutes.post("/users", async (req: Request, res) => {
  const httpResponse = await createUserController.handle(req);
  res.status(httpResponse.statusCode).json({
    message: httpResponse.msg,
    code: httpResponse.statusCode,
    body: httpResponse.body,
  });
});
