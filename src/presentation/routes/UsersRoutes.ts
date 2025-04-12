import { Router } from "express";
import { adaptRoute } from "../../adapters/RouterAdapter";
import { usersValidatorMiddleware } from "../validators/UsersValidator";
import { makeAddUserController } from "../../infra/factory/controllers/sd/CreateUserFactory";

export const userManagementRoutes = Router();

userManagementRoutes.post(
  "/",
  usersValidatorMiddleware.validate(),
  adaptRoute(makeAddUserController()),
);
