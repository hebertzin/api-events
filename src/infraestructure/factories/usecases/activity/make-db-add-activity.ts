import {
  CreateActivity,
  CreateActivityUseCase,
} from "../../../../application/usecases/activity/create-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repository/activity/ActivitRepositoryImpl";
import { logging } from "../../../logger/logging";

export const makeDbAddActvity = (): CreateActivity => {
  const activiyRepository = new ActivityRepositoryImpl();
  return new CreateActivityUseCase(activiyRepository, logging);
};
