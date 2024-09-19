import { Router } from "express";
import { userRoutes } from "./users/user-routes";
import { authRoutes } from "./authentication/auth-routes";

export const router = Router();
router.use("/users", userRoutes);
router.use("/authentication/user", authRoutes);
