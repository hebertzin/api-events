import {
  DeleteEventUseCase,
} from "../../../../application/usecases/events/DeleteEventUseCase";
import { DeleteEvent } from "../../../../domain/usecases/DeleteEventUseCase";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import { logging } from "../../../logging/Logging";

export const makeDbDeleteEvent = (): DeleteEvent => {
  const eventRepository = new EventsRepositoryImpl();
  return new DeleteEventUseCase(eventRepository, logging);
};
