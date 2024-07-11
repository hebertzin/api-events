import { Request, Response, Router } from "express";
import { createActivityController } from "../../../config/activity/CreateActivityDependencie";

const activiyRoutes = Router();

activiyRoutes.post("/activity/", async (req: Request, res: Response) => {
  return await createActivityController.handle(req, res);
});
