import { Controller } from "../../../../domain/Controller";
import { CreateEventController } from "../../../../presentation/controllers/events/CreateEventController";
import { makeCreateEvent } from "../../usecases/events/CreateEventFactory";

export const makeCreateEventController = (): Controller => {
  return new CreateEventController(makeCreateEvent());
};
