import { Controller } from "../../../../domain/controller";
import { DeleteEventController } from "../../../../presentation/controllers/events/delete";
import { makeDbDeleteEvent } from "../../usecases/events/delete";


export const makeDeleteActivityController = (): Controller => {
  return new DeleteEventController(makeDbDeleteEvent());
};
