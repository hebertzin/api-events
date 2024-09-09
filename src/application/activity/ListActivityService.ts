import { Activity } from "../../domain/Activity";
import { AppError } from "../errors/errors";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";
import { IActivityRepository } from "../../domain/activity/ActivityRepository";
import { ILogger } from "../../domain/Logger";

type ListActivityParam = {
  user_id: string;
};

export interface IListActivity {
  invoke({ user_id }: ListActivityParam): Promise<Activity[]>;
}
export class ListActivityService implements IListActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: ILogger,
  ) {}
  async invoke({ user_id }: ListActivityParam): Promise<Activity[]> {
    try {
      return await this.activityRepository.findMany(user_id);
    } catch (error) {
      this.logger.error(
        `Some error has been ocurred trying  get a list of activities ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
