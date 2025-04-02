import { Router } from "express";
import { authenticationValidatorMiddleware } from "../../validators/authentication-validator";
import { adaptRoute } from "../../../adapters/router-adapter";
import { makeAuthenticationController } from "../../../infraestructure/factories/controllers/authentication/make-authentication-controller";

export const authenticationManagementRoutes = Router();

authenticationManagementRoutes.post(
  "/",
  authenticationValidatorMiddleware.validate(),
  adaptRoute(makeAuthenticationController()),
);
