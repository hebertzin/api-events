import { Controller } from "../../../../domain/controller";
import { ListEventsController } from "../../../../presentation/controllers/events/list";
import { makeDbListEvents } from "../../usecases/events/list";

export const makeListEventsController = (): Controller => {
  return new ListEventsController(makeDbListEvents());
};
