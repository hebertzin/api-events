import { Controller } from "../../../../domain/controller";
import { GetEventController } from "../../../../presentation/controllers/events/get";
import { makeDbGetEvent } from "../../usecases/events/get";

export const makeGetEventController = (): Controller => {
  return new GetEventController(makeDbGetEvent());
};
