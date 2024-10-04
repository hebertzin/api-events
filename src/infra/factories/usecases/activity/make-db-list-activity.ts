import {
  ListActivity,
  ListActivityUseCase,
} from "../../../../application/usecases/activity/list-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repositories/activity/activity-repository";
import { logging } from "../../../logging/logging";

export const makeDbListActivity = (): ListActivity => {
  const activityRepository = new ActivityRepositoryImpl();
  return new ListActivityUseCase(activityRepository, logging);
};
