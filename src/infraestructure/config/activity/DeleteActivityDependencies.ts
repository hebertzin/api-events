import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../logger/logging";
import { DeleteActivityService } from "../../../application/usecases/activity/delete-activity-use-case";
import { DeleteActivityController } from "../../../presentation/controllers/activity/delete-actvity-controller";

const activityRepository = new ActivityRepositoryImpl();

const deleteActivityService = new DeleteActivityService(
  activityRepository,

  logging
);

const deleteActivityController = new DeleteActivityController(
  deleteActivityService
);

export { deleteActivityController };
