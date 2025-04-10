import { Controller } from "../../../../domain/controller";
import { UpdateEventController } from "../../../../presentation/controllers/events/update";
import { makeDbUpdateEvent } from "../../usecases/events/update";

export const makeGetActivityController = (): Controller => {
  return new UpdateEventController(makeDbUpdateEvent());
};
