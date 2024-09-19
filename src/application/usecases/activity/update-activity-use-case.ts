import { Activity } from "../../../domain/entities/activity-entity";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IActivityRepository } from "../../../domain/repositories/activity-repository";
import { Logging } from "../../../domain/logging";

export interface UpdateActivity {
  invoke(id: string, data: Activity): Promise<Activity | null>;
}

export class UpdateActivityUseCase implements UpdateActivity {
  constructor(
    readonly activityRepository: IActivityRepository,
    readonly logging: Logging
  ) {}
  async invoke(id: string, data: Activity): Promise<Activity | null> {
    try {
      return await this.activityRepository.update(id, data);
    } catch (error) {
      this.logging.error(
        `Some error has been ocurred trying update an activity ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
