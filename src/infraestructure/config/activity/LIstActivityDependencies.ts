import { ListActivityController } from "../../../presentation/controllers/activity/ListActivityController";
import { ListActivityService } from "../../../application/usecases/activity/list-activity-use-case";
import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";

const activityRepository = new ActivityRepositoryImpl();

const listActivityService = new ListActivityService(
  activityRepository,
  loggerService
);

const listActivityController = new ListActivityController(listActivityService);

export { listActivityController };
