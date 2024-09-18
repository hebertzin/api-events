import { Activity } from "../../../domain/entity/activity-entity";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IActivityRepository } from "../../../domain/repositories/activity-repository";
import { Logging } from "../../../domain/logging";

export interface IGetActivity {
  invoke(activity_id: string): Promise<Activity | null>;
}

export class GetActivityService implements IGetActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: Logging
  ) {}
  async invoke(activity_id: string): Promise<Activity | null> {
    try {
      return await this.activityRepository.findById(activity_id);
    } catch (error) {
      this.logger.error(
        `Some error has been ocurred trying retrieve an activity ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
