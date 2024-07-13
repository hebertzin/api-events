import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";
import { UpdateActivityService } from "../../../application/activity/UpdateActivity";
import { UpdateActivityController } from "../../express/controllers/activity/UpdateActivityController";

const activityRepository = new ActivityRepositoryImpl();

const updateActivityService = new UpdateActivityService(
  activityRepository,
  loggerService
);
const updateActivityController = new UpdateActivityController(
  updateActivityService
);

export { updateActivityController };
