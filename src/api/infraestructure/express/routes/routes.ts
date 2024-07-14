import { Router } from "express";
import { userRoutes } from "./users/UserRoutes";
import { authRoutes } from "./authentication/AuthRoutes";
import { activiyRoutes } from "./activity/ActivityRoutes";
import { authMiddleware } from "../middlewares";

export const AppRoutes = Router();

AppRoutes.use("/users", userRoutes);
AppRoutes.use("/authentication/user", authRoutes);
AppRoutes.use(
  "/activity",
  authMiddleware.isAuthorized.bind(authMiddleware),
  activiyRoutes,
);
