import {
  DeleteActivity,
  DeleteActivityUseCase,
} from "../../../../application/usecases/activity/delete-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repositories/activity/activity-repository";
import { logging } from "../../../logging/logging";

export const makeDbDeleteActivity = (): DeleteActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new DeleteActivityUseCase(activityRepository, logging);
};
