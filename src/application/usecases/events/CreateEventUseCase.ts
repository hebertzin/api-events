import { Logging } from "../../../domain/Logging";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Event } from "../../../domain/entity/Events";
import { EventsRepository } from "../../../domain/repository/EventsRepository";
import { CreateEvent } from "../../../domain/usecases/CreateEventUseCase";

export class CreateEventUseCase implements CreateEvent {
  constructor(
    readonly eventsRepository: EventsRepository,
    readonly logging: Logging,
  ) { }

  public async invoke(data: Event): Promise<Event> {
    try {
      this.logging.info(
        `[CreateEventUseCase] New event was created sucessfully with name ${data.name}`,
      );

      const event = await this.eventsRepository.create(data);

      return {
        description: event.description,
        location: event.location,
        name: event.name,
        userID: event.userID,
      };

    } catch (error) {
      this.logging.error(
        `[CreateEventUseCase] Some error has been ocurred trying create a new event ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
