import { Controller } from "../../../../domain/controller";
import { CreateActivityController } from "../../../../presentation/controllers/activity/create-activity-controller";
import { makeDbAddActvity } from "../../usecases/activity/make-db-add-activity";

export const makeCreateActivityController = (): Controller => {
  return new CreateActivityController(makeDbAddActvity());
};
