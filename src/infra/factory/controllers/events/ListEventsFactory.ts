import { Controller } from "../../../../domain/Controller";
import { ListEventsController } from "../../../../presentation/controllers/events/ListEventsController";
import { makeDbListEvents } from "../../usecases/events/ListEventsFactory";

export const makeListEventsController = (): Controller => {
  return new ListEventsController(makeDbListEvents());
};
