import {
  GetActivity,
  GetActivityUseCase,
} from "../../../../application/usecases/activity/get-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repositories/activity/activity-repository";
import { logging } from "../../../logging/logging";

export const makeDbGetActivity = (): GetActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new GetActivityUseCase(activityRepository, logging);
};
