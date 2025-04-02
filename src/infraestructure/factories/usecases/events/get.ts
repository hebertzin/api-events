import {
  GetEvent,
  GetEventUseCase,
} from "../../../../application/usecases/events/get";
import { EventsRepositoryImpl } from "../../../database/repositories/events/repository";
import { logging } from "../../../logging/logging";

export const makeDbGetEvent = (): GetEvent => {
  const activityRepository = new EventsRepositoryImpl();
  return new GetEventUseCase(activityRepository, logging);
};
