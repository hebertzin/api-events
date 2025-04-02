import { Logging } from "../../../domain/logging";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { Event } from "../../../domain/entities/events";
import { IEventsRepository } from "../../../domain/repositories/events";

export interface CreateEvent {
  invoke(event: Event): Promise<Event>;
}

export class CreateEventUseCase implements CreateEvent {
  constructor(
    readonly eventsRepository: IEventsRepository,
    readonly logging: Logging,
  ) {}
  async invoke(data: Event): Promise<Event> {
    try {
      this.logging.info("New event was created sucessfully");
      return await this.eventsRepository.create(data);
    } catch (error) {
      this.logging.error(
        `Some error has been ocurred trying create a new event ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
