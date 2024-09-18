import { Logging } from "../../../domain/logging";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { Activity } from "../../../domain/entity/activity-entity";
import { IActivityRepository } from "../../../domain/repositories/activity-repository";

export interface CreateActivity {
  invoke(activity: Activity): Promise<Activity>;
}

export class CreateActivityUseCase implements CreateActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logging: Logging
  ) {}
  async invoke(data: Activity): Promise<Activity> {
    try {
      const activity = await this.activityRepository.create(data);
      this.logging.info("New activity was created sucessfully");
      return activity;
    } catch (error) {
      this.logging.error(
        `Some error has been ocurred trying create a new activity ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
