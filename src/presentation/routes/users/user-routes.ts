import { Request, Router } from "express";
import { createUserController } from "../../../infraestructure/config/UsersDependencie";

export const userRoutes = Router();

userRoutes.post("/", async (req: Request, res) => {
  const httpResponse = await createUserController.handle(req);
  res.status(httpResponse.statusCode).json({
    message: httpResponse.msg,
    code: httpResponse.statusCode,
    body: httpResponse.body,
  });
});
