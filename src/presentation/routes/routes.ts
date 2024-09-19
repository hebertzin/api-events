import { Router } from "express";
import { userManagementRoutes } from "./users/user-routes";
import { authRoutes } from "./authentication/auth-routes";

export const router = Router();

router.use("/users", userManagementRoutes);
router.use("/authentication/user", authRoutes);
