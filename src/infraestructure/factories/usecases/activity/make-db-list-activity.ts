import {
  ListActivity,
  ListActivityUseCase,
} from "../../../../application/usecases/activity/list-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../../logger/logging";

export const makeDbListActivity = (): ListActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new ListActivityUseCase(activityRepository, logging);
};
