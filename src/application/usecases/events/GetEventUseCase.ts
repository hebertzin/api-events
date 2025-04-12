import { Event } from "../../../domain/entity/Events";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { EventsRepository } from "../../../domain/repository/EventsRepository";
import { Logging } from "../../../domain/Logging";
import { GetEvent } from "../../../domain/usecases/GetEventUseCase";

export class GetEventUseCase implements GetEvent {
  constructor(
    readonly eventsRepository: EventsRepository,
    readonly logging: Logging,
  ) {}

  public async invoke(event_id: string): Promise<Event | null> {
    try {
      this.logging.warn(`[GetEventUseCase] Get event with id ${event_id}`);

      return await this.eventsRepository.findById(event_id);
    } catch (error) {
      this.logging.error(
        `Some error has been ocurred trying retrieve an Event ${error}`,
      );

      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
