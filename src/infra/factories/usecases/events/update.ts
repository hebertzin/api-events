import {
  UpdateEvent,
  UpdateEventUseCase,
} from "../../../../application/usecases/events/update";
import { EventsRepositoryImpl } from "../../../database/repositories/events/repository";
import { logging } from "../../../logging/logging";

export const makeDbUpdateEvent = (): UpdateEvent => {
  const activityRepository = new EventsRepositoryImpl();
  return new UpdateEventUseCase(activityRepository, logging);
};
