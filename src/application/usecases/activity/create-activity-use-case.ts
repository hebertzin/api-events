import { ILogger } from "../../../domain/Logger";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";
import { Activity } from "../../../domain/Activity";
import { IActivityRepository } from "../../../domain/activity/ActivityRepository";

export interface ICreateActivityService {
  invoke(activity: Activity): Promise<Activity>;
}

export class CreateActivityService implements ICreateActivityService {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: ILogger
  ) {}
  async invoke(data: Activity): Promise<Activity> {
    try {
      const activity = await this.activityRepository.create(data);
      this.logger.info("New activity was created sucessfully");
      return activity;
    } catch (error) {
      this.logger.error(
        `Some error has been ocurred trying create a new activity ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
