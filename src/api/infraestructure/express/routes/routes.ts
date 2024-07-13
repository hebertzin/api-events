import { Router } from "express";
import { userRoutes } from "./users/UserRoutes";
import { authRoutes } from "./authentication/AuthRoutes";
import { activiyRoutes } from "./activity/ActivityRoutes";

export const AppRoutes = Router();

AppRoutes.use("/users", userRoutes);
AppRoutes.use("/authentication/user", authRoutes);
AppRoutes.use("/activity", activiyRoutes);
