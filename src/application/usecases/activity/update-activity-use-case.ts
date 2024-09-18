import { Activity } from "../../../domain/entity/activity-entity";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IActivityRepository } from "../../../domain/repositories/activity-repository";
import { Logging } from "../../../domain/logging";

export interface IUpdateActivity {
  invoke(id: string, data: Activity): Promise<Activity | null>;
}

export class UpdateActivityService implements IUpdateActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: Logging,
  ) {}
  async invoke(id: string, data: Activity): Promise<Activity | null> {
    try {
      const activity = await this.activityRepository.update(id, data);
      return activity;
    } catch (error) {
      this.logger.error(
        `Some error has been ocurred trying update an activity ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
