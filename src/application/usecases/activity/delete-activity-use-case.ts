import { IActivityRepository } from "../../../domain/repositories/activity-repository";
import { Logging } from "../../../domain/logging";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";

export interface IDeleteActivity {
  invoke(activity_id: string): Promise<void>;
}
export class DeleteActivityService implements IDeleteActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: Logging
  ) {}
  async invoke(activity_id: string): Promise<void> {
    try {
      await this.activityRepository.delete(activity_id);
    } catch (error) {
      this.logger.error(
        `Some error has been ocurred trying delete a new activity ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
