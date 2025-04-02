import { Controller } from "../../../../domain/controller";
import { CreateEventController } from "../../../../presentation/controllers/events/create";
import { makeCreateEvent } from "../../usecases/events/create";

export const makeCreateEventController = (): Controller => {
  return new CreateEventController(makeCreateEvent());
};
