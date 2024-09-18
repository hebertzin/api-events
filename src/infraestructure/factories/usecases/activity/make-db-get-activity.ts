import {
  GetActivity,
  GetActivityUseCase,
} from "../../../../application/usecases/activity/get-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../../logger/logging";

export const makeDbGetActivity = (): GetActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new GetActivityUseCase(activityRepository, logging);
};
