import { Router } from "express";
import { userRoutes } from "./users/user-routes";
import { authRoutes } from "./authentication/auth-routes";
import { activiyRoutes } from "./activity/activty-routes";
import { authMiddleware } from "../middlewares/auth-middleware";

export const router = Router();

router.use("/users", userRoutes);
router.use("/authentication/user", authRoutes);
router.use(
  "/activity",
  authMiddleware.isAuthorized.bind(authMiddleware),
  activiyRoutes
);
