import {
  UpdateActivity,
  UpdateActivityUseCase,
} from "../../../../application/usecases/activity/update-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repositories/activity/activity-repository";
import { logging } from "../../../logging/logging";

export const makeDbUpdateActivity = (): UpdateActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new UpdateActivityUseCase(activityRepository, logging);
};
