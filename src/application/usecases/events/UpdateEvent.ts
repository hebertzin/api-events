import { Event } from "../../../domain/entity/Events";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { EventsRepository } from "../../../domain/repository/EventsRepository";
import { Logging } from "../../../domain/Logging";
import { UpdateEvent } from "../../../domain/usecases/UpdateEvent";

export class UpdateEventUseCase implements UpdateEvent {
  constructor(
    readonly eventRepository: EventsRepository,
    readonly logging: Logging,
  ) {}

  public async invoke(id: string, data: Event): Promise<Event | null> {
    try {
      this.logging.warn(`[UpdateEventUseCase] Update event with id ${id}`);

      return await this.eventRepository.update(id, data);
    } catch (error) {
      this.logging.error(
        `Some error has been ocurred trying update an activity ${error}`,
      );

      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
