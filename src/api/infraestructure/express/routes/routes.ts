import { Router } from "express";
import { userRoutes } from "./users/UserRoutes";
import { authRoutes } from "./authentication/AuthRoutes";

export const AppRoutes = Router();

AppRoutes.use("/users", userRoutes);
AppRoutes.use("/authentication/user", authRoutes);
