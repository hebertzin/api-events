import { Request, Response, Router } from "express";
import { createUserController } from "../../../config/UsersDependencie";

const userRoutes = Router();

userRoutes.post("/users/", async (req: Request, res: Response) => {
  return await createUserController.handle(req, res);
});
