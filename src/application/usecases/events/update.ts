import { Event } from "../../../domain/entities/events";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IEventsRepository } from "../../../domain/repositories/events";
import { Logging } from "../../../domain/logging";

export interface UpdateEvent {
  invoke(id: string, data: Event): Promise<Event | null>;
}

export class UpdateEventUseCase implements UpdateEvent {
  constructor(
    readonly eventRepository: IEventsRepository,
    readonly logging: Logging,
  ) { }
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
