import { Controller } from "../../../../domain/controller";
import { DeleteActivityController } from "../../../../presentation/controllers/activity/delete-actvity-controller";
import { makeDbDeleteActivity } from "../../usecases/activity/make-db-delete-activity";

export const makeDeleteActivityController = (): Controller => {
  return new DeleteActivityController(makeDbDeleteActivity());
};
