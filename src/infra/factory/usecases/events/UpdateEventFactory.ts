import { UpdateEventUseCase } from "../../../../application/usecases/events/UpdateEvent";
import { UpdateEvent } from "../../../../domain/usecases/UpdateEvent";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import { logging } from "../../../logging/Logging";

export const makeDbUpdateEvent = (): UpdateEvent => {
  const activityRepository = new EventsRepositoryImpl();
  return new UpdateEventUseCase(activityRepository, logging);
};
