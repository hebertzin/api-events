import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";
import { UpdateActivityService } from "../../../application/usecases/activity/update-activity-use-case";
import { UpdateActivityController } from "../../../presentation/controllers/activity/UpdateActivityController";

const activityRepository = new ActivityRepositoryImpl();

const updateActivityService = new UpdateActivityService(
  activityRepository,
  loggerService,
);
const updateActivityController = new UpdateActivityController(
  updateActivityService,
);

export { updateActivityController };
