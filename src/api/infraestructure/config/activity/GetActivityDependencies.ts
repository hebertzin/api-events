import { GetActivityService } from "../../../application/activity/GetActivityService";
import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";
import { GetActivityController } from "../../express/controllers/activity/GetActivityController";

const activityRepository = new ActivityRepositoryImpl();

const getActivityService = new GetActivityService(
  activityRepository,
  loggerService
);

const getActivity = new GetActivityController(getActivityService);

export { getActivity };
