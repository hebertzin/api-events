import { Controller } from "../../../../domain/controller";
import { UpdateActivityController } from "../../../../presentation/controllers/activity/update-activity-controller";
import { makeDbUpdateActivity } from "../../usecases/activity/make-db-update-activity";

export const makeGetActivityController = (): Controller => {
  return new UpdateActivityController(makeDbUpdateActivity());
};
