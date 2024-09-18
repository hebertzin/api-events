import { Request, Router } from "express";
import { authController } from "../../../infraestructure/config/LoginDependencie";

export const authRoutes = Router();

authRoutes.post("/", async (req: Request, res) => {
  const httpResponse = await authController.handle(req);
  res.status(httpResponse.statusCode).json({
    message: httpResponse.msg,
    code: httpResponse.statusCode,
    body: httpResponse.body,
  });
});
