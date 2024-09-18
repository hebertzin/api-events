import {
  DeleteActivity,
  DeleteActivityUseCase,
} from "../../../../application/usecases/activity/delete-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../../logger/logging";

export const makeDbDeleteActivity = (): DeleteActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new DeleteActivityUseCase(activityRepository, logging);
};
