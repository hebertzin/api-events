import { logging } from "../../../logging/Logging";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import {
  CreateEventUseCase,
} from "../../../../application/usecases/events/CreateEventUseCase";
import { CreateEvent } from "../../../../domain/usecases/CreateEventUseCase";

export const makeCreateEvent = (): CreateEvent => {
  const activiyRepository = new EventsRepositoryImpl();
  return new CreateEventUseCase(activiyRepository, logging);
};
