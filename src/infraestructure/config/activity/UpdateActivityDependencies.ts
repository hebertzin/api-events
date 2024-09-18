import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { UpdateActivityService } from "../../../application/usecases/activity/update-activity-use-case";
import { UpdateActivityController } from "../../../presentation/controllers/activity/update-activity-controller";
import { logging } from "../../logger/logging";

const activityRepository = new ActivityRepositoryImpl();

const updateActivityService = new UpdateActivityService(
  activityRepository,
  logging,
);
const updateActivityController = new UpdateActivityController(
  updateActivityService,
);

export { updateActivityController };
