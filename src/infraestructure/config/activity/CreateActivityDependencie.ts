import { CreateActivityController } from "../../../presentation/controllers/activity/create-activity-controller";
import { CreateActivityService } from "../../../application/usecases/activity/create-activity-use-case";
import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../logger/logging";

const activitRepository = new ActivityRepositoryImpl();
const createActivityService = new CreateActivityService(
  activitRepository,
  logging,
);

const createActivityController = new CreateActivityController(
  createActivityService,
);

export { createActivityController };
