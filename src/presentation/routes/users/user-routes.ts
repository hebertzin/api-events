import { Router } from "express";
import { adaptRoute } from "../../../adapters/router-adapter";
import { makeAddUserController } from "../../../infraestructure/factories/controllers/user/make-add-controller";

export const userRoutes = Router();

userRoutes.post("/", adaptRoute(makeAddUserController()));
