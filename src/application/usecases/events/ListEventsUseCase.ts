import { Event } from "../../../domain/entity/Events";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { EventsRepository } from "../../../domain/repository/EventsRepository";
import { Logging } from "../../../domain/Logging";
import { ListEvents } from "../../../domain/usecases/ListEventsUseCase";

export class ListEventsUseCase implements ListEvents {
  constructor(
    readonly activityRepository: EventsRepository,
    readonly logging: Logging,
  ) {}

  public async invoke(
    user_id: string,
    page: number,
    limit: number,
  ): Promise<Event[] | null> {
    try {
      this.logging.warn(`[ListEventsUseCase] List all events with pagination`);

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
