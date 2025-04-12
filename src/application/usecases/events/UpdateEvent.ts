import { Event } from "../../../domain/entity/Events";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { IEventsRepository } from "../../../domain/repository/events";
import { Logging } from "../../../domain/Logging";

export interface UpdateEvent {
  invoke(id: string, data: Event): Promise<Event | null>;
}

export class UpdateEventUseCase implements UpdateEvent {
  constructor(
    readonly eventRepository: IEventsRepository,
    readonly logging: Logging,
  ) {}
  async invoke(id: string, data: Event): Promise<Event | null> {
    try {
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
