import {
  ListEvents,
  ListEventsUseCase,
} from "../../../../application/usecases/events/list";
import { EventsRepositoryImpl } from "../../../database/repositories/events/repository";
import { logging } from "../../../logging/logging";

export const makeDbListEvents = (): ListEvents => {
  const activityRepository = new EventsRepositoryImpl();
  return new ListEventsUseCase(activityRepository, logging);
};
