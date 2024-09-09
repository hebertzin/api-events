import { Activity } from "../../domain/Activity";
import { AppError } from "../errors/errors";
import { HttpStatusCode } from "../../domain/HttpStatusCode";
import { IActivityRepository } from "../../domain/activity/ActivityRepository";
import { ILogger } from "../../domain/Logger";

type GetActivityParam = {
  id: string;
};

export interface IGetActivity {
  invoke({ id }: GetActivityParam): Promise<Activity>;
}

export class GetActivityService implements IGetActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: ILogger
  ) {}
  async invoke({ id }: GetActivityParam): Promise<Activity> {
    try {
      return await this.activityRepository.findById(id);
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
