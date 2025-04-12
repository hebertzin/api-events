import {
  DeleteActivity,
  DeleteEventUseCase,
} from "../../../../application/usecases/events/DeleteEventUseCase";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import { logging } from "../../../logging/Logging";

export const makeDbDeleteEvent = (): DeleteActivity => {
  const eventRepository = new EventsRepositoryImpl();
  return new DeleteEventUseCase(eventRepository, logging);
};
