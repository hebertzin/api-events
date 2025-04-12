import { Router } from "express";
import { adaptRoute } from "../../adapters/RouterAdapter";
import { makeAddUserController } from "../../infra/factory/controllers/user/CreateUserFactory";
import { usersValidatorMiddleware } from "../validators/UsersValidator";

export const userManagementRoutes = Router();

userManagementRoutes.post(
  "/",
  usersValidatorMiddleware.validate(),
  adaptRoute(makeAddUserController()),
);
