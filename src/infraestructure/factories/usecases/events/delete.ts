import {
  DeleteActivity,
  DeleteEventUseCase,
} from "../../../../application/usecases/events/delete";
import { EventsRepositoryImpl } from "../../../database/repositories/events/repository";
import { logging } from "../../../logging/logging";

export const makeDbDeleteEvent = (): DeleteActivity => {
  const eventRepository = new EventsRepositoryImpl();
  return new DeleteEventUseCase(eventRepository, logging);
};
