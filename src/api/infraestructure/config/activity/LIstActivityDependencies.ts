import { ListActivityController } from "../../express/controllers/activity/ListActivityController";
import { ListActivityService } from "../../../application/activity/ListActivityService";
import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";

const activityRepository = new ActivityRepositoryImpl();

const listActivityService = new ListActivityService(
  activityRepository,
  loggerService
);

const listActivity = new ListActivityController(listActivityService);

export { listActivity };
