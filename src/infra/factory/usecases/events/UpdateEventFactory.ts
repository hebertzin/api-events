import {
  UpdateEvent,
  UpdateEventUseCase,
} from "../../../../application/usecases/events/UpdateEvent";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import { logging } from "../../../logging/Logging";

export const makeDbUpdateEvent = (): UpdateEvent => {
  const activityRepository = new EventsRepositoryImpl();
  return new UpdateEventUseCase(activityRepository, logging);
};
