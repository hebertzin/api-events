import {
  UpdateActivity,
  UpdateActivityUseCase,
} from "../../../../application/usecases/activity/update-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../../logger/logging";

export const makeDbUpdateActivity = (): UpdateActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new UpdateActivityUseCase(activityRepository, logging);
};
