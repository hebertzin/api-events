import { Event } from "../../../domain/entity/Events";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { IEventsRepository } from "../../../domain/repository/events";
import { Logging } from "../../../domain/Logging";

export interface ListEvents {
  invoke(
    user_id: string,
    page?: number,
    limit?: number,
  ): Promise<Event[] | null>;
}

export class ListEventsUseCase implements ListEvents {
  constructor(
    readonly activityRepository: IEventsRepository,
    readonly logging: Logging,
  ) { }

  async invoke(
    user_id: string,
    page: number,
    limit: number,
  ): Promise<Event[] | null> {
    try {
      return await this.activityRepository.findMany(user_id, page, limit);
    } catch (error) {
      this.logging.error(
        `Some error has occurred while trying to get a list of events: ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
