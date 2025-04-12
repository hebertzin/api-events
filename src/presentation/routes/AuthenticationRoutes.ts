import { Router } from "express";
import { authenticationValidatorMiddleware } from "../validators/AuthenticationValidator";
import { adaptRoute } from "../../adapters/RouterAdapter";
import { makeAuthenticationController } from "../../infra/factory/controllers/authentication/AuthenticationFactory";

export const authenticationManagementRoutes = Router();

authenticationManagementRoutes.post(
  "/",
  authenticationValidatorMiddleware.validate(),
  adaptRoute(makeAuthenticationController()),
);
