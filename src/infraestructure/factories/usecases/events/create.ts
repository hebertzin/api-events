import { logging } from "../../../logging/logging";
import { EventsRepositoryImpl } from "../../../database/repositories/events/repository";
import { CreateEventUseCase, CreateEvent } from "../../../../application/usecases/events/create";

export const makeCreateEvent = (): CreateEvent => {
  const activiyRepository = new EventsRepositoryImpl();
  return new CreateEventUseCase(activiyRepository, logging);
};
