import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";
import { DeleteActivityService } from "../../../application/activity/DeleteActivity";
import { DeleteActivityController } from "../../../presentation/controllers/activity/DeleteActivityController";

const activityRepository = new ActivityRepositoryImpl();

const deleteActivityService = new DeleteActivityService(
  activityRepository,
  loggerService
);

const deleteActivityController = new DeleteActivityController(
  deleteActivityService
);

export { deleteActivityController };
