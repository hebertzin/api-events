import { CreateActivityController } from "../../../presentation/controllers/activity/CreateActivityController";
import { CreateActivityService } from "../../../application/usecases/activity/create-activity-use-case";
import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";

const activitRepository = new ActivityRepositoryImpl();
const createActivityService = new CreateActivityService(
  activitRepository,
  loggerService
);

const createActivityController = new CreateActivityController(
  createActivityService
);

export { createActivityController };
