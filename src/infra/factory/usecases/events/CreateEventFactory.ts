import { logging } from "../../../logging/Logging";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import {
  CreateEventUseCase,
  CreateEvent,
} from "../../../../application/usecases/events/CreateEventUseCase";

export const makeCreateEvent = (): CreateEvent => {
  const activiyRepository = new EventsRepositoryImpl();
  return new CreateEventUseCase(activiyRepository, logging);
};
