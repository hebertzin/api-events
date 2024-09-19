import { Controller } from "../../../../domain/controller";
import { GetActivityController } from "../../../../presentation/controllers/activity/get-activity-controller";
import { makeDbGetActivity } from "../../usecases/activity/make-db-get-activity";

export const makeGetActivityController = (): Controller => {
  return new GetActivityController(makeDbGetActivity());
};
