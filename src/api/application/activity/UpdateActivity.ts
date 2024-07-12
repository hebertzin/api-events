import { Activity } from "@prisma/client";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";
import { IActivityRepository } from "../../domain/activity/ActivityRepository";
import { ILogger } from "../../domain/Logger";

export interface IUpdateActivity {
  invoke(id: string, data: Activity): Promise<Activity>;
}

export class UpdateActivityService implements IUpdateActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: ILogger
  ) {}
  async invoke(id: string, data: Activity): Promise<Activity> {
    try {
      const activity = await this.activityRepository.update(id, data);
      return activity;
    } catch (error) {
      this.logger.error(
        `Some error has been ocurred trying update an activity ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
