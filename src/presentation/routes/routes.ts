import { Router } from "express";
import { userManagementRoutes } from "./users/user-routes";
import { authenticationManagementRoutes } from "./authentication/authentication-routes";
import { activitiesManagementRoutes } from "./activity/activty-routes";

export const router = Router();

router.use("/users", userManagementRoutes);
router.use("/activities", activitiesManagementRoutes);
router.use("/authentication", authenticationManagementRoutes);
