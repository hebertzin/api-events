import {
  ListEvents,
  ListEventsUseCase,
} from "../../../../application/usecases/events/ListEventsUseCase";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import { logging } from "../../../logging/Logging";

export const makeDbListEvents = (): ListEvents => {
  const activityRepository = new EventsRepositoryImpl();
  return new ListEventsUseCase(activityRepository, logging);
};
