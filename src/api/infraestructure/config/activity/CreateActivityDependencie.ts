import { CreateActivityController } from "../../express/controllers/activity/CreateActivityController";
import { CreateActivityService } from "../../../application/activity/CreateActivityService";
import { ActivityRepositoryImpl } from "../../db/repository/activity/ActivitRepositoryImpl";

const activitRepository = new ActivityRepositoryImpl();
const createActivityService = new CreateActivityService(activitRepository);

const createActivityController = new CreateActivityController(
  createActivityService,
);

export { createActivityController };
