import { Router } from "express";
import { adaptRoute } from "../../adapters/router-adapter";
import { makeAddUserController } from "../../infra/factories/controllers/user/create";
import { usersValidatorMiddleware } from "../validators/users-validator";

export const userManagementRoutes = Router();

userManagementRoutes.post(
  "/",
  usersValidatorMiddleware.validate(),
  adaptRoute(makeAddUserController()),
);
