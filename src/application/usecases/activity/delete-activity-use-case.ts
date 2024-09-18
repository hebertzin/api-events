import { IActivityRepository } from "../../../domain/activity/ActivityRepository";
import { ILogger } from "../../../domain/Logger";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";

type DeleteActivityParam = {
  id: string;
};

export interface IDeleteActivity {
  invoke({ id }: DeleteActivityParam): Promise<void>;
}
export class DeleteActivityService implements IDeleteActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logger: ILogger
  ) {}
  async invoke({ id }: DeleteActivityParam): Promise<void> {
    try {
      await this.activityRepository.delete(id);
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
