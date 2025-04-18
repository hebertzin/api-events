import { Controller } from "../../../../domain/Controller";
import { DeleteEventController } from "../../../../presentation/controllers/events/DeleteEventController";
import { makeDbDeleteEvent } from "../../usecases/events/DeleteEventFactory";

export const makeDeleteEventController = (): Controller => {
  return new DeleteEventController(makeDbDeleteEvent());
};
