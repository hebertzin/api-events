import { Event } from "../../../domain/entities/events";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IEventsRepository } from "../../../domain/repositories/events";
import { Logging } from "../../../domain/logging";

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
