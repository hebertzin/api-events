import { Event } from "../../../domain/entities/events";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IEventsRepository } from "../../../domain/repositories/events";
import { Logging } from "../../../domain/logging";

export interface GetEvent {
  invoke(event_id: string): Promise<Event | null>;
}

export class GetEventUseCase implements GetEvent {
  constructor(
    readonly eventsRepository: IEventsRepository,
    readonly logging: Logging,
  ) { }
  async invoke(event_id: string): Promise<Event | null> {
    try {
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
