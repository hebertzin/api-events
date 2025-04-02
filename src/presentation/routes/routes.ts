import { Router } from "express";
import { userManagementRoutes } from "./users";
import { authenticationManagementRoutes } from "./authentication";
import { eventsManagementRoutes } from "./events";

export const router = Router();

router.use("/users", userManagementRoutes);
router.use("/events", eventsManagementRoutes);
router.use("/authentication", authenticationManagementRoutes);
