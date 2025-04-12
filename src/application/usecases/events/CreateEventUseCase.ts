import { Logging } from "../../../domain/Logging";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Event } from "../../../domain/entity/Events";
import { IEventsRepository } from "../../../domain/repository/events";

export interface CreateEvent {
  invoke(event: Event): Promise<Event>;
}

export class CreateEventUseCase implements CreateEvent {
  constructor(
    readonly eventsRepository: IEventsRepository,
    readonly logging: Logging,
  ) { }
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
