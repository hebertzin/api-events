import { Router } from "express";
import { adaptRoute } from "../../../adapters/router-adapter";
import { activityValidatorMiddleware } from "../../validators/activity-validator";
import { makeCreateActivityController } from "../../../infraestructure/factories/controllers/activity/make-add-actvity-controller";
import { makeListActivityController } from "../../../infraestructure/factories/controllers/activity/make-list-activity-controller";

export const activitiesManagementRoutes = Router();

activitiesManagementRoutes.post(
  "/",
  activityValidatorMiddleware.validate(),
  adaptRoute(makeCreateActivityController()),
);

activitiesManagementRoutes.get(
  "/:user_id",
  adaptRoute(makeListActivityController()),
);
