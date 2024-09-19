import { Controller } from "../../../../domain/controller";
import { ListActivityController } from "../../../../presentation/controllers/activity/list-activity-controller";
import { makeDbListActivity } from "../../usecases/activity/make-db-list-activity";

export const makeGetActivityController = (): Controller => {
  return new ListActivityController(makeDbListActivity());
};
