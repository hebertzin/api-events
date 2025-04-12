import { Controller } from "../../../../domain/Controller";
import { UpdateEventController } from "../../../../presentation/controllers/events/UpdateEventController";
import { makeDbUpdateEvent } from "../../usecases/events/UpdateEventFactory";

export const makeGetActivityController = (): Controller => {
  return new UpdateEventController(makeDbUpdateEvent());
};
