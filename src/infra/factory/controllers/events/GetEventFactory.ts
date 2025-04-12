import { Controller } from "../../../../domain/Controller";
import { GetEventController } from "../../../../presentation/controllers/events/GetEventController";
import { makeDbGetEvent } from "../../usecases/events/GetEventFactory";

export const makeGetEventController = (): Controller => {
  return new GetEventController(makeDbGetEvent());
};
