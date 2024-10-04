import {
  CreateActivity,
  CreateActivityUseCase,
} from "../../../../application/usecases/activity/create-activity-use-case";
import { ActivityRepositoryImpl } from "../../../db/repositories/activity/activity-repository";
import { logging } from "../../../logging/logging";

export const makeDbAddActvity = (): CreateActivity => {
  const activiyRepository = new ActivityRepositoryImpl();
  return new CreateActivityUseCase(activiyRepository, logging);
};
