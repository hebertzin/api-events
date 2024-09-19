import { Router } from "express";
import { userManagementRoutes } from "./users/user-routes";
import { authRoutes } from "./authentication/auth-routes";
import { activitiesManagementRoutes } from "./activity/activty-routes";

export const router = Router();

router.use("/users", userManagementRoutes);
router.use("/activity", activitiesManagementRoutes);
router.use("/authentication/user", authRoutes);
